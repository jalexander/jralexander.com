import React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import Title from '../components/Title'
import Close from '../components/Close'

export default () => (
  <Page>
    <Helmet title='Squarespace' />
    <Close />
    <Title>Squarespace</Title>
    <a target="_blank" href="https://squarespace.com" rel="noopener noreferrer">squarespace.com</a>
    <p>2018 - Present</p>
    <p>Front-end development on the Trial Experience + Conversion team.</p>
  </Page>
)
