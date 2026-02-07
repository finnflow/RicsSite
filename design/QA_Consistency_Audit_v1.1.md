# QA Consistency Audit v1.1

Basis: v1.1-Wireframes (Startseite, Angebot, Ablauf, Kontakt, Basic/Infos, Kundenbereich) + `design/01_Informationsarchitektur.md`. Nur Diagnose, keine Änderungen.

---

## 1) Terminologie-Matrix

- **Erstgespräch / Passungscheck:** Startseite `02.1...v1.1` („kostenloses Erstgespräch (Passungscheck)“), Angebot `02.2...v1.1` („Passungscheck im Erstgespräch“), Ablauf `02.3...v1.1` („Kostenloses Erstgespräch (Passungscheck)“), Kontakt `02.4...v1.1` („kostenloses Erstgespräch als Passungscheck“), IA `01_Informationsarchitektur.md` („kostenloses Erstgespräch (Passungscheck)“). **Inkonstanz:** mal „kostenloses Erstgespräch (Passungscheck)“, mal nur „Passungscheck“ oder „Erstgespräch“ ohne Zusatz.
- **Gate / kein Direktbuchung:** Startseite („Gate statt Direktbuchung“ implizit), Angebot („Gate-Prinzip: Erst Kontakt → Erstgespräch…“), Ablauf („kein Kalender/Direktbuchung“), Kontakt („kein Kalender, keine Direktbuchung“). Terminologie konsistent.
- **Self-Service-Produkt:** Bezeichnungen variieren: Startseite („Basic/Infos“), Angebot („Basic/Infos“), Basic-Seite („Basic / Infos (Info-only)“), IA („Basic / Nur-Infos“). **Inkonstanz:** „Basic/Infos“ vs „Basic / Nur-Infos“ vs „Info-only“.
- **Abgrenzung Therapie/Notfall:** Alle erwähnen „keine Therapie“; Notfall/akute Krise explizit nur Kontakt und Basic; Ablauf listet schwere Traumata/Depressionen; Startseite nennt „Therapie erwartet, schwere Traumata/Depressionen“.
- **Materialzugriff:** Kundenbereich „Startlink“, „Direktzugriffe“, „Materialien“; Basic verweist auf „Kundenbereich“; IA nutzt „Kundenbereich (geschützt)“. Konsistent.
- **Datenschutz/Legal:** Alle Seiten verweisen auf Footer „Datenschutz/Impressum“; Ablauf nennt „Footer-Verweis“; Terminologie konsistent.

---

## 2) CTA (call to action)- / Entscheidungslogik

- **Startseite:** Primäre Entscheidung: „Kontakt oder Selbststart?“ (Gate-CTA (call to action) klar, keine konkurrierende CTA (call to action)).
- **Angebot & Methoden:** Primäre Entscheidung: „Passungscheck (Kontakt) oder Info-only (Basic)?“ (neutral; keine Doppel-CTA (call to action)).
- **Ablauf & Erstgespräch:** Primäre Entscheidung: „Kontakt senden oder stoppen?“; Optionen A/B/C nach Gespräch – keine Direktbuchung.
- **Kontakt:** Primäre Entscheidung: „Nachricht senden?“; keine Parallel-CTA (call to action).
- **Basic / Infos:** Primäre Entscheidung: „Selbststart oder doch Kontakt/Erstgespräch?“; keine Preise/Checkout-CTA (call to action).
- **Kundenbereich:** Primäre Entscheidung: „Startpunkt/Nächstes Material finden?“; Support als Sekundär.
- **Gate-Prinzip / Konkurrenz:** Kein Widerspruch gefunden; Selfstart bleibt Info-only, Begleitung nur nach Passungscheck.

---

## 3) Abgrenzung & Sicherheits-/Ausschlusskriterien

- **Keine Therapie / keine Heilsversprechen:** Startseite („ohne Therapieerwartung“, „keine Heilsversprechen“), Angebot („keine Therapie“), Ablauf („keine Therapie/medizinische Behandlung“, „keine Heilversprechen“), Kontakt („Keine Therapie/Heilversprechen“), Basic („Keine Therapie, keine 1:1-Begleitung“), IA (Abgrenzung mehrfach).
- **Nicht geeignet (Beispiele):** Startseite („Therapie erwartet, schwere Traumata/Depressionen, Kinder, schnelle Wunder“), Angebot („Therapieerwartung, schwere Traumata/Depressionen, Kinder“), Ablauf („schwere Traumata, schwere Depressionen, Kinder, schnelle Wunder“), Kontakt (gleich), Basic („schwere Krisen/Notfälle, Kinder, Therapieerwartung“). **Abweichung:** Startseite/Angebot/Ablauf nennen „schnelle Wunder“, Kontakt nicht; Basic hat „Notfälle“, Startseite nicht.
- **Notfall-/Akut-Hinweis:** Kontakt (Notfall ausgeschlossen), Basic (keine Notfall-/Akuthilfe), Ablauf (implizit: „schwere Traumata/Depressionen“), Startseite/Angebot ohne Notfall-Hinweis. **Inkonstanz:** Notfall-Hinweis nicht überall gleich stark.

---

## 4) Verweislogik

- Startseite verweist auf Angebot (v1.1), Ablauf (v1.1), Basic (v1.1), aber noch auf Prozess-Details mit „v1.1“ korrekt. OK.
- Angebot verweist auf Startseite (Gate), Ablauf v1.1, Basic v1.1. OK.
- Ablauf verweist auf Startseite, Kontakt v1.1, Basic v1.1. OK.
- Kontakt verweist auf Ablauf v1.1, Startseite. OK.
- Basic verweist auf Ablauf v1.1, Kundenbereich v1.1. OK.
- Kundenbereich verweist auf Kontakt v1.1, Basic v1.1 in Referenzen. OK.
- **Zyklisch/unnötig:** Keine harten Zyklen; Verweise sind Hubs, aber Notfall/Eignung-Verweise gelegentlich doppelt (Startseite ↔ Kontakt ↔ Ablauf), tolerierbar.

---

## 5) Redundanz-Heatmap

- **Abgrenzung „keine Therapie / nicht geeignet (Traumata/Depressionen/Kinder)“** erscheint auf Startseite, Angebot, Ablauf, Kontakt, Basic – fünfmal. Potenzial: Verweise statt Wiederholung auf Startseite/Ablauf als Master.
- **Passungscheck/Erstgespräch-Beschreibung** in Startseite (Kurz), Ablauf (Detail), Kontakt (Kurz), Angebot (Kurz). OK wenn kurze Versionen bleiben; ggf. nur auf Ablauf verweisen.
- **Datenschutz/Vertraulichkeit** kurz auf Startseite, Angebot, Ablauf, Kontakt, Basic, Kundenbereich. Redundanz OK als Anker, aber Footer-Verweis wiederholt.
- **Optionen nach Gespräch (A/B/C)** in Ablauf; Startseite/Angebot/Basic ebenfalls nennen „Kontakt vs Selbststart“. Redundanz akzeptabel, könnte mit Verweis auf Ablauf reduziert.

---

## 6) Top 10 Fixes (konkret, priorisiert)

1) **Terminologie vereinheitlichen:** Nutze durchgängig „kostenloses Erstgespräch (Passungscheck)“ beim ersten Auftreten jeder Seite. (Startseite, Angebot, Ablauf, Kontakt, IA)
2) **Basic/Produkt-Bezeichnung:** Einheitlich „Basic/Infos (Info-only, Selbststart)“ statt Wechsel mit „Basic / Nur-Infos“. (Startseite, Angebot, IA)
3) **Notfall-Hinweis konsistent:** Ergänze kurzen „keine Notfall-/Akuthilfe“-Hinweis auf Startseite/Angebot/Ablauf oder streiche aus Basic/Kontakt – eine Linie wählen. (Startseite, Angebot, Ablauf, Basic, Kontakt)
4) **„Schnelle Wunder“ Formulierung:** Angleichen; entweder überall nutzen oder überall weglassen. (Startseite, Angebot, Ablauf)
5) **Referenz auf Basic-Datei:** IA verweist noch auf `02.6_Wireframes_Basic_Infos_textuell_v1.md` (ohne .1) – anpassen auf v1.1. (design/01_Informationsarchitektur.md)
6) **Verweis-Klarheit:** In Ablauf Abschnitt 2 den Verweis auf Kontakt-Seite als „Kontakt senden (siehe Kontakt-Seite)“ klar kennzeichnen. (design/02.3_Wireframes_Ablauf_Erstgespraech_textuell_v1.1.md)
7) **Datenschutz-Formulierung angleichen:** „Footer: Datenschutz/Impressum“ identisch schreiben; aktuell Varianten („Footer-Verweise“, „Footer: Datenschutz/Impressum“). (Startseite, Angebot, Ablauf, Kontakt, Basic, Kundenbereich)
8) **Einstiegswege-Benennung:** Einheitlich „Weg A: Kontakt/Passungscheck“ und „Weg B: Basic/Infos (Info-only Selbststart)“. (Startseite, Angebot, Basic)
9) **Kundenbereich-Referenz im Basic-Ablauf:** Verweis auf `design/02.5_Wireframes_Kundenbereich_textuell_v1.1.md` als Master-Orientierung (derzeit v1.1 referenziert, aber explizit „für Struktur/Startpunkte“ textlich vereinheitlichen). (design/02.6_Wireframes_Basic_Infos_textuell_v1.1.md)
10) **Abgrenzung-Sammlung:** Erwäge eine einheitliche Bullet-Liste („nicht geeignet“: Therapieerwartung, schwere Traumata/Depressionen, Kinder, Notfälle, schnelle Wunder) als Referenz auf Startseite oder Ablauf und auf anderen Seiten verlinken. (Mehrere Dateien)

---

## Widersprüche (behoben werden sollen)

- Begriffe „Erstgespräch“, „Passungscheck“, „kostenloses Erstgespräch“ uneinheitlich geführt.
- Produktname „Basic/Infos“ vs „Basic / Nur-Infos“ vs „Info-only“ uneinheitlich.
- Notfall-/Akut-Abgrenzung nur auf einigen Seiten genannt; Schärfegrade variieren.
- „Schnelle Wunder“-Abgrenzung nicht durchgängig.
- IA verweist noch auf Basic v1 statt v1.1.
