import { fileFormatter } from './fileFormatter.js'
import { describe, it, expect } from 'vitest'

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
