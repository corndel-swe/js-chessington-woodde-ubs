import { Counter } from '../../../exercises/counter.js'
import { strict as assert } from 'assert'

describe('increment', () => {
  it('should increment the count property', () => {
    const counter = new Counter()
    counter.increment()
    assert.equal(
      counter.count ?? counter.getCount(),
      1,
      'The count property was not incremented'
    )
  })
})

describe('reset', () => {
  it('should reset the count property', () => {
    const counter = new Counter()
    counter.increment()
    counter.reset()
    assert.equal(
      counter.count ?? counter.getCount(),
      0,
      'getCount() did not return 0 after reset() was called'
    )
  })
})

describe('getCount', () => {
  it('should return the count property', () => {
    const counter = new Counter()
    counter.increment()
    assert.equal(
      counter.count ?? counter.getCount(),
      1,
      'The count property was not returned after incrementing'
    )
  })
})
