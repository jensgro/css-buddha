---
title: Einführung in CSS-Grid (Teil 1)
lead: Mit Flexbox gibt es ein erstes, echtes Layoutmodul in CSS. Vorher behalfen wir uns mit Techniken, die für Seitenlayouts nur bedingt geeignet und nie gedacht waren. Mit CSS-Grids wurde kurz danach eine zweite Layouttechnik eingeführt, die von allen modernen Browsern unterstützt wird.
date: 2024-05-01
tags:
    - css
    - css-grid

---

Ein "Grid" ist in der Gestaltung ein alter Hut und demnach auch in der Frontend-Entwicklung bekannt. Er bezeichnet die Verteilung von Inhalten nach einem unsichtbaren Raster (engl.: grid). Bisherige Raster sind grundsätzlich eindimensional ausgerichtet. In unserer westlichen Leserichtung sind die Gridspalten vertikal ausgerichtet. Viele Jahre haben wir - nachdem Layouttabellen endlich ausgestorben waren - diese Grids mit Floats realisiert. Die Umsetzung war manchmal hakelig, es gab einige störende Browser-Bugs. Deshalb waren generalisierte Lösungen beliebt. Die von Bootstrap ist sicherlich die bekannteste.

{% figImg "css-grid/beispiel-grid.png", "Die vertikalen, grauen Balken stellen das Grid dar, das im Hintergrund existiert. Die Inhalte werden mittels Floats darauf platziert.", "Ein Layout wird von einem halbdurchsichtigen Grid überlagert." %}

Floats waren niemals für Seitenlayouts vorgesehen. Sie wurden nur mangels besserer Alternativen am Häufigsten genutzt. Alternativ kamen gelegentlich auch absolute Positionierung oder display: inline-block zum Einsatz. Als 2011 mit der Spezifikation von CSS-Grids begonnen wurde, hatten Webworker schon Erfahrungen mit teils komplizierten Layouts gemacht. Es waren auch Limitierungen der bislang verwendeten Techniken bekannt.

## Andere Herangehensweise

Wie schon bei Flexbox haben wir es bei CSS-Grids mit einer neuen Herangehensweise und Benamung zu tun.

Vorher waren wir es gewohnt, mit links, rechts, oben und unten zu arbeiten. Bei Flexbox wurde dieses Schema durch zwei Achsen ersetzt, die man in der Richtung drehen konnte. Die Namen der Achsen sind mit Haupt- und Kreuzachse neutral benannt.

Grid hingegen macht Anleihen bei Tabellen. Wir sprechen hier von Reihen und Spalten. Eine Reihe oder auch eine Spalte, also der Bereich zwischen zwei Grid-Lines, wird auch als Grid-Track bezeichnet. Die kleinste Einheit, vergleichbar mit einer Tabellenzelle, ist die Grid-Cell. Und ein Bereich aus einer oder mehrerer Grid-Zellen, die zusammen von vier Grid-Lines begrenzt werden, ist eine Grid-Area. Ein Grid-Item ist immer Teil einer Grid-Area.

{% figImg "css-grid/track-area-cell.png", "Die schwarzen Elemente symbolisieren die jeweiligen Begriffe.", "Screenshot einer Visualisierung der relevanten Grundbegriffe von CSS-Grids." %}

Wie bei Flexbox ist es **das Elternelement**, das wesentliche Steuerungsaufgaben übernimmt. Die Kindelemente werden automatisch zu Grid-Items. Auch das ist eine Analogie zu Flexbox, wo die Kindelemente des Flex-Containers zu Flex-Items werden.

Bei den CSS-Grids werden die einzelnen Layoutblöcke Grid-Items genannt. Der sie umgebende Container ist der Grid-Container. Das Grid wird durchzogen von Grid-Lines, also Linien, die die Grid-Items umgeben. Diese Linien werden mittlerweile in allen Devtools der Browser visualisiert. Pionier war hier Firefox, der sicherlich noch die besten Tools für Grid und Flexbox zu bieten hat.

{% figImg "css-grid/grid-inspector-2.png", "Sie müssen im Grid-Inspector erst auswählen, für welchen Grid-Container der Inspector die Markierungen anzeigen soll.", "Screenshot des Grid-Inspectors der Firefox-Devtools." %}

Man sieht in diesem Beispiel, dass die äußeren Enden des Grids immer mit Linien versehen sind. Es existieren deshalb immer eine Linie mehr als Reihen oder Spalten.

## CSS-Grid oder Flexbox nutzen?

Ein entscheidender Unterschied zwischen CSS-Grids und Flexbox ist, dass die Grids zweidimensional konstruiert sind. Eventuell macht die Spezifikation deshalb sprachliche Anleihen an Tabellen. Flexbox ist hingegen eindimensional. Um dies zu unterstreichen spricht die Spezifikation nur von Haupt- und Kreuzachse, nutzt also eine recht neutrale Sprache.

Beide Techniken existieren gleichberechtigt nebeneinander und ergänzen unser bisheriges Toolset. Es ist deshalb immer die Herausforderung, für die jeweilige Layoutaufgabe das passende Tool zu wählen. Das kann mal die Flexbox, mal das Grid sein. Und in engen Grenzen gibt es immernoch Anwendungen für Floats. Die unterschiedlichen Formen der Positionierung hingegen werden sicherlich nie vollständig von anderen Techniken ersetzt werden können.

Nur weil eine Technik neu ist, ist sie nicht per se nützlich und für alles zu gebrauchen.


## Browser-Support

Im ersten Halbjahr 2022 wurde der Support für den IE11 eingestellt. Aus Frontendentwickler-Sicht ist dieser Browser tot. Deshalb gibt es keinen Grund mehr, sich nicht intensiv mit allen Facetten von CSS-Grid auseinanderzusetzen. Alle modernen Browser beherrschen alle Aspekte dieser Technik.

Es ist deshalb weder notwendig, mit Feature Queries oder mit Autoprefixer zu arbeiten.

## Und wie erstelle ich nun ein Grid?

[Im folgenden Artikel](einfuehrung-in-css-grid-teil-2.html) schauen wir uns an, wie wir ein Grid ganz grundsätzlich erstellen.
