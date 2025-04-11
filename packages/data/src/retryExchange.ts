import { type CombinedError } from '@urql/core'
import { type RetryExchangeOptions } from '@urql/exchange-retry'

export const retryExchangeOptions: RetryExchangeOptions = {
  initialDelayMs: 3000,
  maxDelayMs: 15000,
  randomDelay: true,
  maxNumberAttempts: 2,
  retryIf: (error: CombinedError) => {
    // DATOCMS does not handle that many requests
    if (error.response?.status === 429) return true

    return false
  },
}
