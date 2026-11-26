// Contenido de la sección de estudio.
// Un módulo sin "p" ni "q" aparece como "Próximamente" y no se puede aprobar todavía.
export const STUDY = {
  "B1": [
    {
      t: "Repaso de tiempos verbales",
      theory:
"Presente simple\nSe usa para hábitos, rutinas y hechos generales.\n• I work every day. / She doesn't like coffee.\n• Con he/she/it agregamos -s: he plays.\n\nPresente continuo\nSe usa para lo que pasa ahora o alrededor de este momento.\n• I'm reading a book right now.\n• Forma: am/is/are + verbo con -ing.\n\nPasado simple\nSe usa para acciones terminadas en un momento concreto del pasado.\n• We visited Córdoba last year.\n• Verbos irregulares: go → went, see → saw, buy → bought.\n\nPasado continuo\nSe usa para una acción en progreso cuando ocurrió otra.\n• I was cooking when the phone rang.\n\nRegla de oro: si la acción terminó, usá pasado simple. Si está en curso, usá continuo.",
      p: [
        { k: "Opción múltiple", p: "She ___ to the gym every Monday.", o: ["goes", "is going", "went"], a: 0, tip: "Hábito regular: presente simple con -es en tercera persona." },
        { k: "Opción múltiple", p: "Look! They ___ the bus now.", o: ["catch", "are catching", "caught"], a: 1, tip: "'Now' o 'look' indican presente continuo." },
        { k: "Opción múltiple", p: "I ___ my keys yesterday.", o: ["lose", "lost", "am losing"], a: 1, tip: "'Yesterday' pide pasado simple." },
        { k: "Completar", p: "We ___ dinner when the lights went out.", o: ["were having", "had", "have had"], a: 0, tip: "Acción en progreso interrumpida: pasado continuo." },
        { k: "Verdadero / falso", p: "'I have seen that film yesterday' es correcto.", o: ["Verdadero", "Falso"], a: 1, tip: "Con 'yesterday' se usa pasado simple: 'I saw that film yesterday'." },
        { k: "Corregir el error", p: "¿Cuál oración es correcta?", o: ["He don't like tea.", "He doesn't like tea.", "He not likes tea."], a: 1, tip: "Con he/she/it: doesn't + verbo base." },
        { k: "Completar", p: "Water ___ at 100 degrees. (hecho general)", o: ["boils", "is boiling", "boiled"], a: 0, tip: "Hechos generales: presente simple." },
        { k: "Opción múltiple", p: "When I arrived, she ___ a book.", o: ["read", "was reading", "is reading"], a: 1, tip: "Acción en progreso en el pasado, interrumpida por 'arrived'." }
      ],
      q: [
        { k: "Opción múltiple", p: "Last summer we ___ to Bariloche for two weeks.", o: ["go", "went", "have gone"], a: 1 },
        { k: "Completar", p: "While I ___ the news, the power went off.", o: ["watched", "was watching", "watch"], a: 1 },
        { k: "Corregir el error", p: "¿Cuál oración es correcta?", o: ["Did you went to school?", "Did you go to school?", "You did went to school?"], a: 1 },
        { k: "Verdadero / falso", p: "'They are living here in 2010' es correcto.", o: ["Verdadero", "Falso"], a: 1 },
        { k: "Completar", p: "My brother always ___ coffee in the morning. (hábito)", o: ["drinks", "is drinking", "drank"], a: 0 }
      ]
    },
    {
      t: "Future: be going to y presente continuo",
      theory:
"Be going to\nPara planes e intenciones que ya decidiste, o para predecir algo con evidencia en el presente.\n• I'm going to study tonight. (ya decidí)\n• Look at those clouds! It's going to rain. (hay evidencia)\n• Forma: am/is/are + going to + verbo base.\n\nPresente continuo para el futuro\nPara planes con fecha y hora ya fijadas, sobre todo con otra persona.\n• We're meeting the teacher at 5.\n• She's flying to Madrid on Friday.\n\nWill (para comparar)\nPara decisiones tomadas en el momento y predicciones generales.\n• I think it will rain tomorrow.\n• Hold on, I'll get the door.\n\nRegla rápida: plan ya decidido → going to o presente continuo. Decisión del momento → will.",
      p: [
        { k: "Opción múltiple", p: "I ___ study tonight. I've already decided.", o: ["will", "am going to", "study"], a: 1, tip: "Plan ya decidido: be going to." },
        { k: "Opción múltiple", p: "Oh no, the phone is ringing. I ___ answer it.", o: ["am going to", "will", "answer"], a: 1, tip: "Decisión del momento: will." },
        { k: "Completar", p: "Look at those clouds. It ___ rain. (evidencia)", o: ["is going to", "will", "rains"], a: 0, tip: "Predicción con evidencia visible: be going to." },
        { k: "Completar", p: "We ___ the dentist at 10 tomorrow. (cita fijada)", o: ["are seeing", "will see", "see"], a: 0, tip: "Cita con hora fija: presente continuo." },
        { k: "Verdadero / falso", p: "'I'm going to meet Ana at 6' expresa un plan ya decidido.", o: ["Verdadero", "Falso"], a: 0, tip: "Be going to para intenciones ya decididas." },
        { k: "Corregir el error", p: "¿Cuál oración es correcta?", o: ["She is going to travels.", "She is going to travel.", "She going travel."], a: 1, tip: "Be going to + verbo base, sin -s." },
        { k: "Opción múltiple", p: "I think the match ___ be exciting.", o: ["is going to", "will", "is"], a: 1, tip: "'I think' + predicción general: will." },
        { k: "Completar", p: "Are you ___ the party on Friday? (¿vas a ir?)", o: ["going to go to", "will go to", "go to"], a: 0, tip: "Pregunta sobre un plan: be going to." }
      ],
      q: [
        { k: "Opción múltiple", p: "The bags are packed. We ___ leave at dawn.", o: ["are going to", "will", "leave"], a: 0 },
        { k: "Opción múltiple", p: "I promise. I ___ call you later.", o: ["will", "am going to", "call"], a: 0 },
        { k: "Verdadero / falso", p: "'Are you going to the party?' pregunta sobre un plan.", o: ["Verdadero", "Falso"], a: 0 },
        { k: "Corregir el error", p: "¿Cuál oración es correcta?", o: ["They're going to buying a car.", "They're going to buy a car.", "They going to buy a car."], a: 1 },
        { k: "Completar", p: "We ___ dinner with my parents on Sunday. (plan ya fijado)", o: ["are having", "will have", "have"], a: 0 }
      ]
    },
    { t: "Something, anything, nothing" },
    { t: "Present perfect: just, yet, already" },
    { t: "Comparativos y superlativos" },
    { t: "Future con will" },
    { t: "Infinitivo vs. gerundio" },
    { t: "Should y primer condicional" },
    { t: "Segundo condicional" },
    { t: "Voz pasiva y movimiento" },
    { t: "Used to, might y so/neither" }
  ],
  "B1+": [
    {
      t: "Comida y familia",
      theory:
"Verbos de acción y de no acción\nLos verbos de acción (eat, cook, play) pueden ir en continuo. Los de estado (know, like, love, want, need, belong) normalmente no.\n• I'm cooking dinner. (acción)\n• I know the answer. (estado)\n✗ I'm knowing the answer.\n\nFormas de futuro\n• Will: decisión en el momento o predicción general.\n• Be going to: plan o predicción con evidencia.\n• Presente continuo: plan fijado con fecha y hora.\n• Presente simple: horarios y calendarios (The bus leaves at 8).\n\nVocabulario\nComida y cocina: boil, fry, bake, chop, season. Familia y personalidad: generous, bossy, shy, easy-going, mature.",
      p: [
        { k: "Opción múltiple", p: "I ___ this soup. It's delicious.", o: ["am liking", "like", "am liked"], a: 1, tip: "Like es verbo de estado: no va en continuo." },
        { k: "Opción múltiple", p: "She ___ in the kitchen right now.", o: ["cooks", "is cooking", "knows"], a: 1, tip: "'Right now' con acción: presente continuo." },
        { k: "Completar", p: "My sister ___ a doctor next year. (plan fijo)", o: ["is becoming", "will be", "becomes"], a: 0, tip: "'Become' como plan futuro: presente continuo." },
        { k: "Verdadero / falso", p: "'I'm knowing him well' es correcto.", o: ["Verdadero", "Falso"], a: 1, tip: "'Know' es de estado: I know him well." },
        { k: "Opción múltiple", p: "Dad is ___. He never lets anyone else decide.", o: ["bossy", "shy", "mature"], a: 0, tip: "Bossy = mandón." },
        { k: "Completar", p: "The bus ___ at 8:15 every morning. (horario)", o: ["leaves", "is leaving", "will leave"], a: 0, tip: "Horarios fijos: presente simple." },
        { k: "Corregir el error", p: "¿Cuál oración es correcta?", o: ["I'm wanting a coffee.", "I want a coffee.", "I wanting a coffee."], a: 1, tip: "Want es verbo de estado." },
        { k: "Opción múltiple", p: "Don't worry, I ___ help you with the dishes.", o: ["am going to", "will", "help"], a: 1, tip: "Decisión del momento: will." }
      ],
      q: [
        { k: "Opción múltiple", p: "The soup ___ wonderful, so take a second bowl.", o: ["is tasting", "tastes", "tasted"], a: 1 },
        { k: "Opción múltiple", p: "Look! Someone ___ the door.", o: ["knocks", "is knocking", "knows"], a: 1 },
        { k: "Verdadero / falso", p: "'I'm believing you' es correcto.", o: ["Verdadero", "Falso"], a: 1 },
        { k: "Completar", p: "My grandmother ___ 90 next week. (fecha fijada)", o: ["turns", "will turn", "is turning"], a: 2 },
        { k: "Corregir el error", p: "¿Cuál oración es correcta?", o: ["I'm hating mornings.", "I hate mornings.", "I hating mornings."], a: 1 }
      ]
    },
    { t: "Dinero y present perfect" },
    { t: "Transporte y comparativos" },
    { t: "Teléfono y obligación" },
    { t: "Deportes y narrativa" },
    { t: "Cine y modales de deducción" },
    { t: "Educación y condicionales" },
    { t: "Compras, trabajo y estilo indirecto" },
    { t: "Suerte y tercer condicional" }
  ]
};

export const LEVELS = [
  { code: "A", name: "Principiante", key: null },
  { code: "B1", name: "Básico", key: "B1" },
  { code: "B1+", name: "Intermedio", key: "B1+" },
  { code: "C", name: "Avanzado", key: null }
];

export const TITLES = { "B1": "Básico B1", "B1+": "Intermedio B1+" };

// Color según el resultado: rojo (0%) → naranja (60%, aprobado justo) → verde (100%)
export function scoreColor(pct) {
  const red = [214, 43, 82], orange = [245, 158, 11], green = [22, 163, 106];
  const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
  const c = pct <= 60 ? mix(red, orange, pct / 60) : mix(orange, green, (pct - 60) / 40);
  return "rgb(" + c.join(",") + ")";
}
