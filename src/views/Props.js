import React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import Title from '../components/Title'
import { Link } from 'react-router-dom'
import Close from '../components/Close'
import ImageAnim from '../components/ImageAnim'

import props1 from '../images/props1.jpg'

export default () => (
  <Page>
    <Helmet title='PRoPS' />
    <Close />
    <Title>PRoPS CREATOR EXCHANGE</Title>
    <Link target="_blank" to="https://props.us/">view site</Link>
    <p>2016 - Present</p>
    <p>I joined the PRoPS tech team in July of 2016 to help rebuild the front-end in React and Redux. The rebuild was part of a site redesign before the preview launch. After the public launch in February 2017, the site was covered in the Fast Company article &ldquo;<Link target="_blank" to="https://www.fastcocreate.com/3068055/inside-an-ambitious-sometimes-maddening-quest-to-save-the-internet">Inside An Ambitious, Sometimes Maddening, Quest To Save The Internet</Link>&rdquo;.</p>
    <p>My initial focus was on the &ldquo;Create Post&rdquo; flow which includes a rich text editor built using <Link target="_blank" to="https://draftjs.org/">Draftjs</Link>. I contributed to architecture decisions for the app and monitored performance using <Link target="_blank" to="https://facebook.github.io/react/docs/perf.html">React Performance Tools</Link> to implement improvements.</p>
    <ImageAnim src={props1} alt="PRoPS" />
  </Page>
)
