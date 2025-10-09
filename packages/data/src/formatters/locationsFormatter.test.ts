import { locationsFormatter } from './locationsFormatter.js'
import { describe, it, expect } from 'vitest'

describe('locationsFormatter', () => {
  it('should return an empty array', () => {
    expect(locationsFormatter([])).toEqual([])
  })

  it('should return a locations array', () => {
    expect(locationsFormatter([{ id: 'location-id' }])).toEqual([
      {
        id: 'location-id',
        address: null,
        lat: null,
        lng: null,
        title: null,
        startTime: null,
        ticketLink: null,
      },
    ])
  })
})
