export const isValidUrl = (url: string): boolean => {
  try {
    // TODO: edge case when url should be relative
    return Boolean(new URL(url))
  } catch (e) {
    return false
  }
}
