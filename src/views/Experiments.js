import React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import Title from '../components/Title'
import { Link } from 'react-router-dom'
import Close from '../components/Close'
import ImageAnim from '../components/ImageAnim'

import globe1 from '../images/globe1.jpg'

export default () => (
  <Page>
    <Helmet title='Experiments' />
    <Close />
    <Title>THE EXHIBITION</Title>
    <Link target="_blank" to="https://theexhibition.io">theexhibition.io</Link>
    <p>2017</p>
    <p>The Exhibition was built as a quick prototype to test out interacting with chronological data on a globe. It is based off of the open source <Link target="_blank" to="https://www.chromeexperiments.com/globe">The WebGL Globe</Link> Chrome Experiment, which encourages developers to create their own version of it. I created a new map texture in Photoshop based off of the one in the original source code and added a Three.js raycaster to make the globe markers interactive. The example data is based off of the location of pieces of art in the world today, and what year they were originally created.</p>
    <ImageAnim src={globe1} alt="The Exhibition" />
  </Page>
)
