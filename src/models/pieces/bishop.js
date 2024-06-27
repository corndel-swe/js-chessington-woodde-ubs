import Square from '../square.js'
import Piece from './piece.js'

export default class Bishop extends Piece {
  constructor(player) {
    super(player)
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this)
    // the list of moves
    let candidateMoves = []
    // start at 1 as you are already on 0, continue moving forward to piece reaches the end of the board
    // move.push pushes the squares into the array
    for (let i = 1; i <= 7; i++) {
      if (location.row + i <= 7 && location.col + i <= 7) {
        candidateMoves.push(new Square(location.row + i, location.col + i))
      }
    }
    for (let i = 1; i <= 7; i++) {
      if (location.row - i >= 0 && location.col + i <= 7) {
        candidateMoves.push(new Square(location.row - i, location.col + i))
      }
    }
    for (let i = 1; i <= 7; i++) {
      if (location.row + i >= 0 && location.col - i >= 0) {
        candidateMoves.push(new Square(location.row + i, location.col - i))
      }
    }
    for (let i = 1; i <= 7; i++) {
      if (location.row - i >= 0 && location.col - i >= 0) {
        candidateMoves.push(new Square(location.row - i, location.col - i))
      }
    }

    let finalMoves = []
    // loop through candidateMoves
    for (let j=0, j<candidateMoves.length, j++) {

      if goesThroughFriendlyPieces(candidateMoves[j], board) {
        //discount this move
      }

      goesThroughPieces(opposing, move, board)

    }
    // checking for each condition
    // and only if ALL conditions are met, will I push the move in question into the finalMoves array
    // finally, return finalMoves array


    return candidateMoves

  }

}

// const bishop = new Bishop(Player.WHITE)
// const friendlyPiece = new Pawn(Player.WHITE)
// board.setPiece(new Square(4, 4), bishop)
// board.setPiece(new Square(6, 6), friendlyPiece)

// const moves = bishop.getAvailableMoves(board)


export function goesThroughPieces(upgrades) {

} 

 