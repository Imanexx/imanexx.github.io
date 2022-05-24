---
layout: page
title: Intro to time complexity
topic: Lessons
---

INTRO TODO: points to flesh out or put on another page:
- Programs can be thought of as, input -> Computation (loop back on itself) -> output.
- We want the output to be correct based on the input we give it.
- But for time complexity we are interested in how long the computation takes based on the input given.
- Basic notions of time complexity:

| Complexity Class | | C examples |
| - | - | - |
| $\mathcal{O}(1)$		| Constant 		| Most math operators `+ - * /`, `int x = 7`, `printf("%d\n", x)`, `node->value`, `node->next` `arr[i]`, `arr[i][j]`,  		|
| $\mathcal{O}(n)$ 		| Linear		| `for (int i = 0; i < n; i++) { // Do O(1) operations in loop }`		|
| $\mathcal{O}(n^2)$ 	| Squared		|	2 nested `for loops`	|
| $\mathcal{O}(n^3)$ 	| Cubed			|	3 nested `for loops`	|
| ...					|				|		|
| $\mathcal{O}(2^n)$	| Exponential	| It is the notion of "Doubling" the amount of work you need to do in each state. Calculating Fibonacci naively with recursion is $\mathcal{O}(2^n)$. Considering all chess moves for a position to determine which side is better is a famous exponential problem.	|
| $\mathcal{O}(log_2n)$	| Logarithmic	| It is the notion of "Halving" the amount of work you need to do in each state. This is the literal opposite of $\mathcal{O}(2^n)$.|

## **Intro Example**
```c
int main() {
	int x = 7;		// 1 - Assignment is a constant operation
	x += 1;			// 1 - Math operation is constant
	printf("%d\n", x);	// 1 - Printing is constant for
				// the sakes of our analysis
	return 0;
}
```
Overall we have three $\mathcal{O}(1)$ calls, $3 \times \mathcal{O}(1)$. When it comes to time complexity, we are interested in taking the "highest degree" of the result and ignoring the coefficient. 

Answer: $\mathcal{O}(1)$

This should make sense, because the amount of work we need to do is static and doesn't change based on the input size of the program.

<br>

## **Loop example**
```c
int main() {
	// Let 'N' be the size of our input. 
	// We can change N to ANY large number we want.
	int N = 10;			// 1 - Assignment is constant
	int i = 0;			// 1 - Assignment is constant
	while (i < N) {			// n + 1 (How many times does `i < N` happen?)
		printf("%d\n", i);	// n - prints each number 
		i++;			// n
	}
}
```
To work out how much work our program did we need to add up all the lines of code.

$$
\begin{align*}
 &1 + 1 + (n + 1) + n + n \\
 &= 3n + 3
\end{align*}
$$

Lets take the highest degree, which is $n$ and ignore the coefficient.

Answer: $\mathcal{O}(n)$

As our input gets larger, we need to do more work in the loop. $\mathcal{O}(n)$ tells us that the amount of work grows linearly. Intuitively, if we change N to N=11, the loop will need to do an extra call. N=12 will make the loop do another call on top of that. Each time we increase the number by one, the loop increase by one.

### Why is the `while (i < N) {` $n + 1$?  
Lets do an example with $N = 3$. How many comparison do we do.
```c
int i = 0;
int N = 3;
while (i < N) {
	i++;
}
// The while loop condition occurs '4' times. (n + 1)
// i = 0 	(0 < 3) True
// i = 1 	(1 < 3) True
// i = 2	(2 < 3) True
// i = 3 	(3 < 3) False -> Exit the loop
```
Overall the loop checked the condition '4' times. We would like to write '4' in terms of the input because our answer changes based on what 'N' is originally set to. Currently 'N' equals '3', so our loop goes off 'N+1' times. And this is true for any value we set N to.

<br>

## **For-Loop example**

```c
int main() {
	// Let 'N' be the size of our input. 
	// We can change N to ANY large number we want.
	int N = 10;			// 1 		- Constant
	for (int i = 0; i < N; i++) {  	// 2n + 2 	- Calculating each part below
		printf("%d\n", i);	// n 		- prints each number
	}

	/* How long does each section in for-loop take?
	int i = 0; 	// 1 - only happens once
	i < N;		// n + 1 - extra evaluate to terminate loop
	i++;		// n
	// 1 + (n + 1) + n == 2n + 2
	*/
}

```

Again, lets add up each part:

$$
\begin{align*}
 &1 + (2n + 2) + n \\
 &= 3n + 3
\end{align*}
$$

take the highest degree, which is $n$ and ignore the coefficient.

Answer: $\mathcal{O}(n)$

It makes sense that we got the same answer as before because there is no discernible difference between a while-loop and a for-loop. They both have to loop through each number and print the value.

<br>

## **Shortcut method for simple loops**
As you analysis different examples you should start getting comfortable with how long certain operations take. 

For-loops are commonly $\mathcal{O}(n)$ if:
1. All operations inside the loop are $\mathcal{O}(1)$
2. You are looping over all 'n' items in the loop.
	- ie. `for (int i = 0; i < n; i++)`


Instead of doing the line by line summation each time we can approximate. 

<br>

Notice that the way we decided the time complexity of our $3n + 3$ from before was by taking the 'highest degree term'. The number of constant operations were thrown away at the end.

Imagine a larger size input, say n = 10,000. Adding an extra 20 constant operations does not change the linear factor of the running time of the program. Neither does adding 500 constant operations and having a higher coefficient.

$$
\begin{align*}
 3n + 3 &= \mathcal{O}(n) \\
 3n + 20 &= \mathcal{O}(n) \\
 5n + 500 &= \mathcal{O}(n) \\
\end{align*}
$$

In some situations, we can do a bit of rounding and approximating as long as we are only throwing away lower order terms. Be careful doing this.

Here we will consider how long each line takes from inside the loop going out. And then multiple the time complexities.

```c
int main() {
	int N = 10000;
	for (int i = 0; i < N; i++) {  	// O(N) - Loop is based on iterating on N
		printf("%d\n", i); 	// O(1) - Printing one value takes O(1) time
	}

	// Since the printf is inside the loop, 
	// we need to multiply it by the time complexity of the loop.
	
	// O(1) X O(N)
	// ^ Read this as: 'the O(1) printf occurs O(N) times because of the loop'
	// In other words, the printf executes as many times as the loop does.
}
```
What we have done here is simply a shortcut. We start from inside the loop and consider the `printf` time complexity. And then multiply that by how long the loop takes.

Answer: $O(1) \times O(n) = \mathcal{O}(n)$

Again, the rigorous way to do the calculation is by doing the line by line addition we were doing before. But this is a useful method for getting an idea of how long our programs are going to run for.

<br>

## **Nested Loops**

Lets use our multiplication trick to evaluate this next example.

```c
int main() {
	int N = 10;
	for (int i = 0; i < N; i++) {		// O(N) - Looping over i numbers to N
		for (int j = 0; j < N; j++) {	// O(N) - Looping over j numbers to N
			printf("%d\n", i * N + j); // O(1) - printing a single value
		}
	}
}

// Hence O(1) X O(N) X O(N)
```

Answer: $O(1) \times O(n) \times O(n) = \mathcal{O}(n^2)$

The main thing to understand here is that the printf() relies on both loops executing. 

How many times does the `int j = 0` occur? Well we know the outer most for-loop is $\mathcal{O}(n)$. Hence, `int j = 0` occurs n times. In fact, that inner loop is going to do it's counting sequence n times. This is why we multiple the time complexities.


Hopefully this is a good start to understanding time complexities. You may be wondering what exponential and logarithmic analysis looks like. We will be going through more examples. The important thing to take away is how we are counting the amount of work we are doing based on what the input is and the size of the input.

TODO -> Key takeaways

TODO -> Add mathematical runthrough of the last example without the multiplication shortcut