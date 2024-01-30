---
title: Einen Teil eines Loops durchlaufen
tags: 
    - nunjucks
    - template
    - 11ty

source: 
    - "http://mozilla.github.io/nunjucks/templating.html#for"

---

```twig
<ol>
{% raw %}{% for listitem in list %}{% endraw %}
{% raw %}{% if (loop.index <= 5) %}{% endraw %}
    <li>{% raw %}{{ listitem.item }}{% endraw %}</li>
{% raw %}{% endif %}{% endraw %}
{% raw %}{% endfor %}{% endraw %}
</ol>
``` 

In Loops gibt es einige spezielle, eingebaute Variablen:

- `loop.index`: die aktuelle Iteration der Schleife (beginnend mit 1)
- `loop.index0`: die aktuelle Iteration der Schleife (beginnend mit 0)
- `loop.revindex`: Anzahl der Iterationen bis zum Ende (beginnend mit 1)
- `loop.revindex0`: Anzahl der Iterationen bis zum Ende (beginnend mit 0)
- `loop.first`: Die erste Iteration (Boolean)
- `loop.last`: Die letzte Iteration (Boolean)
- `loop.length`: Absolute Anzahl an Items

