import type { social } from './metadata.type.js'

export function getSocials(data: object): social[] {
  return [
    {
      name:
        'social_one_name' in data && typeof data.social_one_name === 'string'
          ? data.social_one_name
          : '',
      url:
        'social_one_url' in data && typeof data.social_one_url === 'string'
          ? data.social_one_url
          : '',
    },
    {
      name:
        'social_two_name' in data && typeof data.social_two_name === 'string'
          ? data.social_two_name
          : '',
      url:
        'social_two_url' in data && typeof data.social_two_url === 'string'
          ? data.social_two_url
          : '',
    },
    {
      name:
        'social_three_name' in data &&
        typeof data.social_three_name === 'string'
          ? data.social_three_name
          : '',
      url:
        'social_three_url' in data && typeof data.social_three_url === 'string'
          ? data.social_three_url
          : '',
    },
    {
      name:
        'social_four_name' in data && typeof data.social_four_name === 'string'
          ? data.social_four_name
          : '',
      url:
        'social_four_url' in data && typeof data.social_four_url === 'string'
          ? data.social_four_url
          : '',
    },
  ].filter((social) => social.url || social.name)
}
