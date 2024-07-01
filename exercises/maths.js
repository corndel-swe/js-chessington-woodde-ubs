export class Maths {
    static PI = 3.14

    static max(a, b) {
        // boolean expression ? do this : to this
        return a > b ? a : b
        // Math.max(a , b)

        // if (a > b) {
        //     return a
        // } else {
        //     return b
        // }
    }

    round(number) {
        return Math.round(number)
    }
    abs(number) {
        return Math.abs(number)
    }
}

