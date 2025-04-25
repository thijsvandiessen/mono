import { locationFormatter } from './locationFormatter.js'
import { describe, it, expect } from 'vitest'

describe('locationFormatter', () => {
  it('should return a location object', () => {
    expect(locationFormatter({ id: 'some-id' })).toEqual({
      address: undefined,
      id: 'some-id',
      lat: undefined,
      lng: undefined,
      title: undefined,
    })
  })
})
