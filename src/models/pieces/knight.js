import Piece from "./piece"

export default class Knight extends Piece {
    constructor(player) {
        super(player)
    }

    getAvailableMoves(board) {
        return []
    }
}
