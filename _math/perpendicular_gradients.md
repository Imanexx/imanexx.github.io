---
layout: page
title: Gradients of perpendicular lines $(m_1 \cdot m_2 = -1)$
topic: algebra
---
I was looking at some questions concerning tangent lines to curves and then finding the normal equation. This is when I came across the following:

{% raw %} <!-- tell jekyll to not take any notice of syntax for liquid etc. -->
$$
\fbox{
	If two lines, with gradients $m_1$ and $m_2$ are at right angles then $m_1 \cdot m_2 = -1$.
}
$$
{% endraw %}

I had always accepted that the gradient of the normal is $-\frac{1}{m}$ but I had never considered the proof. And this is a bit of a weird question to look up so here is a few answers.
<h6>(Maybe there is a better title or name for this result)</h6>  

# Trigonometric reasoning

The general idea here is to get any two perpendicular lines and place them on the unit circle. Using the angles formed between the x-axis to each line you can then algebraically prove the claim using trigonometric identities. 

<!-- https://tex.stackexchange.com/questions/269916/drawing-the-unit-circle-on-the-r2-plane-and-some-extra-features -->
<!-- The above link has an interesting way of listing points and other stuff. I should read this later -->
<script type="text/tikz">
$$

\begin{tikzpicture}
\tikzset{>=stealth}
% draw axises and labels. Store a single coordinate to have the
% direction of the x axis
\draw[<->] (-4.0,0) -- ++(8,0) coordinate (X) node[below] {$x$};
\draw[<->] (0,-4.0) -- ++(0,8) node[left] {$y$};


\newcommand\CircleRadius{3cm}
\draw (0,0) circle (\CircleRadius);

\coordinate[label=A]  		(A) at (60:3);
\coordinate[label=B]  		(B) at (150:3);
\coordinate                 (O) at (0:0);

% The scripts I am running have problems with the proper labeling. So this is a hack
\coordinate[label=$\theta$]  				(ang1) at (0:0.4);
\coordinate[label=$\theta+(\pi/2)$]  		(ang2) at (125:0.6);

% For dotted lines
\coordinate  		(A1) at (60:5);
\coordinate  		(B1) at (150:5);
\coordinate  		(A2) at (-30:5);
\coordinate  		(B2) at (-120:5);

% angles
\draw[thick]    (O) -- (A)  (O) -- (B); 	% Lines on circle
% Dotted lines
\draw[dotted]   (O) -- (A1)  (O) -- (B1) (O) -- (A2)  (O) -- (B2); 
\end{tikzpicture}

$$
</script>

In the above diagram there are two lines, $A$ and $B$.  
The gradient of line $A$ is an arbitrary angle $\theta$ defined from the x-axis to the line.  
Line $B$ has a gradient $\theta + \frac{\pi}{2}$. Which is an added $90°$ rotation to line $A$, making $A$ and $B$ perpendicular.


Let $m_1, \; m_2$ be the gradients of $A, B$ respectively. The gradient of each line is given by $\frac{\text{rise}}{\text{run}}$.  

Hence, 

$$
\begin{align*}
    m_1 &= \frac{sin(\theta)}{cos(\theta)} \\
   		&= tan(\theta) \\
   		&\\
   	m_2 &= \frac{sin(\theta + \frac{\pi}{2})}{cos(\theta + \frac{\pi}{2})} \\
   	&= tan(\theta + \frac{\pi}{2}) \\
   	&= -cot(\theta),\; \text{complemntary arcs}.\\
   		&\\
   	m_1 \cdot m_2 &= tan(\theta) \times -cot(\theta) \\
   				   &= {\frac{sin(\theta)}{cos(\theta)}} \times -\frac{cos(\theta)}{sin(\theta)} \\
   	m_1 \cdot m_2 &= -1. \\
\end{align*}
$$

There we go. This is quite neat. To generalize, you can find the normal gradient of $m_1$ by simply rearranging the equation above to $m_1 = \frac{-1}{m_2}$.

# Vector reasoning
The direction vector of the line $y = m_1x + b$ is denotated as 
$$
  \begin{align*}
    y &= \begin{bmatrix}
           1 \\
           m \\
         \end{bmatrix}
  \end{align*}
$$

Two lines are perpendicular if and only if the vectors are normal. We can use the dot product to see if the two vectors are pointing away from each other such that they are perpendicular. In this case the result will be $0$. 

$$
  \begin{align*}
  	\begin{bmatrix}1 \\ m_1 \\ \end{bmatrix} \cdot \begin{bmatrix}1 \\ m_2 \\ \end{bmatrix} &= 0 \\
  	(1 \times 1) + (m_1 \times m_2) &= 0 \\
  	m_1 \times m_2 &= -1 \\
  \end{align*}
$$

A much quicker proof, although I prefer the geometry of the first proof for the time being.

<h6>(I would like to rephrase this section at some point once I revise vector math again)</h6>