import Player from "./player"

/**
 * Class representing a chess timer
 */
export class ChessTimer {
    /**
     * Constructor for a chess timer
     * @param {number} time - the starting time in seconds
     */
    constructor(/* TODO: Day 1, Exercise 1 */) {
        // TODO: Day 1, Exercise 1
        this.currentPlayer = Player.WHITE;

        this.whiteTimeRemaining = 300 // Time in seconds
        this.blackTimeRemaining = 300
    }


    /**
     * Starts the timer for white 
     */
    start() {
        this.currentPlayer = Player.WHITE;

        // This starts a timer that decrements the time remaining 
        // for the current player every millisecond.
        this.timer = setInterval(() => {
            if (this.currentPlayer === Player.WHITE) {
                this.whiteTimeRemaining -= 0.001;
            } else {
                this.blackTimeRemaining -= 0.001;
            }
        }, 1);
    }

    /**
     * Stops the timer altogether
     */
    stop() {
        clearInterval(this.timer);
    }

    /**
     * Toggles the timer between white and black
     */
    toggle() {
        
    }
    // TODO: Day 1, Exercise 2

    /**
     * Reset the timer
     */
    reset() {

    }
    // TODO: Day 1, Exercise 2

    /**
     * Get the time remaining for white
     * @returns {number} the time in seconds
     */
    // TODO: Day 1, Exercise 3

    /**
     * Get the time remaining for black
     * @returns {number} the time in seconds
     */
    // TODO: Day 1, Exercise 3

}