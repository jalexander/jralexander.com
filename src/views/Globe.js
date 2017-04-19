import React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import Title from '../components/Title'
import { Link } from 'react-router-dom'
import Close from '../components/Close'

import globe1 from '../images/globe1.jpg'

export default () => (
  <Page>
    <Helmet title='Globe Timeline' />
    <Close />
    <Title>GLOBE TIMELINE</Title>
    <Link target="_blank" to="http://jralexander.com/globe-timeline">view site</Link>
    <p>2017 - Present</p>
    <p>Globe Timeline was built as a quick prototype to test out interacting with chronological data on a globe. It is based off of the open source <Link target="_blank" to="https://www.chromeexperiments.com/globe">The WebGL Globe</Link> Chrome Experiment, which encourages developers to create their own version of it. I created a new map texture in Photoshop based off of the one in the original source code and added a Three.js raycaster to make the globe markers interactive. The example data is based off of the location of pieces of art in the world today, and what year they were originally created.</p>
    <p>It is currently undergoing a rebuild using <Link target="_blank" to="https://www.reactboilerplate.com/">react-boilerplate</Link>. Future plans are to build a Node API and admin panel to let users log in to update the timeline content. The source code for the original is at <Link target="_blank" to="https://github.com/jalexander/globe-timeline">globe-timeline</Link>, and the new version (work in progress) is at <Link target="_blank" to="https://github.com/jalexander/react-timeline">react-timeline</Link>.</p>
    <p><img src={globe1} alt="Globe Timeline" /></p>
  </Page>
)
