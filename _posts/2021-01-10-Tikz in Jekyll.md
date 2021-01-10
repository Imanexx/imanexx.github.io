---
layout: post
title: 	Tikz in Jekyll
date: 	2021-01-10
---
I want to be able to use LaTex for my math summaries. I am currently using MathJax in Jekyll - which does a great job at rendering basic math equations.  
I found a substitution script to make the syntax similar to what I am used to writing in OverLeaf.

{% highlight html %}
<!-- Substitutes latex notation for mathjax -->
<script type="text/x-mathjax-config">
MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    processEscapes: true
  }
});
</script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/latest.js?config=TeX-MML-AM_CHTML' async></script>
{% endhighlight %}
However this is not quite enough - I want to also render drawings using code:

<script type="text/tikz">
  \begin{tikzpicture}
    % coordinate axis
    \draw[<->] (-2.5,0) -- (5,0);
    \draw[<->] (0,-2.5) -- (0,2.5);
    % circle
    \draw (0,0) circle (2cm);

    \coordinate  				(A) at (60:2);
    \coordinate                 (O) at ( 0:0);
    \coordinate  				(S) at ( 0: {2 * cos(60)});		% sin(x)
    \coordinate[label=above:T]  (T) at ( 0: {2 * tan(60)});		% tan(x)


    % angles
    \draw[thick]    (A) -- (S)  (O) -- (A); 	% Triangle
    \draw[thick] 	(T) -- (A); 				% Tangent line

  \end{tikzpicture}
</script>


\
This is done using TikZJax - which converts TikZ code into a SVG.  
I have added this in `_layouts/default`. Since it's an addition to the minima theme you need to find the `default.html` from their [repo][minima].


{% highlight html %}
<!-- All TikZ code drawings -->
<link rel="stylesheet" type="text/css" href="https://tikzjax.com/v1/fonts.css">
<script src="https://tikzjax.com/v1/tikzjax.js"></script>
{% endhighlight %}


I spent some time trying some other alternatives such as `tex4ht` and `make4ht`. I ran into some problems with converting `.tex` to `.html`. In the end I was missing a lua object which is a pain; probably a WSL issue, I am not entirely sure. 

What I am using currently should be good enough, however there seems to still be some issues. If I put `$\frac{2}{3}$` into a lable for a tikz drawing it will not render the text properly. I will have to work this out later.

\
**Useful Links**
+ [Tikzjax repo][repo]
+ [SO post of repo][SO]
+ [Unit circle example][example]
+ [Theme edits][theme edits]
+ [SO Mathjax][SO mathjax]

\
**Extra**  
Interestingly enough in the SO post I noticed more talk about adding additional `\usepackage `. I will have to look into this at a later date.
> That is a great start! I took a look and had some success. Do you know if there is any way to capture additional \usepackage requests when using this? I was able to create any tikz construction I found except for those using additional packages, which is unfortunately a decent constraint at this point. – Alex Gold Feb 24 '19 at 7:58 

> Yes, if you have say TeXlive installed on your own machine, you can generate a coredump with all your desired packages preloaded (which is valuable because preloading packages is MUCH faster). To do this, run initex.js from github.com/kisonecat/web2js Another (slower) option is to add the desired files to the fake filesystem and ship those files to the browser. – kisonecat Feb 24 '19 at 14:09


[repo]: https://github.com/kisonecat/tikzjax
[example]: https://tex.stackexchange.com/questions/356618/how-can-i-draw-a-chord-of-a-unit-circle/356631
[SO]: https://stackoverflow.com/questions/50432295/using-tikz-in-a-browser-like-mathjax
[minima]: https://github.com/jekyll/minima/blob/master/_layouts/default.html
[theme edits]: https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-using-jekyll#customizing-your-jekyll-themes-html-layout
[SO mathjax]: https://stackoverflow.com/questions/50998466/how-to-use-latex-in-new-jekyll-gem-based-theme-minima/51001619#51001619