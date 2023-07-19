import type { FC, ReactElement } from 'react'
import React from 'react'

import Heading from '@components/Heading/Heading'
import ListGroup from '@components/ListGroup/ListGroup'
import Overlay from '@components/Overlay'
import Panel from '@components/Panel/Panel'
import Paragraph from '@components/Paragraph/Paragraph'
import SimpleGrid from '@components/SimpleGrid/SimpleGrid'

import { useBreakpoints } from '@hooks/useBreakpoints'

import type { CapabilityProps } from './Capability.types'
import * as Styled from './styles/Capability.style'

const Capability: FC<CapabilityProps> = ({
  appearance,
  title,
  content,
  microservices,
  backgroundImage,
  mobileBackground,
  inverse,
}: CapabilityProps): ReactElement => {
  const { sm } = useBreakpoints()
  return (
    <Panel appearance={appearance} id={title.toLowerCase()} backgroundImage={sm ? mobileBackground.sourceUrl : backgroundImage.sourceUrl}>
      <SimpleGrid columns={{ sm: 1, md: 3 }}>
        <Styled.Content>
          <div>
            <Heading size={3} text={title} inverse={inverse} weight={3} />
            <Paragraph text={content} inverse={inverse} size={3} />
          </div>
          <div>
            <Heading size={2} text={'What\'s included'} inverse={inverse} weight={3} />
            <ListGroup items={microservices.map((microservice) => microservice.title)} inverse={inverse} />
          </div>
        </Styled.Content>
      </SimpleGrid>
      <Overlay />
    </Panel>
  )
}

export default Capability
