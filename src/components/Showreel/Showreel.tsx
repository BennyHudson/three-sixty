import React from 'react'
import type { FC, ReactElement } from 'react'

import type { ShowreelProps } from './Showreel.types'
import * as Styled from './styles/Showreel.style'

const Showreel: FC<ShowreelProps> = ({}: // add props
ShowreelProps): ReactElement => {
  return <Styled.Showreel>Component Showreel</Styled.Showreel>
}

export default Showreel
