# QA Konsistenz-Check: Zwei Säulen & Gate-Logik

## 📋 ZWEI-SÄULEN-CHECK (Gleichwertigkeit Ernährung ↔ Emotion)

### ✅ Stärken
- **01_startseite.md:** Sehr klar: „Ernährung, emotionale/energetische Arbeit **oder beides**" + „und/oder"
- **02_angebot_methoden.md:** Explizit: „Beide Wege können **getrennt** oder kombiniert gehen; **keine ist Voraussetzung**" + „beide sind gleichwertig, nicht hierarchisch"
- **Keine Sperrgates:** Nirgends wird Ernährung als harte Voraussetzung genannt

### ⚠️ Schwammige Stellen
| Datei | Abschnitt | Problem | Vorschlag |
|-------|-----------|---------|-----------|
| **02_angebot_methoden.md** | „Warum zwei Säulen?" | „**komplementär**" könnte implizieren: Emotion ist nur Ergänzung | Ersetzen durch: „**nebeneinander oder getrennt möglich**" |
| **02_angebot_methoden.md** | „Warum zwei Säulen?" / Zeile 5 | **Text-Korruption:** „im Detail" + „nicht hierarchischdressieren, optional" (unleserlich) | Bereinigen: Abschnitt neu schreiben |
| **02_angebot_methoden.md** | Review-Navigation | **Text-Korruption:** Doppelte Navigation, unvollständige Links („[Selbststart") | Saubere 4er-Navigation |

### ✅ Befund: KONSISTENT
Mit Bereinigung der Textfehler ist Gleichwertigkeit klar kommuniziert.

---

## 🚪 GATE-LOGIK-CHECK (Begleitung via Erstgespräch; Selbststart = Info-only)

### ✅ Stärken
- **01_startseite.md:** Klar getrennt: Option A (Erstgespräch → Begleitung) vs. Option B (Selbststart ohne 1:1)
- **02_angebot_methoden.md:** „**Kontakt** → kostenloses Erstgespräch → Begleitung" vs. „**Oder:** Selbststart (Info-only) – ohne Gespräch"
- **03_ablauf_erstgespraech.md:** Explizit: Option A (Begleitung) / Option B (Selbststart ohne 1:1-Begleitung – **Info-only**)
- **05_selbststart.md:** Sehr stark: „**immer erst kostenloses Erstgespräch**" wenn Begleitung gewünscht

### ⚠️ Inkonsistenzen & Verwässerungen
| Datei | Abschnitt | Problem | Vorschlag |
|-------|-----------|---------|-----------|
| **03_ablauf_erstgespraech.md** | Prozess Schritt 4 | Nennt noch „**Option A/B/C**" danach (P0 hat C gestrichen) | Ersetzen: „Option A oder B danach" |
| **04_kontakt.md** | Abgrenzung & Notfall | **Text-Korruption:** „Abgrenzung Details: [Startseite](....)sionen, akute Krisen..." (unleserlich) | Bereinigen / vereinfachen |
| **04_kontakt.md** | Review-Navigation | **Text-Korruption:** Links unterbrochen („[Ablauf & Erstgespräch](./03_abl...auf_erstgespraech.md)") | Korrekt verlinken |
| **05_selbststart.md** | Ablauf-Abschnitt | „Bei Unsicherheit..." Hinweis ist **redundant** (steht auch 3 Abschnitte vorher) | Löschen oder konsolidieren |
| **05_selbststart.md** | Gate-Formulierung | Sonst sehr klar ✅ aber könnte noch deutlicher: „Begleitung startet immer nach kostenlosem Erstgespräch" | Optional: Neuer Subsatz |
| **06_kundenbereich.md** | Hilfe & Support | **„Fachliche Fragen: Gehören in gebuchte Termine (falls vorhanden)"** – **„falls vorhanden"** verwässert Gate | Ersetzen: „...gebuchte Termine (nur im Paket enthalten / vorgesehen)" oder: „...bestehen nur nach Erstgespräch" |

### ✅ Befund: WEITGEHEND KONSISTENT, MIT REPARATURBEDARF
Gate-Logik ist klar, aber Text-Fehler und eine schwammige Formulierung in 06 müssen bereinigt werden.

---

## 🔧 KONKRETE KORREKTURVORSCHLÄGE

### 02_angebot_methoden.md
**Problem 1: Text-Korruption im Einstiegs-Abschnitt**
```
**Aktuell:**
- Emotionale/energetische Arbeit adressiert Muster und Blockaden – komplementär.
...
- Je nach Situation einzeln oder kombiniert; beide sind gleichwertig, nicht hierarchischdressieren, optional.

**Neu:**
- Emotionale/energetische Arbeit adressiert Muster und Blockaden – nebeneinander oder getrennt möglich.
...
- Je nach Situation einzeln oder kombiniert; beide sind gleichwertig, nicht hierarchisch.
```

**Problem 2: Review-Navigation doppelt/kaputt**
```
**Aktuell:**
- [Selbststart ohne Kontakt (Info-Paket)](./05_selbststart.md)
- [Startseite](./01_startseite.md)
Startseite](./01_startseite.md)  ← doppelt + kaputt
- [Selbststart](./05_selbststart  ← unvollständig

**Neu:**
- [Startseite](./01_startseite.md)
- [Ablauf & Erstgespräch](./03_ablauf_erstgespraech.md)
- [Kontakt](./04_kontakt.md)
- [Selbststart](./05_selbststart.md)
```

### 03_ablauf_erstgespraech.md
**Problem: Alte Option-Nennung**
```
**Aktuell:**
- 1) Kontakt senden → ...→ 4) Option A/B/C danach.

**Neu:**
- 1) Kontakt senden → ...→ 4) Option A oder B danach.
```

### 04_kontakt.md
**Problem 1: Text-Korruption**
```
**Aktuell:**
- Abgrenzung Details: [Startseite](./01_startseite.md)sionen, akute Krisen/Notfälle, Kinder als primäre Zielgruppe, Erwartung schneller Wunder.

**Neu:**
- **Nicht geeignet:** akuter Notfall, schwere Traumata/Depression (nicht primäre Anlaufstelle), Kinder als primäre Zielgruppe.
- Abgrenzung Details: [Startseite](./01_startseite.md)
```

**Problem 2: Review-Navigation kaputt**
```
**Aktuell:**
- [Ablauf & Erstgespräch](./03_abl
- [Angebot & Methoden](./02_angebot_methoden.md)auf_erstgespraech.md)

**Neu:**
- [Ablauf & Erstgespräch](./03_ablauf_erstgespraech.md)
- [Startseite](./01_startseite.md)
- [Angebot & Methoden](./02_angebot_methoden.md)
```

### 05_selbststart.md
**Problem: Redundante Hinweise**
```
**Aktuell:**
- Block "Für wen geeignet": "**Bei Unsicherheit oder Begleitungswunsch:** [kostenloses Erstgespräch]..."
+ Block "Ablauf": "Bei Unsicherheit: [Ablauf & Erstgespräch]..."

**Neu:**
- Erste Nennung behalten
- Zweite löschen (redundant)
```

### 06_kundenbereich.md
**Problem: Gate-Logik verwässert**
```
**Aktuell:**
- ❌ **Fachliche Fragen:** Gehören in gebuchte Termine (falls vorhanden)

**Neu:**
- ❌ **Fachliche Fragen:** Gehören in gebuchte Termine (nur mit Begleitungs-Paket nach Erstgespräch)
```

---

## 📌 TO-DO-LISTE

| Datei | Stelle | Änderung |
|-------|--------|----------|
| **02_angebot_methoden.md** | „Warum zwei Säulen?" | Text-Korruption bereinigen; „komplementär" → „nebeneinander möglich" |
| **02_angebot_methoden.md** | Review-Navigation | Bereinigen, doppelte Einträge löschen, Links korrigieren |
| **03_ablauf_erstgespraech.md** | Prozess Schritt 4 | „Option A/B/C" → „Option A oder B" |
| **04_kontakt.md** | Abgrenzung & Notfall | Text-Korruption bereinigen |
| **04_kontakt.md** | Review-Navigation | Links korrigieren / bereinigen |
| **05_selbststart.md** | Ablauf-Abschnitt | Redundanten Hinweis löschen |
| **06_kundenbereich.md** | Hilfe & Support | „falls vorhanden" → klarer formulieren (Gate-Logik) |

---

## ✨ GESAMTBEFUND
- ✅ **Beide Themen sind konzeptuell konsistent und klar**
- ⚠️ **Text-Fehler (Korruptionen) in 02, 04 müssen bereinigt werden**
- ⚠️ **P0-Fehler in 03 (Option C) muss gefixt werden**
- ⚠️ **Gate-Logik in 06 minimal verwässert, leicht zu reparieren**
- ✅ **Nach Reparatur: Alle 6 Dateien kohärent + aussagekräftig**
