import { fileFormatter } from './fileFormatter.js'
import { describe, expect, it } from 'vitest'

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
