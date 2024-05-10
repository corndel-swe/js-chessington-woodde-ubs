import { Counter } from '../../../exercises/counter.js'
import { strict as assert } from 'assert'

describe('the count property', () => {
  it('should not be directly accessible', () => {
    const counter = new Counter()
    assert(
      !('count' in counter),
      'The count property should not be directly accessible'
    )
  })
})
