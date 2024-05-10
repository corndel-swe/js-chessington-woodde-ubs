import { strict as assert } from 'assert'
import Pawn from '../../../src/models/pieces/pawn.js'
import Board from '../../../src/models/board.js'
import Player from '../../../src/models/player.js'
import Square from '../../../src/models/square.js'

describe('Pawn', () => {
  let board
  beforeEach(() => (board = new Board()))

  describe('white pawns', () => {
    it('can move one square up', () => {
      const pawn = new Pawn(Player.WHITE)
      board.setPiece(Square.at(0, 0), pawn)

      const moves = pawn.getAvailableMoves(board)

      assert(moves.some(square => square.equals(Square.at(1, 0))))
    })
  })

  describe('black pawns', () => {
    it('can move one square down', () => {
      const pawn = new Pawn(Player.BLACK)
      board.setPiece(Square.at(7, 7), pawn)

      const moves = pawn.getAvailableMoves(board)

      assert(moves.some(square => square.equals(Square.at(6, 7))))
    })
  })
})
