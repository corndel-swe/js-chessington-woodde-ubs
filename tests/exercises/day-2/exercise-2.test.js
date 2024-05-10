import { Square, Rectangle } from '../../../exercises/rectangles.js'
import { strict as assert } from 'assert'

describe('Square', () => {
  it('should have an area method', () => {
    assert('area' in new Square(), 'Square does not have an area method')
  })

  it('should have a perimeter method', () => {
    assert(
      'perimeter' in new Square(),
      'Square does not have a perimeter method'
    )
  })

  it('should be a subclass of Rectangle', () => {
    assert(
      Square.prototype instanceof Rectangle,
      'Square is not a subclass of Rectangle'
    )
  })
})
