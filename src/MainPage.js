import React from 'react'
import styled from 'styled-components'
import { color, media } from './theme';

import LinkedIn from './components/svg/LinkedIn'
import Email from './components/svg/Email'
import RightArrow from './components/svg/RightArrow'
import DirectionArrow from './components/svg/DirectionArrow'

// header, footer, section, nav, article
// h1 - 5, p, a
// div, span
// input, form, button

const PHONE_TOP = 231;

const Wrapper = styled.div`
  background-color: ${color.white};
`

const Nav = styled.nav`
  height: 100px;
  position: relative;
`

const Header = styled.div`
  max-width: 1330px;
  margin: 0 auto;
  padding: 20px 0 144px 140px;
  ${media.small`
    padding: 0;
    text-align: center;
  `}
`

const ContentWrapper = styled.div`
  width: 100%;
  background-color: ${color.background};
`

const ContentTop = styled.div`
  max-width: 1330px;
  margin: 0 auto;
`
const Name = styled.h2`
  font-family: 'Manjari', sans-serif;
  font-size: 32px;
  line-height: 45px;
  color: ${color.text};
  margin-bottom: 35px;
  ${media.small`
  font-size: 25px;
  line-height: 30px;
`}
`
const Title = styled.h3`
 font-family: 'Manjari', sans-serif;
  font-size: 55px;
  line-height: 55px;
  color: ${color.darkText};
  ${media.small`
  font-size: 40px;
  line-height: 45px;
`}
`

const IconWrapper = styled.div`
position: absolute;
right: 83px;
top: 50%;
transform: translateY(-50%);
`

const ATag = styled.a`
text-decoration: none;
`

const ContentBottom = styled(ContentTop)`
  position: relative;
  padding-bottom: ${PHONE_TOP + 256}px;
  ${media.small`
  padding-bottom: 0;
`}
`

const ContentLeft = styled.div`
width: 45%;
display: inline-block;
${media.small`
  width: 100%;
  display: block;
  padding-bottom: 680px;
  &:after{
    content: '';
    background-color:  ${color.white};
    height: 220px;
    width: 100%;
    position: absolute;
    bottom: 400px;
    z-index: 3;
  }
`}
 `

const PhoneImage = styled.div`
position: absolute;
width: 292px;
height: 602px;
background-color: ${color.text};
top: ${PHONE_TOP}px;
z-index: 10;
right: 50%;
transform: translateX(50%);
${media.small`
top: 280px;
left: 50%
 display: block;
 transform: none;
 margin-left: -140px;
 z-index: 10;
`}
`

const ContentRight = styled.div`
width: 45%;
display: inline-block;
vertical-align: top;
${media.small`
  height: 400px;
  width: 100%;
  display: inline-block;
  background-color: ${color.white};
`}
 `

const TextWrap = styled.div`
margin: 59px 0 0 82px;
${media.small`
  padding: 90px 100px 0 50px;
`}
 `
const TextWrapRight = styled.div`
margin: 59px 0 0 350px;
${media.small`
    margin: 65px auto 0;
    text-align: center;
    background-color: ${color.white};
  `}
 `
const ProjectTitle = styled.h3`
 font-family: 'Manjari', sans-serif;
 display: inline-block;
  font-size: 62px;
  color: ${color.text};
  margin: 0;
  font-weight: 400;
  ${media.small`
  font-size: 52px;
  `}
`

const SmallText = styled.p`
 font-family: 'Manjari', sans-serif;
  font-size: 25px;
  line-height: 32px;
  color: ${color.text};
  display: block;
  font-weight: 200;
`
const BuiltAt = styled(SmallText)`
display: inline-block;
`

const Verisage = styled(SmallText)`
color: ${color.highlight};
text-decoration: underline;
font-weight: 700;
display: inline-block;
`

const MedText = styled.p`
 font-family: 'Manjari', sans-serif;
  font-size: 30px;
  line-height: 40px;
  color: ${color.darkText};
  display: block;
  font-weight: 200;
`
const ContLeft = styled.div`
margin: 59px 0 0 82px;
${media.small`
  display: none;
`}
`
const ContBottom = styled.div` 
display: none;
${media.small`
  display: block;
  background-color: ${color.background};
  padding: 80px 0;
`}
`

const ContHeader = styled(MedText)`
color: ${color.highlight};
`

const contArray = ['development', 'depolyment', 'maintenance', 'design', 'wire frames', 'user stories']

const contributions = () => {
  return contArray.map(cont => {
    return (
      <SmallText>{cont}</SmallText>
    )
  })
}

const TitleWrap = styled.div`

`


function MainPage() {
  return (
    <Wrapper>
      <ContentTop>
        <Nav>
          <IconWrapper>
            <ATag href="mailto: oshagfoster@gmail.com"> <Email /> </ATag>
            <ATag href="https://www.linkedin.com/in/osha-foster-a295ab52/" > <LinkedIn /> </ATag>
          </IconWrapper>
        </Nav>
        <Header>
          <Name>Osha Foster</Name>
          <Title>App Developer</Title>
        </Header>
      </ContentTop>
      <ContentWrapper>
        <ContentBottom>
          <ContentLeft>
            <TextWrap>
              <TitleWrap>
              <ProjectTitle>DigNDirt </ProjectTitle>
              <RightArrow />
              </TitleWrap>
              <ATag href="http://www.verisage.us/en/" > <BuiltAt>built @ </BuiltAt> <Verisage> Verisage</Verisage> </ATag>
            </TextWrap>
            <ContLeft>
              <ContHeader>contributor: </ContHeader>
              {contributions()}
            </ContLeft>
          </ContentLeft>
            <PhoneImage />
          <ContentRight>
            <TextWrapRight>
              <DirectionArrow />
              <MedText>React-Native</MedText>
              <MedText>Expo</MedText>
              <ContBottom>
              <ContHeader>contributor: </ContHeader>
              {contributions()}
            </ContBottom>
            </TextWrapRight>
          </ContentRight>
        </ContentBottom>
      </ContentWrapper>
    </Wrapper>
  )
}

export default MainPage