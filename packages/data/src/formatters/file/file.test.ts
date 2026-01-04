import { describe, expect, it } from 'vitest'
import { fileFormatter } from './file.js'

describe('fileFormatter', () => {
  it('should return an object', () => {
    expect(
      fileFormatter({
        id: 'file-id',
        url: 'url',
      })
    ).toEqual({
      description: '',
      height: undefined,
      id: 'file-id',
      title: '',
      url: 'url',
      width: undefined,
    })
  })
})
