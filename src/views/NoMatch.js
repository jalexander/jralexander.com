import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import Page from '../components/Page'
import Title from '../components/Title'
import Close from '../components/Close'

export default () => (
  <Page>
    <Helmet title='Page not found' />
    <Close />
    <Title>Page not found</Title>
    <Link to="/">Find a page</Link>
  </Page>
)
