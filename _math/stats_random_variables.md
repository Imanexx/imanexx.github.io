---
layout: page
title: Random variables
topic: stats
---
$$\newcommand{\prob}[1]{\mathbb{P}(#1)} \newcommand{\cprob}[2]{\prob{#1 \;|\; #2}} \newcommand{\mean}[1]{\bar{#1}} \newcommand{\set}[1]{\{#1\}}$$

# Random Variable  
The value of the a random variable is determined by the outcome of the experiment.  
Example: Rolling Two Dice.  

$$ S = \{(1,1), (1,2), (1,3), ... , (6,5), (6,6)\} $$  

What is the sum of both dice? When we only care about the result of the outcome we can use a random variable.  

$$ \text{Let }X\text{ be the sum of two dice that have been rolled.}\\ 
$$

$S_X$ are all the possible values taken from $X$; Domain of variation of $X$. 

$$ S_X = \{2, 3, 4, 5, ... , 11, 12\} $$


Hence,  

$$ 
\begin{align*}
	(X = 2) &= \set{(1,1)} &\rightarrow \prob{X=2} &= \frac{1}{36}\\ 
	(X \geq 11) &= \set{(5,6), (6,5), (6,6)} &\rightarrow \prob{X \geq 11} &= \frac{3}{36}.
\end{align*} 
$$

X = random variable, x = observation.
Eg. X = height of a person, x = 182cm.

**Definition:** 
A random variable is a real-valued function defined over a sample space S,  

$$ 
\begin{align*}
	X : S &\rightarrow \mathbb{R}\\
	w &\rightarrow X(w)\\
\end{align*} 
$$

# Random Variable Probability Rules  
$\prob{X \in S_X} = 1$  

If Mutually Exclusive then,  
$\prob{(X = x_1) \cup (X = x_2)} = \prob{X = x_1} + \prob{X = x_2} \;\; \text{if } x_1 \neq x_2$  

$\prob{X < x} = 1 - \prob{X \geq x}$  

<br>
# Cumulative Distribution Function (CDF)  
The distribution is used to describe a random variable. Usually defined as:

$$F(x) = \prob{X \leq x}$$  

"X follows the distribution F", is denoted as:  

$$X \sim F$$  

You can calculate probabilities of random variable when knowing the CDF.

# Properties  
*	For any $a \leq b, \prob{a < X \leq b} = F(b) - F(a)$
*	$F$ is a non-decreasing function.  
*	$\lim_{x \to +\infty} F(x) = F(+\infty) = 1$  
*	$\lim_{x \to -\infty} F(x) = F(-\infty) = 0$  


# Discrete Random Variable  
The variable is discrete if it takes a finite number of values (or at most countably infinite).  
The <span style="color:#FF8F1F">"Probability Mass Function"</span> (PMF) of a discrete random variable X is defined for any real number x,  

$$p(x) = \prob{X = x}$$ 

Note: Summing all probabilites in PMF, p, will equal 1.  

$$\prob{X \in S_X} = \sum_{X \in S_X} p(x) = 1$$

The Bernoulli Random Variable takes two values.  
$S_X = {0,1}$ with probability $\pi$ of getting one. ($\pi$ is the greek letter for 'p' to represent probability. Yes this an overloaded term)

$$ p(1) = \pi \;\;\text{and} \;\; p(0) = 1 - \pi. $$


# Continuous Random Variable  
Measuring some variable on a scale.  

Defined over an uncountable set of real numbers; over some interval.  
A continuous random variable exists if there is a non-negative function $f(x)$ defined for all real $x \in \mathbb{R}$ such that for any set $B$ of real numbers,  

$$\prob{X \in B} = \int_B f(x) dx$$

where $f(x)$ is the probability density function (pdf).

Wherever $F$ is differentiable, $F(x) = \prob{X \leq x} = \int_{-\infty}^{x} f(y) dy$,  
Then $f(x) = \frac{dF(x)}{dx} = F'(x)$.  

**Properties**  
$f(x) \geq 0$ for all $x \in \mathbb{R}$.  
$\prob{a \leq X \leq b} = \int_{a}^{b} f(x)dx = F(b) - F(a).$  

$\int_{-\infty}^{+\infty} f(x)dx = 1$  

$\prob{X = x} = \int_x^x f(x)dx = 0$. 

The pdf plays the same role for continuous variables as the pmf plays for discrete variables.

<br>
# Properties
The expectation (mean) of a random variable $X$, denoted $\mathbb{E}(X)$ or $\mu$, is defined by:  
$\mu = \mathbb{E}(X) = \sum_{x \in S_X}x\;p(x)$ for a discrete random variable.  
$\mu = \mathbb{E}(X) = \int_{S_X}x\;f(x)$ for a continuous random variable.  

Suppose $g(X)$ is some function of $X$.   
$\mathbb{E}(g(X)) = \sum_{x \in S_X}g(x)\;p(x)$ for a discrete random variable.  
$\mathbb{E}(g(X)) = \int_{S_X}g(x)\;f(x)$ for a continuous random variable.

Linear Transform - For two constants $a$ and $b$, $\mathbb{E}(aX + b) = a\mathbb{E}(X) + b. $
