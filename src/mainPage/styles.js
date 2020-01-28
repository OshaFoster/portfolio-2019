import { color, media } from '../theme';
import styled from 'styled-components'

const PHONE_TOP = 261;

export const Wrapper = styled.div`
  background-color: ${color.white};
`

export const Nav = styled.nav`
  height: 100px;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  ${media.small`
  position: relative;
  `}
`

export const Header = styled.div`
  position: relative;
  max-width: 1330px;
  padding: 20px 0 124px 140px;
  ${media.small`
    padding: 20px 0 80px 0;
    text-align: center;
  `}
`
export const CenterLine = styled.div`
  position: absolute;
  height: 100px;
  width: 4px;
  border-radius: 50px;
  background-color: ${color.darkText};
  left: 50%;
  bottom: -50px;
  ${media.small`
    bottom: -50px;
    height: 85px;
  `}
`

export const ContentWrapper = styled.div`
  width: 100%;
  background-color: ${color.background};
`

export const ContentTop = styled.div`
  max-width: 1330px;
  margin: 0 auto;
`
export const Name = styled.h2`
  font-family: 'Manjari', sans-serif;
  font-size: 34px;
  line-height: 45px;
  color: ${color.text};
  margin-bottom: 35px;
  font-weight: 400;
  ${media.small`
    font-size: 25px;
    line-height: 30px;
  `}
`

export const TitleWrapper = styled.div`
  height: 55px;
  margin: 55px 0;
  position: relative;
`

export const Title = styled.h3`
  font-family: 'Manjari', sans-serif;
  font-size: 54px;
  line-height: 55px;
  font-weight: 400;
  color: ${color.darkText};
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 1s ease-in-out;
  ${media.small`
    font-size: 40px;
    line-height: 45px;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const IconWrapper = styled.div`
  position: absolute;
  right: 83px;
  top: 50%;
  transform: translateY(-50%);
`

export const ATag = styled.a`
  text-decoration: none;
`

export const ContentBottom = styled(ContentTop)`
  padding-top: 100px;
  position: relative;
  padding-bottom: ${PHONE_TOP}px;
  ${media.small`
    padding-bottom: 60px;
    padding-top: 0;
  `}
`

export const ContentLeft = styled.div`
  width: 48%;
  display: inline-block;
  ${media.small`
    width: 100%;
    display: block;
    padding-bottom: 500px;
    &:after{
      content: '';
      background-color:  ${color.white};
      height: 140px;
      width: 100%;
      position: absolute;
      top: 700px;
      bottom: 0px;
      left: 0;
      z-index: 3;
    } 
  `}
 `

export const OuterPhone = styled.div`
  position: absolute;
  width: 320px;
  height: 628px;
  top: ${PHONE_TOP + 40}px;
  z-index: 5;
  right: 50%;
  transform: translateX(50%);
`

export const InnerPhone = styled.img`
  position: absolute;
  border-radius: 23px;
  z-index: 8;
  right: 50%;
  transform: translateX(50%);
  ${media.small`
  width: 400px;
  height: 540px;
 `}
`

export const PhoneImageMask = styled.div`
  position: absolute;
  top: 15px;
  left: 50%;
  width: 270px;
  height: 570px;
  z-index: 10;
  transform: translateX(-50%);
  border-radius: 30px;
  /* height: 570px;
  width: 290px; */
  overflow: hidden;
  ${media.small`
    top: 15px;
    width: 240px;
    height: 490px;
    border-radius: 18px;
 `}
`;

export const PhoneImage = styled.img`
  /* position: absolute; */
  width: 100%;
  height: 100%;
  /* width: 290px; */
  /* height: 570px; */
  /* margin-top: 15px; */
  /* border-radius: 18px; */
  /* z-index: 10; */
  /* right: 50%;
  transform: translateX(50%); */
  /* ${media.small`
  margin-top: 5px;
  width: 238px;
  height: 486px;
 `} */
`
export const ContentRight = styled.div`
  width: 48%;
  display: inline-block;
  padding-top: 60px;
  vertical-align: top;
  ${media.small`
    height: 400px;
    width: 100%;
    display: inline-block;
    background-color: ${color.white};
    vertical-align: unset;
  `}
 `
export const TextWrap = styled.div`
margin-left: 82px;
${media.small`
  margin: 60px 0 50px 0;
  text-align: center;
`}
 `
export const TextWrapRight = styled.div`
    margin-left: 350px;
  ${media.small`
    margin: 30px auto 0;
    text-align: center;
    background-color: ${color.white};
  `}
 `
export const ProjectTitle = styled.h3`
  font-family: 'Manjari', sans-serif;
  display: inline-block;
  font-size: 62px;
  color: rgba(45, 82, 110, 0.45);
  opacity: 0;
  margin: auto;
  font-weight: 400;
  ${media.small`
    font-size: 44px;
  `}
`

export const SmallText = styled.p`
  font-family: 'Manjari', sans-serif;
  font-size: 25px;
  line-height: 32px;
  color: ${color.text};
  display: block;
  font-weight: 200;
`
export const BuiltAt = styled(SmallText)`
  display: inline-block;
`

export const Verisage = styled(SmallText)`
  color: ${color.highlight};
  text-decoration: underline;
  display: inline-block;
`

export const MedText = styled.p`
  font-family: 'Manjari', sans-serif;
  font-size: 30px;
  line-height: 40px;
  color: ${color.darkText};
  display: block;
  font-weight: 200;
`
export const Contribute = styled.div`
  margin-top: 80px;
  ${media.small`
    display: none;
  `}
`
export const ContributeBottom = styled.div` 
  display: none;
  ${media.small`
    display: block;
    background-color: ${color.background};
    padding: 80px 0;
  `}
`

export const ContHeader = styled(MedText)`
  color: ${color.highlight};
  font-size: 38px;
`
export const TitleWrap = styled.div`
margin-right: 10px;
`

export const TextBottomWrap = styled.div`
  margin-bottom: 80px;
  `

export const ButtonNav = styled.div`
border: none;
display: inline;
`
