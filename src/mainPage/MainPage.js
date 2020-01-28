import React from 'react'
import _ from 'lodash'
import { TweenMax } from 'gsap'

import LinkedIn from '../components/svg/LinkedIn'
import Email from '../components/svg/Email'
import RightArrow from '../components/svg/RightArrow'
import DirectionArrow from '../components/svg/DirectionArrow'

import {
  Wrapper, Nav, Header, CenterLine, ContentWrapper, ContentTop, Name, TitleWrapper, Title,
  IconWrapper, ATag, ContentBottom, ContentLeft, OuterPhone, InnerPhone, PhoneImage, ContentRight, TextWrap,
  TextWrapRight, ProjectTitle, SmallText, BuiltAt, Verisage, MedText, Contribute, ContributeBottom, ContHeader,
  TitleWrap, TextBottomWrap, PhoneImageMask
} from './styles'

import { projectArray } from '../projects'

// header, footer, section, nav, article
// h1 - 5, p, a
// div, span
// input, form, button



const titleArray = ["App Developer", "React Native Enthusiast", "something", "Pretty Nice"]

class MainPage extends React.Component {
  state = {
    currentIndex: 0,
    pageIndex: 0
  }

  componentDidMount() {
    TweenMax.to('.title', 1, { opacity: 1 })
    // window.addEventListener('scroll', this.onScroll)
    this.titleInterval = setInterval(this.goToNextIndex, 3000)
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.onScroll)
    clearInterval(this.titleInterval);
  }

  // onScroll = (event) => {
  //   const elements = document.querySelectorAll('.phone')
  //   const { scrollTop } = document.documentElement
  //   _.each(elements, (element, i) => {
  //     const { top } = element.getBoundingClientRect()
  //     const inView = window.innerHeight > top + 20
  //     // console.log(i, inView)
  //     if (inView) {
  //       if (i === 1) console.log(inView, scrollTop * -0.1)
  //       const offset = scrollTop - 850 * i
  //       const y = offset * -0.07
  //       TweenMax.set(element, { y })
  //     }
  //   })

  // }

  goToNextIndex = () => {
    const { currentIndex } = this.state;
    const nextIndex = (currentIndex + 1) % titleArray.length;
    this.setState({ currentIndex: nextIndex });
  }

  goToNextPage = () => {
    const { pageIndex } = this.state;
    TweenMax.to('.title', 0, { opacity: 0 })

    TweenMax.to('.title', 1, { opacity: 1 })
    if (pageIndex < projectArray.length - 1) {
      const nextIndex = pageIndex + 1
      this.setState({ pageIndex: nextIndex });
    }
  }

  goToPreviousPage = () => {
    const { pageIndex } = this.state;
    if (pageIndex > 0) {
      const nextIndex = pageIndex - 1
      this.setState({ pageIndex: nextIndex });
    }
  }

  projectComponent = (index) => {
    return _.map(projectArray, project => {

      const key = project.title;
      const builtWith = project.builtWith.map(cont => {
        return (
          <MedText key={cont}>{cont}</MedText>
        )
      })


      const contributions = project.contributions.map(cont => {
        return (
          <SmallText key={cont}>{cont}</SmallText>
        )
      })

      return (
        <ContentBottom key={key}>
          <ContentLeft>
            <TextWrap>
              <TitleWrap>
                <ProjectTitle className="title">{project.title}</ProjectTitle><span><RightArrow /></span>
              </TitleWrap>
              <ATag href="http://www.verisage.us/en/" > <BuiltAt>built @ </BuiltAt> <Verisage> Verisage</Verisage> </ATag>
              <Contribute>
                <ContHeader>contributor: </ContHeader>
                {contributions}
              </Contribute>
            </TextWrap>
          </ContentLeft>
          <OuterPhone className="phone">
            <InnerPhone src={require('../images/blank-phone.png')} />
            <PhoneImageMask>
              <PhoneImage src={project.src} />
            </PhoneImageMask>
          </OuterPhone>
          <ContentRight>
            <TextWrapRight>
              <DirectionArrow />
              <TextBottomWrap>
                {builtWith}
              </TextBottomWrap>
              <ContributeBottom>
                <ContHeader>contributor: </ContHeader>
                {contributions}
              </ContributeBottom>
            </TextWrapRight>
          </ContentRight>
        </ContentBottom>
      )
    })
  }

  titles = () => {
    const { currentIndex } = this.state;
    return titleArray.map((title, i) => {
      const key = title;
      const isVisible = currentIndex === i;
      return <Title key={key} isVisible={isVisible}>{title}</Title>
    })
  }

  render() {
    return (
      <Wrapper ref={ref => { this.contextRef = ref; }}>
        <ContentTop>
          <Nav>
            <IconWrapper>
              <ATag href="mailto: oshagfoster@gmail.com"> <Email /> </ATag>
              <ATag href="https://www.linkedin.com/in/osha-foster-a295ab52/"> <LinkedIn /> </ATag>
            </IconWrapper>
          </Nav>
          <Header>
            <Name>Osha Foster</Name>
            <TitleWrapper>{this.titles()}</TitleWrapper>
            <CenterLine />
          </Header>
        </ContentTop>
        <ContentWrapper>
          {this.projectComponent()}
        </ContentWrapper>
      </Wrapper>
    )
  }
}

export default MainPage