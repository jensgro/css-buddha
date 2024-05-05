---
title: Einführung in CSS-Grid
lead: Seit ein paar Jahren gibt es mit Flexbox ein erstes, echtes Layoutmodul in CSS. Vorher behalfen wir uns mit Techniken, die für Seitenlayouts nur bedingt geeignet und nie gedacht waren. Mit CSS-Grids wurde kurz danach eine zweite Layouttechnik eingeführt, die von allen modernen Browsern unterstützt wird.
date: 2024-05-01
tags:
    - css
    - css-grid

---

Ein "Grid" ist in der Gestaltung ein alter Hut und demnach auch in der Frontend-Entwicklung bekannt. Er bezeichnet die Verteilung von Inhalten nach einem unsichtbaren Raster (engl.: grid). Bisherige Raster sind grundsätzlich eindimensional ausgerichtet. In unserer westlichen Leserichtung sind die Gridspalten vertikal ausgerichtet. Viele Jahre haben wir - nachdem Layouttabellen endlich ausgestorben waren - diese Grids mit Floats realisiert. Die Umsetzung war manchmal hakelig, es gab einige störende Browser-Bugs. Deshalb waren generalisierte Lösungen beliebt. Die von Bootstrap ist sicherlich die bekannteste.

{% figImg "css-grid/beispiel-grid.png", "Die vertikalen, grauen Balken stellen das Grid dar, das im Hintergrund existiert. Die Inhalte werden mittels Floats darauf platziert.", "Ein Layout wird von einem halbdurchsichtigen Grid überlagert." %}

Floats waren niemals für Seitenlayouts vorgesehen. Sie werden nur mangels besserer Alternativen am Häufigsten genutzt. Alternativ kommen gelegentlich auch absolute Positionierung oder display: inline-block zum Einsatz. Als 2011 mit der Spezifikation von CSS-Grids begonnen wurde, hatten Webworker schon Erfahrungen mit teils komplizierten Layouts gemacht. Es waren auch Limitierungen der bislang verwendeten Techniken bekannt.

## Andere Herangehensweise

Wie schon bei Flexbox haben wir es bei CSS-Grids mit einer anderen als der gewohnten Herangehensweise und Benamung zu tun.

Bislang waren wir es gewohnt, mit links, rechts, oben und unten zu arbeiten. Bei Flexbox wurde dieses Schema durch zwei Achsen ersetzt, die man in der Richtung drehen konnte. Die Namen der Achsen sind mit Haupt- und Kreuzachse neutral benannt.

Grid hingegen macht Anleihen bei Tabellen. Wir sprechen hier von Reihen und Spalten. Eine Reihe oder auch eine Spalte, also der Bereich zwischen zwei Grid-Lines, wird auch als Grid-Track bezeichnet. Die kleinste Einheit, vergleichbar mit einer Tabellenzelle, ist die Grid-Cell. Und ein Bereich aus einer oder mehrerer Grid-Zellen, die zusammen von vier Grid-Lines begrenzt werden, ist eine Grid-Area. Ein Grid-Item ist immer Teil einer Grid-Area.

{% figImg "css-grid/track-area-cell.png", "Die schwarzen Elemente symbolisieren die jeweiligen Begriffe.", "Screenshot einer Visualisierung der relevanten Grundbegriffe von CSS-Grids." %}

Wie bei Flexbox ist es das Elternelement, das wesentliche Steuerungsaufgaben übernimmt. Die Kindelemente werden automatisch zu Grid-Items. Auch das ist eine Analogie zu Flexbox, wo die Kindelemente des Flex-Containers zu Flex-Items werden.

Bei den CSS-Grids werden die einzelnen Layoutblöcke Grid-Items genannt. Der sie umgebende Container ist der Grid-Container. Das Grid wird durchzogen von Grid-Lines, also Linien, die die Grid-Items umgeben. Diese Linien werden mittlerweile in allen Devtools der Browser visualisiert. Pionier war hier Firefox, der sicherlich noch die besten Tools für Grid und Flexbox zu bieten hat.

{% figImg "css-grid/grid-inspector-2.png", "Sie müssen im Grid-Inspector erst auswählen, für welchen Grid-Container der Inspector die Markierungen anzeigen soll.", "Screenshot des Grid-Inspectors der Firefox-Devtools." %}

Man sieht in diesem Beispiel, dass die äußeren Enden des Grids immer mit Linien versehen sind. Es existieren deshalb immer eine Linie mehr als Reihen oder Spalten.

## CSS-Grid oder Flexbox nutzen?

Ein entscheidender Unterschied zwischen CSS-Grids und Flexbox ist, dass die Grids zweidimensional konstruiert sind. Eventuell macht die Spezifikation deshalb sprachliche Anleihen an Tabellen. Flexbox ist hingegen eindimensional. Um dies zu unterstreichen spricht die Spezifikation nur von Haupt- und Kreuzachse, nutzt also eine recht neutrale Sprache.

Beide Techniken existieren gleichberechtigt nebeneinander und ergänzen unser bisheriges Toolset. Es ist deshalb immer die Herausforderung, für die jeweilige Layoutaufgabe das passende Tool zu wählen. Das kann mal die Flexbox, mal das Grid sein. Und in engen Grenzen gibt es immernoch Anwendungen für Floats. Die unterschiedlichen Formen der Positionierung hingegen werden sicherlich nie vollständig von anderen Techniken ersetzt werden können.

Nur weil eine Technik neu ist, ist sie nicht per se nützlich und für alles zu gebrauchen.
## Ein Grid erstellen

Wir erstellen ein Grid, in dem wir dem Elterncontainer ``display: grid;`` zuweisen. Die **direkten Kindelemente** dieses Grid-Containers werden dadurch automatisch zu Grid-Items. Es ist das gleiche Prinzip wie bei Flexbox. Es ist also auch bei dieser Layoutmethode wichtig, auf eine schlanke Struktur zu achten.

Zusätzlich wird an dem Grid-Container die Art des Rasters bestimmt. Dies geschieht über die Definition der Breite und Anzahl der Spalten (``grid-template-columns``) und eventueller Zwischenräume (``gap`` bzw. ``row-gap``und ``column-gap``) definieren. Der Code für ein erstes Grid könnte folgendermassen aussehen:

<figure class="card">
    {% highlight "css" %}
.grid-container {
    display: grid;
    grid-template-columns: 100px 100px 100px 100px;
    gap: 20px;
}
    {% endhighlight %}
    <figcaption class="card-footer">
        <p>Ein einfacher Grid-Container entsteht. Den Code gibt es auf <a href="https://codepen.io/jensgro/full/mpVjGQ">Codepen</a>.</p>
    </figcaption>
</figure>

 Durch `grid-template-columns` wird in diesem Beispiel ein vierspaltiges Layout definiert, dessen Spalten jeweils 100px breit sind. Mit jedem fünften Grid-Item wird eine neue visuelle Zeile eröffnet. Dafür müssen keine neuen Grid-Container erstellt werden. Sie werden erst dann notwendig, wenn sich die Art des Layouts ändert, also die Breiten und die Anzahl der Spalten. Um die Spalten nicht direkt aneinander kleben zu lassen, empfiehlt es sich, einen Abstand zwischen Spalten und Zeilen zu definieren. Mit ``row-gap`` und ``column-gap`` kann man diese Abstände explizit steuern. Einfacher ist es mit der Kurzschreibweise ``gap``. Wie bei ``padding``und ``margin`` kann mit dieser Kurzschreibweise sowohl ein Wert für beide Eigenschaften zugewiesen werden, als auch einfach ein wenig Tipparbeit gespart werden. Der erste Wert bezieht sich auf die Zeilen, der zweite auf die Spalten:

<figure class="card">
    {% highlight "css" %}
.grid-container-1 {
    grid-gap: 20px;
}
.grid-container-2 {
    grid-gap: 20px 10px;
}
    {% endhighlight %}
    <figcaption class="card-footer">
        <p>Zwei unterschiedliche Arten des Umgangs mit ``gap``.</p>
    </figcaption>
</figure>

Die äusseren Ränder des Grids werden **nicht** in die Berechnung der Zwischenräume (gap) einbezogen werden. Der Zwischenraum zwischen Spalten und Zeilen beginnt erst zwischen der ersten und zweiten Zeile bzw. Spalte und endet vor der jeweils letzten.

## Einheiten

Im ersten Beispiel werden absolute Breiten genutzt. Diese sind selbstverständlich möglich, in Zeiten einer unübersichtlichen Endgerätevielfalt aber eher hinderlich. Für die Erstellung responsiver Layouts sind deshalb relative Breitenangaben sinnvoller.

Mit dem Grid-Modul wird eine neue relative Einheit eingeführt: **fraction** (``fr``). Mittels "fraction" wird der zur Verfügung stehende Platz aufgeteilt. Es funktioniert wie die Portionierung eines Kuchens. Eine genauere Betrachtung dieser neuen Einheit folgt gleich im Anschluss. Im nächsten  Beispiel wird ein Grid-Container in vier gleich große Stücke aufgeteilt ([Codepen-Beispiel](https://codepen.io/jensgro/full/WdrgJp)):

{% highlight "css" %}
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
}
{% endhighlight %}

Selbstverständlich können auch Einheiten gemischt werden ([Codepen-Beispiel](https://codepen.io/jensgro/full/VyeGxJ)):

{% highlight "css" %}
.grid-container {
    display: grid;
    grid-template-columns: 200px 2fr 1.5fr 1fr;
    grid-gap: 20px;
}
{% endhighlight %}

Solche Mischungen können bei Seitenlayouts sinnvoll sein, die Werbebanner beinhalten. Bannerformate sind üblicherweise nicht responsiv, sodass eine Werbespalte mit fixer Breite die richtige Lösung wäre.

Bekommt ein Grid-Container ``display: inline-grid;`` zugewiesen, wird es als Inline-Element erstellt. Es produziert also keinen Absatz um sich herum. Auch bei Flexbox gibt es eine Inline-Variante. Der sinnvolle Einsatzzweck dieser Inline-Varianten dürfte sich in engen Grenzen halten.

Neben den Spalten kann man selbstverständlich auch die Zeilen eines Layouts definieren:

{% highlight "css" %}
.grid-container {
    display: grid;
    grid-template-columns: 200px 2fr 1.5fr 1fr;
    grid-template-rows: 150px 100px;
    grid-gap: 20px;
}
{% endhighlight %}

In diesem Falle bekommen die ersten beiden möglichen visuellen Zeilen ([Codepen-Beispiel](https://codepen.io/jensgro/full/WdwRXB)) eine Höhe. Die Höhe der weiteren Zeilen richtet sich dann nach dem höchsten Element in der Zeile.

Auch für ``grid-template-columns`` und ``grid-template-rows`` gibt es eine Kurzschreibweise, hier nur für die Spalten demonstriert:

{% highlight "css" %}
.grid-1 {
    grid-template-columns: repeat(4, 1fr);
}
.grid-2 {
    grid-template-columns: repeat(2, 1fr 2fr);
}
.grid-3 {
    grid-template-columns: 150px repeat(3, 1fr);
}
{% endhighlight %}

Die repeat-Syntax ist denkbar einfach: Innerhalb des Klammerausdrucks wird erst die Anzahl der Wiederholungen notiert und danach, mit einem Komma getrennt, das zu wiederholende Muster. Bei .grid-1 werden vier gleich breite Spalten konstruiert. Bei .grid-2 werden zwei unterschiedlich breite Spalten konstruiert und diese einmal wiederholt. Und bei .grid-3 wird erst eine Spalte von 150px Breite konstruiert, danach folgen [drei gleich breite Spalten](https://codepen.io/jensgro/full/ZvWaNp).

So kann man mit sehr wenig Code das Bootstrap-Grid ([Codepen-Beispiel](https://codepen.io/jensgro/full/LeRPrK))  nachbauen:

<figure class="card">
    {% highlight "css" %}
.grid-12col {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 10px;
}
    {% endhighlight %}
    <figcaption class="card-footer">
        Bootstrap-Grid - Ausgangsposition
    </figcaption>
</figure>


<figure class="card">
    {% highlight "css" %}
.grid-4-12 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
}
    {% endhighlight %}
    <figcaption class="card-footer">
        Vier gleich große Spalten
    </figcaption>
</figure>


## Die Einheit "Fraction"

Eine echte Neuerung im CSS-Grid-Modul ist die Einheit **fraction**. Sie ermöglicht die Verteilung von Inhalten auf den übrig gebliebenen Platz. Die Einheit funktioniert analog zu den Eigenschaften ``flex-grow`` und ``flex-shrink``. Mit diesen Einheiten wird Flex-Items ein Hinweis gegeben, in welchem Verhältnis zueinander sie wachsen oder schrumpfen dürfen. Leider sind diese Werte ohne Einheit, ein Versäumnis in der Flexbox-Spezifikation, wie das W3C im Lichte der neueren Techniken zugibt. Im Gegensatz zu den Flexbox-Eigenschaften können Fractions auch Kommawerte enthalten. Jedenfalls haben Tests in Chrome und Firefox dies ergeben. Denn leider wird dies weder in der Spezifikation explizit erwähnt, noch sprechen die vielen Artikel darüber. Allerdings erscheinen ganzzahlige Werte sinnvoller und intuitiver.

Der große Vorteil der Einheit ``fr`` gegenüber Prozentwerten erschließt sich an einem einfachen Beispiel sehr schnell:

{% highlight "css" %}
/* Erst einmal traditionell in Prozent */
.grid-prozent {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-gap: 20px;
}
/* Jetzt die neue Einheit */
.grid-fr {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
}
{% endhighlight %}

Die Container sind in beiden Codebeispielen gleichmäßig in vier Spalten aufgeteilt. Störfaktor ist im Beispiel mit den Prozentwerden (``.grid-prozent``) allerdings die Einheit ``grid-gap``. Sie definiert den horizontalen und vertikalen Abstand zwischen den Grid-Items. So kämen zu den 100% Spaltenbreite beim ersten Codebeispiel noch die Abstände zwischen den vier Spalten hinzu. Der Browser würde einen horizontalen Scrollbalken zeigen.

Die Fraction-Einheit funktioniert hier anders. Der Browser schaut erst, welche Breiten (oder Höhen) fest vergeben sind und welcher Platz übrig bleibt. Diesen verbleibenden Platz verteilt der Browser dann nach dem Schlüssel, den man mit den fr-Einheiten vergibt. Im zweiten Beispiel (``.grid-fr``) würde der Browser erst einmal den Raum zwischen den Spalten von der Gesamtbreite abziehen. Den Rest würde der Browser gleichmäßig zu vier Teilen zwischen den Grid-Items verteilen. Selbstverständlich kann der Platz auch ungleich verteilt werden.

Das Beispiel mit den Prozentwerten müsste man mittels ``calc()`` folgendermassen korrigieren:

<figure class="card">
    {% highlight "css" %}
.grid-prozent-2 {
    grid-template-columns:
        calc(25% - 10px)
        calc(25% - 20px)
        calc(25% - 20px)
        calc(25% - 10px);
}
    {% endhighlight %}
    <figcaption class="card-footer">
        Breitenkorrektur mit calc()
    </figcaption>
</figure>

Diese Vorgehensweise ist umständlich, schlecht lesbar und fehleranfällig. Schließlich muss man dran denken, dass die Grid-Items am Rand nur ein halbes grid-gap auf einer Seite besitzen, während alle anderen auf beiden Seiten jeweils ein halbes grid-gap haben. Deshalb werden von den beiden äusseren Grid-Items nur jeweils 10px abgezogen. Die 20px der inneren Container muss man sich zu gleichen Teilen nach links und rechts verteilt vorstellen. Der rechte Abstand des ersten und der linke Abstand des zweiten Containers ergeben zusammen die als ``grid-gap`` definierten 20px.

Selbstverständlich kann die Einheit ``fr`` mit anderen Einheiten vermischt werden. Es geht schließlich hierbei in gewisserweise um "[Resteverwertung](https://codepen.io/jensgro/full/vpKxNa)".

<figure class="card">
    {% highlight "css" %}
.grid-fr-1 {
    grid-template-columns: 100px 1fr 1fr 3fr;
}
.grid-fr-2 {
    grid-template-columns: 100px 20% 1fr 3fr;
}
.grid-fr-3 {
    grid-template-columns: 1fr 30% 15rem 100px;
}
    {% endhighlight %}
    <figcaption class="card-footer">
        Andere mögliche Breiten-Kombinationen
    </figcaption>
</figure>

## minmax

Für flexible, responsive Layouts kann es manchmal wichtig sein, eine minimale und eine maximale Breite – respektive Höhe – angeben zu können. Bei der Grid-Spezifikation wurde daran gedacht und die Funktion ``minmax()`` eingeführt. Schauen wir uns zwei Beispiele an. Im ersten Beispiel bleibt die erste Spalte 150px breit, die dritte und vierte bekommen gleichermaßen eine Fraction vom Rest. Und die zweite Spalte soll mindestens 80px breit sein, darf aber maximal zwei Fractions breit werden:

{% highlight "css" %}
.grid-minmax-1 {
    grid-template-columns: 150px minmax(80px, 2fr) 1fr 1fr;
}
{% endhighlight %}

[Im Codepen-Beispiel](https://codepen.io/jensgro/full/jYrLyP) kann man mittels einfacher Buttons die Breite des Grids verändern. Dabei sieht man dann, wie sich der zweite Container an die Gegebenheiten anpasst.

Grids kann man auch in der Höhe flexibel begrenzen. [Im entsprechenden Codepen-Beispiel](https://codepen.io/jensgro/full/BJzwBj) ist einen Blindtext versteckt. Durch Klick auf den Button wird er angezeigt und wieder versteckt. Die zweite Zeile verändert dadurch ihre Höhe. Die Bedingungen dafür sind folgendermaßen gesetzt:

<figure class="card">
    {% highlight "css" %}
.grid-minmax-2 {
    grid-template-rows: 150px minmax(80px, 2fr) 1fr 1fr;
}
    {% endhighlight %}
    <figcaption class="card-footer">
        minimale und maximale Höhe
    </figcaption>
</figure>

In der Funktion ``minmax()`` darf die Einheit ``fr`` nur als Maximalwert, nicht als Minimalwert eingesetzt werden. Schließlich ist ``fr`` ein relativer Wert. Ein definitiver Minimalwert liesse sich damit nie erstellen. Zusätzlich gibt es noch die Schlüsselbegriffe ``auto``, ``min-content`` und ``max-content``. Mit ``min-content`` ist die Mindestbreite gemeint, die der Inhalt benötigt. Also bspw. eine Bildbreite oder das längste Wort in einem Text. Mit ``max-content`` ist dementsprechend das Maximum an für den Inhalt notwendigem Platz gemeint. Für den Maximalwert, also den zweiten Wert in der ``minmax()``-Funktion, sind ``max-content`` und ``auto`` identisch. So ergeben sich folgende Varianten:

<figure class="card">
    {% highlight "css" %}
.grid-minmax-3 {
    grid-template-columns: 150px minmax(100px, auto) 1fr 1fr;
}
.grid-minmax-4 {
    grid-template-columns: 150px minmax(min-content, 360px) 1fr 1fr;
}
.grid-minmax-5 {
    grid-template-columns: 150px minmax(150px, max-content) 3fr 1fr;
}
    {% endhighlight %}
    <figcaption class="card-footer">
        Schlüsselbegriffe bei ``minmax()``
    </figcaption>
</figure>

<aside>
<p>Ausserhalb von CSS-Grid haben die Funktionen <code>min()</code>, <code>max()</code> und <code>clamp()</code> mittlerweile für Begeisterung gesorgt. Ahmad Shadeed hat dazu einen tollen und ausführlichen <a href="https://ishadeed.com/article/css-min-max-clamp/">Einführungsartikel</a> geschrieben. In einem späteren Artikel kümmert er sich um <a href="https://ishadeed.com/article/use-cases-css-comparison-functions/">Anwendungsfälle</a> dieser Funktionen.</p>

<!-- Ausserhalb von CSS-Grid haben die Funktionen ``min()``, ``max()`` und ``clamp()`` mittlerweile für Begeisterung gesorgt. Ahmad Shadeed hat dazu einen tollen und ausführlichen [Einführungsartikel](https://ishadeed.com/article/css-min-max-clamp/) geschrieben. In einem späteren Artikel kümmert er sich um [Anwendungsfälle](https://ishadeed.com/article/use-cases-css-comparison-functions/) dieser Funktionen. -->
</aside>

## Autofit und Autofill

Der erste Parameter der ``repeat()``-Funktion ist die Anzahl der Wiederholungen des darauffolgenden Breiten-Musters. Anstatt einen konkreten Wert einzugeben, kann man die Schlüsselworte ``auto-fit`` und ``auto-fill`` benutzen.

<figure class="card">
    {% highlight "css" %}
.grid-container-autofill {
    display: grid;
    grid-template-columns:
        repeat(auto-fill, minmax(100px,1fr));
    grid-gap: 10px;
}
.grid-container-autofit {
    display: grid;
    grid-template-columns:
        repeat(auto-fit, minmax(100px,1fr));
    grid-gap: 10px;
}
    {% endhighlight %}
    <figcaption class="card-footer">
        auto-fill und auto-fit im Einsatz, mehr Beispiele bei [Codepen](https://codepen.io/jensgro/full/xpOvmW)
    </figcaption>
</figure>

Mit dem Schlüsselwort ``auto-fill`` versucht der Browser, so viele Grid-Items wie möglich in eine visuelle Zeile zu bekommen. Er richtet sich danach an der angegebenen Minimalgröße aus. Eventuell frei bleibender Platz wird nicht gefüllt.

{% figImg "css-grid/auto-fill.png", "Die auto-fill-Eigenschaft im Einsatz." %}

Auch bei ``auto-fit`` versucht der Browser, den Platz so gut es geht mit Grid-Items zu füllen. Hier bleibt kein freier Platz übrig. Bei Codepen habe ich [eine Seite zum Experimentieren](https://codepen.io/jensgro/full/xpOvmW) erstellt.

{% figImg "css-grid/auto-fit.png", "Die auto-fit-Eigenschaft im Einsatz." %}

## Areas definieren

Die einzelnen Zellen eines Grids können Webworker mit der Eigenschaft ``grid-template-areas`` benamen. Dabei können einfache Buchstaben genauso genommen werden wie ganze Wörter. Im folgenden Beispiel werden die Zellen eines 3x3-Rasters mit Namen versehen. Gleiche Namen sorgen dafür, dass die Zellen eine "Grid Area" bilden. Dabei müssen die Areas Rechtecke bilden. Die Eigenschaft ``grid-area`` ist nur die Kurzschreibform für ``grid-row-start``, ``grid-row-end`` bzw. ``grid-column-start`` und ``grid-column-end``. Die Orientierung hält sich also immer in einer visuellen Zeile oder Spalte. Deshalb ist es leider nicht möglich, ein Grid-Item in einer L-Form innerhalb eines Grids zu platzieren.

<figure class="card">
    {% highlight "css" %}
.grid-with-a-name {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: repeat(3, 80px);
    grid-gap: 10px;
    grid-template-areas:
    "kopf kopf kopf"
    "navigation hauptinhalt werbung"
    "fuss fuss fuss";
}
    {% endhighlight %}
    <figcaption class="card-footer">
        Benannte Bereiche (areas)
    </figcaption>
</figure>

Nachdem die Bereiche des Grids benannt worden sind, müssen diese noch mit Inhalten befüllt werden. Dazu können Sie Ihre Inhalte nun bequem anhand der Namen der Areas verteilen.

<figure class="card">
    {% highlight "css" %}
.main-header {
    grid-area: kopf;
}
.main-navigation {
    grid-area: navigation;
}
.main-content {
    grid-area: hauptinhalt;
}
.main-aside {
    grid-area: werbung;
}
.main-footer {
    grid-area: fuss;
}
    {% endhighlight %}
    <figcaption class="card-footer">
        Den Inhalten die Grid-Areas zuweisen
    </figcaption>
</figure>

{% figImg "css-grid/grid-area-1.png", "Die Inhalte sind den passenden Grid-Areas zugewiesen." %}

<aside>
<p>Der interessante Nebeneffekt dieser Technik ist, dass die Darstellung unabhängig von der Codereihenfolge ist. Der Browser weiß schließlich, welche Container in welchen Bereich des Grids sollen. Dies ist besonders praktisch für <a href="https://codepen.io/jensgro/full/GyjpMM">unterschiedliche Breakpoints einer responsiven Seite</a>. Zu lässig sollte man aber mit dieser Technik nicht umgehen. Denn wie bei der Flexbox-Eigenschaft <code>order</code> steht die große visuelle Kontrolle im Konflikt mit der Usability und Accessibility. Seitenbereiche, die ich visuell an anderer Stelle darstelle, als sie nach der Codereihenfolge sein sollten, sollten keine interaktiven Elemente besitzen, die mit der Tastatur fokussiert werden können. Genauer: es sollten sich keine Buttons, Links, Formularelemente darin befinden. Die Tabreihenfolge richtet sich nach der Codereihenfolge, nicht nach der visuellen.</p>
<p>Deshalb sind solche Umschichtungen in meinen Augen nur dann sinnvoll, wenn sie auf einer rein mobilen Darstellung angewendet werden. Auf dem Smartphone tabbe ich nicht nicht durch die Gegend.</p>
</aside>

Die Anzahl der Namen mit der Anzahl der zur Verfügung stehenden Grid-Items pro visueller Zeile übereinstimmen muss. Eventuell gewünschte Auslassungen werden mit einem Punkt realisiert:

<figure class="card">
    {% highlight "css" %}
.grid-with-a-name-2 {
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas:
                "kopf kopf kopf"
                "navigation hauptinhalt werbung"
                "fuss fuss .";
}
    {% endhighlight %}
    <figcaption class="card-footer">
        Auslassung einer Zelle
    </figcaption>
</figure>

{% figImg "css-grid/grid-area-2.png", "Die rechte Zelle des Fusses wurde ausgelassen." %}

Der kreative Umgang mit benamten Grid-Areas kann zu [interessanten Layoutlösungen](https://codepen.io/jensgro/full/EgNXyo) führen:

{% figImg "css-grid/grid-area-3.png", "Eine interessante Navigationsidee dank CSS-Grids." %}

Der dahinter stehende Code ist gekürzt folgender:

{% highlight "css" %}
.gridcontainer {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: 2fr repeat(10, 1fr) 2fr;
    grid-template-areas: ".. .. .. .. .. .. .. .. .. .."
                         ".. .. item5 item4 item2 .. .. .. .. .."
                         ".. .. .. item1 item1 .. item13 .. .. .."
                         ".. .. .. item1 item1 item9 item10 .. .. .."
                         ".. .. .. item7 item3 item6 item6 .. .. .."
                         ".. .. .. item11 item8 item6 item6 .. .. .."
                         ".. .. .. item12 item14 item14 item17 item18 .. .."
                         ".. .. .. .. item14 item14 item16 .. .. .."
                         ".. .. .. .. .. item15 .. .. .. ..";
    grid-gap: 5px;
}
{% endhighlight %}

Der Autor markiert die Auslassungen in diesem Beispiel mit zwei Punkten. Auf diese Weise können Sie sehr einfach einen Container über mehrere Spalten und Zeilen verteilen sowie mit Auslassungen gestalten. Auslassungen werden mit mindestens einem Punkt gekennzeichnet. Wenn Sie aus optischen Gründen mehrere Punkte nutzen möchten, können Sie dies tun, solange kein Lerraum zwischen den Punkten ist. Ein Leerschritt würde den Übergang in eine neue Zelle markieren.

## Browser-Support

Im ersten Halbjahr 2022 wurde der Support für den IE11 eingestellt. Aus Frontendentwickler-Sicht ist dieser Browser tot. Deshalb gibt es keinen Grund mehr, sich nicht intensiv mit allen Facetten von CSS-Grid auseinanderzusetzen. Alle modernen Browser beherrschen alle Aspekte dieser Technik.

Es ist deshalb weder notwendig, mit Feature Queries oder mit Autoprefixer zu arbeiten.

## Zweidimensional

Nachdem wir einen kleinen Einblick in die mächtige Technik der CSS-Grids bekommen haben, stellt sich trotzdem unweigerlich die Frage, ob nicht der Einsatz von Flexbox vollkommen ausreichend ist. Der  Komplexitätsgrad von CSS-Grid wirkt schon innerhalb dieses Artikels recht groß, ist aber in Wahrheit noch viel größer.

Der große Unterschied von CSS-Grids zu Floats und dem ebenfalls recht neuen Flexbox ist, dass CSS-Grids zwei-dimensional agieren können. Floats funktionieren nur horizontal, Flexbox nur horizontal oder vertikal. Bei den CSS-Grids können die Grid-Items horizontal und vertikal verteilt werden:

<figure class="card">
    {% highlight "css" %}
.container{
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-areas:
        "header header"
        "main sidebar"
        "footer sidebar";
    grid-gap: 60px;
}
    {% endhighlight %}
    <figcaption class="card-footer">
        Zwei-Dimensionale Verteilung mit CSS-Grids
    </figcaption>
</figure>

Im obigen Beispiel wird ein Grid-Item horizontal als „header“ und ein anderes als „footer“ verteilt. In der gleichen Regel wird ein weiteres Element vertikal als „sidebar“ ausgerichtet. Diese Flexibilität innerhalb einer Regel bietet keine andere Technik.

Bei der Arbeit mit Flexbox muss man sich immer für eine Hauptrichtung entscheiden. Innerhalb dieser werden die Flex-Items ausgerichtet. Im folgenden Beispiel werden die direkten Kindelemente des Elements mit der Klasse .flex-container horizontal ausgerichtet, es ist die Standardrichtung:

{% highlight "css" %}
.flexbox-container {
    display: flex;
}
{% endhighlight %}

Man kann dafür sorgen, dass Flex-Items, die nicht mehr in eine visuelle Zeile passen, in eine neue rutschen. Man kann aber nicht dafür sorgen, dass diese neue Zeile eine abweichende Höhe hat. Wir haben keine Kontrolle über die implizit entstehenden neuen Zeilen. Bei CSS-Grids haben wir diese Kontrolle.

Durch die Hinzugabe der Eigenschaft ``flex-direction: column;`` würden die Flex-Items des obigen Beispiels nicht mehr horizontal, sondern vertikal laufen. Man muss zwischen beiden Optionen wählen. Bei CSS-Grids muss man dies nicht. Man kann die einen Elemente horizontal, die anderen vertikal ausrichten. Und dafür benötigen wir zudem weniger HTML. Denn da Flexbox nur in eine Richtung funktioniert, benötigen wir zur Kombination beider Richtungen einen extra Wrapper, wie ich an einem [einfach gehaltenen Layoutbeispiel](https://codepen.io/jensgro/full/GQgMdo) demonstriere. In der [CSS-Grid-Variante](https://codepen.io/jensgro/full/jZEaQJ) wird der Wrapper nicht benötigt. Die grobe Struktur beider Varianten sieht folgendermaßen aus:

<figure class="card">
    {% highlight "html" %}
<!-- Die Flexbox-Variante -->
<div class="container">
    <header class="page-header"> </header>
    <main class="main-and-sidebar">
        <section class="main"> </section>
        <aside class="sidebar"> </aside>
    </main>
    <footer class="page-footer"> </footer>
</div>
<!-- Die CSS-Grid-Variante -->
<div class="container">
    <header class="page-header"> </header>
    <main class="main"> </main>
    <aside class="sidebar"> </aside>
    <footer class="page-footer"> </footer>
</div>
    {% endhighlight %}
    <figcaption class="card-footer">
        Struktur einer einfachen Seite im Vergleich: Flexbox und CSS-Grid
    </figcaption>
</figure>

Der Browser berechnet bei Flexbox primär in eine Richtung – horizontal oder vertikal. Bei CSS-Grids hingegen rechnet er in zwei Richtungen – horizontal und vertikal. Deshalb sind mit CSS-Grids komplexere Layouts einfacher möglich. Flexbox spielt seine Stärken in einzelnen Modulen aus, also quasi für Mikro-Layout, wohingegen CSS-Grids für Seitenlayouts geschaffen wurden.

Wir sollten allerdings die alten, traditionellen Techniken nicht vergessen. Sie haben trotz dieser beiden neuen Techniken noch immer ihre Berechtigung. Wenn eine Navigation mit ``display: inline-block`` oder Floats wunderbar und ohne Nachteile funktioniert, gibt es keinen vernünftigen Grund, auf eine andere Technik umzusteigen. Diese lohnt nur, wenn sie einen Vorteil bringt.

Es ist zudem ein Irrtum, dass CSS-Grids alle anderen Techniken ersetzen. Jede Technik hat ihre Berechtigung, ihre Vor- und Nachteile. CSS-Grids füllen eine Lücke, die vorher nur mit Müh und Not mit Hilfe von dazu nicht primär nicht gedachten Techniken gestopft wurde. Grids können in sehr vielen Situationen ihre Stärken ausspielen.

<aside>

## Informationsquellen

CSS-Grids sind eine umfangreiche und teilweise kompliziert zu erfassende Technik. Vertiefende und erweiternde Informationen gibt es an vielen Ecken des Internets, sowohl als einzelne Artikel, komplette Infoseiten und als Videotutorials unterschiedlicher Komplexität.

Die Seite [Grid by Example](https://gridbyexample.com) von Rachel Andrew sollte die erste Anlaufstation sein. In kurzen Artikeln mit eingebetteten Codepen-Beispielen und Links zur W3C-Spezifikation führt sie ins Thema ein. Wer mag, kann sich die einzelnen Themen auch in kleinen Videotutorials anschauen. Zusätzlich gibt es eine Vielzahl fertiger Beispiele, anhand derer man selbst mit der neuen Technik experimentieren kann.

Rachel Andrew ist auch mit verantwortlich für die umfangreiche Abhandlung im [Mozilla Developer Network](https://goo.gl/FRFW8s), die teilweise in deutscher Übersetzung vorliegt. Sehr empfehlenswert ist auch der Abschnitt über CSS-Grids in der [CSS-Referenz von Codrops](https://goo.gl/wczTww).

Bei CSS-Tricks gibt es den [A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/). Und auch [SELFHTML](https://wiki.selfhtml.org/wiki/CSS/Tutorials/Grid) bietet einen gut strukturierten Bereich zum Lernen von CSS-Grid an. Und bei Mediaevent gibt es eine interessante Einführung in "[CSS Grid in vier einfachen Schritten](https://www.mediaevent.de/css/grid.html)".

Oder sind ein paar Videotutorials gefällig? Dann sind die 25 Lektionen von Wes Bos sicher eine gute Empfehlung. Der Kanadier hat – von Mozilla finanziert – seinen [kostenlosen und umfangreichen Kurs](https://cssgrid.io) Anfang 2018 veröffentlicht. Inhaltlich kann daran aber kein Vergang sein. Konkrete praktische Fragen geht Jen Simmons in ihrer Videocast-Serie [Layoutland](https://goo.gl/Bw5DAq) auf Youtube an.

[Griddy](https://griddy.io/) ist ein Online-Tool, mit dem man sich ein Grid zusammenklicken kann. Natürlich mit Codeausgabe. Spielerisch kann man sich dem Thema im [Grid Garden](http://cssgridgarden.com/#de) nähern.
</aside>

## Fazit

Endlich gibt es eine ausgefeilte Technik für Seitenlayouts. Und da der IE mittlerweile tot ist, müssen wir uns auch nicht mehr in der Verwendung zurückhalten. Im Gegensatz zu früher haben wir keine unterschiedlichen Versionen mit Vendor-Prefixes wie ``-webkit-`` und ``-moz-``. Glücklicherweise ist die neue Technik so in alle modernen Browser integriert, dass sie alte Layoutlösungen einfach überschreibt. Man kann also ältere Projekte sukzessive modernisieren und behält einen Fallback immer bei. Viel Spaß bei der Gestaltung der Zukunft!
