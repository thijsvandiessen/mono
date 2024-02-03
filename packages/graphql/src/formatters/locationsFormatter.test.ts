import { locationsFormatter } from './locationsFormatter'

describe('locationsFormatter', () => {
  it('should return an empty array', () => {
    expect(locationsFormatter([])).toEqual([])
  })
  it('should return a locations array', () => {
    expect(locationsFormatter([{ id: 'location-id' }])).toEqual([
      {
        address: '',
        id: 'location-id',
        lat: undefined,
        lng: undefined,
        title: '',
      },
    ])
  })
})
