import { Counter, counterInstance } from '../../../exercises/counter.js'
import { strict as assert } from 'assert'

describe('Counter', () => {
  it('should be a class', () => {
    assert.equal(
      typeof Counter.prototype.constructor,
      'function',
      'Counter is not a class'
    )
  })

  it('should have a count property', () => {
    assert(
      'count' in new Counter() || 'getCount' in new Counter(),
      'Counter does not have a count property'
    )
  })
})

describe('counterInstance', () => {
  it('should be an instance of Counter', () => {
    assert(
      counterInstance instanceof Counter,
      'counterInstance is not an instance of Counter'
    )
  })
})
