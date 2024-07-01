import { Rectangle } from "../exercises/rectangles.js"
import { describe, it } from 'mocha'
import assert from 'assert'

describe('Rectangle', function () {
    // Arrange - create new rectangle with known width & height
    const newRectangle = new Rectangle(4, 5)

    // Act - call the area function on the Rectangle
    it('should calculate the area', function () {
        const area = newRectangle.area()

        // Assert - check result is the expected area
        assert.strictEqual(area, 20)
    })

    // Act - call the perimeter function on the Rectangle
    it('should calculate the perimeter', function () {
        const perimeter = newRectangle.perimeter()

        // Assert - check result is the expected perimeter
        assert.strictEqual(perimeter, 18)
    })

})
