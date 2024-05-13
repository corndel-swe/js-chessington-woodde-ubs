# Day 1 Workshop

## Task: First steps

There are a set of chess pieces in the `src/models/pieces` directory.

Each piece has a `getAvailableMoves` function that takes in the state of the
`Board`, and returns an array of `Square`s representing where that piece can
move.

The function in the `Pawn` class has already been partially implemented, so
they are able to move one step forward.

However, the `getAvailableMoves` function has not been implemented for any of
the other pieces yet!

There are tests to check that pieces move correctly. To run these tests, run
the following command:

```bash
npm run test
```

You may see that there are some failing tests! (Oh, no!)

Your workshop task today is to implement the movement rules of each piece, so
that the tests pass!

Once you've made all the tests pass, continue on with the next part of the
task!

## Task: More rules!

If you take a look at the some of the `.spec.js` files under the
`tests/models/pieces/` directory, you'll see that there are some tests that are
currently being skipped (they have `xit` instead of `it`).

1. Choose a piece and pick the first `xit` to un-skip. You can do this by
   deleting the `x` and leaving the `it`. Un-skip both the white version of the
   test and the black version of the test.
1. Run the tests again, you should see a pair of failing tests!
1. Now that you have some failing tests, once again, try to write some code to
   make them pass!
1. When you make them pass, pick another piece and/or another test to un-skip
   and repeat the process again!
