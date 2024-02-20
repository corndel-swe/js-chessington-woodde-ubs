## Exercise 1: Writing unit tests

Let's revisit our `maths` module from the previous exercise. We'll write some unit tests for it. That is, we'll write some tests that check that the functions in the module work as expected.

We'll use the `mocha` testing framework to write and run our tests.

Have a read of the [Unit Testing with Mocha]() documentation to get an idea of how to use `mocha`.

There's an empty file called `maths.test.js` in the `tests` directory. We'll write our tests here!

Let's write a test to make sure that our `Maths.max` function works as expected.

1. Write a test that checks that `Maths.max` returns the largest of two numbers.
    - No need to be too fancy with this test. Just put two numbers into `Maths.max` and check that the result is the larger of the two numbers.

2. Run your test with `npm run test:d3e1` in your terminal.

## Arrange, Act, Assert

Now, let's write some tests for our `Rectangle` class.

We want to test that the `getArea` and `getPerimeter` methods work as expected.

Read the [Arrange, Act, Assert]() documentation to get an idea of how to structure your tests.

1. Write a test that checks that the `getArea` method of `Rectangle` returns the correct value.
    - Arrange: You should create a new `Rectangle` with a known width and height.
    - Act: Call the `getArea` method on the `Rectangle`.
    - Assert: Check that the result is the expected area.
2. Similarly, write a test that checks that the `getPerimeter` method of `Rectangle` returns the correct value.

## Test Driven Development

So far, we've been writing tests for code that already exists. This is a good way to make sure that our code works as expected.

Another approach is to write the tests _before_ we write the code. This is called Test Driven Development (TDD). 

Read the [Test Driven Development]() documentation to get an idea of how to use TDD.

Let's write a test for a new method on our `Maths` class. We'll call this method `Maths.round()`.

To use TDD effectively, we should break down the problem into small steps. We'll start by writing tests for the simplest cases, then write the minimal sensible code to make the tests pass.

To keep things simple, we'll only consider positive numbers for now (and zero)

1. Write a test that checks that `Maths.round` returns the same number when given a whole number.
    1. Run your test with `npm run test:d3e3` in your terminal to make sure it fails.
    2. Write the minimal sensible code to make the test pass.
    3. Run your test again to make sure it passes.

2. Write a test that checks that `Maths.round` rounds down when given a number with a decimal part less than 0.5.
    1. Run your test 
    2. Write code to make your test pass
    3. Run your test again to make sure it passes.

3. Write the test that `Maths.round` rounds up when given a number with a decimal part greater than 0.5. Change the code so that it passes the test if it doesn't already pass.

4. Write the test that `Maths.round` rounds _up_ when given a number with a decimal part equal to 0.5. Change the code so that it passes the test if it doesn't already pass.

## Extensions

What other methods could you add to the `Maths` class? Use TDD to implement them.

A few examples to get you started:
- `Maths.floor` and `Maths.ceil`. These are similar to `Maths.round`, but they always round down or up, respectively.
- `Maths.abs`. This returns the absolute value of a number. That is, it returns the number without its sign. For example, `Maths.abs(-5)` should return `5`.
