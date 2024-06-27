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

