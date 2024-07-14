---
title: Nunjucks in 11ty
tags:
    - 11ty
    - nunjucks
source:
    - https://github.com/11ty/eleventy/issues/2611
---

Es kann sehr sinnvoll sein, in 11ty keine Markdown-Dateien, sondern Nunjucks-Dateien zu erstellen um spezielle Nunjucks-Features zu nutzen.

Hierfür muss man den Verweis auf das Template aus dem Frontmatter lösen. Das FRontmatter kann trrotzdem weiter genutzt werden. Für die Verwendung des Templates "extended" man die Nunjucks-Datei.

{% highlight "twig" %}
{% raw %}
{% extends 'template.njk' %}
{% endraw %}
{% endhighlight %}

Dann kann man auch zwei oder mehr Contentblöcke in einer Seite nutzen:

{% highlight "twig" %}
{% raw %}
---
title: "My page"
parameter1: lorem
parameter2: ipsum
parameter3: 3333
---
{% extends 'template.njk' %}

{% block content %}
   <h1>Title content 1</h1>
   <p>Lorem ipsum</p>
{% endblock %}

{% block content2 %}
    <h2>Title content 2</h2>
    <p>Lorem ipsum</p>
{% endblock %}

{% endraw %}
{% endhighlight %}
