import { Maths } from "../exercises/maths.js"
import { describe, it } from 'mocha'
import assert from 'assert'

describe('Maths Class', function () {
    it('should have PI = 3.14', function () {
        const PI = new Maths()
        assert.strictEqual(Maths.PI, 3.14)
    })

    it('should return the larger of 2 numbers', function () {
        assert.strictEqual(Maths.max(1, 4), 4)
    })
})


describe('returns same whole number', function () {
    const rounded = new Maths()
    it('should return same number when whole number', function () {
        const wholeNumber = rounded.round(50)
        assert.strictEqual(wholeNumber, 50)
    })
    it('should round down if under 0.5', function () {
        const roundDown = rounded.round(5.48)
        assert.strictEqual(roundDown, 5)
    })
    it('should round up if higher than 0.5', function () {
        const roundUp = rounded.round(1.51)
        assert.strictEqual(roundUp, 2)
    })

})

describe('returns same whole number', function () {
    const absed = new Maths()
    it('should return absolute value', function () {
        const absMath = absed.abs(-5)
        assert.strictEqual(absMath, 5)
    })
})
