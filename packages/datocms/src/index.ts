import { buildClient } from '@datocms/cma-client-node'

async function run() {
  if (process.env.FULL_ACCESS_API_TOKEN === undefined) {
    throw new Error('FULL_ACCESS_API_TOKEN is required')
  }

  const client = buildClient({
    apiToken: process.env.FULL_ACCESS_API_TOKEN,
  })

  const itemTypes = await client.itemTypes.list()

  itemTypes.forEach((itemType) => {
    console.log(itemType)
  })
}

run()
