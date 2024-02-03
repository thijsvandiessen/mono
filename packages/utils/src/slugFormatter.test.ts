import { slugFormatter } from './slugFormatter'

describe('slugFormatter', () => {
  it('should return the homepage', () => {
    expect(slugFormatter({ slug: 'homepage' })).toEqual('/')
  })

  it('should return the homepage', () => {
    expect(slugFormatter({ slug: '/' })).toEqual('/')
  })

  it('should return the homepage', () => {
    expect(slugFormatter({ slug: '/', prefix: '/' })).toEqual('/')
  })

  it('should return the homepage and ignore prefix', () => {
    expect(slugFormatter({ slug: 'homepage', prefix: 'ignore' })).toEqual('/')
  })

  it('should return the homepage', () => {
    expect(slugFormatter({ slug: '' })).toEqual('/')
  })

  it('should return an extranal url', () => {
    expect(slugFormatter({ slug: 'https://example.com' })).toEqual(
      'https://example.com'
    )
  })

  it('should not double prefix with a slash', () => {
    expect(slugFormatter({ slug: '/test' })).toEqual('/test')
  })

  it('should prefix with a slash', () => {
    expect(slugFormatter({ slug: 'test' })).toEqual('/test')
  })

  it('should not double prefix the prefix with a slash', () => {
    expect(slugFormatter({ slug: 'test', prefix: '/some' })).toEqual(
      '/some/test'
    )
  })

  it('should prefix', () => {
    expect(slugFormatter({ slug: 'test', prefix: 'apply' })).toEqual(
      '/apply/test'
    )
  })
})
