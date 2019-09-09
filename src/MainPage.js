import React from 'react'
import styled from 'styled-components'
import { color } from './theme';

// header, footer, section, nav, article
// h1 - 5, p, a
// div, span
// input, form, button

const Wrapper = styled.div`
  background-color: ${color.white};
`

const Nav = styled.nav`

`

const Header = styled.header`
  max-width: 1330px;
  margin: 0 auto;
  padding: 20px 0 144px 140px;
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 1000px;
  background-color: ${color.background};
`

const Content = styled.div`
  max-width: 1330px;
  margin: 0 auto;
`
const Name = styled.h2`
  font-family: 'Manjari', sans-serif;
  font-size: 32px;
  line-height: 45px;
  color: ${color.text};
  margin-bottom: 35px;
`
const Title = styled.h3`
 font-family: 'Manjari', sans-serif;
  font-size: 55px;
  line-height: 55px;
  color: ${color.darkText};
`

function MainPage() {
  return (
    <Wrapper>
      <Header>
        <Name>Osha Foster</Name>
        <Title>Software Developer</Title>
      </Header>
      <ContentWrapper>
        <Content />
      </ContentWrapper>
    </Wrapper>
  )
}

export default MainPage