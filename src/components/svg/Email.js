import React from 'react'
import styled from 'styled-components'
import { color } from '../../theme'

const Svg = styled.svg`
  width: 32px;
  height: 25px;
  stroke-width: 1px;
  stroke: ${color.highlight};
  fill: ${color.highlight};
  margin-right: 54px;
`
export default function Email() {
  return (
    <Svg viewBox="0 0 32 25">
    <path d="M28.125,0 L3.125,0 C1.39911016,0 0,1.39911016 0,3.125 L0,21.875 C0,23.6008898 1.39911016,25 3.125,25 L28.125,25 C29.8508898,25 31.25,23.6008898 31.25,21.875 L31.25,3.125 C31.25,1.39911016 29.8508898,0 28.125,0 Z M28.125,10.9375 L18.203125,17.890625 C16.6547623,18.9729433 14.5952377,18.9729433 13.046875,17.890625 L3.125,10.9375 L3.125,7.65625 L14.609375,15.703125 C15.2201161,16.127008 16.0298839,16.127008 16.640625,15.703125 L28.125,7.65625 L28.125,10.9375 Z" ></path>
    </Svg>
  )
}