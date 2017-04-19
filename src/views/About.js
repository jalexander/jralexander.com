import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import styles from '../config/styles'
import Page from '../components/Page'
import Title from '../components/Title'
import Close from '../components/Close'

const AboutTitle = styled(Title)`
  color: ${styles.white};
`

const AboutParagraph = styled.p`
  color: ${styles.white};
`

export default () => (
  <Page green centered>
    <Helmet title="About" />
    <Close white />
    <AboutTitle>Hi!</AboutTitle>
    <AboutParagraph>I’m a front-end developer focused on web app architecture and creative coding. I strive to create pixel perfect UI with performant animations providing the highest quality user experience possible.</AboutParagraph>
    <AboutParagraph>I have a strong understanding of Javascript beyond using libraries and frameworks, making use of object-oriented and functional programming paradigms. Currently I am building web apps in React and Redux using unit testing for clean, maintainable code. I am constantly exploring new frameworks and enjoy sharing my experiences with others on front-end standards and best practices.</AboutParagraph>
  </Page>
)
