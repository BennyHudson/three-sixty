import type { ReactElement, FC } from 'react'
import React from 'react'

import Panel from '@components/Panel/Panel'
import SimpleGrid from '@components/SimpleGrid/SimpleGrid'
import Heading from '@components/Heading/Heading'
import Paragraph from '@components/Paragraph/Paragraph'
import ListGroup from '@components/ListGroup/ListGroup'

import type { CapabilityProps } from './Capability.types'

import * as Styled from './styles/Capability.style'

const Capability: FC<CapabilityProps> = ({
  appearance,
  title,
  content,
  microservices,
}: CapabilityProps): ReactElement => {
  return (
    <Panel appearance={appearance}>
      <SimpleGrid columns={{ sm: 1, md: 3 }}>
        <Styled.Content>
          <div>
            <Heading size={3} text={title} inverse weight={3} />
            <Paragraph text={content} inverse />
          </div>
          <div>
            <Heading size={1} text={'What\'s included'} inverse weight={3} />
            <ListGroup items={microservices.map((microservice) => microservice.title)} />
          </div>
        </Styled.Content>
      </SimpleGrid>
    </Panel>
  )
}

export default Capability
