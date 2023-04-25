import type { HeadFC, PageProps } from 'gatsby'
import type { FC, ReactElement } from 'react'
import React from 'react'

import FullPageFeature from '@components/FullPageFeature/FullPageFeature'

const CapabilityPage: FC<PageProps> = (): ReactElement => {
  return <FullPageFeature appearance='secondary' title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
}

export default CapabilityPage

export const Head: HeadFC = () => <title>Home Page</title>
