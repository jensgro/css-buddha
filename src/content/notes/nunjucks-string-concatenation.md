---
title: String concatenation in Nunjucks
tags:
    - nunjucks
    - template
    - 11ty
source:
    - https://github.com/11ty/eleventy/issues/297
    - https://michaelheap.com/nunjucks-concatenate-string/
---

Es gibt mehrere Wege, Variablen in Nunjucks zu setzen und zu nutzen.

{% highlight "js" %}
{% raw %}
{% set canonical = config.baseUrl + page.url %}
{% endraw %}
{% endhighlight %}

Wenn es mehrere Operationen benötigt und alles ein wenig unübersichtlich zu werden droht, kann man auch diesen Weg beschreiten:

{% highlight "js" %}
{% raw %}

{% set canonical %}
{{ config.baseUrl }}{{ page.url }}
{% endset %}

{% endraw %}
{% endhighlight %}

Aufpassen muss man aber, wenn man nicht nur Variablen miteinander kombiniert, sondern auch Text dazu kommt. Dann muss ein anderer Weg beschritten werden:

{% highlight "js" %}
{% raw %}

{% set url = ["/bits/", data.slug] | join %}

{% endraw %}
{% endhighlight %}

Hier wird ein Array erstellt, dessen Bestandteile dann mit ``join`` zusammengefasst werden.
