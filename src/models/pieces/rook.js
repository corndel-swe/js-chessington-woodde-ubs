import Square from '../square.js'
import Piece from './piece.js'

export default class Rook extends Piece {
  constructor(player) {
    super(player)
  }

  getAvailableMoves(board) {
    let location = board.findPiece(this)
    // the list of moves
    let moves = []

    for (let i = 1; i <= 7; i++) {
      if (location.row + i <= 7) {
        moves.push(new Square(location.row + i, location.col))
      }
    }
    for (let i = 1; i <= 7; i++) {
      if (location.row - i >= 0) {
        moves.push(new Square(location.row - i, location.col))
      }
    }
    for (let i = 1; i <= 7; i++) {
      if (location.col + i <= 7) {
        moves.push(new Square(location.row, location.col + i))
      }
    }
    for (let i = 1; i <= 7; i++) {
      if (location.col - i >= 0) {
        moves.push(new Square(location.row, location.col - i))
      }
    }

    return moves
  }

}
