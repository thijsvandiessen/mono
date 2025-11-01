import { locationFormatter } from './locationFormatter.js'
import { describe, expect, it } from 'vitest'

describe('locationFormatter', () => {
  it('should return a location object', () => {
    expect(locationFormatter({ id: 'some-id' })).toEqual({
      address: null,
      id: 'some-id',
      lat: null,
      lng: null,
      title: null,
      startTime: null,
      ticketLink: null,
    })
  })

  it('should return a an object with id', () => {
    expect(locationFormatter(undefined)).toEqual({
      address: null,
      id: '',
      lat: null,
      lng: null,
      title: null,
      startTime: null,
      ticketLink: null,
    })
  })
})
