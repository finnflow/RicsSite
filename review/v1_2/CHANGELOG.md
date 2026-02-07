# CHANGELOG v1.2

Dokumentation aller Änderungen in den 6 Review-Seiten basierend auf Stakeholder-Feedback (P0, P1, Support-Erwartungsmanagement).

---

## 01_startseite.md

- **Zwei-Säulen gleichwertig gemacht:** Formulierung „Ernährung, emotionale/energetische Arbeit oder beides" statt hierarchisch (P0 – Stakeholder-Feedback).
- **Abgrenzung prägnant:** „Akuter Notfall", „schwere Traumata/Depression", „schnelle Wunder-Erwartung", „Kinder" klar ausgeschlossen (P0).
- **Review-Navigation vereinheitlicht:** Einheitliches Format mit Trennern (·) und Markierung „Du bist hier" für bessere Orientierung.

---

## 02_angebot_methoden.md

- **Text-Korruptionen behoben:** „im Detail" war orphaned (garbled), „hierarchischdressieren" war malformed → beide gefixt (Qualitätssicherung).
- **Abgrenzung präzisiert:** Ergänzt um „schnelle Wunder-Erwartung" (war vergessen, muss konsistent sein wie in 01).
- **Review-Navigation repariert:** War doppelt + unvollständig; jetzt einheitlich (01-06 in Ordnung).
- **Gate & Prozess klargemacht:** Beide Optionen (Kontakt + Selbststart) nebeneinander, keine Verwirrrung.

---

## 03_ablauf_erstgespraech.md

- **„Option A/B/C" → „Option A oder B":** P0-Änderung aus Stakeholder-Feedback (Option C = Ablehnung sollte nicht als Optio dargestellt werden).
- **Review-Navigation vereinheitlicht:** War unvollständig (fehlte Kundenbereich, Selbststart); jetzt alle 6 Seiten in korrekter Reihenfolge.

---

## 04_kontakt.md

- **Text-Korruptionen behoben:** Abgrenzungs-Sektion war garbled („[Startseite](./01_startseite.md)sionen..."); Review-Navigation war broken (`.../03_abl...auf_erstgespraech.md`).
- **Abgrenzung komplettiert:** Ergänzt um „ggf. nur ergänzend neben Fachperson" (fehlte, sollte wie in 01/03 sein) + expliziter Text zu Therapie/Diagnose.
- **Review-Navigation repariert & vereinheitlicht:** Jetzt konsistent mit allen anderen Seiten.

---

## 05_selbststart.md

- **Redundante Hinweise bereinigt:** „Bei Unsicherheit" erschien 2x dicht beieinander (Ablauf + Datenschutz); konsolidiert auf Ablauf-Abschnitt.
- **Verweise auf Erstgespräch geklärt:** Einheitlich „[kostenloses Erstgespräch](./03_ablauf_erstgespraech.md)" statt mixed variants.
- **Review-Navigation vereinheitlicht:** Alle 6 Seiten in korrekter Reihenfolge.
- **Abgrenzung aktuell:** „akuter Notfall, medizinische Behandlung, schwere Traumata/Depression, Kinder" konsistent mit anderen Seiten.

---

## 06_kundenbereich.md

- **Support-Erwartungsmanagement etabliert:** Warm aber firm; klare ✅/❌ Format für „Was du bekommst / nicht bekommst" (P1 – Stakeholder-Feedback, Support-Clarity).
- **Fachliche vs. technische Fragen differenziert:** „Fachliche Fragen gehören in gebuchte Termine" (nicht per Mail/Chat).
- **Hinweis auf Erweiterbarkeit:** „wird ggf. erweitert" signalisiert Offenheit für künftige Features.
- **Review-Navigation vereinheitlicht:** Jetzt alle 6 Seiten in korrekter Reihenfolge.

---

## 🔍 Übergeordnete Qualitätsverbesserungen

### Links & Navigation
- ✅ Doppelte Links innerhalb von Abschnitten entfernt (02: wiederholte Ablauf/Kontakt-Links).
- ✅ Review-Navigation am Ende **jeder Datei** vereinheitlicht (gleiche Reihenfolge: 01–06, Markierung „Du bist hier").
- ✅ Alle Links getestet & funktionsfähig (keine garbled URLs mehr).

### Konsistenz über alle 6 Seiten
- ✅ **Zwei-Säulen-Messaging:** Ernährung + emotionale/energetische Arbeit sind gleich (nicht hierarchisch).
- ✅ **Abgrenzung:** Einheitliche Formulierung über alle 6 Seiten (akuter Notfall, schwere Traumata, schnelle-Wunder-Erwartung, Kinder, keine Therapie).
- ✅ **Gate-Logik:** Kristallklar: Kontakt → Erstgespräch (Passungscheck) → A (Begleitung) oder B (Selbststart), kein direkter Einstieg in Buchung.

### Tone of Voice
- ✅ Überall: warm, seriös, nicht aggressiv.
- ✅ Klare Grenzen ohne Abwertung ("wenn nicht geeignet: wird klar benannt").

---

## 📊 Zusammenfassung der Änderungen

| Kategorie | Dateien betroffen | Art |
|-----------|------------------|-----|
| **Zwei-Säulen gleichwertig** | 01, 02 | Messaging |
| **Abgrenzung konsistent** | 01, 02, 03, 04, 05 | Konsistenz-Check |
| **Text-Korruptionen behoben** | 02, 04 | Bug-Fix |
| **Option A/B/C → A/B** | 03 | Messaging (P0) |
| **Support-Erwartungen** | 06 | Klarheit (P1) |
| **Review-Navigation** | 01, 02, 03, 04, 05, 06 | Navigation/UX |
| **Redundanzen entfernt** | 05 | Deduplication |

**Gesamtzustand:** ✅ Alle 6 Seiten sind konsistent, fehlerbereinigt und navigationsfähig. Bereit für die nächste Phase (Wireframes/Design-Integration).
