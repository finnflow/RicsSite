# QA Globaler Check: Abgrenzung + Entdopplung Kontakt-Details

---

## 📋 1) ABGRENZUNG – FUNDSTELLEN & KONSISTENZ-ANALYSE

### Alle Fundstellen der Abgrenzung:

| Datei | Abschnitt | Formulierung |
|-------|-----------|--------------|
| **01_startseite.md** | Passt nicht, wenn | „Akuter Notfall oder medizinische/psychotherapeutische Behandlung nötig" / „Schwere Traumata oder schwerwiegende Depressionen (nicht primäre Anlaufstelle; ggf. nur ergänzend neben Fachperson)" / „Kinder als primäre Zielgruppe" / „Erwartung schneller Wunder" |
| **01_startseite.md** | Einstieg | „keine Heilsversprechen" |
| **02_angebot_methoden.md** | Nicht geeignet | „akuter Notfall, medizinische/psychotherapeutische Behandlung, schwere Traumata/Depression (nicht primäre Anlaufstelle), Kinder als primäre Zielgruppe" |
| **03_ablauf_erstgespraech.md** | Einstieg | „Keine Therapie/Heilsversprechen" |
| **03_ablauf_erstgespraech.md** | Erstgespräch | „keine Diagnose, keine Therapie, kein Verkaufsdruck/Heilversprechen" |
| **03_ablauf_erstgespraech.md** | Grenzen & Ausschluss | „Keine Therapie/medizinische/psychotherapeutische Behandlung; keine Heilsversprechen." / „akute Notfälle, schwere Traumata/schwerwiegende Depressionen (nicht primäre Anlaufstelle, ggf. nur ergänzend neben Fachperson), Kinder als primäre Zielgruppe" |
| **04_kontakt.md** | Abgrenzung & Notfall | „akuter Notfall, schwere Traumata/Depression (nicht primäre Anlaufstelle), Kinder als primäre Zielgruppe" |
| **05_selbststart.md** | Nicht geeignet | „akuter Notfall, medizinische/psychotherapeutische Behandlung nötig, schwere Traumata/schwerwiegende Depressionen (nicht primäre Anlaufstelle), Kinder als primäre Zielgruppe" |
| **05_selbststart.md** | Was du nicht bekommst | „Keine Therapie, keine medizinische/psychotherapeutische Behandlung" / „Keine 1:1-Begleitung oder persönliche Rückfragen zu den Inhalten" / „Keine Notfall-/Akuthilfe" |

### 🔍 Konsistenz-Analyse:

**✅ STÄRKE: Kernbotschaft ist einheitlich**
- „Keine Therapie/medizinische Behandlung" erscheint überall
- „Schwere Traumata/Depression = nicht primäre Anlaufstelle" konsistent
- „Kinder als primäre Zielgruppe" ist Ausschluss überall

**⚠️ SCHWÄCHE: Inkonsistenzen in Details**

| Problem | Fundstellen | Impact |
|---------|-------------|--------|
| **Notfall-Formulierung wechselt** | 01: „Akuter Notfall" vs. 02: „akuter Notfall" vs. 03: „akute Notfälle" | Nicht dramatisch, aber könnte einheitlicher sein |
| **„Trauma/Depression" Beschreibung** | 01/03/04/05: unterschiedlich lang (kurz vs. mit Zusatz „ggf. nur ergänzend neben Fachperson") | 04_kontakt.md fehlt der Zusatz! → sollte dort ausführlicher sein |
| **„Erwartung schneller Wunder"** | Nur in 01! Fehlt in 02/03/04/05 | Sollte überall erwähnt werden (ist wichtiger Qualifier) |
| **„Keine Heilsversprechen"** | In 01/03 vorhanden, fehlt in 02/04/05 | Sollte überall sein |
| **Support für fachliche Fragen** | Nur in 05/06 erwähnt (nicht als Abgrenzung, sondern als Feature-Gap) | Könnte in Abgrenzungs-Kontext deutlicher werden |

---

## 📝 STANDARD-ABGRENZUNG (Vorschlag für konsistente Verwendung)

### Empfehlung: Folgende Formulierung in allen betroffenen Seiten verwenden:

```
Nicht geeignet für dich, wenn:
- Du einen akuten Notfall oder medizinische/psychotherapeutische Behandlung brauchst
- Du schwere Traumata oder schwerwiegende Depressionen hast (nicht meine primäre Anlaufstelle; ggf. nur ergänzend neben Fachperson)
- Du schnelle Wunder oder Heilsversprechen erwartest
- Du Therapie oder Diagnose brauchst
- Kinder die primäre Zielgruppe sind

Stattdessen: Orientierung, Ursachenarbeit, Unterstützung neben Fachperson – wenn du das suchst, passt es vielleicht. Kläre im kostenlosen Erstgespräch, ob es passt.
```

### Kurz-Variante (für kompakte Seiten wie 01/04):
```
Nicht geeignet, wenn: akuter Notfall, Therapie-/Diagnose-Erwartung, schwere Traumata/Depression ohne Fachperson, schnelle Wunder-Erwartung, Kinder primär.
```

**Wo verwenden:**
- 01_startseite.md: Langform ✅ (bereits vorhanden, aber mit „Erwartung schneller Wunder" → komplettes Paket)
- 02_angebot_methoden.md: Kurzform (aktuell: nur akuter Notfall/medizinisch/Trauma/Kinder, **fehlt: „Heilsversprechen"** + „schnelle Wunder")
- 03_ablauf_erstgespraech.md: Langform (aktuell vorhanden, aber **fehlt: „schnelle Wunder"**)
- 04_kontakt.md: Kurzform (**FEHLT: Zusatz „ggf. nur ergänzend neben Fachperson"** – sollte ausführlicher sein!)
- 05_selbststart.md: Langform ✅ (vorhanden, aber **fehlt: „Heilsversprechen"**, „schnelle Wunder")

---

## 🔄 2) ENTDOPPLUNG KONTAKT-DETAILS

### 2.1) Alle Fundstellen für Kontakt-Details:

#### Was ins Kontaktfeld gehört / nicht gehört:
| Datei | Abschnitt | Detail | Länge |
|-------|-----------|--------|-------|
| **03_ablauf_erstgespraech.md** | Erstkontakt: Minimalangaben | E-Mail + kurze Nachricht; nicht nötig: Telefon, Unterlagen, Vorgeschichte | 2 Zeilen |
| **04_kontakt.md** | Minimalprinzip | **Benötigt:** E-Mail + Freitext; **Nicht nötig:** Telefon, Unterlagen, Vorgeschichte; 2–3 Felder | 3 Zeilen (ausführlich) |
| **05_selbststart.md** | (nicht vorhanden) | — | — |

**Status:** ⚠️ 03 doppelt kurz, 04 ausführlich ✅

#### Was nach Absenden passiert:
| Datei | Abschnitt | Detail | Länge |
|-------|-----------|--------|-------|
| **03_ablauf_erstgespraech.md** | Prozess in wenigen Schritten | 4 Schritte erwähnt, aber **kein Detail** | Minimal |
| **04_kontakt.md** | Was passiert nach dem Absenden | On-Page Bestätigung + optional Auto-Mail; danach Erstgespräch-Angebot | 4 Zeilen (ausführlich) ✅ |
| **05_selbststart.md** | Ablauf Selbststart | Generischer Ablauf (Start → Option → Rechnung → Freischaltung), nicht spezifisch zur Kontakt-Seite | — |
| **06_kundenbereich.md** | (nicht vorhanden) | — | — |

**Status:** ⚠️ 03 sehr kurz, 04 ausführlich ✅

#### Reaktionszeit:
| Datei | Abschnitt | Detail | Status |
|-------|-----------|--------|--------|
| **01_startseite.md** | Prozess-Kurzüberblick | „Reaktionszeit wird transparent kommuniziert" (vage) | Verweis |
| **03_ablauf_erstgespraech.md** | Prozess Schritt 2 | „Reaktionszeit: Platzhalter, intern festlegen" | Platzhalter |
| **04_kontakt.md** | Was passiert | „Wir melden uns in 24–48 Stunden (Platzhalter)" | Konkret ✅ |

**Status:** ⚠️ Sollte nur in 04 ausführlich sein

#### Formular-Feld-Anforderungen:
| Datei | Abschnitt | Detail | Status |
|-------|-----------|--------|--------|
| **03_ablauf_erstgespraech.md** | Erstkontakt | E-Mail + Nachricht | Kurz |
| **04_kontakt.md** | Minimalprinzip | E-Mail + Freitext (1–2 Sätze), Feldanzahl 2–3 | Ausführlich ✅ |

**Status:** ⚠️ 03 zu kurz verlinkt

---

### 2.2) Konkrete Entdopplungs-Vorschläge:

#### 03_ablauf_erstgespraech.md
```
**Aktuell (Erstkontakt: Minimalangaben):**
- E-Mail + kurze Nachricht reichen.
- Nicht nötig: Telefon, sensible Unterlagen/Diagnosen, lange Vorgeschichte.
- Formular-Details: [Kontakt](./04_kontakt.md).

**Neu (gekürzt auf Verweis):**
- Minimalprinzip: E-Mail + kurze Nachricht.
- Alle Details zum Kontaktformular: [Kontakt](./04_kontakt.md).

**Grund:** In 04 ausführlich erklärt, in 03 als Orientierung ausreichend.
```

#### 04_kontakt.md
```
**Aktuell (Minimalprinzip):**
- **Benötigt:** E-Mail + kurzer Freitext (1–2 Sätze, z. B. „Dein Anliegen in wenigen Worten").
- **Nicht nötig:** Telefon, sensible Unterlagen/Diagnosen, lange Vorgeschichte.
- Formular prägnant und übersichtlich: 2–3 Felder maximum.

**Bereits gut ausführlich.** ✅ KEIN CHANGE NÖTIG.
```

#### 01_startseite.md
```
**Aktuell (Prozess-Kurzüberblick, Besonderheiten):**
- Kein Kalender/Direktbuchung
- Reaktionszeit wird transparent kommuniziert

**Neu (konkretisiert auf 04):**
- Kein Kalender/Direktbuchung
- Reaktionszeit wird transparent kommuniziert (Details: [Kontakt](./04_kontakt.md))

**Grund:** Link macht es konkret, nicht vage.
```

#### 05_selbststart.md
```
**Prüfung:** Ablauf unterscheidet sich (Selbststart ≠ Kontakt).
**Befund:** Keine Doppelung mit Kontakt-Details. ✅ OK

**Aber Hinweis:** Redundanter Satz in „Ablauf"-Block:
- „Bei Unsicherheit: [Ablauf & Erstgespräch]..." (steht auch 3 Abschnitte vorher)
**Neu:** Löschen oder konsolidieren auf einen Hinweis: „Bei Unsicherheit: [kostenloses Erstgespräch nutzen](./03_ablauf_erstgespraech.md)".
```

#### 06_kundenbereich.md
```
**Prüfung:** Keine Doppelung mit Kontakt-Details. ✅
**Aber:** Support-Kontaktweg:
- „[Support kontaktieren](./04_kontakt.md)"

**Vorschlag:** Deutlicher unterscheiden:
- „[Kontakt für Support-Anfragen](./04_kontakt.md) (technische Fragen)"
```

---

## ✅ TO-DO-LISTE: ABGRENZUNG

| Datei | Abschnitt | Aktion | Priorität |
|-------|-----------|--------|-----------|
| **02_angebot_methoden.md** | Nicht geeignet | Ergänze: „Heilsversprechen-Erwartung" + „schnelle Wunder" + „Therapie-Erwartung" | 🔥 P0 |
| **03_ablauf_erstgespraech.md** | Grenzen & Ausschluss | Ergänze: „Erwartung schneller Wunder" | 🔥 P0 |
| **04_kontakt.md** | Abgrenzung & Notfall | Ergänze: „ggf. nur ergänzend neben Fachperson" (wie 01/03) + Heilsversprechen | 🟡 P1 |
| **05_selbststart.md** | Nicht geeignet | Ergänze: „Heilsversprechen" + „schnelle Wunder" | 🔥 P0 |

---

## ✅ TO-DO-LISTE: ENTDOPPLUNG KONTAKT

| Datei | Abschnitt | Aktion | Resultat |
|-------|-----------|--------|----------|
| **03_ablauf_erstgespraech.md** | Erstkontakt: Minimalangaben | Kürze zu 2 Zeilen + Link zu 04 | „E-Mail + Nachricht; Details: [Kontakt](./04_kontakt.md)" |
| **01_startseite.md** | Prozess-Kurzüberblick | Ergänze „(Details: [Kontakt]...)" | „Reaktionszeit wird transparent kommuniziert ([Details](./04_kontakt.md))" |
| **05_selbststart.md** | Ablauf-Abschnitt | Löschen redundanten Unsicherheits-Hinweis | Konsolidiere auf einen Block |
| **06_kundenbereich.md** | Support-Kontaktweg | Optional: deutlicher unterscheiden | „[Support/Kontakt](./04_kontakt.md) (technische Fragen)" |
| **04_kontakt.md** | Minimalprinzip | Keine Änderung; ist ausführlich genug ✅ | — |

---

## 📊 GESAMTBEFUND

| Bereich | Status | Aktion |
|---------|--------|--------|
| **Abgrenzung: Konsistenz** | ⚠️ 70% | 4–5 Sätze in 2–3 Dateien ergänzen (schnelle Wunder, Heilsversprechen) |
| **Abgrenzung: Tone of Voice** | ✅ 100% | Warm, nicht aggressiv; überall konsistent |
| **Entdopplung Kontakt** | ✅ 80% | Hauptsächlich Link-Ergänzungen; 04 ist Authorität, andere verweisen |
| **Gesamtreparatur-Zeit** | 🟢 5–10 Min | Kleine, präzise Änderungen, keine Umstrukturierung |
