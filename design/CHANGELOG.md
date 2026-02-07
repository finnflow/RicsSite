# 📋 CHANGELOG – Wireframes & Design

**Format:** Datum | Änderung | Komponente | Begründung

---

## 2026-01-29 – Konsistenzrunde v1.1

### ✅ Änderungen

| Datum | Änderung | Komponente | Begründung |
|-------|----------|-----------|-----------|
| 29.01 | Terminologie vereinheitlicht („Passungscheck“, Gate, Info-only) | Startseite v1.1, Angebot v1.1, Ablauf v1.1, Kontakt v1.1, Basic v1.1, Kundenbereich v1.1 | Konsistente Wortwahl für Prozess/Abgrenzung |
| 29.01 | Verweise auf v1.1-Dateien aktualisiert | Alle v1.1 Wireframes | Redundanzreduktion, saubere Navigation |
| 29.01 | Je Seite eine Primärentscheidung ergänzt | Alle v1.1 Wireframes | Klarer CTA (call to action)/Decision-Fokus pro Seite |
| 29.01 | Datenschutz/Legal-Anker vereinheitlicht (Footer-Verweise, keine Rechtstexte) | Startseite v1.1, Angebot v1.1, Ablauf v1.1, Kontakt v1.1, Basic v1.1, Kundenbereich v1.1 | Konsistente Vertrauensanker ohne Overload |

## 2026-01-29 – Wireframes Strukturierung & Professionalisierung

### ✅ Änderungen

| Datum | Änderung | Komponente | Begründung |
|-------|----------|-----------|-----------|
| 29.01 | Alle Wireframes doppelt versioniert (v0 + v1) | Startseite, Angebot, Ablauf, Kontakt | Versionskontrolle: v0 = grobe Urversion, v1 = formatiert mit Emojis |
| 29.01 | Emoji-basierte Struktur durchgängig | Alle Wireframe v1s | Bessere Scannbarkeit & visuelle Hierarchie (UX-Best-Practice) |
| 29.01 | Index-Datei angelegt | 02_Wireframes_Index.md | Professionelle Dokumentation, schneller Überblick über alle Seiten |
| 29.01 | CHANGELOG angelegt | CHANGELOG.md | Transparente Änderungshistorie, Nachvollziehbarkeit |
| 29.01 | Kundenbereich Konzept (v0) gestartet | 05_Wireframes_Kundenbereich_textuell_v0.md | Szenario 4 & 5 adressieren (Nach-Kauf-Erlebnis) |

### 📝 Details

**Versionierung Startseite, Angebot, Ablauf, Kontakt:**
- v0 = Grobe Ursprungsstruktur (3-5 Zeilen pro Abschnitt, Bulletpoints)
- v1 = Neu formatiert mit Emojis, Struktur, Persona-Referenzen, Entscheidungs-Blockquotes
- Aktuell / Original = beste verfügbare Version (meist v1-Standard)

**Begründung:** Ermöglicht schnelle Iteration ohne alte Versionen zu löschen. Nützlich für Feedback-Schleifen ("Revert zu v0 und neu überdenken?") oder Design-Entscheidungs-Dokumentation.

**Emoji-Struktur für v1:**
- 1️⃣–9️⃣ für Abschnittsnummern (statt 1) Einstieg, 2) Ablauf, etc.)
- 🎯 für Ziel
- 📋 für Abschnittsfolge
- 👤 für Persona/Szenario-Referenzen
- 📊 für Zusammenfassung-Tabellen
- ✅, 🔄, 📋 für Status-Indikatoren

**Begründung:** Makrotypografische Differenzierung verbessert visuelle Erfassbarkeit bei längeren Dokumenten (~10+ Abschnitte). Besonders hilfreich für Stakeholder-Reviews im Web.

---

## 2026-01-28 – Initiale Wireframe-Erstellung

| Datum | Änderung | Komponente | Begründung |
|-------|----------|-----------|-----------|
| 28.01 | Kontakt-Seite formatiert | 04_Wireframes_Kontakt_textuell.md | Letzte Seite der Hauptkundenreise |
| 28.01 | Ablauf/Erstgespräch Wireframe erstellt | 02.3_Wireframes_Ablauf_Erstgespraech_textuell.md | Kritischer Knoten: Gate-Prinzip & Transparenz |
| 28.01 | Angebot/Methoden Wireframe erstellt | 02.2_Wireframes_Angebot_Methoden_textuell.md | Methodenüberblick für Info-Phase |
| 28.01 | Startseite Wireframe erstellt | 02.1_Wireframes_Startseite_textuell.md | Einstiegspunkt, „Bin ich richtig?" |

**Begründung für Reihenfolge:**
1. Startseite = Entry Point (Trust-Building, Eignung klären)
2. Angebot/Methoden = Info-Phase (Methodenüberblick vor Kontakt)
3. Ablauf/Erstgespräch = Prozess-Klarheit (Gate-Prinzip, Angstreduktion)
4. Kontakt = Aktions-Phase (Minimalistischer Erstkontakt)

Diese Abfolge entspricht dem tatsächlichen Nutzer-Journey und der Informations-Architektur aus [04_Anforderungen_und_Sitemap.md](../docs/04_Anforderungen_und_Sitemap.md).

---

## 🎯 Nächste geplante Änderungen

**Februar 2026:**
- [ ] Kundenbereich v1 formatieren (Emojis & Struktur)
- [ ] Über Mich-Seite Wireframe (optional, Expertise-Anker)
- [ ] Methodendetail-Seiten planen (Ernährung, EFT/Matrix, Atmung)
- [ ] Copy Writing Kickoff für alle Abschnitte
- [ ] Figma Designs basierend auf Wireframes starten

**März 2026:**
- [ ] Kundenbereich-Logik prototypieren (Zugriffs-Management)
- [ ] Datenschutz-Seite Wireframe
- [ ] FAQ-Seite Konzept
- [ ] Implementierung Astro-Projekt starten

---

## 📊 Dokumentations-Reifegrad

| Komponente | Status | Reife | Nächster Schritt |
|-----------|--------|-------|-----------------|
| Startseite | ✅ Complete (v0 & v1) | 90% | Copy Writing |
| Angebot/Methoden | ✅ Complete (v0 & v1) | 90% | Methodendetails als Subseiten |
| Ablauf/Erstgespräch | ✅ Complete (v0 & v1) | 85% | FAQ-Integration |
| Kontakt | ✅ Complete (v0 & v1) | 85% | Form-Design & Validierung |
| Kundenbereich | 🔄 v0 only | 40% | v1 Formatierung |
| Über Mich | ⏳ Planned | 0% | Concept |
| Methodendetails | ⏳ Planned | 0% | Wireframes 5 Seiten |
| Datenschutz | ⏳ Planned | 0% | Legal + UX Balance |

---

## 🔗 Verwandte Dokumente

- [02_Wireframes_Index.md](02_Wireframes_Index.md) – Master-Index
- [01_Informationsarchitektur.md](01_Informationsarchitektur.md) – IA & Navigation
- [../docs/06_Szenarien_und_User_Journeys.md](../docs/06_Szenarien_und_User_Journeys.md) – User Scenarios
- [../docs/04_Anforderungen_und_Sitemap.md](../docs/04_Anforderungen_und_Sitemap.md) – Anforderungen

---

**Verantwortlich:** Design-Team / Product Owner
**Letzte Aktualisierung:** 29.01.2026 13:45 CET
**Nächste Review:** Nach Copy-Writing Kickoff (ca. 03.02.2026)

---

## 2026-01-29 – Konsistenz-Säuberung v1.1

### ✅ Änderungen

| Datum | Änderung | Komponente | Begründung |
|-------|----------|-----------|-----------|
| 29.01 | Terminologie standardisiert (kostenloses Erstgespräch/Passungscheck, Selbststart ohne Kontakt/Info-Paket) | Alle Wireframes v1.1 | Einheitliche Sprache, klares Gate |
| 29.01 | Abgrenzung/Notfall-Kriterien vereinheitlicht (keine Therapie, nicht geeignet: Traumata/Depressionen/Krisen/Kinder/schnelle Wunder) | Startseite, Angebot, Ablauf, Kontakt, Basic v1.1 | Gleiche Schärfe & Sicherheit |
| 29.01 | Referenzen auf v1.1-Dateien korrigiert | IA, Startseite, Angebot, Ablauf, Kontakt, Basic | Saubere Verweislogik |
| 29.01 | Redundanz reduziert zugunsten Verweisen (Selbststart, Passungscheck) | Startseite, Angebot, Ablauf | Klarere Navigation, weniger Doppelung |
| 29.01 | Datenschutz-Hinweise harmonisiert (Footer-Verweis, Datensparsamkeit) | Startseite, Angebot, Ablauf, Kontakt, Basic, Kundenbereich | Konsistente Vertrauensanker |
