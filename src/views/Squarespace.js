import React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import Title from '../components/Title'
import { Link } from 'react-router-dom'
import Close from '../components/Close'

export default () => (
  <Page>
    <Helmet title='Squarespace' />
    <Close />
    <Title>Squarespace</Title>
    <Link target="_blank" to="https://squarespace.com">squarespace.com</Link>
    <p>2018 - Present</p>
    <p>Front-end development on the Trial Experience + Conversion team.</p>
  </Page>
)
