// ═══════════════════════════════════════════════════════════════
//  PRÄSENTATIONSDATEN – Team Raum
// ═══════════════════════════════════════════════════════════════
//
//  ╔═══════════════════════════════════════════════════════════╗
//  ║  ANLEITUNG FÜR ALLE (besonders Noobs)                      ║
//  ╠═══════════════════════════════════════════════════════════╣
//  ║                                                           ║
//  ║  1. Texte stehen immer zwischen Anführungszeichen "..."   ║
//  ║                                                           ║
//  ║  2. Überschriften (title:) NICHT ändern!                   ║
//  ║                                                           ║
//  ║  3. Die italienischen Star-Wars-Zitate sind PLATZHALTER.   ║
//  ║     Ersetzt sie durch eure echten Inhalte.                 ║
//  ║                                                           ║
//  ║  4. Listen sehen so aus:                                  ║
//  ║     items: [                                              ║
//  ║       "Erster Punkt",                                     ║
//  ║       "Zweiter Punkt",                                   ║
//  ║       "Dritter Punkt"        ← letztes Element: KEIN Komma║
//  ║     ]                                                     ║
//  ║                                                           ║
//  ║  5. Bilder: Pfad eintragen, z.B.                          ║
//  ║     image: "images/mein-bild.jpg"                        ║
//  ║                                                           ║
//  ║  6. Nach dem Speichern: index.html im Browser neu laden.  ║
//  ║                                                           ║
//  ╚═══════════════════════════════════════════════════════════╝
//
// ═══════════════════════════════════════════════════════════════

const PRESENTATION_DATA = {

  // ── TITELFOLIE ──────────────────────────────────────────────
  title: {
    main: "RÄUME FÜR JEDEN",
    subtitle: "– inklusiv, immersiv, interaktiv",
    description: "Che la forza sia con te.",
    semester: "SS2026",
    course: "BHT – Transformation Design & Print"
  },

  // ── TEAM RAUM – GRUNDSÄTZE ──────────────────────────────────
  principles: {
    title: "Team Raum – unsere (Gestaltungs-)Grundsätze",
    items: [
      { icon: "immersiv",   title: "Immersiv",   text: "Fai o non fare. Non c'è provare." },
      { icon: "inklusiv",   title: "Inklusiv",   text: "La grandezza non si misura dalla statura." },
      { icon: "interaktiv", title: "Interaktiv", text: "Concentrati sul momento. Senti, non pensare." }
    ]
  },

  // ── RÜCKBLICK ──────────────────────────────────────────────
  flashback: {
    title: "Rückblick",
    items: [
      "In una galassia lontana, lontana...",
      "Aiutami, Obi-Wan Kenobi. Sei la mia unica speranza.",
      "La paura conduce alla rabbia, la rabbia conduce all'odio.",
      "Il futuro è sempre in movimento."
    ]
  },

  // ── PARTNER ────────────────────────────────────────────────
  partner: {
    title: "Rückblick – Unser Partner",
    name: "CJD",
    location: "Standort Sickingenstraße Berlin",
    desc1: "großer sozialer Träger mit Fokus auf Bildung und Inklusion",
    desc2: "Berufsausbildung und -vorbereitung, Praxisklassen, Verwaltung, Soziales",
    desc3: "Transformationswunsch: 'Räume anders denken' für bessere Außenwirkung und neue Einnahmequellen",
    images: ["images/buero.jpg","images/eingang.jpg","images/frisoer.jpg"]
  },

  // ── AUSGANGSSITUATION ──────────────────────────────────────
  situation: {
    title: "Rückblick – Ausgangssituation",
    text: "Sichtbar ist eine <strong>Diskrepanz</strong> zwischen der <strong>Herzlichkeit</strong> im Umgang untereinander und der unsanierten <strong>Industrieanlage</strong>.<br><br>Aber auch zwischen dem Wunsch nach <strong>Öffnung</strong> und systemischen <strong>Barrieren</strong>.",
    images: ["images/willkommen.jpg","images/maps.jpg"]
  },

  // ── FORSCHUNGSFRAGE ────────────────────────────────────────
  researchQuestion: {
    title: "Forschungsfrage",
    question: "Cerca dentro te stesso, e troverai ciò che cerchi."
  },

  // ── 3 HYPOTHESEN ──────────────────────────────────────────
  hypotheses: {
    title: "3 Hypothesen",
    items: [
      "Positive Selbstdarstellung kann strukturelle Probleme überdecken",
      "Kommunizierte Offenheit hängt in der Umsetzung an vielen Faktoren",
      "Hilfe ist gut, kann aber auch einschränkende Strukturen begünstigen"
    ]
  },

  // ── INTERVENTIONSMATRIX ────────────────────────────────────
  matrix: {
    title: "Interventionsmatrix",
    categories: [
      { name: "Irritation",            color: "#ec7d23", description: "" },
      { name: "Verstärkung",           color: "#b1dbe3", description: "" },
      { name: "Zuspitzung",            color: "#ca5482", description: "" },
      { name: "Support",               color: "#b1bfe0", description: "" },
      { name: "Physische Erfahrung",   color: "#384f9e", description: "" }
    ]
  },

  // ── KURZÜBERSICHT ──────────────────────────────────────────
  interventionsOverview: {
    title: "Kurzübersicht aller Interventionen",
    items: [
      { name: "", status: "", categories: [], image: "" },
      { name: "", status: "", categories: [], image: "" },
      { name: "", status: "", categories: [], image: "" },
      { name: "", status: "", categories: [], image: "" }
    ]
  },

  // ── LIVE-DEMO (INCEPTION) ──────────────────────────────────
  inception: {
    title: "Kurzübersicht aller Interventionen",
    url: "https://hierrosa.github.io/hierrosa.github.io.-/"
  },

  example1: {
    number: "01",
    title: "Intervention 1",
    text: "<ul><li>Erste Erkenntnis aus der Recherche</li><li>Zweiter wichtiger Punkt</li><li>Dritter Aspekt der Intervention</li><li>Vierter Gedanke zur Umsetzung</li></ul>",
    media: "images/beispiel1.jpg",
    thumbs: ["images/thumb1a.jpg", "images/thumb1b.jpg"]
},
example2: {
    number: "01",
    title: "Intervention 1",
    text: "<ul><li>Analyse der Ausgangslage</li><li>Identifikation der Hebel</li><li>Erste Modellierung</li></ul>",
    media: "images/beispiel2.jpg",
    thumbs: ["images/thumb2a.jpg", "images/thumb2b.jpg", "images/thumb2c.jpg"]
},
example3: {
    number: "01",
    title: "Intervention 1",
    text: "<ul><li>Kontext der Intervention</li><li>Beteiligte Akteure</li><li>Zeitlicher Rahmen</li><li>Räumliche Gegebenheiten</li></ul>",
    media: "images/beispiel3.jpg",
    thumbs: ["images/thumb3a.jpg"]
},
example4: {
    number: "01",
    title: "Intervention 1",
    text: "<ul><li>Problemstellung</li><li>Forschungslücke</li><li>Zielsetzung</li></ul>",
    text2: "<ul><li>Methode A</li><li>Methode B</li><li>Methode C</li></ul>",
    boxes: ["Ergebnis 1", "Ergebnis 2", "Ergebnis 3"]
},

exampleL: {
  title: "Bushaltestelle",
  layout: "slot-columns-2",
  slots: [
    '<p>Intervention 02 Bushaltestelle als informeller Treffpunkt</p>',
    '<img src="images/derort.jpg" alt="">'
  ]
},              // ← } schließt exampleL, dann Komma

exampleN: {
  title: "Analyse-Fokus",
  layout: "slot-columns-3",
  slots: [
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #f4a261; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Hebel</h3><p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Neurahmung eines bereits genutzten informellen Ortes</p></div>',
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #e76f51; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Interventionstyp</h3><p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Irritation, Wertschätzung, Verstärkung, Interaktion</p></div>',
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #2a9d8f; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Zielgruppe</h3><p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Azubis, BvBler, Lehrende, Vorstand, Verwaltung — alle</p></div>'
  ]
},

exampleM: {     // ← Jetzt auf der OBEREN Ebene, parallel zu exampleL
  title: "Warum dieser Ort?",
  layout: "slot-columns-2",
  slots: [
    '<p>Die Raucherecke ist bereits informeller, sozialer Treffpunkt für Teilnehmende und Mitarbeitende des CJDs</p>',
    '<img src="images/buha_zeichnung.png" alt="">'
  ]
},

exampleO: {
  title: "Intervention: Bushaltestelle",
  layout: "slot-columns-3",
  slots: [
    '<div style="text-align:left;">' +
      '<h3 style="font-size:2.2rem; margin:0 0 1rem 0;">Öffnung</h3>' +
      '<img src="images/oeffnung.jpg" alt="Öffnung" style="width:100%; border-radius:8px; margin-bottom:1.2rem; display:block;">' +
      '<h4 style="font-size:1rem; text-transform:uppercase; letter-spacing:0.05em; margin:0 0 0.5rem 0;">ZIEL</h4>' +
      '<p style="margin:0 0 1.2rem 0; line-height:1.5;">Treffpunkt sichtbar machen und zur aktiven Nutzung einladen.</p>' +
      '<h4 style="font-size:1rem; text-transform:uppercase; letter-spacing:0.05em; margin:0 0 0.5rem 0;">MATERIAL</h4>' +
      '<p style="margin:0; line-height:1.5;">Schild, Ticketautomat, Tickets, Weltkarte, Bohnen-Dosen, Plakat.</p>' +
    '</div>',

    '<div style="text-align:left;">' +
      '<h3 style="font-size:2.2rem; margin:0 0 1rem 0;">Schließung</h3>' +
      '<img src="images/schließung.jpg" alt="Schließung" style="width:100%; border-radius:8px; margin-bottom:1.2rem; display:block;">' +
      '<h4 style="font-size:1rem; text-transform:uppercase; letter-spacing:0.05em; margin:0 0 0.5rem 0;">ZIEL</h4>' +
      '<p style="margin:0 0 1.2rem 0; line-height:1.5;">Soziale Bedeutung des Ortes durch temporären Entzug prüfen.</p>' +
      '<h4 style="font-size:1rem; text-transform:uppercase; letter-spacing:0.05em; margin:0 0 0.5rem 0;">MATERIAL</h4>' +
      '<p style="margin:0; line-height:1.5;">Absperrband, Baustellenabsperrung, Hinweis am Bushaltestellenschild.</p>' +
    '</div>',

    '<div style="text-align:left;">' +
      '<h3 style="font-size:2.2rem; margin:0 0 1rem 0;">Aufklärung</h3>' +
      '<img src="images/aufklaerung.jpg" alt="Aufklärung" style="width:100%; border-radius:8px; margin-bottom:1.2rem; display:block;">' +
      '<h4 style="font-size:1rem; text-transform:uppercase; letter-spacing:0.05em; margin:0 0 0.5rem 0;">ZIEL</h4>' +
      '<p style="margin:0 0 1.2rem 0; line-height:1.5;">Intervention einordnen, Teilnahme wertschätzen und Erkenntnisse zurück geben.</p>' +
      '<h4 style="font-size:1rem; text-transform:uppercase; letter-spacing:0.05em; margin:0 0 0.5rem 0;">MATERIAL</h4>' +
      '<p style="margin:0; line-height:1.5;">Poster, 3D-QR-Code, Website, Kreidestifte zur Glasgestaltung.</p>' +
    '</div>'
  ]
},



  // ═══════════════════════════════════════════════════════════
  //  SLOT-BEISPIELE a–j (generische Bild-Raster)
  //  Bilder: images/1.jpg … images/28.jpg
  //  Texte: Italienische Star-Wars-Zitate (PLATZHALTER)
  // ═══════════════════════════════════════════════════════════

  // ── BEISPIEL a: slot-grid-3x2 (3 Spalten × 2 Reihen, 6 Zellen) ──
  exampleA: {
    title: "Beispiel a",
    layout: "slot-grid-3x2",
    slots: [
      '<img src="images/1.jpeg" alt="">',
      '<img src="images/2.jpeg" alt="">',
      '<img src="images/3.jpeg" alt="">',
      '<img src="images/4.jpeg" alt="">',
      '<img src="images/5.jpeg" alt="">',
      '<img src="images/6.jpeg" alt="">'
    ]
  },

  // ── BEISPIEL b: slot-grid-2x2 (2 Spalten × 2 Reihen, 4 Zellen) ──
  exampleB: {
    title: "Beispiel b",
    layout: "slot-grid-2x2",
    slots: [
      '<img src="images/1.jpeg" alt="">',
      '<img src="images/2.jpeg" alt="">',
      '<img src="images/3.jpeg" alt="">',
      '<img src="images/4.jpeg" alt="">'
    ]
  },

  // ── BEISPIEL c: slot-columns-2 (1 Reihe, 2 Spalten) ──────────
  exampleC: {
    title: "Beispiel c",
    layout: "slot-columns-2",
    slots: [
      '<img src="images/1.jpeg" alt="">',
      '<img src="images/2.jpeg" alt="">'
    ]
  },

  // ── BEISPIEL d: slot-columns-3 (1 Reihe, 3 Spalten) ──────────
  exampleD: {
    title: "Beispiel d",
    layout: "slot-columns-3",
    slots: [
      '<img src="images/3.jpeg" alt="">',
      '<img src="images/4.jpeg" alt="">',
      '<img src="images/5.jpeg" alt="">'
    ]
  },

  // ── BEISPIEL e: slot-columns-4 (1 Reihe, 4 Spalten) ──────────
  exampleE: {
    title: "Beispiel e",
    layout: "slot-columns-4",
    slots: [
      '<img src="images/6.jpeg" alt="">',
      '<img src="images/7.jpeg" alt="">',
      '<img src="images/8.jpeg" alt="">',
      '<img src="images/9.jpeg" alt="">'
    ]
  },

  // ── BEISPIEL f: slot-grid-3x2 (nur obere Hälfte belegt) ──────
  exampleF: {
    title: "Beispiel f",
    layout: "slot-grid-3x2",
    slots: [
      '<img src="images/2.jpeg" alt="">',
      '<img src="images/1.jpeg" alt="">',
      '<img src="images/2.jpeg" alt="">'
      // slot4–6 bleiben leer → leere Zellen unten
    ]
  },

  // ── BEISPIEL g: slot-grid-2x2 (linke Spalte leer) ────────────
  exampleG: {
    title: "Beispiel g",
    layout: "slot-grid-2x2",
    slots: [
      '',
      '<img src="images/3.jpeg" alt="">',
      '',
      '<img src="images/4.jpeg" alt="">'
    ]
  },

  // ── BEISPIEL h: slot-columns-3 (nur 3. Spalte belegt) ────────
  exampleH: {
    title: "Beispiel h",
    layout: "slot-columns-3",
    slots: [
      '',
      '',
      '<img src="images/5.jpeg" alt="">'
    ]
  },

  // ── BEISPIEL i: slot-columns-4 (nur letzte 2 Spalten belegt) ─
  exampleI: {
    title: "Beispiel i",
    layout: "slot-columns-4",
    slots: [
      '',
      '',
      '<img src="images/6.jpeg" alt="">',
      '<img src="images/7.jpeg" alt="">'
    ]
  },

  // ── BEISPIEL j: slot-columns-2 (Text + Bild) ──────────────────
  exampleJ: {
    title: "Beispiel j",
    layout: "slot-columns-2",
    slots: [
      '<p>Che la forza sia con te. Fai o non fare, non c\'è provare. La grandezza non si misura dalla statura.</p>',
      '<img src="images/8.jpeg" alt="">'
    ]
  },

// ---bild+web ---
  exampleK: {
    title: "Interview",
    layout: "slot-columns-2",
    slots: [
      '<img src="images/interview.jpeg" alt="Interview">',
      '<iframe src="https://t0dysseus.github.io/interviews/" frameborder="0" allowfullscreen></iframe>'
    ]
  },

dannenmann1: {
    title: "Dannenmann",
    content: "<p>La Forza sia con te.</p><p>Io sono tuo padre.</p><p>Fare o non fare. Non c'è provare.</p><p>Aiutami, Obi-Wan Kenobi. Sei la mia sola speranza.</p>",
    leftImage: "",
    rightImage: ""
},
dannenmann2: {
    title: "Dannenmann",
    image: "images/original.jpeg",
    models: ["models/original.glb", "models/cut.glb",],
    gif: "images/3d.gif"
},
dannenmann3: {
    title: "Dannenmann",
    images: ["images/d1.jpeg", "images/d2.jpeg", "images/d3.jpeg"],
    text: "<p>Hier steht der Begleittext zu den Bildern. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>"
},
  
  // ── INTERVENTION 1 ─────────────────────────────────────────
  intervention1: {
    number: 1,
    title: "Intervention 1",
    categories: [],
    status: "",
    hypothesis: "La forza sarà con te, sempre.",
    design: {
      concept: "Le tue armi, non ti serviranno.",
      steps: [
        "La speranza è come il sole.",
        "Se credi solo quando la vedi, non sopravvivi alla notte.",
        "Ogni generazione ha il suo eroe."
      ]
    },
    results: {
      modeling: "Difficile vedere il lato oscuro è.",
      measurement: "La Forza vive in ogni creatura vivente.",
      realEffect: "L'odio non conduce da nessuna parte."
    }
  },

  // ── INTERVENTION 2 ─────────────────────────────────────────
  intervention2: {
    number: 2,
    title: "Intervention 2",
    categories: [],
    status: "",
    hypothesis: "Io sono il Senato.",
    design: {
      concept: "Solo un apprendista di Sith tu sei.",
      steps: [
        "La vera ricompensa è il viaggio stesso.",
        "La forza ti accompagnerà sempre.",
        "Concentrati sul momento."
      ]
    },
    results: {
      modeling: "Le vie della Forza sono infinite.",
      measurement: "Cerca dentro te stesso.",
      realEffect: "Il futuro è in movimento, sempre."
    }
  },

  // ── INTERVENTION 3 ─────────────────────────────────────────
  intervention3: {
    number: 3,
    title: "Intervention 3",
    categories: [],
    status: "",
    hypothesis: "Che la forza sia con te.",
    design: {
      concept: "Non c'è emozione, c'è pace.",
      steps: [
        "Non c'è ignoranza, c'è conoscenza.",
        "Non c'è passione, c'è serenità.",
        "Non c'è caos, c'è armonia."
      ]
    },
    results: {
      modeling: "Non c'è morte, c'è la Forza.",
      measurement: "La pazienza deve essere la tua virtù principale.",
      realEffect: "Un Jedi usa la Forza per la conoscenza e la difesa."
    }
  },

  // ── GOLDNUGGETS ────────────────────────────────────────────
  goldNuggets: {
    title: "Goldnuggets",
    items: [
      { title: "", text: "Fai o non fare. Non c'è provare." },
      { title: "", text: "La grandezza non si misura dalla statura." },
      { title: "", text: "La forza sarà con te, sempre." },
      { title: "", text: "Il futuro è sempre in movimento." }
    ]
  },

  // ── TEAMPROZESS ────────────────────────────────────────────
  teamProcess: {
    title: "Teamprozess",
    phases: [
      { phase: "", activities: ["In una galassia lontana, lontana..."] },
      { phase: "", activities: ["Aiutami, Obi-Wan Kenobi."] },
      { phase: "", activities: ["È una trappola!"] },
      { phase: "", activities: ["Che la forza sia con te."] }
    ]
  },

  // ── SCHLUSSFORMULIERUNG ────────────────────────────────────
  conclusion: {
    title: "Schlussformulierung",
    mainStatement: "La forza sarà con te, sempre.",
    keyLearnings: [
      "Fai o non fare. Non c'è provare.",
      "La grandezza non si misura dalla statura.",
      "Il futuro è sempre in movimento."
    ]
  },

  // ── 3D MODEL VIEWER ─────────────────────────────────────────
  modelViewer: {
    title: "3D-Modelle",

    models: [

        {
            name: "Modell 1",
            file: "models/original.glb",
            description: "Beschreibung des ersten Modells."
        },

        {
            name: "Modell 2",
            file: "models/modell2.glb",
            description: "Beschreibung des zweiten Modells."
        },

        {
            name: "Modell 3",
            file: "models/modell3.glb",
            description: "Beschreibung des dritten Modells."
        }

    ]
  },

  // ── VIDEO PLAYER ───────────────────────────────────────────
  video: {
    title: "Video",
    src: "videos/test.mp4",
    description: "Beschreibung des Videos.",
    poster: ""
  },

  // ── BILDER-GALERIE (NEU) ────────────────────────────────────
  // So trägst du deine Bilder ein:
  //   title:       Überschrift auf der Folie
  //   description: Text unter der Überschrift
  //   images:      Liste von Bildern
  //     src: Pfad zum Bild (z.B. "images/galerie/foto1.jpg")
  //     alt: Beschreibungstext (für Barrierefreiheit)
  gallery: {
    title: "Bildergalerie",
    description: "Klicke auf ein Bild für die Großansicht.",
    images: [
      { src: "images/galerie/bild1.jpeg", alt: "Beschreibung 1" },
      { src: "images/galerie/bild2.jpeg", alt: "Beschreibung 2" },
      { src: "images/galerie/bild3.jpeg", alt: "Beschreibung 3" },
      { src: "images/galerie/bild4.jpeg", alt: "Beschreibung 4" }
    ]
  },

  // ── AUSBLICK ───────────────────────────────────────────────
  outlook: {
    title: "Ausblick",
    nextSteps: [
      "Cerca dentro te stesso, e troverai ciò che cerchi.",
      "Le vie della Forza sono misteriose.",
      "La forza ti accompagnerà sempre."
    ],
    thanks: "Che la forza sia con te.",
    contact: "Team Raum – SS2026 – BHT"
  }

};

// ═══════════════════════════════════════════════════════════════
//  ENDE DER DATEN – Ab hier nichts ändern!
// ═══════════════════════════════════════════════════════════════

function getStatusColor(status) {
  var colors = {
    "in umsetzung": "#6a94ff",
    "pausiert": "#f8cb00",
    "abgeschlossen": "#afef73",
    "wird nicht umgesetzt": "#FF5A2F"
  };
  return colors[status] || "#999";
}

function getCategoryColor(category) {
  var colors = {
    "Irritation": "#ec7d23",
    "Verstärkung": "#b1dbe3",
    "Zuspitzung": "#ca5482",
    "Support": "#b1bfe0",
    "Physische Erfahrung": "#384f9e"
  };
  return colors[category] || "#999";
}
