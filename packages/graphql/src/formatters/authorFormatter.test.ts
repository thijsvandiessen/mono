import { authorFormatter } from './authorFormatter'

describe('authorFormatter', () => {
  it('should return an author object', () => {
    expect(
      authorFormatter({
        id: 'some-id',
      })
    ).toEqual({
      id: 'some-id',
      name: '',
      description: '',
    })
  })
})
