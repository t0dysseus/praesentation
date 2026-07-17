// ═══════════════════════════════════════════════════════════════
//  PRÄSENTATIONSDATEN – LEICHTE SPRACHE
// ═══════════════════════════════════════════════════════════════
//
//  Diese Datei enthält die gleiche Struktur wie presentation-data.js
//  aber mit Texten in LEICHTER SPRACHE (fuer Inklusion).
//
//  ╔═══════════════════════════════════════════════════════════╗
//  ║  WICHTIG: Die Schluesselnamen muessen EXAKT gleich sein   ║
//  ║  wie in presentation-data.js!                             ║
//  ║  Nur die Texte (zwischen " ") sind anders.                ║
//  ╚═══════════════════════════════════════════════════════════╝
//
//  Nach dem Speichern: index.html im Browser neu laden.
//
// ═══════════════════════════════════════════════════════════════

const PRESENTATION_DATA_SIMPLE = {

  // ── TITELFOLIE ──────────────────────────────────────────────
  title: {
    main: "RÄUME FÜR JEDEN",
    subtitle: "Für alle. Einfach. Gemeinsam.",
    semester: "SS2026",
    course: "BHT – Transformation Design & Print"
  },

  // ── UNSERE CI ──────────────────────────────────────────────
  ci: {
    title: "UNSERE AUSSEHEN",
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
    title: "RÜCKBLICK – UNSER PARTNER",
    items: [
      "Große soziale Einrichtung. Die Einrichtung setzt sich für Bildung und Inklusion ein.",
      "Die Einrichtung bietet Berufs-Vorbereitung, Ausbildung, Praxis-Klassen und Beratung an.",
      "Das Ziel ist: Räume öffnen, mehr Menschen erreichen und neue Möglichkeiten schaffen."
    ],
    images: ["images/buero.jpg","images/eingang.jpg","images/frisoer.jpg"]
  },

  // ── AUSGANGSSITUATION ──────────────────────────────────────
  situation: {
    title: "RÜCKBLICK – AUSGANGSSITUATION",
    text: "<ul style='list-style:none; padding:0; margin:0;'><li style='margin-bottom:1em; line-height:1.5;'>Die Menschen gehen freundlich und offen miteinander um. Die Gebäude wirken dagegen alt und wenig einladend.</li><li style='margin-bottom:1em; line-height:1.5;'>Die Einrichtung möchte offener werden. Es gibt aber noch Hindernisse, die das schwer machen.</li></ul>",    images: ["images/willkommen.jpg","images/maps.jpg"]
  },

  // ── FORSCHUNGSFRAGE ────────────────────────────────────────
  researchQuestion: {
    title: "Forschungsfrage",
    question: "Wie können wir Räume so gestalten, dass alle sich willkommen fühlen?"
  },

  // ── 3 HYPOTHESEN ──────────────────────────────────────────
  hypotheses: {
    title: "3 HYPOTHESEN",
    items: [
      "Gute Selbstdarstellung kann echte Probleme verstecken.",
      "Offenheit sagen ist leichter, als Offenheit leben.",
      "Hilfe ist gut. Aber sie kann auch einschränken."
    ]
  },

  // ── INTERVENTIONSMATRIX ────────────────────────────────────
  matrix: {
    title: "INTERVENTIONSMATRIX",
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
    title: "KURZÜBERSICHT ALLER INTERVENTIONEN",
    items: [
      { name: "", status: "", categories: [], image: "" },
      { name: "", status: "", categories: [], image: "" },
      { name: "", status: "", categories: [], image: "" },
      { name: "", status: "", categories: [], image: "" }
    ]
  },

  // ── LIVE-DEMO (INCEPTION) ──────────────────────────────────
  inception: {
    title: "KURZÜBERSICHT ALLER INTERVENTIONEN",
    url: "https://hierrosa.github.io/hierrosa.github.io.-/"
  },

  // ── DANKE + IFRAME ─────────────────
  thanks: {
    title: "DANKE",
    url: "https://t0dysseus.github.io/praesentation/danke.html"
  },

  example1: {
    number: "01",
    title: "INTERVENTION 1",
    text: "<ul><li>Erste Erkenntnis aus der Recherche</li><li>Zweiter wichtiger Punkt</li><li>Dritter Aspekt der Intervention</li><li>Vierter Gedanke zur Umsetzung</li></ul>",
    media: "images/beispiel1.jpg",
    thumbs: ["images/thumb1a.jpg", "images/thumb1b.jpg"]
},
example2: {
    number: "01",
    title: "INTERVENTION 1",
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
  //  INTERVENTION 01 – DANNENMANN
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
      '<img src="images/frageboegen_dannenmann.jpg" alt="">'
    ]
  },

  dannenmannHebelhypothese: {
    title: "HEBELHYPOTHESE",
    text: '<p>Wenn wir die NS-Vergangenheit des Gründers sichtbar machen, dann muss sich die Organisation mit ihrer Geschichte auseinandersetzen. Das führt zu mehr Ehrlichkeit und Offenheit.</p>'

  },

  dannenmannHebel: {
    title: "",
    layout: "slot-columns-3",
    slots: [
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #f4a261; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Hebel</h3><p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Widersprüche greifbar machen</p></div>',
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
        '<p style="margin:0; line-height:2; font-size:var(--content-text);">Widersprüche sichtbar machen<br>Informationen physisch erleben<br>Nachdenken<br>Überdenken<br>Öffnen</p>' +
      '</div>',
      '<img src="images/dannenmann_logik.jpg" alt="">'
    ]
  },

  dannenmannGestaltung: {
    title: "",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<h2 style="margin:0 0 0.2em 0; font-size:var(--content-heading); font-weight:800;">GESTALTUNGSKONZEPT</h2>' +
        '<p style="margin:0 0 1em 0; font-size:1.1em;">3D Büste mit versteckten Informationen</p>' +
        '<p style="margin:0 0 1em 0;"><strong>Greifbar machen:</strong> Physische Interaktion mit Informationen anregen</p>' +
        '<p style="margin:0 0 1em 0;"><strong>Inhalte:</strong> Widersprüche in der Vergangenheit des Gründers</p>' +
        '<p style="margin:0 0 1em 0;"><strong>Materialanspruch:</strong> Nachhaltig<br>schnell reproduzierbar<br>authentisch</p>' +
        '<p style="margin:0;"><strong>Interaktivität:</strong> Öffnen<br>Lesen</p>' +
      '</div>',
      '<img src="images/dannenmann_gestaltung.jpg" alt="">'
    ]
  },

  dannenmannModellierungValidierung: {
    title: "",
    layout: "slot-columns-3",
    slots: [
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #f4a261; height:100%; box-sizing:border-box;">' +
        '<h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Modellierung</h3>' +
        '<p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Visuelle Codes:<br>Skulptur betrachten und anfassen/öffnen</p>' +
      '</div>',
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #e76f51; height:100%; box-sizing:border-box;">' +
        '<h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Kausalkette</h3>' +
        '<p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">--> Motivation sich damit auseinanderzusetzen<br>--> Bilder bleiben länger hängen<br>--> längere Auseinandersetzung<br>--> Mehr kommunikative Öffnung</p>' +
      '</div>',
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #2a9d8f; height:100%; box-sizing:border-box;">' +
        '<h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Validierung</h3>' +
        '<p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">- Beobachtungsbögen<br>- Kurzfragebogen<br>- Diskurs(-protokoll)</p>' +
      '</div>'
    ]
  },

  dannenmannErgebnis: {
    title: "ERGEBNIS DANNENMANN",
    text: '<p style="margin:0 0 1.2em 0;"><strong>Unmittelbare Reaktionen:</strong> Unbehagen aber persönliche Offenheit.</p>' +

          '<p style="margin:0 0 1.2em 0;"><strong>Zweiter Moment:</strong> Trotz Zweifel an Offenheit des Vorstands Bereitschaft es anzusprechen</p>' +

          '<p style="margin:0 0 1.2em 0;"><strong>Fragebögen:</strong> Nicht allen Bewusst, Interesse ist da</p>' +

          '<p style="margin:0;"><strong>Interview Vorstand:</strong> Stand kurzzeitig zur Aussicht, kam nie zustande</p>'

  },

  presseabteilung: {
    title: "ERGEBNIS PRESSEABTEILUNG",
    text: '<p style="margin:0; font-size:1.3em; line-height:1.9; color:#444;">Relativierung<br>Gute Taten nach 2. WK<br>Werte des CJD heute</p>'

  },

exampleL: {
  title: "BUSHALTESTELLE",
  layout: "slot-columns-2",
  slots: [
    '<p>Intervention 02 Raucherecke als informeller Treffpunkt</p>',
    '<img src="images/derort.jpg" alt="">'
  ]
},

bushaltestelleHebelhypothese: {
  title: "HEBELHYPOTHESE",
  text: '<p>Wenn wir einen bereits genutzten Treffpunkt neu gestalten, dann wird sichtbar, welche Bedeutung dieser Ort für alle hat.</p>'

},

exampleN: {
  title: "ANALYSE-FOKUS",
  layout: "slot-columns-3",
  slots: [
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #f4a261; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Hebel</h3><p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Einen genutzten Ort neu gestalten</p></div>',
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #e76f51; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Interventionstyp</h3><p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Irritation, Wertschätzung, Verstärkung, Interaktion</p></div>',
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #2a9d8f; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Zielgruppe</h3><p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Azubis, BvBler, Lehrende, Vorstand, Verwaltung – alle</p></div>'
  ]
},

exampleM: {
  title: "LOGIK",
  layout: "slot-columns-2",
  slots: [
    '<p>Treffpunkt Bushaltestelle sichtbar machen.<br>Symbol als Ort der Veränderung.</p>',
    '<img src="images/buha_zeichnung.png" alt="">'
  ]
},

exampleO: {
  title: "DREI STUFEN",
  layout: "slot-columns-3",
  slots: [
    '<div style="text-align:left;">' +
      '<h3 style="font-size:var(--content-heading); margin:0 0 1rem 0;">Öffnung</h3>' +
      '<img src="images/oeffnung.jpg" alt="Öffnung" style="width:100%; height:220px; object-fit:cover; border-radius:8px; margin-bottom:1.2rem; display:block;">' +
      '<p style="margin:0 0 1.2rem 0; line-height:1.5;">Treffpunkt sichtbar machen und zur Nutzung einladen.</p>' +
    '</div>',

    '<div style="text-align:left;">' +
      '<h3 style="font-size:var(--content-heading); margin:0 0 1rem 0;">Sperrung</h3>' +
      '<img src="images/schließung.jpg" alt="Schließung" style="width:100%; height:220px; object-fit:cover; border-radius:8px; margin-bottom:1.2rem; display:block;">' +
      '<p style="margin:0 0 1.2rem 0; line-height:1.5;">Bedeutung des Ortes durch vorübergehenden Entzug prüfen.</p>' +
    '</div>',

    '<div style="text-align:left;">' +
      '<h3 style="font-size:var(--content-heading); margin:0 0 1rem 0;">Aufklärung</h3>' +
      '<img src="images/aufklaerung.jpg" alt="Aufklärung" style="width:100%; height:220px; object-fit:cover; border-radius:8px; margin-bottom:1.2rem; display:block;">' +
      '<p style="margin:0 0 1.2rem 0; line-height:1.5;">Intervention erklären, Teilnahme wertschätzen und Ergebnisse teilen.</p>' +
    '</div>'
  ]
},

bushaltestelleGestaltung: {
  title: "",
  layout: "slot-columns-2",
  slots: [
    '<div>' +
      '<h2 style="margin:0 0 0.2em 0; font-size:var(--content-heading); font-weight:800;">GESTALTUNGSKONZEPT</h2>' +
      '<p style="margin:0 0 1em 0; font-size:1.1em;">Anlehnung an reale Bushaltestelle</p>' +
      '<p style="margin:0 0 1em 0;"><strong>Wiedererkennung:</strong> Unbewusste Wirkung durch bewegten Symbolort</p>' +
      '<p style="margin:0 0 1em 0;"><strong>Inhalte:</strong> Ergebnisse aufgreifen (Fokus Ziele und Wünsche)</p>' +
      '<p style="margin:0 0 1em 0;"><strong>Materialanspruch:</strong> Günstig und nachhaltig<br>Kurzzeitig nutzbar<br>Schnell reproduzierbar</p>' +
      '<p style="margin:0;"><strong>Interaktivität:</strong> Leichte Sprache<br>Mehrere Partizipationsstufen</p>' +
    '</div>',
    '<img src="images/bushaltestelle_gestaltung.jpg" alt="">'
  ]
},


stufe1Detail: {
  title: "STUFE 1: ÖFFNUNG",
  text: "<h3>ABLAUF</h3><ol><li>Aufbau</li><li>Öffnung</li><li>Interaktion</li><li>Beobachtung</li><li>Auswertung</li></ol><h3>LOGIK</h3><p>Informelle Aneignung<br>Positive Aktivierung</p>",
  images: ["images/1.jpeg","images/2.jpeg","images/3.jpeg","images/4.jpeg","images/5.jpeg","images/6.jpeg"]
},

detail4x2: {
  title: "STUFE 1: ÖFFNUNG",
  text: "<h3>ABLAUF</h3><ol><li>Aufbau</li><li>Öffnung</li><li>Interaktion</li><li>Beobachtung</li><li>Auswertung</li></ol><h3>LOGIK</h3><p>Informelle Aneignung<br>Positive Aktivierung</p>",
  images: ["images/1.jpeg","images/2.jpeg","images/3.jpeg","images/4.jpeg","images/5.jpeg","images/6.jpeg","images/7.jpeg","images/8.jpeg"]
},

  oeffnung1: {
    title: "ÖFFNUNG",
    layout: "slot-grid-3x2",
    slots: [
      '<img src="images/oeffnung2.jpeg" alt="">',
      '<img src="images/oeffnung3.jpg" alt="">',
      '<img src="images/oeffnung4.jpeg" alt="">',
      '<img src="images/oeffnung5.jpg" alt="">',
      '<img src="images/oeffnung6.jpg" alt="">',
      '<img src="images/oeffnung7.jpg" alt="">'
    ]
  },

  oeffnung2: {
    title: "ÖFFNUNG",
    layout: "slot-grid-3x2",
    slots: [
      '<img src="images/aufbau1.jpeg" alt="">',
      '<img src="images/aufbau2jpeg.jpg" alt="">',
      '<img src="images/aufbau3.jpg" alt="">',
      '<img src="images/aufbau4.jpeg" alt="">',
      '<img src="images/aufbau5.jpg" alt="">',
      '<img src="images/aufbau6.jpeg" alt="">'
    ]
  },

  oeffnung3: {
    title: "ÖFFNUNG",
    layout: "slot-grid-3x2",
    slots: [
      '<img src="images/inter1.jpg" alt="">',
      '<img src="images/inter2.jpg" alt="">',
      '<img src="images/inter3.jpg" alt="">',
      '<img src="images/inter4.jpg" alt="">',
      '<img src="images/inter5.jpg" alt="">',
      '<img src="images/inter6.jpg" alt="">'
    ]
  },

  schliessung: {
    title: "SPERRUNG",
    layout: "slot-grid-2x2",
    slots: [
      '<img src="images/schließung1.jpg" alt="">',
      '<img src="images/abgesperrt2.jpg" alt="">',
      '<img src="images/schließung.jpg" alt="">',
      '<img src="images/baustellenschild.jpg" alt="">'
    ]
  },

  aufklaerung: {
    title: "AUFKLÄRUNG",
    layout: "slot-columns-2",
    slots: [
      '<img src="images/xauklaerung.jpg" alt=""><img src="images/poster1.jpeg" alt="">',
      '<iframe src="https://chiarabrinkmann10-ux.github.io/BushaltestelleZukunft-/" frameborder="0" allowfullscreen></iframe>'
    ]
  },

  modellierungValidierung: {
    title: "",
    layout: "slot-columns-3",
    slots: [
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #f4a261; height:100%; box-sizing:border-box;">' +
        '<h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Modellierung</h3>' +
        '<p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Visuelle Codes:<br>Ziele und Stärken sichtbar machen</p>' +
      '</div>',
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #e76f51; height:100%; box-sizing:border-box;">' +
        '<h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Kausalkette</h3>' +
        '<p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">--> Zieldefinition<br>--> Orientierung<br>--> mehr Motivation</p>' +
      '</div>',
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #2a9d8f; height:100%; box-sizing:border-box;">' +
        '<h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Validierung</h3>' +
        '<p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">- Beobachtungsbögen Tag 1<br>- Beobachtungsbögen Tag 2<br>- QR-Code Tracking Woche 3</p>' +
      '</div>'
    ]
  },

  ergebnisseBushaltestelle: {
    title: "ERGEBNISSE BUSHALTESTELLE",
    layout: "slot-columns-3",
    slots: [
      '<div style="height:100%;">' +
        '<h3 style="margin:0 0 16px 0; font-size:var(--content-heading); font-weight:700; color:var(--text);">Tag 1</h3>' +
        '<p style="margin:0 0 20px 0; font-size:var(--content-text); color:var(--text);">Keine negativen Reaktionen</p>' +
        '<hr style="border:none; border-top:2px solid var(--hero-orange); width:160px; margin:0 0 20px 0;">' +
        '<p style="margin:0 0 12px 0; font-size:var(--content-text); color:var(--text); line-height:1.5;">Keine Berührungsängste. Besonders Frauen fangen an.</p>' +
        '<p style="margin:0 0 12px 0; font-size:var(--content-text); color:var(--text); line-height:1.5;">Social Proof Effect, spielerische Manipulation</p>' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--text); line-height:1.5;">Entwendete Stifte</p>' +
        '<hr style="border:none; border-top:2px solid var(--hero-orange); width:160px; margin:24px 0 20px 0;">' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--text); line-height:1.5;">Mehr physische Robustheit für vandalismussicheren Aufbau</p>' +
      '</div>',
      '<div style="height:100%;">' +
        '<h3 style="margin:0 0 16px 0; font-size:var(--content-heading); font-weight:700; color:var(--text);">Tag 2</h3>' +
        '<p style="margin:0 0 20px 0; font-size:var(--content-text); color:var(--text);">Keine positiven Reaktionen</p>' +
        '<hr style="border:none; border-top:2px solid var(--hero-pink); width:160px; margin:0 0 20px 0;">' +
        '<p style="margin:0 0 12px 0; font-size:var(--content-text); color:var(--text); line-height:1.5;">Frustration<br>Verwirrung</p>' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--text); line-height:1.5;">Gerüchte<br>Spekulationen</p>' +
        '<hr style="border:none; border-top:2px solid var(--hero-pink); width:160px; margin:24px 0 20px 0;">' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--text); line-height:1.5;">Gezielter Entzug zeigt: Der Ort hat große soziale Bedeutung als Schutzraum.</p>' +
      '</div>',
      '<div style="height:100%;">' +
        '<h3 style="margin:0 0 16px 0; font-size:var(--content-heading); font-weight:700; color:var(--text);">Tag 3</h3>' +
        '<p style="margin:0 0 20px 0; font-size:var(--content-text); color:var(--text); line-height:1.5;">14 Zugriffe Webseite<br>0 E-Mails</p>' +
        '<hr style="border:none; border-top:2px solid var(--hero-darkblue); width:160px; margin:0 0 20px 0;">' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--text); line-height:1.5;">Keinerlei Beschädigungen</p>' +
        '<hr style="border:none; border-top:2px solid var(--hero-darkblue); width:160px; margin:24px 0 20px 0;">' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--text); line-height:1.5;">E-Mails als Rückmeldung zeigen höhere Barriere in digitalen Kanälen</p>' +
      '</div>'
    ]
  },

  // ═══════════════════════════════════════════════════════════
  //  INTERVENTION 03 – ROLLENTAUSCH
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
      '<img src="images/rollentausch_tisch_02.jpg" alt="">'
    ]
  },

  rollentauschHebelhypothese: {
    title: "HEBELHYPOTHESE",
    text: '<p>Wenn BVBler und Azubis für einen kurzen Wissensmoment Verantwortung übernehmen, dann verändert das die Hierarchien. Es zeigt, was ihnen zugetraut werden kann.</p>'

  },

  rollentauschHebel: {
    title: "",
    layout: "slot-columns-3",
    slots: [
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #f4a261; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Hebel</h3><p style="margin:0 0 1em 0; color:#444; line-height:1.5; font-size:0.95em;">In einem sicheren Rahmen Verantwortung übernehmen</p><p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Umkehren wer die Expert:innen sind</p></div>',
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #e76f51; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Interventionstyp</h3><p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Support<br>Positive Verstärkung</p></div>',
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #2a9d8f; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Zielgruppe</h3><p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Azubis<br>BVBler<br>Mitarbeitende</p></div>'
    ]
  },

  rollentauschLogik: {
    title: "",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<h2 style="margin:0 0 1em 0; font-size:var(--content-heading); font-weight:800;">Logik</h2>' +
        '<p style="margin:0; line-height:2; font-size:var(--content-text);">Mehr Zutrauen<br>Verantwortung übergeben<br>KI-Expertise bei Azubis/BVBler<br>Mitarbeitende lassen sich leiten<br>Neue Erfahrungen<br>Auswertung</p>' +
      '</div>',
      '<img src="images/rollentausch karten.png" alt="">'
    ]
  },

  rollentauschGestaltung: {
    title: "",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<h2 style="margin:0 0 0.2em 0; font-size:var(--content-heading); font-weight:800;">GESTALTUNGSKONZEPT</h2>' +
        '<p style="margin:0 0 1em 0; font-size:1.1em;">Inhalt erarbeiten und selbständig vermitteln</p>' +
        '<p style="margin:0 0 1em 0;"><strong>Grundhaltung:</strong> Freiheit<br>Selbstbestimmung<br>Sicherer Rahmen</p>' +
        '<p style="margin:0 0 1em 0;"><strong>Arbeitsmaterialien:</strong> Als Baukasten nach Bedarf</p>' +
        '<p style="margin:0 0 1em 0;"><strong>Support:</strong> Wenn nötig oder gewünscht</p>' +
        '<p style="margin:0;"><strong>Inklusion:</strong> Leichte Sprache</p>' +
      '</div>',
      '<img src="images/rollentausch_gestaltung.jpg" alt="">'
    ]
  },

  rollentauschAblauf1: {
    title: "ABLAUF",
    layout: "slot-columns-3",
    slots: [
      '<img src="images/ablauf1.jpeg" alt="">',
      '<img src="images/ablauf2.jpeg" alt="">',
      '<img src="images/ablauf3.jpeg" alt="">'
    ]
  },

  rollentauschAblauf2: {
    title: "ABLAUF",
    layout: "slot-grid-3x2",
    slots: [
      '<img src="images/rollentausch_agenda.jpg" alt="">',
      '<img src="images/faktensheet_ki.jpg" alt="">',
      '<img src="images/rollentausch_bildchen.jpg" alt="">',
      '<img src="images/rollenkarte1.jpg" alt="">',
      '<img src="images/rollentausch_tisch_01.jpg" alt="">',
      '<img src="images/kreise.jpeg" alt="">'
    ]
  },

  rollentauschAblauf3: {
    title: "ABLAUF",
    layout: "slot-columns-2",
    slots: [
      '<img src="images/rollentausch_plakat.jpg" alt="">',
      '<img src="images/kahoot.jpg" alt="">'
    ]
  },

  rollentauschAblauf4: {
    title: "ABLAUF",
    layout: "slot-columns-3",
    slots: [
      '<img src="images/rollentausch_ablauf4_1.jpeg" alt="">',
      '<img src="images/rollentausch_ablauf4_2.jpeg" alt="">',
      '<img src="images/rollentausch_ablauf4_3.jpeg" alt="">'
    ]
  },

  rollentauschModellierungValidierung: {
    title: "",
    layout: "slot-columns-3",
    slots: [
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #f4a261; height:100%; box-sizing:border-box;">' +
        '<h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Modellierung</h3>' +
        '<p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Kommunikationscodes:<br>Art des Lehrens</p>' +
      '</div>',
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #e76f51; height:100%; box-sizing:border-box;">' +
        '<h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Kausalkette</h3>' +
        '<p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">--> Mehr Eigenverantwortung<br>--> Selbstvertrauen<br>--> Mehr Motivation</p>' +
      '</div>',
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #2a9d8f; height:100%; box-sizing:border-box;">' +
        '<h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Validierung</h3>' +
        '<p style="margin:0 0 24px 0; color:#444; line-height:1.5; font-size:0.95em;">- Feedbackbögen CJD Teilnehmer (Vortragende)<br>- Feedbackbögen CJD Mitarbeiter (Zuhörer)</p>' +
        '<p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">- Beobachtungen während des Workshops<br>- Feedbackrunde am Ende</p>' +
      '</div>'
    ]
  },

  rollentauschErgebnisMessung: {
    title: "",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<p style="margin:0 0 1.2em 0; line-height:1.5;"><strong>Zutrauen:</strong> Mitarbeitende trauen Teilnehmenden mehr zu, als diese sich selbst.</p>' +
        '<p style="margin:0 0 1.2em 0; line-height:1.5;"><strong>Neues Wissen:</strong> Lernen findet auf beiden Seiten statt. Bei den Teilnehmenden als Expert:innen sogar etwas stärker.</p>' +
        '<p style="margin:0; line-height:1.5;"><strong>Hierarchien:</strong> Mitarbeitende sind skeptisch. Teilnehmende wünschen sich mehr als Experten auftreten zu können.</p>' +
      '</div>',
      '<img src="images/rollentausch_ergebnis_chart.jpg" alt="">'
    ]
  },

  rollentauschErgebnis: {
    title: "Ergebnis Rollentausch",
    text: '<p style="margin:0 0 1.2em 0;"><strong>Gruppendynamik</strong><br>Respekt und Rücksichtnahme. Persönliche Stärken fließen ein.</p>' +

          '<p style="margin:0 0 1.2em 0;"><strong>Organisation</strong><br>Selbstständig und selbstbestimmt.</p>' +

          '<p style="margin:0 0 1.2em 0;"><strong>Wissen</strong><br>Vielseitig und spannend.</p>' +

          '<p style="margin:0 0 1.2em 0;"><strong>Umsetzung</strong><br>Schnell und kreativ.</p>' +

          '<p style="margin:0;"><strong>Thema</strong><br>Gefahren von KI beschäftigen alle.</p>'

  },

  // ═══════════════════════════════════════════════════════════
  //  INTERVENTION 04 – WERKSTÜCKE
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
      '<img src="images/werstueck4.jpg" alt="">'
    ]
  },

  werkstueckeHebelhypothese: {
    title: "HEBELHYPOTHESE",
    text: '<p>Wenn Auszubildende ihre Fähigkeiten auf einer Plattform zeigen können, dann steigt Motivation, Selbstvertrauen und Zusammenhalt. Weil ihr Können sichtbar und greifbar wird.</p>'

  },

  werkstueckeHebel: {
    title: "",
    layout: "slot-columns-3",
    slots: [
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #f4a261; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Hebel</h3><p style="margin:0; color:#444; line-height:1.6; font-size:0.95em;">Fähigkeiten nutzen und zeigen<br><br>Selbstbewusstsein steigern<br><br>Zusammenhalt stärken</p></div>',
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #e76f51; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Interventionstyp</h3><p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Support<br>Positive Verstärkung</p></div>',
      '<div style="background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.06); border-left:5px solid #2a9d8f; height:100%; box-sizing:border-box;"><h3 style="margin:0 0 12px 0; font-size:1.1em; font-weight:700; color:#111;">Zielgruppe</h3><p style="margin:0; color:#444; line-height:1.5; font-size:0.95em;">Azubis</p></div>'
    ]
  },

  werkstueckeModellierungValidierung: {
    title: "",
    layout: "slot-columns-2",
    slots: [
      '<div style="height:100%;">' +
        '<h3 style="margin:0 0 24px 0; font-size:var(--content-heading); font-weight:700; color:var(--text);">Modellierung:</h3>' +
        '<p style="margin:0 0 24px 0; font-size:var(--content-text); color:var(--text); line-height:1.6;">Visuelle Codes:<br>Stärken sichtbar machen</p>' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--text); line-height:1.6;">--> Vertrauen ins eigene Können<br>--> Weniger Angst<br>--> Mehr Motivation</p>' +
      '</div>',
      '<div style="height:100%;">' +
        '<h3 style="margin:0 0 24px 0; font-size:var(--content-heading); font-weight:700; color:var(--muted);">Validierung:</h3>' +
        '<p style="margin:0; font-size:var(--content-text); color:var(--muted); line-height:1.6;">- Feedbackbögen Projekterschaffer<br>- Feedbackbögen andere CJD Teilnehmer<br>- Feedbackbögen CJD Mitarbeiter</p>' +
      '</div>'
    ]
  },

  werkstueckeErgebnis: {
    title: "ERGEBNIS WERKSTÜCK",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<p style="margin:0 0 1.2em 0; line-height:1.5;"><strong>Kommunikation:</strong> Gestrandet</p>' +
        '<p style="margin:0 0 1.2em 0; line-height:1.5;"><strong>Ausstellung:</strong> Alter Stand</p>' +
        '<p style="margin:0; line-height:1.5;"><strong>Erkenntnis:</strong> Austausch zwischen den Bereichen wirkt stockend</p>' +
      '</div>',
      '<img src="images/werkstuecke_schild.jpg" alt="">'
    ]
  },

  // ═══════════════════════════════════════════════════════════
  //  TEAM & LEARNINGS & PRÄSENZ
  // ═══════════════════════════════════════════════════════════

  teamprozessUebersicht: {
    title: "TEAMPROZESS",
    html:
      '<div style="position:relative; width:100%; height:640px;">' +
        '<img src="images/gruppe.jpg" alt="Gruppenfoto" style="position:absolute; left:31%; top:24%; width:31%; border-radius:2px; box-shadow:0 2px 10px rgba(0,0,0,0.15);">' +

        '<div style="position:absolute; left:15%; top:29%; font-weight:700; font-size:1.4em; color:var(--hero-orange);">Rosa</div>' +
        '<div style="position:absolute; left:9%; top:50%; font-weight:700; font-size:1.4em; color:var(--hero-darkblue);">Sarah</div>' +
        '<div style="position:absolute; left:22%; top:65%; font-weight:700; font-size:1.4em; color:var(--hero-pink);">Dirk</div>' +
        '<div style="position:absolute; left:6%; top:78%; font-weight:700; font-size:1.4em; color:var(--hero-lightblue);">BVBler</div>' +

        '<div style="position:absolute; left:66%; top:16%; font-weight:700; font-size:1.4em; color:var(--hero-darkblue);">Tony</div>' +
        '<div style="position:absolute; left:78%; top:33%; font-weight:700; font-size:1.4em; color:var(--hero-orange);">Chiara</div>' +
        '<div style="position:absolute; left:69%; top:56%; font-weight:700; font-size:1.4em; color:var(--hero-pink);">Azubis</div>' +
        '<div style="position:absolute; left:84%; top:66%; font-weight:700; font-size:1.4em; color:var(--hero-darkblue);">Denise</div>' +
        '<div style="position:absolute; left:66%; top:86%; font-weight:700; font-size:1.4em; color:var(--hero-lightblue);">Rebecca</div>' +
      '</div>'
  },

  learningsUebersicht: {
    title: "LEARNINGS",
    html:
      '<div style="display:flex; flex-direction:column; margin-top:20px;">' +
        '<p style="margin:0 0 30px 0; font-size:1.3em; color:#111;">Rollenfindung in neuer Teamdynamik</p>' +
        '<p style="margin:0 0 30px 0; font-size:1.3em; color:#111;">Gegenseitige Unterstützung</p>' +
        '<p style="margin:0 0 30px 0; font-size:1.3em; color:#111;">Gemeinsames Lernen</p>' +
        '<p style="margin:0 0 30px 0; font-size:1.3em; color:#111;">Feedback einordnen</p>' +
        '<p style="margin:0 0 30px 0; font-size:1.3em; color:#111;">Konflikte lösen</p>' +
        '<p style="margin:0 0 30px 0; font-size:1.3em; color:#111;">Persönlichkeitstypen kennenlernen</p>' +
        '<p style="margin:0; font-size:1.3em; color:#111;">Beziehungen pflegen</p>' +
      '</div>'
  },

  praesenzZeigenUebersicht: {
    title: "PRÄSENZ ZEIGEN",
    html:
      '<div>' +
        '<p style="margin:0 0 0.3em 0; font-weight:700; font-size:1.3em; color:#111;">Transformation braucht</p>' +
        '<p style="margin:0 0 50px 0; font-size:1.3em; line-height:1.6; color:#111;">Vertrauen und Beziehungen<br>Alltag und Begegnung<br>Augenhöhe und Austausch</p>' +
        '<img src="images/zeitstrahl.png" alt="Präsenz zeigen" style="width:100%; max-height:340px; object-fit:cover; border-radius:16px; box-shadow:0 4px 24px rgba(0,0,0,0.18); display:block; margin-top:10px;">' +
      '</div>'
  },

  // ═══════════════════════════════════════════════════════════
  //  GOLDNUGGETS
  // ═══════════════════════════════════════════════════════════

  goldnugget1: {
    title: "GOLDNUGGET 1",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<p style="margin:0; line-height:1.5;"><strong>Entzug als Werkzeug:</strong> Etwas wegzunehmen kann mehr offenbaren, als etwas anzubieten.</p>' +
      '</div>',
      '<img src="images/buha_nugget.jpg" alt="">'
    ]
  },

  goldnugget2: {
    title: "GOLDNUGGET 2",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<p style="margin:0; line-height:1.5;"><strong>Wissen ist Grundlage:</strong> Nur bekannte Bedürfnisse können berücksichtigt werden. Gesammelte Anliegen vorbringen ist zielführender.</p>' +
      '</div>',
      '<img src="images/sofaecke.jpg" alt="">'
    ]
  },

  goldnugget3: {
    title: "GOLDNUGGET 3",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<p style="margin:0; line-height:1.5;"><strong>Widerstand als Einstieg:</strong> Sichtbare Abwehr zeigt, wo Machtstrukturen sitzen.</p>' +
      '</div>',
      '<img src="images/dannenmann_nugget.JPG" alt="">'
    ]
  },

  goldnugget4: {
    title: "GOLDNUGGET 4",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<p style="margin:0; line-height:1.5;"><strong>Verantwortung übergeben:</strong> Zutrauen und Veränderung entstehen durch konkrete Situationen.</p>' +
      '</div>',
      '<img src="images/rollentausch_tisch_03.jpg" alt="">'
    ]
  },

  goldnugget5: {
    title: "GOLDNUGGET 5",
    layout: "slot-columns-2",
    slots: [
      '<div>' +
        '<p style="margin:0 0 0.3em 0; line-height:1.5;"><strong>Hürden prüfen:</strong></p>' +
        '<p style="margin:0; line-height:1.5;">Räume wirken oft wie das Problem. Aber der Ursprung sitzt tiefer.</p>' +
      '</div>',
      '<img src="images/sperrmuell_nugget.jpg" alt="">'
    ]
  },

  // ═══════════════════════════════════════════════════════════
  //  SLOT-BEISPIELE a–j (generische Bild-Raster)
  // ═══════════════════════════════════════════════════════════

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

  exampleC: {
    title: "Beispiel c",
    layout: "slot-columns-2",
    slots: [
      '<img src="images/1.jpeg" alt="">',
      '<img src="images/2.jpeg" alt="">'
    ]
  },

  exampleD: {
    title: "Beispiel d",
    layout: "slot-columns-3",
    slots: [
      '<img src="images/3.jpeg" alt="">',
      '<img src="images/4.jpeg" alt="">',
      '<img src="images/5.jpeg" alt="">'
    ]
  },

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

  exampleF: {
    title: "Beispiel f",
    layout: "slot-grid-3x2",
    slots: [
      '<img src="images/2.jpeg" alt="">',
      '<img src="images/1.jpeg" alt="">',
      '<img src="images/2.jpeg" alt="">'
    ]
  },

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

  exampleH: {
    title: "Beispiel h",
    layout: "slot-columns-3",
    slots: [
      '',
      '',
      '<img src="images/5.jpeg" alt="">'
    ]
  },

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

  exampleJ: {
    title: "Beispiel j",
    layout: "slot-columns-2",
    slots: [
      '<p>Hier steht ein Beispieltext in leichter Sprache.</p>',
      '<img src="images/8.jpeg" alt="">'
    ]
  },

  exampleK: {
    title: "INTERVIEW",
    layout: "slot-columns-2",
    slots: [
      '<img src="images/interview.jpeg" alt="Interview">',
      '<iframe src="https://t0dysseus.github.io/interviews/" frameborder="0" allowfullscreen></iframe>'
    ]
  },

dannenmann1: {
    title: "Dannenmann",
    content: "<p>Der Gründer Arnold Dannenmann hatte eine NS-Vergangenheit.</p><p>Wir machen das sichtbar.</p><p>So entsteht ein Gespräch über die Geschichte.</p>",
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
},

  intervention1: {
    number: 1,
    title: "Intervention 1",
    categories: [],
    status: "",
    hypothesis: "Wenn wir Räume öffnen, dann können alle teilhaben.",
    design: {
      concept: "Räume so gestalten, dass alle sich willkommen fühlen.",
      steps: [
        "Raum analysieren.",
        "Barrieren finden.",
        "Lösungen entwickeln."
      ]
    },
    results: {
      modeling: "Das Modell zeigt: Kleine Veränderungen haben große Wirkung.",
      measurement: "Wir messen: Wie oft wird der Raum genutzt?",
      realEffect: "Der Raum wird lebendiger und offener."
    }
  },

  intervention2: {
    number: 2,
    title: "Intervention 2",
    categories: [],
    status: "",
    hypothesis: "Wenn alle sich einbringen können, wird das Team stärker.",
    design: {
      concept: "Partizipation ermöglichen.",
      steps: [
        "Menschen einladen.",
        "Ideen sammeln.",
        "Gemeinsam umsetzen."
      ]
    },
    results: {
      modeling: "Das Modell zeigt: Beteiligung steigt.",
      measurement: "Wir fragen: Fühlt ihr euch gehört?",
      realEffect: "Mehr Menschen bringen sich ein."
    }
  },

  intervention3: {
    number: 3,
    title: "Intervention 3",
    categories: [],
    status: "",
    hypothesis: "Wenn wir sichtbar machen, was möglich ist, wächst Mut.",
    design: {
      concept: "Stärken zeigen.",
      steps: [
        "Potenziale erkennen.",
        "Sichtbar machen.",
        "Feiern und teilen."
      ]
    },
    results: {
      modeling: "Das Modell zeigt: Sichtbare Stärken motivieren.",
      measurement: "Wir beobachten: Wer traut sich mehr zu?",
      realEffect: "Mehr Selbstvertrauen im Alltag."
    }
  },

  goldNuggets: {
    title: "Goldnuggets",
    items: [
      { title: "", text: "Kleine Veränderungen können große Wirkung haben." },
      { title: "", text: "Partizipation braucht Einladung und Sicherheit." },
      { title: "", text: "Sichtbare Stärken motivieren alle." },
      { title: "", text: "Zuhören ist der erste Schritt zur Veränderung." }
    ]
  },

  teamProcess: {
    title: "Teamprozess",
    phases: [
      { phase: "", activities: ["Kennenlernen und Vertrauen aufbauen."] },
      { phase: "", activities: ["Gemeinsam Ideen entwickeln."] },
      { phase: "", activities: ["Konflikte lösen und lernen."] },
      { phase: "", activities: ["Ergebnisse feiern und teilen."] }
    ]
  },

  conclusion: {
    title: "Schlussformulierung",
    mainStatement: "Räume für jeden sind möglich.",
    keyLearnings: [
      "Inklusion braucht aktive Gestaltung.",
      "Partizipation stärkt alle.",
      "Kleine Schritte führen zum Ziel."
    ]
  },

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

  video: {
    title: "Video",
    src: "videos/test.mp4",
    description: "Beschreibung des Videos.",
    poster: ""
  },

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

  outlook: {
    title: "Ausblick",
    nextSteps: [
      "Räume weiter öffnen.",
      "Mehr Menschen einladen.",
      "Erfolge sichtbar machen."
    ],
    thanks: "Danke für eure Aufmerksamkeit.",
    contact: "Team Raum – SS2026 – BHT"
  }

};


// ═══════════════════════════════════════════════════════════════
//  ENDE DER DATEN – Ab hier nichts ändern!
// ═══════════════════════════════════════════════════════════════
