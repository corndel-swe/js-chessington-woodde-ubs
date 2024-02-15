# Chessington

1. Fork this repo and **uncheck the "Copy the `main` branch only" checkbox**.

2. Run this command to set up the necessary dependencies:  
`npm install`

3. Run this command to run Chessington on a webserver at `localhost:5173`:  
`npm run dev`

4. Run this command to run the tests:  
`npm test`

## Exercises

Now that you've got the code up and running, you can start working on the exercises.

The exercises for each day are in separate markdown files. 

- [Day 1 Exercises](./day-1-exercises.md)
- [Day 2 Exercises](./day-2-exercises.md)
- [Day 3 Exercises](./day-3-exercises.md)

## Guide to the models

### Board

When a board is created it initialises a 2-dimensional array of length 8.
That is, an array of 8 arrays, where each array inside has a length of 8.

These represent rows and columns.

So, to select the first row you can do 
`let row1 = board[0]`
And to get the second square of that row:
`let square = row1[1]`
Or, in shorthand:
`let square = board[0][1]`

`Board` then has the following methods to use:
`setPiece(square, piece)` places the given piece on a square returns nothing.
`getPiece(square)` returns the piece on a given square, if one is there.
`findPiece(pieceToFind)` will return the square that the piece is on, if it is on the board.
`movePiece(fromSquare, toSquare)` will move the piece on the fromSquare to the toSquare.

### Square

Squares have two properties: `row` and `col`.

Squares can be made one of two ways (I'm not really sure why...)
`let square1 = Square.at(0,1)`
OR
`let square2 = new Square(0,1)`
These are equal. You can check like this:
`square1.equals(square2)`. This will return a boolean (in this case, true.)

### Pieces

Pieces should all have a method: `getAvailableMoves(board)`.
This method must be given the current board (so that it can know which moves are available!)
it returns an array, which is a list of `Square`s that are available to be moved to.

They should also all have another method: `moveTo(board, square)`, which will move the piece to the given square on the board.
