import { authorsFormatter } from './authorsFormatter'

describe('authorsFormatter', () => {
  it('should return an empty array if there are no people', () => {
    expect(authorsFormatter([])).toEqual([])
  })

  it('should return an author object', () => {
    expect(
      authorsFormatter([
        {
          id: 'some-id',
        },
      ])
    ).toEqual([
      {
        id: 'some-id',
        name: '',
        description: '',
      },
    ])
  })
})
