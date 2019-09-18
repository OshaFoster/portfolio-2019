import { css } from 'styled-components'

export const color = {
  text: '#8598A7',
  darkText: '#2D526E',
  background: '#EDF4F8',
  highlight: '#6BC9FE',
  white: '#FBFBFB'
}

export const sizes = {
  mediumMaxWidth: 1180,
  smallMaxWidth: 900,
};

export const media = {
  large: (...args) => css`
    @media (min-width: ${sizes.mediumMaxWidth + 1}px) {
      ${css(...args)}
    }
  `,
  medium: (...args) => css`
    @media (max-width: ${sizes.mediumMaxWidth}px) {
      ${css(...args)}
    }
  `,
  small: (...args) => css`
    @media (max-width: ${sizes.smallMaxWidth}px) {
      ${css(...args)}
    }
  `,
};