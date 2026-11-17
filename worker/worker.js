const FIREBASE_WEB_API_KEY = "AIzaSyDsDBW2kgTFN93f37mdlxkeQiL5iAB2siI";
const ALLOWED_ORIGINS = ["https://joacososa-ux.github.io", "http://localhost:8080"];
const DAILY_LIMIT = 30;
const MODEL = "claude-haiku-5-5";

const SYSTEM = 'You are an English teacher for a Spanish speaker. ' +
  'Given one English word or phrase, reply ONLY with a JSON object, no markdown, shaped like: ' +
  '{"word":"","pos":"","ipa_us":"","ipa_uk":"","en":"","es":"","esLong":"","examples":[{"ctx":"formal","en":"","es":"","hit":""},{"ctx":"casual","en":"","es":"","hit":""},{"ctx":"work","en":"","es":"","hit":""}]}. ' +
  '"en" is a short simple English definition. "es" is a short Spanish translation. "esLong" is one Spanish sentence explaining the meaning. ' +
  '"hit" is the exact word or phrase as it appears inside that example "en". If the word has several meanings, use the most common one. Never add text outside the JSON.';

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = {
      "Access-Control-Allow-Origin": ALLOWED_ORIGINS.indexOf(origin) >= 0 ? origin : ALLOWED_ORIGINS[0],
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS"
    };
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "POST") return reply({ error: "method_not_allowed" }, 405, cors);

    const token = (request.headers.get("Authorization") || "").replace(/^Bearer /, "");
    const uid = await verifyUser(token);
    if (!uid) return reply({ error: "unauthorized" }, 401, cors);

    let body = {};
    try { body = await request.json(); } catch (e) {}
    const word = String(body.word || "").trim().toLowerCase().slice(0, 60);
    if (!/^[a-z][a-z' -]*$/.test(word)) return reply({ error: "invalid_word" }, 400, cors);

    const key = "u:" + uid + ":" + new Date().toISOString().slice(0, 10);
    const used = parseInt((await env.USAGE.get(key)) || "0", 10);
    if (used >= DAILY_LIMIT) return reply({ error: "daily_limit" }, 429, cors);
    await env.USAGE.put(key, String(used + 1), { expirationTtl: 172800 });

    const ai = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 900,
        system: SYSTEM,
        messages: [{ role: "user", content: word }]
      })
    });
    if (!ai.ok) return reply({ error: "model_error" }, 502, cors);
    const data = await ai.json();
    const text = (data.content && data.content[0] && data.content[0].text) || "{}";
    return new Response(text, { headers: Object.assign({ "Content-Type": "application/json" }, cors) });
  }
};

async function verifyUser(token) {
  if (!token) return null;
  const r = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=" + FIREBASE_WEB_API_KEY, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ idToken: token })
  });
  if (!r.ok) return null;
  const d = await r.json();
  return (d.users && d.users[0] && d.users[0].localId) || null;
}

function reply(obj, status, headers) {
  return new Response(JSON.stringify(obj), { status: status, headers: Object.assign({ "Content-Type": "application/json" }, headers) });
}
