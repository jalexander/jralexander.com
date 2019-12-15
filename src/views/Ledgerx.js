import React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import Title from '../components/Title'
import { Link } from 'react-router-dom'
import Close from '../components/Close'

export default () => (
  <Page>
    <Helmet title='LedgerX' />
    <Close />
    <Title>LedgerX</Title>
    <Link target="_blank" to="https://ledgerx.com">ledgerx.com</Link>
    <p>2017 - 2018</p>
    <p>Front-end lead on trading interface built in React + Redux and back-end work on the API in Python/Postgres.</p>
  </Page>
)
