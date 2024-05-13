import Rook from '../../../src/models/pieces/rook.js'
import Pawn from '../../../src/models/pieces/pawn.js'
import King from '../../../src/models/pieces/king.js'
import Board from '../../../src/models/board.js'
import Player from '../../../src/models/player.js'
import Square from '../../../src/models/square.js'

describe('Rook', () => {
  let board
  beforeEach(() => (board = new Board()))

  it('can move laterally', () => {
    const rook = new Rook(Player.WHITE)
    board.setPiece(Square.at(1, 2), rook)

    const moves = rook.getAvailableMoves(board)

    const expectedMoves = [
      // Horizontal
      Square.at(1, 0),
      Square.at(1, 1),
      Square.at(1, 3),
      Square.at(1, 4),
      Square.at(1, 5),
      Square.at(1, 6),
      Square.at(1, 7),
      // Vertical
      Square.at(0, 2),
      Square.at(2, 2),
      Square.at(3, 2),
      Square.at(4, 2),
      Square.at(5, 2),
      Square.at(6, 2),
      Square.at(7, 2),
    ]

    assert.deepEqual(new Set(moves), new Set(expectedMoves))
  })

  it('cannot make any other moves', () => {
    const rook = new Rook(Player.WHITE)
    board.setPiece(Square.at(1, 2), rook)

    const moves = rook.getAvailableMoves(board)

    assert.equal(moves.length, 14, '`moves` does not have length 14')
  })

  xit('cannot move through friendly pieces', () => {
    const rook = new Rook(Player.WHITE)
    const friendlyPiece = new Pawn(Player.WHITE)
    board.setPiece(Square.at(4, 4), rook)
    board.setPiece(Square.at(4, 6), friendlyPiece)

    const moves = rook.getAvailableMoves(board)

    assert(!moves.some(Square.at(4, 7)), '`moves` contains the square (4, 7)')
  })

  xit('cannot move through opposing pieces', () => {
    const rook = new Rook(Player.WHITE)
    const opposingPiece = new Pawn(Player.BLACK)
    board.setPiece(Square.at(4, 4), rook)
    board.setPiece(Square.at(4, 6), opposingPiece)

    const moves = rook.getAvailableMoves(board)

    assert(!moves.some(Square.at(4, 7)), '`moves` contains the square (4, 7)')
  })

  xit('can take opposing pieces', () => {
    const rook = new Rook(Player.WHITE)
    const opposingPiece = new Pawn(Player.BLACK)
    board.setPiece(Square.at(4, 4), rook)
    board.setPiece(Square.at(4, 6), opposingPiece)

    const moves = rook.getAvailableMoves(board)

    moves.should.deep.include(Square.at(4, 6))
    assert(
      moves.some(Square.at(4, 6)),
      '`moves` does not contain the square (4, 6)'
    )
  })

  xit('cannot take the opposing king', () => {
    const rook = new Rook(Player.WHITE)
    const opposingKing = new King(Player.BLACK)
    board.setPiece(Square.at(4, 4), rook)
    board.setPiece(Square.at(4, 6), opposingKing)

    const moves = rook.getAvailableMoves(board)

    assert(!moves.some(Square.at(4, 6)), '`moves` contains the square (4, 6)')
  })

  xit('cannot take friendly pieces', () => {
    const rook = new Rook(Player.WHITE)
    const friendlyPiece = new Pawn(Player.WHITE)
    board.setPiece(Square.at(4, 4), rook)
    board.setPiece(Square.at(4, 6), friendlyPiece)

    const moves = rook.getAvailableMoves(board)

    assert(!moves.some(Square.at(4, 6)), '`moves` contains the square (4, 6)')
  })
})
