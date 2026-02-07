# P0-Umsetzung Report (review/v1_2)

## ✅ Überblick
Alle 4 P0-Punkte aus Stakeholder_Review_01_Auswertung_v1.md in die 3 Dateien implementiert. Versionsbump auf v1.2.

---

## 📝 Was wurde geändert + Warum

### 01_startseite.md
1. **Zwei Säulen gleichwertig** (weg von Hierarchie)
   - `„Ernährung + begleitende emotionale Arbeit"` → `„Ernährung, emotionale/energetische Arbeit oder beides"`
   - `„Ernährung als Hebel interessiert"` → `„Offen für Auseinandersetzung mit Ernährung und/oder innerer Arbeit"`
   - **Warum:** verhindert Vorqualifizierung („ohne Ernährung bin ich falsch")

2. **Abgrenzung präzisieren**
   - `„Akute Krisen / Notfälle"` differenziert in: `„Akuter Notfall oder medizinische Behandlung"` (Ausschluss)
   - `„Schwere Traumata oder Depressionen"` neu: `„... (nicht primäre Anlaufstelle; ggf. nur ergänzend neben Fachperson)"`
   - `„Erwartung schneller Wunder"` bleibt, aber Kontex klar (Ursachenarbeit statt Wunder)
   - **Warum:** rechtlich/ethisch robuster, klare Grenzen ohne Überload

3. **Startseite entschlacken**
   - 🔒 Datenschutz-Block komplett gestrichen (redundant zu Footer + Ablauf)
   - **Warum:** reduziert Info-Dichte, stärkt IA-Entlastungslogik

---

### 03_ablauf_erstgespraech.md
1. **Optionen vereinheitlichen**
   - alt: `Option A (Selbststart)`, `Option B (Begleitung)`, `Option C (Nicht starten)` + doppelt verlinkt
   - neu: `Option A (Begleitung)`, `Option B (Selbststart)`, `Nicht starten (ruhige Hinweiszeile)`
   - **Warum:** logische Reihenfolge (erst Begleitung, dann Info-only), Option C als Hinweis statt Block

2. **Abgrenzung präzisieren**
   - `„akute Krisen/Notfälle"` → `„akute Notfälle"` (Notfall bleibt Ausschluss)
   - `„schwere Depressionen"` + Zusatz: `„(nicht primäre Anlaufstelle, ggf. ergänzend neben Fachperson)"`
   - **Warum:** differenziert zwischen Notfall (weg!) und schweren Fällen (nur mit Fachperson)

3. **Entdopplung vorbereiten**
   - Erstkontakt-Absatz: `„Website nutzbar ohne Telefonnummer öffentlich"` gestrichen
   - Punkt bleibt bei 04 (Kontakt), nicht in 03 wiederholt
   - **Warum:** ein Ort für Details, 03 bleibt Gate-Übersicht

---

### 05_selbststart.md
1. **Info-only klarstellen**
   - `„kein Gespräch nötig"` → `„kein Gespräch, keine 1:1-Begleitung nötig"`
   - Einstieg-Leittext: deutlicher, dass Begleitung später als Option existiert
   - **Warum:** reduziert Support-Annahmen nach Kauf

2. **Gate-Logik einführen**
   - ✨ Neuer Block: `„Wenn du später Begleitung willst"` (zentral, prominent)
   - `„immer erst kostenloses Erstgespräch"` als harte Regel
   - **Warum:** verhindert Erwartungsbruch, klarstellt Gate (Passungscheck vor 1:1)

3. **„Unsicherheit"-Hinweis restrukturiert**
   - alt: redundant in mehreren Abschnitten
   - neu: gezielt in `„Bei Unsicherheit oder Begleitungswunsch"` (+ starker Button-Text)
   - **Warum:** eine klare Leitplanke, nicht verkäuferisch

---

## 🔗 Link-Hygiene
- Keine doppelten Links zur selben Seite im selben Abschnitt
- Review-Navigation unverändert (Sprungliste bleibt)
- Inline-Links nur wo nötig (Gate → Ablauf, Begleitung → Erstgespräch)

---

## 📊 Technisch
- **Dateien:** 3 Dateien in review/v1_2/ angepasst
- **Versionsnummer:** v1.1 → v1.2 (alle 3 Dateien)
- **Inhalts-Änderungen:** 0 Bullets entfernt, 1 Block erweitert (Selbststart "Wenn später"), 1 Block entfernt (Startseite Datenschutz)
- **Wortzahl-Trend:** Startseite leichter (Datenschutz weg), Selbststart leicht schwerer (Gate-Block neu), Ablauf neutral

---

## ✨ Auswirkungen
- ✅ Klarer, weniger hierarchisch (Gleichwertigkeit Ernährung/Emotion)
- ✅ Rechtlich/ethisch sauberer (Abgrenzung präzisiert)
- ✅ Funnels konsistent (A→Begleitung, B→Info-only, Gate davor)
- ✅ Erwartungsmanagement robuster (Info-only-Grenze deutlich)
- ⚠️ P1–P2 folgen später (Entdopplung, Startseite-Kürzung, Support-Modell)
