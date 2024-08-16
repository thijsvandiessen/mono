export const isValidUrl = (url: string): boolean => {
  if (!url) return false
  try {
    // TODO: edge case when url should be relative
    return Boolean(new URL(url))
  } catch (e) {
    if (e instanceof TypeError) {
      console.log(`Invalid URL': ${e.message} ${url}`)
    }
    return false
  }
}
