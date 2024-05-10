# Day 1 Exercises

## Exercise 1: Classes and Instances

First, have a read of [Classes and
Instances](https://tech-docs.corndel.com/js/classes-and-instances.html).

Let's start off making a simple counter. A counter is quite a good use case for
classes since it requires state (the current count) a way to read that state
(getting the current count), and methods to change that state (increment and
reset).

To run the tests for this exercise, run `npm run test:d1e1` in your terminal.

Your instructions are to:

1. Open up `exercises/counter.js` and create a new class called `Counter`. 
    - Make sure your class name has a capital C
2. Give it a constructor that initialises `count` to `0`
3. Assign the variable `counterInstance` below to an instance of your counter
class.

## Exercise 2: Instance methods

Now, have a look through [Instance
methods](https://tech-docs.corndel.com/js/instance-methods).

We'll want to be able to increment the counter, reset our counter, and get the
current count.

You can run the tests for this exercise using `npm run test:d1e2`.

Have a go impslementing the following methods:

1. `increment()`, which adds one to `count`
2. `reset()`, which sets `count` to `0`
3. `getCount()`, which returns the current `count`


## Exercise 3: Private properties

Finally, read about [Private
properties](https://tech-docs.corndel.com/js/private-properties).

Let's refactor our `count` property to be private, so that it's hidden from
outside the class.

You can run the tests for this exercise using `npm run test:d1e3`.

## Extensions

Modify the constructer so that it can accept an _optional_ argument as the
initial count.
