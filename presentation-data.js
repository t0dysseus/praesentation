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

  // ── UNSERE CI ──────────────────────────────────────────────
  ci: {
    title: "Unsere CI",
    iframeUrl: "https://t0dysseus.github.io/praesentation/blume.html", 
    colors: [
      { hex: "#ca5483", label: "#ca5483" },
      { hex: "#b2d4e4", label: "#b2d4e4" },
      { hex: "#ef7d18", label: "#ef7d18" },
      { hex: "#39509e", label: "#39509e" },
      { hex: "#1d1d1b", label: "#1d1d1b" },
      { hex: "#ffffff", label: "#ffffff" }
    ],
    fonts: [
      {
        name: "Atkinson Hyperlegible",
        sample: "The quick brown fox jumps over the lazy dog 0123456789"
      },
      {
        name: "IBM Plex Sans Serif",
        sample: "The quick brown fox jumps over the lazy dog 0123456789"
      }
    ]
  },

  

  // ── PARTNER ────────────────────────────────────────────────
  partner: {
    title: "Rückblick – Unser Partner",
    items: [
      "Großer sozialer Träger: Fokus auf Bildung und Inklusion",
      "Berufsausbildung und -vorbereitung (BVB), Praxisklassen, Verwaltung, Soziales",
      "'Räume anders denken': bessere Außenwirkung & neue Einnahmequellen"
    ],
    images: ["images/buero.jpg","images/eingang.jpg","images/frisoer.jpg"]
  },

  // ── AUSGANGSSITUATION ──────────────────────────────────────
  situation: {
    title: "Rückblick – Ausgangssituation",
    text: "<ul style='list-style:none; padding:0; margin:0;'><li style='margin-bottom:1em; line-height:1.5;'>Diskrepanz zwischen der <strong>Herzlichkeit</strong> im Umgang untereinander und der unsanierten <strong>Industrieanlage</strong>.<li style='margin-bottom:1em; line-height:1.5;'>Diskrepanz zwischen dem Wunsch nach <strong>Öffnung</strong> und systemischen <strong>Barrieren</strong>.</li></ul>",
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

  // ═══════════════════════════════════════════════════════════
  //  INTERVENTION 01 – DANNENMANN (NEU)
  // ═══════════════════════════════════════════════════════════

  dannenmannIntro: {
    title: "",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<p style="margin:0 0 0.4em 0; font-size:1.05em; color:#111;">Intervention 01</p>' +
        '<h2 style="margin:0 0 0.6em 0; font-size:2.2em; font-weight:800; color:#111;">Dannenmann</h2>' +
        '<p style="margin:0; font-size:1.5em; color:#111;">Ein Blick in die Vergangenheit</p>' +
      '</div>',
      '<img src="images/dannenmann_intro.jpg" alt="">'
    ]
  },

  dannenmannHebelhypothese: {
    title: "Hebelhypothese",
    text: "<p>Wenn wir die NS-Vergangenheit des Gründers Arnold Dannenmann physisch begreifbar machen, dann zwingt dieser spürbare Widerspruch die Organisation zur Auseinandersetzung mit ihrer eigenen Geschichte und stößt die gewünschte ehrliche und transparente Öffnung an.</p>"
  },

  dannenmannHebel: {
    title: "",
    layout: "slot-columns-3",
    slots: [
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #f4a261; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Hebel</h3><p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Greifbar machen von Widersprüchen</p></div>',
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #e76f51; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Interventionstyp</h3><p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Zuspitzung, Physische Erfahrung</p></div>',
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #2a9d8f; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Zielgruppe</h3><p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Vorstand, Leitung, Öffentlichkeitsarbeit</p></div>'
    ]
  },

  dannenmannLogik: {
    title: "",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<h2 style="margin:0 0 1em 0; font-size:var(--content-heading); font-weight:800;">Logik</h2>' +
        '<p style="margin:0; line-height:2; font-size:var(--content-text);">Widersprüche sichtbar machen<br>Physisches Erleben von Informationen<br>Reflektieren<br>Überdenken<br>Öffnen</p>' +
      '</div>',
      '<img src="images/dannenmann_logik.jpg" alt="">'
    ]
  },

  dannenmannGestaltung: {
    title: "",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<h2 style="margin:0 0 0.2em 0; font-size:var(--content-heading); font-weight:800;">Gestaltungskonzept</h2>' +
        '<p style="margin:0 0 1em 0; font-size:1.1em;"> 3D Büste mit versteckten Informationen</p>' +
        '<h4 style="margin:0 0 0.3em 0; font-size:0.95em; font-weight:700;">Greifbar machen</h4>' +
        '<p style="margin:0 0 1em 0;">Physische Interaktion mit Informationen anregen</p>' +
        '<h4 style="margin:0 0 0.3em 0; font-size:0.95em; font-weight:700;">Inhalte</h4>' +
        '<p style="margin:0 0 1em 0;">Widersprüche in der Vergangenheit des CJD-Gründers</p>' +
        '<h4 style="margin:0 0 0.3em 0; font-size:0.95em; font-weight:700;">Materialanspruch</h4>' +
        '<p style="margin:0 0 1em 0;">Nachhaltig<br>schnell reproduzierbar<br>authentisch</p>' +
        '<h4 style="margin:0 0 0.3em 0; font-size:0.95em; font-weight:700;">Interaktivität</h4>' +
        '<p style="margin:0;">Öffnen<br>Lesen</p>' +
      '</div>',
      '<img src="images/dannenmann_gestaltung.jpg" alt="">'
    ]
  },

  dannenmannModellierungValidierung: {
    title: "",
    layout: "slot-columns-2",
    slots: [
      // Links: Modellierung
      '<div style="height:100%;">' +
        '<h3 style="margin:0 0 24px 0; font-size:var(--content-heading); font-weight:700; color:var(--text);">Modellierung:</h3>' +
        '<p style="margin:0 0 24px 0; font-size:var(--content-text); color:var(--text); line-height:1.6;">Visuelle Codes:<br>Skulptur betrachten und anfassen/öffnen</p>' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--text); line-height:1.6;">→ Motivation sich damit auseinanderzusetzen<br>--&gt; Bilder bleiben länger hängen<br>--&gt; längere Auseinandersetzung mit der Thematik<br>--&gt;  Erhöhte kommunikative Öffnung des CJD</p>' +
      '</div>',
      // Rechts: Validierung
      '<div style="height:100%;">' +
        '<h3 style="margin:0 0 24px 0; font-size:var(--content-heading); font-weight:700; color:var(--muted);">Validierung:</h3>' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--muted); line-height:1.6;">- Beobachtungsbögen<br>- Kurzfragebogen<br>- Diskurs(-protokoll)</p>' +
      '</div>'
    ]
  },

  dannenmannErgebnis: {
    title: "Ergebnis Dannenmann",
    text: "<p style=\"margin:0 0 1.2em 0;\"><strong>Unmittelbare Reaktionen:</strong> Unbehagen aber persönliche Offenheit.</p>" +
          "<p style=\"margin:0 0 1.2em 0;\"><strong>Zweiter Moment:</strong> Trotz Zweifel an Offenheit des Vorstands Bereitschaft es anzusprechen</p>" +
          "<p style=\"margin:0 0 1.2em 0;\"><strong>Fragebögen:</strong></p>" +
          "<p style=\"margin:0;\"><strong>Interview Vorstand:</strong> Stand kurzzeitig zur Aussicht, kam nie zustande</p>"
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
      '<h3 style="font-size:var(--content-heading); margin:0 0 1rem 0;">Öffnung</h3>' +
      '<img src="images/oeffnung.jpg" alt="Öffnung" style="width:100%; height:220px; object-fit:cover; border-radius:8px; margin-bottom:1.2rem; display:block;">' +
      '<h4 style="font-size:var(--content-text); text-transform:uppercase; letter-spacing:0.05em; margin:0 0 0.5rem 0;">ZIEL</h4>' +
      '<p style="margin:0 0 1.2rem 0; line-height:1.5;">Treffpunkt sichtbar machen und zur aktiven Nutzung einladen.</p>' +
      '<h4 style="font-size:var(--content-text); text-transform:uppercase; letter-spacing:0.05em; margin:0 0 0.5rem 0;">MATERIAL</h4>' +
      '<p style="margin:0; line-height:1.5;">Schild, Ticketautomat, Tickets, Weltkarte, Bohnen-Dosen, Plakat.</p>' +
    '</div>',

    '<div style="text-align:left;">' +
      '<h3 style="font-size:var(--content-heading); margin:0 0 1rem 0;">Schließung</h3>' +
      '<img src="images/schließung.jpg" alt="Schließung" style="width:100%; height:220px; object-fit:cover; border-radius:8px; margin-bottom:1.2rem; display:block;">' +
      '<h4 style="font-size:var(--content-text); text-transform:uppercase; letter-spacing:0.05em; margin:0 0 0.5rem 0;">ZIEL</h4>' +
      '<p style="margin:0 0 1.2rem 0; line-height:1.5;">Soziale Bedeutung des Ortes durch temporären Entzug prüfen.</p>' +
      '<h4 style="font-size:var(--content-text); text-transform:uppercase; letter-spacing:0.05em; margin:0 0 0.5rem 0;">MATERIAL</h4>' +
      '<p style="margin:0; line-height:1.5;">Absperrband, Baustellenabsperrung, Hinweis am Bushaltestellenschild.</p>' +
    '</div>',

    '<div style="text-align:left;">' +
      '<h3 style="font-size:var(--content-heading); margin:0 0 1rem 0;">Aufklärung</h3>' +
      '<img src="images/aufklaerung.jpg" alt="Aufklärung" style="width:100%; height:220px; object-fit:cover; border-radius:8px; margin-bottom:1.2rem; display:block;">' +
      '<h4 style="font-size:var(--content-text); text-transform:uppercase; letter-spacing:0.05em; margin:0 0 0.5rem 0;">ZIEL</h4>' +
      '<p style="margin:0 0 1.2rem 0; line-height:1.5;">Intervention einordnen, Teilnahme wertschätzen und Erkenntnisse zurück geben.</p>' +
      '<h4 style="font-size:var(--content-text); text-transform:uppercase; letter-spacing:0.05em; margin:0 0 0.5rem 0;">MATERIAL</h4>' +
      '<p style="margin:0; line-height:1.5;">Poster, 3D-QR-Code, Website, Kreidestifte zur Glasgestaltung.</p>' +
    '</div>'
  ]
},



stufe1Detail: {
  title: "Stufe 1: Öffnung",
  text: "<h3>ABLAUF</h3><ol><li>Aufbau</li><li>Öffnung</li><li>Interaktion</li><li>Beobachtung</li><li>Auswertung</li></ol><h3>LOGIK</h3><p>Informelle Aneignung<br>Positive Aktivierung</p>",
  images: ["images/1.jpeg","images/2.jpeg","images/3.jpeg","images/4.jpeg","images/5.jpeg","images/6.jpeg"]
},

// ── NEU: Stufe 1 Detail mit 2×4 Grid (8 Bilder) ──────────
detail4x2: {
  title: "Stufe 1: Öffnung",
  text: "<h3>ABLAUF</h3><ol><li>Aufbau</li><li>Öffnung</li><li>Interaktion</li><li>Beobachtung</li><li>Auswertung</li></ol><h3>LOGIK</h3><p>Informelle Aneignung<br>Positive Aktivierung</p>",
  images: ["images/1.jpeg","images/2.jpeg","images/3.jpeg","images/4.jpeg","images/5.jpeg","images/6.jpeg","images/7.jpeg","images/8.jpeg"]
},

  // ── NEU: ÖFFNUNG (3 Folien, je 3×2 Bild-Grid) ─────────────
  oeffnung1: {
    title: "Öffnung",
    layout: "slot-grid-3x2",
    slots: [
      '<img src="images/oeffnung2.jpg" alt="">',
      '<img src="images/oeffnung3.jpg" alt="">',
      '<img src="images/oeffnung4.jpg" alt="">',
      '<img src="images/oeffnung5.jpg" alt="">',
      '<img src="images/oeffnung6.jpg" alt="">',
      '<img src="images/oeffnung7.jpg" alt="">'
    ]
  },

  oeffnung2: {
    title: "Öffnung",
    layout: "slot-grid-3x2",
    slots: [
      '<img src="images/aufbau1.jpeg" alt="">',
      '<img src="images/aufbau2.jpeg" alt="">',
      '<img src="images/aufbau3.jpg" alt="">',
      '<img src="images/aufbau4.jpeg" alt="">',
      '<img src="images/aufbau5.jpg" alt="">',
      '<img src="images/aufbau6.jpeg" alt="">'
    ]
  },

  oeffnung3: {
    title: "Öffnung",
    layout: "slot-grid-3x2",
    slots: [
      '<img src="images/interaktion1.jpeg" alt="">',
      '<img src="images/interaktion2.jpeg" alt="">',
      '<img src="images/interaktion3.jpeg" alt="">',
      '<img src="images/interaktion4.jpeg" alt="">',
      '<img src="images/interaktion5.jpeg" alt="">',
      '<img src="images/interaktion6.jpeg" alt="">'
    ]
  },

  schliessung: {
    title: "Schließung",
    layout: "slot-grid-2x2",
    slots: [
      '<img src="images/schließung1.jpeg" alt="">',
      '<img src="images/abgesperrt2.jpeg" alt="">',
      '<img src="images/schließung.jpeg" alt="">',
      '<img src="images/baustellenschild.jpeg" alt="">'
    ]
  },

  aufklaerung: {
    title: "Aufklärung",
    layout: "slot-columns-2",
    slots: [
      '<img src="images/1.jpeg" alt=""><img src="images/1.jpeg" alt="">',
      '<iframe src="https://chiarabrinkmann10-ux.github.io/BushaltestelleZukunft-/" frameborder="0" allowfullscreen></iframe>'
    ]
  },

  // ── NEU: ERGEBNISSE BUSHALTESTELLE (3 Tage im Vergleich) ────
  // ── NEU: MODELLIERUNG / VALIDIERUNG ─────────────────────────
  modellierungValidierung: {
    title: "",
    layout: "slot-columns-2",
    slots: [
      // Links: Modellierung
      '<div style="height:100%;">' +
        '<h3 style="margin:0 0 24px 0; font-size:var(--content-heading); font-weight:700; color:var(--text);">Modellierung:</h3>' +
        '<p style="margin:0 0 24px 0; font-size:var(--content-text); color:var(--text); line-height:1.6;">Visuelle Codes:<br>Ziele und Stärken sichtbar machen</p>' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--text); line-height:1.6;">→ Zieldefinition<br>--&gt; Orientierung<br>--&gt; mehr Motivation</p>' +
      '</div>',
      // Rechts: Validierung
      '<div style="height:100%;">' +
        '<h3 style="margin:0 0 24px 0; font-size:var(--content-heading); font-weight:700; color:var(--muted);">Validierung:</h3>' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--muted); line-height:1.6;">- Beobachtungsbögen Tag 1<br>- Beobachtungsbögen Tag 2<br>- QR-Code Tracking Woche 3</p>' +
      '</div>'
    ]
  },

  ergebnisseBushaltestelle: {
    title: "Ergebnisse Bushaltestelle",
    layout: "slot-columns-3",
    slots: [
      // Tag 1
      '<div style="height:100%;">' +
        '<h3 style="margin:0 0 16px 0; font-size:var(--content-heading); font-weight:700; color:var(--text);">Tag 1</h3>' +
        '<p style="margin:0 0 20px 0; font-size:var(--content-text); color:var(--text);">keine negativen Reaktionen</p>' +
        '<hr style="border:none; border-top:2px solid var(--hero-orange); width:160px; margin:0 0 20px 0;">' +
        '<p style="margin:0 0 12px 0; font-size:var(--content-text); color:var(--text); line-height:1.5;">keine Berührungsängste, besonders Frauen initiieren</p>' +
        '<p style="margin:0 0 12px 0; font-size:var(--content-text); color:var(--text); line-height:1.5;">Social Proof Effect, (spielerische) Manipulation</p>' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--text); line-height:1.5;">entwendete Stifte</p>' +
        '<hr style="border:none; border-top:2px solid var(--hero-orange); width:160px; margin:24px 0 20px 0;">' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--text); line-height:1.5;"><strong>Erkenntnis</strong><br>Mehr physische Robustheit für vandalismussicheren Aufbau</p>' +
      '</div>',
      // Tag 2
      '<div style="height:100%;">' +
        '<h3 style="margin:0 0 16px 0; font-size:var(--content-heading); font-weight:700; color:var(--text);">Tag 2</h3>' +
        '<p style="margin:0 0 20px 0; font-size:var(--content-text); color:var(--text);">keine positiven Reaktionen</p>' +
        '<hr style="border:none; border-top:2px solid var(--hero-pink); width:160px; margin:0 0 20px 0;">' +
        '<p style="margin:0 0 12px 0; font-size:var(--content-text); color:var(--text); line-height:1.5;">Frustration<br>Verwirrung</p>' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--text); line-height:1.5;">Gerüchte<br>Spekulationen</p>' +
        '<hr style="border:none; border-top:2px solid var(--hero-pink); width:160px; margin:24px 0 20px 0;">' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--text); line-height:1.5;"><strong>Erkenntnis</strong><br>gezielter Entzug legte tatsächliche soziale Relevanz der Bushaltestelle als Schutzraum offen</p>' +
      '</div>',
      // Tag 3
      '<div style="height:100%;">' +
        '<h3 style="margin:0 0 16px 0; font-size:var(--content-heading); font-weight:700; color:var(--text);">Tag 3</h3>' +
        '<p style="margin:0 0 20px 0; font-size:var(--content-text); color:var(--text); line-height:1.5;">14 Zugriffe Webseite<br>0 E-Mails</p>' +
        '<hr style="border:none; border-top:2px solid var(--hero-darkblue); width:160px; margin:0 0 20px 0;">' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--text); line-height:1.5;">keinerlei Beschädigungen</p>' +
        '<hr style="border:none; border-top:2px solid var(--hero-darkblue); width:160px; margin:24px 0 20px 0;">' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--text); line-height:1.5;"><strong>Erkenntnis</strong><br>E-Mails als Rückmeldung zeigen höhere Barriere in digitalen Kanälen</p>' +
      '</div>'
    ]
  },

  // ═══════════════════════════════════════════════════════════
  //  INTERVENTION 03 – ROLLENTAUSCH (NEU)
  // ═══════════════════════════════════════════════════════════

  rollentauschIntro: {
    title: "",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<p style="margin:0 0 0.4em 0; font-size:1.05em; color:#111;">Intervention 03</p>' +
        '<h2 style="margin:0 0 0.6em 0; font-size:2.2em; font-weight:800; color:#111;">Rollentausch</h2>' +
        '<p style="margin:0; font-size:1.5em; color:#111;">BVBler und Azubis als KI Expert:innen</p>' +
      '</div>',
      '<img src="images/rollentausch_intro.jpg" alt="">'
    ]
  },

  rollentauschHebelhypothese: {
    title: "Hebelhypothese",
    text: "<p>Wenn BVBler und Azubis, mittels eines begleiteten Rollentauschs zu KI, Verantwortung für einen kleinen, aber relevanten Wissensmoment übernehmen, destabilisiert dieser gegebene Hierarchien, verschiebt die Machtverhältnisse und macht sichtbar, was ihnen zugetraut werden kann.</p>"
  },

  rollentauschHebel: {
    title: "",
    layout: "slot-columns-3",
    slots: [
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #f4a261; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Hebel</h3><p style="margin:0 0 1em 0; color:#444; line-height:1.5; font-size:0.95em;">In einem sicheren und begleiteten Rahmen Verantwortung übernehmen</p><p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Umkehren wer in der Rolle der Expert\'innen auftritt</p></div>',
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #e76f51; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Interventionstyp</h3><p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Support<br>positive Verstärkung</p></div>',
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #2a9d8f; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Zielgruppe</h3><p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Azubis<br>BVBler<br>Mitarbeitende</p></div>'
    ]
  },

  rollentauschLogik: {
    title: "",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<h2 style="margin:0 0 1em 0; font-size:var(--content-heading); font-weight:800;">Logik</h2>' +
        '<p style="margin:0; line-height:2; font-size:var(--content-text);">mehr Zutrauen<br>Verantwortung übergeben<br>KI-Expertise bei Azubis/BVBler<br>Mitarbeitende lassen sich leiten<br>Neue Erfahrungen<br>Auswertung</p>' +
      '</div>',
      '<img src="images/rollentausch_logik.jpg" alt="">'
    ]
  },

  rollentauschGestaltung: {
    title: "",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<h2 style="margin:0 0 0.2em 0; font-size:var(--content-heading); font-weight:800;">Gestaltungskonzept</h2>' +
        '<p style="margin:0 0 1em 0; font-size:1.1em;">Inhalt erarbeiten und selbständig vermitteln</p>' +
        '<h4 style="margin:0 0 0.3em 0; font-size:0.95em; font-weight:700;">Grundhaltung</h4>' +
        '<p style="margin:0 0 1em 0;">Freiheit<br>Selbstbestimmung<br>sicherer Rahmen</p>' +
        '<h4 style="margin:0 0 0.3em 0; font-size:0.95em; font-weight:700;">Arbeitsmaterialien</h4>' +
        '<p style="margin:0 0 1em 0;">als Baukasten nach Bedarf</p>' +
        '<h4 style="margin:0 0 0.3em 0; font-size:0.95em; font-weight:700;">Support</h4>' +
        '<p style="margin:0 0 1em 0;">wenn nötig oder gewünscht</p>' +
        '<h4 style="margin:0 0 0.3em 0; font-size:0.95em; font-weight:700;">Inklusion</h4>' +
        '<p style="margin:0;">leichte Sprache</p>' +
      '</div>',
      '<img src="images/rollentausch_gestaltung.jpg" alt="">'
    ]
  },

  rollentauschAblauf1: {
    title: "Ablauf",
    layout: "slot-columns-3",
    slots: [
      '<img src="images/rollentausch_ablauf1_1.jpg" alt="">',
      '<img src="images/rollentausch_ablauf1_2.jpg" alt="">',
      '<img src="images/rollentausch_ablauf1_3.jpg" alt="">'
    ]
  },

  rollentauschAblauf2: {
    title: "Ablauf",
    layout: "slot-grid-3x2",
    slots: [
      '<div style="text-align:center;"><img src="images/rollentausch_agenda.jpg" alt="" style="width:100%; display:block; margin-bottom:8px;"><p style="margin:0; font-size:0.9em; color:#444;">rollentausch_agenda</p></div>',
      '<div style="text-align:center;"><img src="images/faktensheet_ki.jpg" alt="" style="width:100%; display:block; margin-bottom:8px;"><p style="margin:0; font-size:0.9em; color:#444;">faktensheet_ki</p></div>',
      '<div style="text-align:center;"><img src="images/rollentausch_bildchen.jpg" alt="" style="width:100%; display:block; margin-bottom:8px;"><p style="margin:0; font-size:0.9em; color:#444;">rollentausch_bildchen</p></div>',
      '<div style="text-align:center;"><img src="images/rollenkarte1.jpg" alt="" style="width:100%; display:block; margin-bottom:8px;"><p style="margin:0; font-size:0.9em; color:#444;">rollenkarte1</p></div>',
      '<div style="text-align:center;"><img src="images/rollentausch_tisch_01.jpg" alt="" style="width:100%; display:block; margin-bottom:8px;"><p style="margin:0; font-size:0.9em; color:#444;">rollentausch_tisch_01</p></div>',
      '<div style="text-align:center;"><img src="images/rollentausch-kreise.jpg" alt="" style="width:100%; display:block; margin-bottom:8px;"><p style="margin:0; font-size:0.9em; color:#444;">rollentausch-kreise</p></div>'
    ]
  },

  rollentauschAblauf3: {
    title: "Ablauf",
    layout: "slot-columns-2",
    slots: [
      '<img src="images/rollentausch_ablauf3_1.jpg" alt="">',
      '<img src="images/rollentausch_ablauf3_2.jpg" alt="">'
    ]
  },

  rollentauschAblauf4: {
    title: "Ablauf",
    layout: "slot-columns-3",
    slots: [
      '<img src="images/rollentausch_ablauf4_1.jpg" alt="">',
      '<img src="images/rollentausch_ablauf4_2.jpg" alt="">',
      '<img src="images/rollentausch_ablauf4_3.jpg" alt="">'
    ]
  },

  rollentauschModellierungValidierung: {
    title: "",
    layout: "slot-columns-2",
    slots: [
      // Links: Modellierung
      '<div style="height:100%;">' +
        '<h3 style="margin:0 0 24px 0; font-size:var(--content-heading); font-weight:700; color:var(--text);">Modellierung:</h3>' +
        '<p style="margin:0 0 24px 0; font-size:var(--content-text); color:var(--text); line-height:1.6;">Kommunikationscodes:<br>Art. des Lehrens</p>' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--text); line-height:1.6;">→ mehr Eigenverantwortung<br>--&gt; Selbstvertrauen<br>--&gt; mehr Motivation<br>→ Selbstbestimmung</p>' +
      '</div>',
      // Rechts: Validierung
      '<div style="height:100%;">' +
        '<h3 style="margin:0 0 24px 0; font-size:var(--content-heading); font-weight:700; color:var(--muted);">Validierung:</h3>' +
        '<p style="margin:0 0 24px 0; font-size:var(--content-text); color:var(--muted); line-height:1.6;">- Feedbackbögen CJD Teilnehmer (Vortragende)<br>- Feedbackbögen CJD Mitarbeiter (Zuhörer)</p>' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--muted); line-height:1.6;">- Beobachtungen während des Workshops<br>- Feedbackrunde am Ende</p>' +
      '</div>'
    ]
  },

  rollentauschErgebnisMessung: {
    title: "",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<h4 style="margin:0 0 0.3em 0; font-size:1.05em; font-weight:700;">Zutrauen</h4>' +
        '<p style="margin:0 0 1.2em 0; line-height:1.5;">Mitarbeitende trauen Teilnehmenden tendenziell mehr zu, als diese sich selbst</p>' +
        '<h4 style="margin:0 0 0.3em 0; font-size:1.05em; font-weight:700;">Neues Wissen</h4>' +
        '<p style="margin:0 0 1.2em 0; line-height:1.5;">Lerneffekt ist beidseitig, bei Teilnehmenden als "Expert*innen" sogar leicht stärker</p>' +
        '<h4 style="margin:0 0 0.3em 0; font-size:1.05em; font-weight:700;">Hierarchien</h4>' +
        '<p style="margin:0; line-height:1.5;">Mitarbeitende skeptisch, ob sich an Hierarchien etwas ändert<br>Teilnehmende wünschen sich ausdrücklich mehr <strong>als Experten auftreten</strong> zu können</p>' +
      '</div>',
      '<img src="images/rollentausch_ergebnis_chart.jpg" alt="">'
    ]
  },

  rollentauschErgebnis: {
    title: "Ergebnis Rollentausch",
    text: "<p style=\"margin:0 0 1.2em 0;\"><strong>Gruppendynamik</strong><br>Respekt und Rücksichtnahme, persönliche Stärken fließen ein</p>" +
          "<p style=\"margin:0 0 1.2em 0;\"><strong>Organisation</strong><br>Selbstständig und selbstbestimmt</p>" +
          "<p style=\"margin:0 0 1.2em 0;\"><strong>Wissen</strong><br>Vielseitig und spannend</p>" +
          "<p style=\"margin:0 0 1.2em 0;\"><strong>Umsetzung</strong><br>Schnell und kreativ</p>" +
          "<p style=\"margin:0;\"><strong>Thema</strong><br>Gefahren von KI beschäftigen alle</p>"
  },

  // ═══════════════════════════════════════════════════════════
  //  INTERVENTION 04 – WERKSTÜCKE (NEU)
  // ═══════════════════════════════════════════════════════════

  werkstueckeIntro: {
    title: "",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<p style="margin:0 0 0.4em 0; font-size:1.05em; color:#111;">Intervention 04</p>' +
        '<h2 style="margin:0 0 0.6em 0; font-size:2.2em; font-weight:800; color:#111;">Werkstücke</h2>' +
        '<p style="margin:0; font-size:1.5em; color:#111;">Ausstellung von Arbeiten aus der Metallwerkstatt</p>' +
      '</div>',
      '<img src="images/werkstuecke_intro.jpg" alt="">'
    ]
  },

  werkstueckeHebelhypothese: {
    title: "Hebelhypothese",
    text: "<p>Wenn die Auszubildenden ihren Fähigkeiten mehr Raum geben können, indem ihnen eine Plattform dafür zur Verfügung gestellt wird, dann steigert dies die Motivation, das Selbstvertrauen und den Zusammenhalt dieser, weil wir damit ihr Können sichtbar und greifbar machen.</p>"
  },

  werkstueckeHebel: {
    title: "",
    layout: "slot-columns-3",
    slots: [
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #f4a261; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Hebel</h3><p style="margin:0; color:#444; line-height:1.6; font-size:0.95em;">Fähigkeiten nutzen und zeigen<br><br>Selbstbewusstsein steigern<br><br>Zusammenhalt stärken</p></div>',
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #e76f51; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Interventionstyp</h3><p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Support<br>positive Verstärkung</p></div>',
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #2a9d8f; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Zielgruppe</h3><p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Azubis</p></div>'
    ]
  },

  werkstueckeModellierungValidierung: {
    title: "",
    layout: "slot-columns-2",
    slots: [
      // Links: Modellierung
      '<div style="height:100%;">' +
        '<h3 style="margin:0 0 24px 0; font-size:var(--content-heading); font-weight:700; color:var(--text);">Modellierung:</h3>' +
        '<p style="margin:0 0 24px 0; font-size:var(--content-text); color:var(--text); line-height:1.6;">Visuelle Codes::<br>Stärken sichtbar machen</p>' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--text); line-height:1.6;">→ Vertrauen ins eigene Können<br>--&gt; weniger Angst<br>--&gt; mehr Motivation</p>' +
      '</div>',
      // Rechts: Validierung
      '<div style="height:100%;">' +
        '<h3 style="margin:0 0 24px 0; font-size:var(--content-heading); font-weight:700; color:var(--muted);">Validierung:</h3>' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--muted); line-height:1.6;">- Feedbackbögen Projekterschaffer<br>- Feedbackbögen andere CJD Teilnehmer<br>- Feedbackbögen CJD Mitarbeiter</p>' +
      '</div>'
    ]
  },

  werkstueckeErgebnis: {
    title: "Ergebnis Werkstück",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<p style="margin:0 0 1.2em 0; line-height:1.5;"><strong>Kommunikation:</strong> gestrandet</p>' +
        '<p style="margin:0 0 1.2em 0; line-height:1.5;"><strong>Ausstellung:</strong> alter Stand</p>' +
        '<p style="margin:0; line-height:1.5;"><strong>Erkenntnis:</strong> Austausch zwischen den Bereichen wirkt stockend</p>' +
      '</div>',
      '<img src="images/werkstuecke_ergebnis.jpg" alt="">'
    ]
  },

  // ═══════════════════════════════════════════════════════════
  //  TEAM & LEARNINGS & PRÄSENZ (NEU)
  // ═══════════════════════════════════════════════════════════

  teamprozessUebersicht: {
    title: "Teamprozess",
    html:
      '<div style="position:relative; width:100%; height:640px;">' +
        '<img src="images/gruppenfoto.jpg" alt="Gruppenfoto" style="position:absolute; left:31%; top:24%; width:31%; border-radius:2px; box-shadow:0 2px 10px rgba(0,0,0,0.15);">' +
        '<div style="position:absolute; left:33%; top:90%; color:#555; font-size:1.15em;">Gruppenfoto.jpg</div>' +

        '<div style="position:absolute; left:15%; top:29%; font-weight:700; font-size:1.4em; color:#555;">Rosa</div>' +
        '<div style="position:absolute; left:9%; top:50%; font-weight:700; font-size:1.4em; color:#555;">Sarah</div>' +
        '<div style="position:absolute; left:22%; top:65%; font-weight:700; font-size:1.4em; color:#555;">Dirk</div>' +
        '<div style="position:absolute; left:6%; top:78%; font-weight:700; font-size:1.4em; color:#555;">BVBler</div>' +

        '<div style="position:absolute; left:66%; top:16%; font-weight:700; font-size:1.4em; color:#555;">Tony</div>' +
        '<div style="position:absolute; left:78%; top:33%; font-weight:700; font-size:1.4em; color:#555;">Chiara</div>' +
        '<div style="position:absolute; left:69%; top:56%; font-weight:700; font-size:1.4em; color:#555;">Azubis</div>' +
        '<div style="position:absolute; left:84%; top:66%; font-weight:700; font-size:1.4em; color:#555;">Denise</div>' +
        '<div style="position:absolute; left:66%; top:86%; font-weight:700; font-size:1.4em; color:#555;">Rebecca</div>' +
      '</div>'
  },

  learningsUebersicht: {
    title: "Learnings",
    html:
      '<div style="display:flex; flex-direction:column; margin-top:20px;">' +
        '<p style="margin:0 0 30px 0; font-size:1.3em; color:#111;">Rollenfindung in neuer Teamdynamik</p>' +
        '<p style="margin:0 0 30px 0; font-size:1.3em; color:#111;">gegenseitige Unterstützung</p>' +
        '<p style="margin:0 0 30px 0; font-size:1.3em; color:#111;">gemeinsames Lernen</p>' +
        '<p style="margin:0 0 30px 0; font-size:1.3em; color:#111;">Feedback einordnen</p>' +
        '<p style="margin:0 0 30px 0; font-size:1.3em; color:#111;">Konflikte lösen</p>' +
        '<p style="margin:0 0 30px 0; font-size:1.3em; color:#111;">Persönlichkeitstypen kennenlernen</p>' +
        '<p style="margin:0; font-size:1.3em; color:#111;">Beziehungen pflegen</p>' +
      '</div>'
  },

  praesenzZeigenUebersicht: {
    title: "Präsenz zeigen",
    html:
      '<div>' +
        '<p style="margin:0 0 0.3em 0; font-weight:700; font-size:1.3em; color:#111;">Transformation braucht</p>' +
        '<p style="margin:0 0 50px 0; font-size:1.3em; line-height:1.6; color:#111;">Vertrauen &amp; Beziehungen<br>Alltag &amp; Begegnung<br>Augenhöhe &amp; Austausch</p>' +

        '<div style="display:flex; align-items:baseline; gap:10px; margin:0 0 40px 0;">' +
          '<span style="font-size:2.2em; font-weight:800; color:#2c3e8c;">9x</span>' +
          '<span style="font-size:1.1em; color:#888;">vor Ort im Semester</span>' +
        '</div>' +

        '<div style="position:relative; display:flex; justify-content:space-between; align-items:center; padding:0 10px; margin-top:70px;">' +
          '<div style="position:absolute; left:0; right:0; top:50%; height:2px; background:#2c3e8c; z-index:0;"></div>' +

          '<div style="display:flex; flex-direction:column; align-items:center; flex:1; position:relative; z-index:1;">' +
            '<div style="margin-bottom:8px; text-align:center;"><div style="font-weight:700; color:#2c3e8c; font-size:0.95em;">21.04</div><div style="color:#333; font-size:0.85em;">K1 Eröffnungstreffen</div></div>' +
            '<div style="width:14px; height:14px; border-radius:50%; background:#e08e45;"></div>' +
          '</div>' +

          '<div style="display:flex; flex-direction:column; align-items:center; flex:1; position:relative; z-index:1;">' +
            '<div style="width:14px; height:14px; border-radius:50%; background:#e08e45;"></div>' +
            '<div style="margin-top:8px; text-align:center;"><div style="font-weight:700; color:#2c3e8c; font-size:0.95em;">12.05</div><div style="color:#333; font-size:0.85em;">Tag der offenen Tür</div></div>' +
          '</div>' +

          '<div style="display:flex; flex-direction:column; align-items:center; flex:1; position:relative; z-index:1;">' +
            '<div style="margin-bottom:8px; text-align:center;"><div style="font-weight:700; color:#2c3e8c; font-size:0.95em;">18.05</div><div style="color:#333; font-size:0.85em;">Interviews</div></div>' +
            '<div style="width:14px; height:14px; border-radius:50%; background:#e08e45;"></div>' +
          '</div>' +

          '<div style="display:flex; flex-direction:column; align-items:center; flex:1; position:relative; z-index:1;">' +
            '<div style="width:14px; height:14px; border-radius:50%; background:#e08e45;"></div>' +
            '<div style="margin-top:8px; text-align:center;"><div style="font-weight:700; color:#2c3e8c; font-size:0.95em;">26.05</div><div style="color:#333; font-size:0.85em;">K2 Meeting + Dannenmann</div></div>' +
          '</div>' +

          '<div style="display:flex; flex-direction:column; align-items:center; flex:1; position:relative; z-index:1;">' +
            '<div style="margin-bottom:8px; text-align:center;"><div style="font-weight:700; color:#2c3e8c; font-size:0.95em;">08.06</div><div style="color:#333; font-size:0.85em;">BuHa 1: Öffnung</div></div>' +
            '<div style="width:14px; height:14px; border-radius:50%; background:#e08e45;"></div>' +
          '</div>' +

          '<div style="display:flex; flex-direction:column; align-items:center; flex:1; position:relative; z-index:1;">' +
            '<div style="width:14px; height:14px; border-radius:50%; background:#e08e45;"></div>' +
            '<div style="margin-top:8px; text-align:center;"><div style="font-weight:700; color:#2c3e8c; font-size:0.95em;">10.06</div><div style="color:#333; font-size:0.85em;">BuHa 2: Schließung</div></div>' +
          '</div>' +

          '<div style="display:flex; flex-direction:column; align-items:center; flex:1; position:relative; z-index:1;">' +
            '<div style="margin-bottom:8px; text-align:center;"><div style="font-weight:700; color:#2c3e8c; font-size:0.95em;">22.06</div><div style="color:#333; font-size:0.85em;">BuHa 3: Aufklärung</div></div>' +
            '<div style="width:14px; height:14px; border-radius:50%; background:#e08e45;"></div>' +
          '</div>' +

          '<div style="display:flex; flex-direction:column; align-items:center; flex:1; position:relative; z-index:1;">' +
            '<div style="width:14px; height:14px; border-radius:50%; background:#e08e45;"></div>' +
            '<div style="margin-top:8px; text-align:center;"><div style="font-weight:700; color:#2c3e8c; font-size:0.95em;">30.06</div><div style="color:#333; font-size:0.85em;">K2 Meeting vor Ort</div></div>' +
          '</div>' +

          '<div style="display:flex; flex-direction:column; align-items:center; flex:1; position:relative; z-index:1;">' +
            '<div style="margin-bottom:8px; text-align:center;"><div style="font-weight:700; color:#2c3e8c; font-size:0.95em;">13.07</div><div style="color:#333; font-size:0.85em;">Rollentausch</div></div>' +
            '<div style="width:14px; height:14px; border-radius:50%; background:#e08e45;"></div>' +
          '</div>' +

        '</div>' +
      '</div>'
  },

  // ═══════════════════════════════════════════════════════════
  //  GOLDNUGGETS (NEU)
  // ═══════════════════════════════════════════════════════════

  goldnugget1: {
    title: "Goldnugget 1",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<p style="margin:0; line-height:1.5;"><strong>Entzug als Werkzeug:</strong> Etwas wegzunehmen kann deutlich mehr offenlegen, als etwas anzubieten.</p>' +
      '</div>',
      '<img src="images/goldnugget_1.jpg" alt="">'
    ]
  },

  goldnugget2: {
    title: "Goldnugget 2",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<p style="margin:0; line-height:1.5;"><strong>Wissen ist Handlungsgrundlage:</strong> Nur bekannte Bedürfnisse können auch berücksichtigt werden. Gesammelte Anliegen vorbringen ist möglicherweise zielführender als Einzelstimmen.</p>' +
      '</div>',
      '<img src="images/goldnugget_2.jpg" alt="">'
    ]
  },

  goldnugget3: {
    title: "Goldnugget 3",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<p style="margin:0; line-height:1.5;"><strong>Widerstand als Einstiegspunkt:</strong> Sichtbare Abwehr bei heiklen Themen kann zeigen, wo Machtstrukturen sitzen.</p>' +
      '</div>',
      '<img src="images/goldnugget_3.jpg" alt="">'
    ]
  },

  goldnugget4: {
    title: "Goldnugget 4",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<p style="margin:0; line-height:1.5;"><strong>Verantwortung übergeben:</strong> Zutrauen und Veränderung kann durch konkrete Situationen entstehen.</p>' +
      '</div>',
      '<img src="images/goldnugget_4.jpg" alt="">'
    ]
  },

  goldnugget5: {
    title: "Goldnugget 5",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<p style="margin:0 0 0.3em 0; line-height:1.5;"><strong>Wahrgenommene Hürden prüfen:</strong></p>' +
        '<p style="margin:0; line-height:1.5;">Räume/Infrastruktur wirken wie das Problem, der Ursprung sitzt aber oft tiefer.</p>' +
      '</div>',
      '<img src="images/goldnugget_5.jpg" alt="">'
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
