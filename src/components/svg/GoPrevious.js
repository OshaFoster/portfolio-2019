import React from 'react'
import styled from 'styled-components'
import { color, media } from '../../theme'

const Svg = styled.svg`
  width: 15px;
  height: 23px;
  stroke-width: 1px;
  stroke: ${color.text};
  fill: ${color.text};
  padding-bottom: 10px;
  margin-right: 40px;
  :hover {
    stroke: ${color.highlight};
    fill: ${color.highlight};
  }
  ${media.small`
  padding-bottom: 0;
  width: 11px;
  height: 21px;
`}
`

export default function GoPrevious() {
  return (
    <Svg viewBox="0 0 15 23">
    <path d="M13.7588165,18.5918749 C14.6176682,19.3433701 14.7046978,20.6488143 13.9532026,21.507666 C13.2017073,22.3665177 11.8962631,22.4535473 11.0374114,21.7020521 L0.705649798,12.6617607 C-0.235216599,11.8385026 -0.235216599,10.3748416 0.705649798,9.55158346 L11.0374114,0.511292035 C11.8962631,-0.24020322 13.2017073,-0.15317361 13.9532026,0.70567811 C14.7046978,1.56452983 14.6176682,2.86997399 13.7588165,3.62146924 L5.20429897,11.1066721 L13.7588165,18.5918749 Z"></path>
    </Svg>
  )
}
