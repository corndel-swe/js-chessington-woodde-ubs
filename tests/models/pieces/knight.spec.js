import { strict as assert } from 'assert'
import Knight from '../../../src/models/pieces/knight.js'
import Pawn from '../../../src/models/pieces/pawn.js'
import King from '../../../src/models/pieces/king.js'
import Board from '../../../src/models/board.js'
import Player from '../../../src/models/player.js'
import Square from '../../../src/models/square.js'

describe('Knight', () => {
  let board
  beforeEach(() => {
    board = new Board()
  })

  it("can make knight's moves", () => {
    const knight = new Knight(Player.WHITE)
    board.setPiece(Square.at(4, 4), knight)

    const moves = knight.getAvailableMoves(board)

    const expectedMoves = [
      Square.at(2, 5),
      Square.at(2, 3),
      Square.at(3, 6),
      Square.at(3, 2),
      Square.at(5, 6),
      Square.at(5, 2),
      Square.at(6, 5),
      Square.at(6, 3),
    ]

    assert.deepEqual(new Set(moves), new Set(expectedMoves))
  })

  it('cannot make any other moves', () => {
    const knight = new Knight(Player.WHITE)
    board.setPiece(Square.at(4, 4), knight)

    const moves = knight.getAvailableMoves(board)

    assert.equal(moves.length, 8, '`moves` does not have length 8')
  })

  it('can jump over other pieces', () => {
    const knight = new Knight(Player.WHITE)
    const firstPawn = new Pawn(Player.WHITE)
    const secondPawn = new Pawn(Player.BLACK)
    board.setPiece(Square.at(4, 4), knight)
    board.setPiece(Square.at(3, 4), firstPawn)
    board.setPiece(Square.at(3, 5), secondPawn)

    const moves = knight.getAvailableMoves(board)

    assert(
      moves.some(Square.at(2, 5)),
      '`moves` does not contain the square (2, 5)'
    )
  })

  it('cannot leave the board', () => {
    const knight = new Knight(Player.WHITE)
    board.setPiece(Square.at(0, 0), knight)

    const moves = knight.getAvailableMoves(board)

    const expectedMoves = [Square.at(1, 2), Square.at(2, 1)]

    assert.deepEqual(new Set(moves), new Set(expectedMoves))
  })

  it('can take opposing pieces', () => {
    const knight = new Knight(Player.WHITE)
    const opposingPiece = new Pawn(Player.BLACK)
    board.setPiece(Square.at(4, 4), knight)
    board.setPiece(Square.at(3, 6), opposingPiece)

    const moves = knight.getAvailableMoves(board)

    assert(
      moves.some(Square.at(3, 6)),
      '`moves` does not contain the square (3, 6)'
    )
  })

  it('cannot take the opposing king', () => {
    const knight = new Knight(Player.WHITE)
    const opposingKing = new King(Player.BLACK)
    board.setPiece(Square.at(4, 4), knight)
    board.setPiece(Square.at(3, 6), opposingKing)

    const moves = knight.getAvailableMoves(board)

    assert(!moves.some(Square.at(3, 6)), '`moves` contains the square (3, 6)')
  })

  it('cannot take friendly pieces', () => {
    const knight = new Knight(Player.WHITE)
    const friendlyPiece = new Pawn(Player.WHITE)
    board.setPiece(Square.at(4, 4), knight)
    board.setPiece(Square.at(3, 6), friendlyPiece)

    const moves = knight.getAvailableMoves(board)

    assert(!moves.some(Square.at(3, 6)), '`moves` contains the square (3, 6)')
  })
})
