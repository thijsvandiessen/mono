import React, { type ReactNode } from 'react'
import { getGeneralInfo, getSiteMetadata } from '@mono/data'
import { Body } from '@mono/components'

interface Props {
  children: ReactNode
}

const RootLayout = async ({ children }: Props) => {
  const { data } = await getGeneralInfo()
  const { metadata } = await getSiteMetadata()

  return (
    <html lang="nl-NL">
      <Body navigationData={data} metadata={metadata}>
        {children}
      </Body>
    </html>
  )
}

export default RootLayout
