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

To continue on with our theme with maths, we've written a `Rectangle` and a `Square` class inside `exercises/rectangles.js`.

If you have a quick look through the file, you'll spot that the `Rectangle` and `Square` classes look (and are conceptually) _very_ similar. This is a telltale sign that we can neaten up some code. We call signs and patterns like this a "code smell" - as in, the code smells like it could use some cleaning!

Let's start off by reading the documentation on [Inheritance]()

It's good to have a safeguard to make sure we're not breaking any functionality. We can check that the code we're tidying up still works correctly by running its tests. To do this, you can `npm run test:d2e2` in your terminal after each step.

1. Since a `Square` is a special type of `Rectangle`, let's make `Square` _inherit from_ `Rectangle`. 
    - To do this, we need to use the `extends` keyword in the class definition. 
    - We also need to call `super` in the constructor of `Square` to call the constructor of `Rectangle` and set the `width` and `height` properties.
2. Remove any redundant code from the `Square` class
    - Are there any functions we can remove from `Square` that are already defined in `Rectangle`?
    - Do we need `#side` any more if we're using `#width` and `#height`?

## Method overriding

Sometimes, it's not as easy to figure out _one_ way to do something that works for every subclass. Finding the area for a square and a rectangle may be similar enough, but what about a triangle? Or a circle?

We have another set of shape classes in `exercises/shapes.js`, and a base class `Shape` that has placeholder methods `area` and `perimeter`.

Read the documentation on [Method overriding]()

To run the tests for this exercise, run `npm run test:d2e3` in your terminal. You can check your answers by running them after each step.

1. Make all the shape classes inherit from `Shape`
2. Override the `getArea` and `getPerimeter` methods in each subclass to return the correct values for that shape