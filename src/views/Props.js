import React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import Title from '../components/Title'
import Close from '../components/Close'
import ImageAnim from '../components/ImageAnim'

import props1 from '../images/props1.jpg'

export default () => (
  <Page>
    <Helmet title='Props' />
    <Close />
    <Title>Props</Title>
    <a target="_blank" href="https://props.co/" rel="noopener noreferrer">props.co</a>
    <p>2016 - 2017</p>
    <p>I joined the Props tech team in July of 2016 to help rebuild the front-end in React and Redux. The rebuild was part of a site redesign before the preview launch. After the public launch in February 2017, the site was covered in the Fast Company article &ldquo;<a target="_blank" href="https://www.fastcocreate.com/3068055/inside-an-ambitious-sometimes-maddening-quest-to-save-the-internet" rel="noopener noreferrer">Inside An Ambitious, Sometimes Maddening, Quest To Save The Internet</a>&rdquo;.</p>
    <p>My initial focus was on the &ldquo;Create Post&rdquo; flow which includes a rich text editor built using <a target="_blank" href="https://draftjs.org/" rel="noopener noreferrer">Draftjs</a>. I contributed to architecture decisions for the app and monitored performance using <a target="_blank" href="https://facebook.github.io/react/docs/perf.html" rel="noopener noreferrer">React Performance Tools</a> to implement improvements.</p>
    <ImageAnim src={props1} alt="Props" />
  </Page>
)
