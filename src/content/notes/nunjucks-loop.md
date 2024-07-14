---
title: Einen Teil eines Loops durchlaufen
tags:
    - nunjucks
    - template
    - 11ty

source:
    - "http://mozilla.github.io/nunjucks/templating.html#for"

---

{% highlight "twig" %}
{% raw %}
<ol>
    {% for listitem in list %}
    {% if (loop.index <= 5) %}
        <li>{{ listitem.item }}</li>
    {% endif %}
    {% endfor %}
</ol>
{% endraw %}
{% endhighlight %}

In diesem Beispiel gehe ich davon aus, dass das Array aus Objekten besteht, die mindestens ein ``"item"`` haben.

In Loops gibt es einige spezielle, eingebaute Variablen:

- `loop.index`: die aktuelle Iteration der Schleife (beginnend mit 1)
- `loop.index0`: die aktuelle Iteration der Schleife (beginnend mit 0)
- `loop.revindex`: Anzahl der Iterationen bis zum Ende (beginnend mit 1)
- `loop.revindex0`: Anzahl der Iterationen bis zum Ende (beginnend mit 0)
- `loop.first`: Die erste Iteration (Boolean)
- `loop.last`: Die letzte Iteration (Boolean)
- `loop.length`: Absolute Anzahl an Items

