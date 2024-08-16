import { isValidUrl } from './isValidUrl'

describe('isValidUrl', () => {
  it('should return false when it is no link', () => {
    expect(isValidUrl('homepage')).toEqual(false)
  })

  it('should return false when it is an empty string', () => {
    expect(isValidUrl('')).toEqual(false)
  })

  it('should return false on relative links', () => {
    expect(isValidUrl('/homepage')).toEqual(false)
  })

  it('should handle http and https', () => {
    expect(isValidUrl('http://example.com')).toEqual(true)
    expect(isValidUrl('https://example.com')).toEqual(true)
  })

  it('should handle mailto and tel', () => {
    expect(isValidUrl('tel:248723498')).toEqual(true)
    expect(isValidUrl('mailto:test@test.test')).toEqual(true)
  })

  it('should handle other cases', () => {
    expect(isValidUrl('//cdn.example.com')).toEqual(false)
    expect(isValidUrl('git+ssh://example.com')).toEqual(true)
    expect(isValidUrl('ftp://example.com')).toEqual(true)
    expect(isValidUrl('ftps://example.com')).toEqual(true)
  })
})
