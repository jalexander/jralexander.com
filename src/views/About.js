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
    <AboutParagraph>I am a front-end developer focused on web app architecture, high quality UI, and performant animation. I have a strong understanding of Javascript beyond libraries and frameworks, currently concentrating on React and Redux with optimized render performance.</AboutParagraph>
    <AboutParagraph>I am comfortable making back-end updates to APIs and databases, and strive to write maintainable code with full test coverage.</AboutParagraph>
  </Page>
)
