---
layout: page
title: Basics (Probability)
topic: stats
---
$$\newcommand{\prob}[1]{\mathbb{P}(#1)} \newcommand{\cprob}[2]{\prob{#1 \;|\; #2}}$$

# Definitions  
*	**Sample space** - The set containing all possible <span style="color:#FF8F1F">*outcomes*</span>  
*	**Outcome** - The result of a random experiment  
*	**Probability** of an event $E$, written as $\prob{E}$:
	- Measures how likely event $E$ is from a random experiment
	- Long run frequency of $E$ in repeat experiments. 

<br>
# Kolmogorov's probability axioms
* 	For any event, $E$, the probability will be between 0 and 1, 
	<ul> $$0 \leq \prob{E} \leq 1$$ </ul>
*	The probability of the set of all possible events is 1,
	<ul> $$\prob{S} = 1$$ </ul>
*	For any sequence of mutually exclusive events $E_1, E_2, ...$ then,
	<ul> $$\prob{\cup_{u=1}^{\infty}} = \sum_{i=1}^{\infty}\prob{E_i}$$ </ul>

<br>
# Helpful Deductions
**De morgan's laws** 

$$ 
\begin{align*}
	(A \cup B)^{\complement} &= A^{\complement} \cap B^{\complement} \\
	(A \cap B)^{\complement} &= A^{\complement} \cup B^{\complement} 
\end{align*}
$$

**Logically deductions**

$ A \subseteq B$ means $A$ implies $B$.  

$ \prob{A^\complement} = 1 - \prob{A}$.

If $A \cap B = \emptyset$, then the events are <span style="color:#FF8F1F">mutually exclusive</span>.

If $A$ and $B$ are mutually exclusive, $\prob{A \cup B} = \prob{A} + \prob{B}$


**Additive law**  
$\prob{A \cup B} = \prob{A} + \prob{B} - \prob{A \cap B}$

<br>
# Equally likely outcomes
If all outcomes are equally likely, then  
$$\prob{E} = \frac{\text{number of outcomes in }E}{\text{total number of possible outcomes}}$$

Multiplication rule - FILL IN  
Permutations - FILL IN
Combinations - FILL IN

<br>
# Conditional Probability  
$$\cprob{B}{A} = \frac{\prob{A \; \cap \; B}}{\prob{A}}$$  

If $B \subseteq A$, then $\cprob{A}{B} = 1$. Because $B$ implies $A$.  

Multiplication law  
$$ \prob{A \cap B} = \cprob{A}{B} \times \prob{B} $$  

Law of total probability (2 choices)  
$$ \prob{A} = \cprob{A}{B} \times \prob{B} + \cprob{A}{B^\complement} \times \prob{B^\complement} $$  
Note: This is summing each branch of the probability tree that contains $A$.

Bayes Rule (Can derive this from the first statement)  
if $\prob{A} > 0$ and $\prob{B} > 0$, the $\cprob{A}{B} = \frac{\cprob{B}{A} \times \prob{A}}{\prob{B}}$

**More logically deductions**  
Two events $A$ and $B$ are independent if and only if $\prob{A \cap B} = \prob{A} \times \prob{B}$.  

<span style="color:#FF8F1F">Independences</span> implies,  

$$\cprob{A}{B} = \prob{A}  \;\;\text{and}\;\; \cprob{B}{A} = \prob{B}.$$