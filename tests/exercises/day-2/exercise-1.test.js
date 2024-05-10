import { Maths } from '../../../exercises/maths.js'
import { strict as assert } from 'assert'

describe('Maths', () => {
  describe('the PI property', () => {
    it('should exist', () => {
      assert('PI' in Maths, 'Maths should have a PI property')
    })
    it('should be a number', () => {
      assert.equal(typeof Maths.PI, 'number')
    })

    it('should be equal to 3.14', () => {
      assert(Math.abs(Maths.PI - 3.14) < 0.01, 'Maths.PI is not equal to 3.14')
    })
  })

  describe('the max method', () => {
    it('should exist', () => {
      assert('max' in Maths, 'Maths should have a max method')
    })

    it('should be a function', () => {
      assert.equal(typeof Maths.max, 'function')
    })

    it('should return the greater of two numbers', () => {
      assert.equal(Maths.max(1, 2), 2)
      assert.equal(Maths.max(2, 1), 2)
    })
  })
})
