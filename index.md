---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

An eventual collections of resources that I frequently need for use or refreshers. Everything will be tweaked overtime.

## Math ##

<script type="text/tikz">
  \begin{tikzpicture}
    % coordinate axis
    \draw[<->] (-2.5,0) -- (4,0);
    \draw[<->] (0,-2.5) -- (0,2.5);
    % circle
    \draw (0,0) circle (2cm);

    \coordinate  				(A) at (60:2);
    \coordinate                 (O) at ( 0:0);
    \coordinate  				(S) at ( 0: {2 * cos(60)});		% sin(x)
    \coordinate  				(T) at ( 0: {2 * tan(60)});		% tan(x)


    % angles
    \draw[thick]    (A) -- (S)  (O) -- (A); 	% Triangle
    \draw[thick] 	(T) -- (A); 				% Tangent line

  \end{tikzpicture}
</script>


<!-- How to run     - https://stackoverflow.com/questions/53267193/p5js-with-jekyll -->
<!-- How to convert - http://jonathan.dahlberg.media/processing2js/ -->
<!-- Load processing script -->
<div id="sketch-unitCircle"></div>
<script src="{{site.baseurl}}/assets/animations/unitCircle.js"></script>
<!-- <script src="{{ base.url | prepend: site.url }}/animations/unitCircle.js"></script> -->

<!-- <script src="unitCircle.js"></script> -->

<!-- Note important change made in the sketch file
    const canvas = createCanvas(800, 400);
    canvas.parent('sketch-holder') -->

Cool, I can embed animations I made with processing.
