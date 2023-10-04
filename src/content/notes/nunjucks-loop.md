---
title: Einen Teil eines Loops durchlaufen
tags: 
    - nunjucks
    - template
    - 11ty
source: 
    - "http://mozilla.github.io/nunjucks/templating.html#for"

---

{% highlight "js" %}

{% raw %}{% for images in index %}{% endraw %}
{% raw %}{% if (loop.index <= 5) %}{% endraw %}
    <div class="spacer col-md-2 col-sm-6"> 
    
    </div>
    <div class="yellp-img col-md-2 col-sm-6">
        <img src="/uploads/images/{{ images.image.filename }}" />
    </div>
{% raw %}{% endif %}{% endraw %}
{% raw %}{% endfor %}{% endraw %}

{% endhighlight %}

Inside loops, you have access to a few special variables:

- `loop.index`: the current iteration of the loop (1 indexed)
- `loop.index0`: the current iteration of the loop (0 indexed)
- `loop.revindex`: number of iterations until the end (1 indexed)
- `loop.revindex0`: number of iterations until the end (0 based)
- `loop.first`: boolean indicating the first iteration
- `loop.last`: boolean indicating the last iteration
- `loop.length`: total number of items

