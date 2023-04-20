import Container from '@components/Container/Container'
import type { ReactElement, FC } from 'react'
import React from 'react'


import type { CaseStudyGridProps } from './CaseStudyGrid.types'
import CaseStudy from './components/CaseStudy'
import * as Styled from './styles/CaseStudyGrid.style'

const CaseStudyGrid: FC<CaseStudyGridProps> = ({
  caseStudies,
}: CaseStudyGridProps): ReactElement => {
  return (
    <Styled.CaseStudyGridWrapper>
      <Container>
        <Styled.CaseStudyGrid>
          {caseStudies.nodes.map((caseStudy, index) => {
            return (
              <CaseStudy {...caseStudy} key={index} />
            )
          })}
        </Styled.CaseStudyGrid>
      </Container>
    </Styled.CaseStudyGridWrapper>
  )
}

export default CaseStudyGrid
