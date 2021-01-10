---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

An eventual (building) collections of resources that I frequently need for use or refreshers.

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
