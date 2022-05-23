---
layout: page
title: Basics (Stats)
topic: stats
---
$$\newcommand{\prob}[1]{\mathbb{P}(#1)} \newcommand{\cprob}[2]{\prob{#1 \;|\; #2}} \newcommand{\mean}[1]{\bar{#1}}$$

# Terminology
**Population** - Total collection of elements we are interested in obtaining information about.  
**Individuals/Units** - The elements.  
**Sample** - Subset of the population that has been observed.  
**Data** - The measurements collected over the sample during investigation.  
**Descriptive statistics** - Process of organising, describing and summarising data.
**Variable**  
*	Numerical (Quantitative - Quantity)
	- Measured as a number, where meaningful arithmetic operations makes sense.
*	Categorical (Qualitative - Quality)
	- Take a value that is one of several possible categories (no numerical meaning).


# When analysing data:
-	What are the main <span style="color:#FF8F1F">Properties</span> of the data?
-	What is the <span style="color:#FF8F1F">research Question</span>?
	- Is it descriptive or asking for inference?
	- Are we trying to estimate a key quantity or test a specific hypothesis.

# Graphical Summaries

|  | One Variable | - | Two Variables | - | - |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Variable Type | Categorical |  Quantitative | Both Categorical | Categorical and Quantitative | Both Quantitative |
| Useful Graphs | Bar Chart | Boxplot, Histogram | Clustered Bar Char | Comparative Boxplots | Scatterplot |
| Useful numbers | Table of Freq. | Mean and standard deviation, or 5-num. summary | Table of Freq. | Mean and standard deviation, or 5-num summary for each group | correlation or regression | 

# Equations
**Mean**
$$ \mean{x} = \frac{1}{n} \sum_{i=1}^{n} x_{i} $$

**Median** - Value that divides data into two equal parts
When $n$ is odd, pick middle most position.
When $n$ is even, average middle two values.

# Comments on histogram **(Direct from slides)**:  
An empirical rule for determining the number of classes in a histogram is $\text{number of classes≃} \sqrt{\text{number of observation}}$.  
When commenting on a histogram, we should comment on
-	whether the data is symmetric or skewed to the right/left,
-	if there are any possible outliers,
-	the typical value of the data and the range of the data,
-	if the data is unimodal or bimodal/multimodal,
-	if the data is bell-shaped or not.  

When commenting on a boxplot, we should comment on  
-	whether the data is symmetric or skewed to the right/left,
-	if there are any possible outliers,
-	the typical value of the data and the range of the data.

# Comments on Quartiles **(Direct from slides)**:
*	We can divide a sample into four equal parts at sample quartiles
	- The first or lower quartile  q1  is the value that has 25% of the observations below (or equal to) it and 75% of the observations above (or equal to) it
	- The third or upper quartile  q3  is the value that has 75% of the observations below (or equal to) it and 25% of the observations above (or equal to) it
	- The second quartile  q2  would split the sample into two equal halves (50% below - 50% above): that is the median ( m=q2 )
*	More generally, the sample ( 100×p )th percentile (or quantile) is the value such that  100×p % of the observations are below this value (or equal to it), and the other  100×(1−p) % are above this value (or equal to it).


TODO - Put formulas from 1.8

# Matlab commands
```
quantile(s,[0.25 0.75])  
quantile(a, [0 0.25 0.5 0.75 1])  # 5 num summary
quantile(s, 0.25) - (1.5 * iqr(s))  
quantile(s, 0.75) + (1.5 * iqr(s)) 
``` 