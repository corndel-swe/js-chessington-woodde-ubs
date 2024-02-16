import Square from '../square'
import Player from '../player'

export default class Pawn {
    constructor(player) {
        this.player = player
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        if (this.player === Player.WHITE) {
            return [Square.at(location.row + 1, location.col)]
        } else {
            return [Square.at(location.row - 1, location.col)]
        }
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this)
        board.movePiece(currentSquare, newSquare)
    }
}
