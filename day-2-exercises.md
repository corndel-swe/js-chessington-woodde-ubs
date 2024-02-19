# Day 2 Exercises

## Exercise 1: Static methods and properties

You may have seen or used the very useful `Math` utility class. This has lots of useful static methods and properties.

Read the docs about [static methods and properties]().

Let's make our own set of utility methods and properties, called `Maths`. A skeleton file and class is provided in `exercises/maths.js`

To run the tests for this exercise, run `npm run test:d2e1` in your terminal. You can check your answers by running them after each step.

Let's implement the following:

1. The static property `Maths.PI`, which is equal to `3.14`
2. The static method `Maths.max(a, b)`, which returns the largest of `a` and `b`

## Inheritance

To continue on with our theme with maths, we've written a few classes that represent some shapes and their properties inside `exercises/shapes.js`.

If you have a quick look through the file, you'll spot that the `triangle`,  all look _very_ similar. This is a telltale sign that we can neaten up some code. We call signs and patterns like this a "code smell" - as in, the code smells like it could use some cleaning!

Let's start off by reading the documentation on [Inheritance]()

It's good to have a safeguard to make sure we're not breaking any functionality. We can check that the code we're refactoring still works correctly by running the tests. To do this, you can `npm run test:d2e2` in your terminal after each step.

1. Start off by finishing the `/* TODO */` base class.
2. Make sure that the other classes `extend` the base class
3. Move any common functions into the base classes

## Overriding
