import Square from '../square.js'
import Piece from './piece.js'

export default class Knight extends Piece {
  constructor(player) {
    super(player)
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the king
    let location = board.findPiece(this)
    // the list of valid moves
    let moves = []

    if (location.row + 1 <= 7 && location.col + 2 <= 7) {
      moves.push(new Square(location.row + 1, location.col + 2))
    }

    if (location.row + 1 <= 7 && location.col - 2 >= 0) {
      moves.push(new Square(location.row + 1, location.col - 2))
    }

    if (location.row - 1 >= 0 && location.col + 2 <= 7) {
      moves.push(new Square(location.row - 1, location.col + 2))
    }

    if (location.row - 1 >= 0 && location.col - 2 >= 0) {
      moves.push(new Square(location.row - 1, location.col - 2))
    }

    if (location.row + 2 <= 7 && location.col + 1 <= 7) {
      moves.push(new Square(location.row + 2, location.col + 1))
    }

    if (location.row + 2 <= 7 && location.col - 1 >= 0) {
      moves.push(new Square(location.row + 2, location.col - 1))
    }

    if (location.row - 2 >= 0 && location.col + 1 <= 7) {
      moves.push(new Square(location.row - 2, location.col + 1))
    }

    if (location.row - 2 >= 0 && location.col - 1 >= 0) {
      moves.push(new Square(location.row - 2, location.col - 1))
    }

    return moves
  }

}
