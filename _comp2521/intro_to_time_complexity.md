---
layout: page
title: Intro to time complexity
topic: Lessons
---

At a basic level what is a program? 
It is something that takes in an input and does a bunch of work to give an output of some kind. 
<div class="mermaid">
graph TD;
    A[Input]-->B[Computation];
    B-- We are interested in measuring how long this computation takes -->B;
    B-->C[Output];
</div>

<br> 

There are many ways we could write a program that takes some input and gives the 'correct' output. But how do we decide which approach is fastest?

Consider the following code. Here are two ways we could write a program to calculate the nth Fibonacci number. Which one is better?
```c
int iterative_fib(int n) {
	assert(n >= 0);
	int n1 = 0;
	int n2 = 1;
	for (int i = 2; i <= n; i++) {
		int new = n1 + n2; 
		n1 = n2; 
		n2 = new;
	}
	return n2;
}

int recursive_fib(int n) {
	assert(n >= 0);
	if (n == 0) return 0;
	if (n == 1) return 1;
	return recursive_fib(n-1) + recursive_fib(n-2);
}
```
Based on line count, the `recursive_fib()` method seems way more appealing because it only has 3 lines of code and is simple to understand. Compared to the `iterative_fib()` method it has much less code. 


However if we benchmark these approaches to calculate the 35th fibonacci number, we can see that the recursive approach takes far longer.
```bash
$ time python3 fib.py iterative_fib()
Answer: 9227465
real    0m0.038s

$ time python3 fib.py recursive_fib()
Answer: 9227465
real    0m3.152s
```
This does **not** mean that recursion is _always_ bad. It means that we need some notion of evaluating how much 'computation' a program is doing. What we are building up to is a way to analysis how long each line of code takes in our program.

<div class="mermaid">
graph TD;
    A[Input size measure as 'n']-->B[Computation];
    B-- "Measure the Time Complexity with Big-O notation" -->B;
    B-->C[Output];
</div>

In our benchmark both programs took a different amount of time to give the answer 9227465.
Our input size in this case was $n = 35$. 

When evaluating the time complexity of a program we often consider it for **large values of n**. Essentially we are asking how much _more_ work does the program have to do for larger and larger values of n. 

Large is often thought of as approaching infinity. But to make things more concrete you can think of it as, "How much longer does the computation take for 100,000 inputs -> 500,000 inputs -> 1,000,000 inputs etc".


## What is the general idea of Big-O notation?
Big-O notation is measuring the "Worst Case" runtime complexity of a program. This is essentially asking, "What is the longest amount of time our program will run for a set of 'n' inputs".

**Let's go over an example algorithm.**

Our algorithm wants to find what position the number '2' is in a given array. We give the input array via typing it out in the following way:
5 10 3 4 6 9 8 1 7 2

The algorithm wants to find what position the number '2' is in. It will start from index 0 and continue searching right until it finds the number '2'. It will then print the index of '2'; `printf("Pos: %d\n", index)`.
<br>

{% include_relative intro_to_time_complexity_1_array.svg %}

To analysis the "Worst Case Time Complexity", we want to provide an input that makes the algorithm run for the most amount of time. The 'worst' input array we can provide for this example is one where '2' is in the last position.

This way we are analyzing the 'most' amount of work the algorithm will have to do for any given input.

<div class="mermaid">
graph TD;
    A["Input -> N=10 {5,10,3,4,6,9,8,1,7,2}"]-->B[Computation -> Find the number '2'];
    B-- "Big-O notation analyses 'worst case' which occurs when '2' is in the last position" -->B;
    B-->C["Output -> Pos: 9"];
</div>

In this example we gave 10 numbers as the input. Hence $n = 10$. Overall the algorithm had to look at all 10 numbers before it found '2' (in the worst case). Since we had to look at 10 numbers and $n = 10$, our algorithm has the time complexity $\mathcal{O}(n)$.

Using this notation is useful for when we change the value of $n$. If we run the exact some algorithm for an array of 20 values, $n=20$, our final answer will still be  $\mathcal{O}(n)$.


### Big-O notation?
Each line of code we write will run for a different amount of time depending on the input. Notice that in our last example, the amount of time `printf("Pos: %d\n", index)` takes to run does not depend on the size of the array. 

The `printf()` will take the same amount of time to execute regardless of the size of $n$. If $n=10$ or $n=100$, the `printf()` will still print out the position in a constant amount of time. In terms of Big-O notation we would say this line of code is constant which we represent by writing $\mathcal{O}(1)$.

Here is a simple table of different time complexity classes you will come across.



| Complexity Class | | C examples |
| - | - | - |
| $\mathcal{O}(1)$		| Constant 		| Most math operators `+ - * /`, assigning a variable `int x = 7`, `printf("%d\n", x)`, accessing an element `node->value`, `node->next` `arr[i]`, `arr[i][j]`, `if()`, `else`, `return`, `int *p = &x`, `*p = 2`  		|
| $\mathcal{O}(n)$ 		| Linear		| `for (int i = 0; i < n; i++) { // Do O(1) operations inside the loop only }`		|
| $\mathcal{O}(n^2)$ 	| Squared		|	2 nested `for loops` with O(1) operations	|
| $\mathcal{O}(n^3)$ 	| Cubed			|	3 nested `for loops` with O(1) operations	|
| ...					|				|		|
| $\mathcal{O}(2^n)$	| Exponential	| It is the notion of "Doubling" the amount of work you need to do in each state. Calculating Fibonacci naively with recursion is $\mathcal{O}(2^n)$. Considering all chess moves for a position to determine which side is better is a famous exponential problem.	|
| $\mathcal{O}(\log{n})$	| Logarithmic	| It is the notion of "Halving" the amount of work you need to do in each state. This is the literal opposite of $\mathcal{O}(2^n)$. Often the base is omitted but in most situations it is $\log_2{n}$.|

## **Analysing Time Complexity (Intro Example)**
```c
int main() {
	int x = 7;		// 1 - Assignment is a constant operation
	x += 1;			// 1 - Math operation is constant
	printf("%d\n", x);	// 1 - Printing is constant for
				// the sakes of our analysis
	return 0;
}
```
Overall we have three $\mathcal{O}(1)$ calls which is $3 \times \mathcal{O}(1)$. 
When it comes to Big-O notation, we are only interested in taking the "highest degree" of the result and ignoring the coefficient. 

Answer: $\mathcal{O}(1)$

The highest degree here is '1' and we ignore the coefficient 3. The answer should make sense, because the amount of work we need to do is static and doesn't change based on the input size of the program.
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
To work out how much 'work' our program did we need to add up all the lines of code.

$$
\begin{align*}
 &1 + 1 + (n + 1) + n + n \\
 &= 3n + 3
\end{align*}
$$

Lets take the highest degree, which is $n$ and ignore the coefficient.

Answer: $\mathcal{O}(n)$

As our input gets larger, we need to do more work in the loop. $\mathcal{O}(n)$ tells us that the amount of work grows linearly. Let's check if that matches our intuition. If we change N to N=11, the loop will need to do an extra call. If we change it again to N=12, we will make the loop do another call on top of that. 

Each time we increase the number by one, the loop increase by one. Hence the computation increases linearly in terms of the input we give it.

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

It makes sense that we got the same answer as before because there is no discernible difference between a while-loop and a for-loop. Both methods look at the same number of values.

<br>

## **Shortcut method for simple loops**
As you analysis different examples you should start getting comfortable with how long certain operations take. 

For-loops are commonly $\mathcal{O}(n)$ if:
1. All operations inside the loop are $\mathcal{O}(1)$
2. You are looping over all 'n' input items in the loop.
	- ie. `for (int i = 0; i < n; i++)`

Instead of calculating each line precisely, we can instead roughly approximate what Big-O class they belong to. 

Before we calculated the Big-O of $3n + 3$ by taking the 'highest degree term'. Notice how the number of constant operations were thrown away at the end of the calculation. Instead of keeping track of all constant operations, lets approximate them instead.

Imagine a larger size input, say n = 10,000. Adding an extra 20 constant operations does not change the linear factor of the running time of the program. Neither does adding 500 constant operations and having a higher coefficient. In fact all of these give the same answer.

$$
\begin{align*}
 3n + 3 &= \mathcal{O}(n) \\
 3n + 20 &= \mathcal{O}(n) \\
 5n + 500 &= \mathcal{O}(n) \\
\end{align*}
$$

In some situations, we can do a bit of rounding and approximating as long as we are careful with throwing away the lower order terms.

Here we will consider how long each line takes from inside the loop going out. And then multiple the time complexities together.

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

The main thing to understand here is that the `printf()` relies on both loops executing. 

How many times does the `int j = 0` occur? Well we know the outer most for-loop is $\mathcal{O}(n)$. Hence, `int j = 0` occurs n times. In fact, that inner loop is going to do it's counting sequence n times. This is why we multiple the time complexities.

## Recap

Hopefully this is a good start to understanding time complexities. You may be wondering what exponential and logarithmic programs looks like and how can we analyses them. We will be going through more examples later. The important thing to take away now is how we are counting the amount of computation that is being done in the worst case situation based on the size of the input.

TODO -> Key takeaways

TODO -> Add mathematical runthrough of the last example without the multiplication shortcut
