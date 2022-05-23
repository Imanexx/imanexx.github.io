---
layout: page
title: Matlab Commands
topic: stats
---
Get rid of scientific notation
```
format longG
```


Binomial Distribution.  
$X \sim Bin(10, 0.01)$  

Poisson Distribution.
$X \sim P(20)$ where 20 is $\lambda$.

5 number summary
```
quantile(data, [0 0.25 0.5 0.75 1]) 
```

```
binocdf(1,10,0.01)  // First arg is number <= you want over distribution.

poisscdf(4,20)

normcdf(1.25)

norminv(0.95) # Whats gives 95 percentile. Can also specify mean and var.

tinv(0.95, SAMPLESIZE - 1)
[h,p,ci] = ttest(load, 0, 'alpha', 0,01) # https://youtu.be/YXBqFevfa6I?t=270
```
Note if calculating sample sized required. Use norminv; not tinv.

```
variable_name = zeros(1000,1)
randsample(VECTOR, AMOUNT)

for i=1:1000
COMMAND;
end

T = readtable('hoursSlept.csv')
T.sleep # prints the column
```