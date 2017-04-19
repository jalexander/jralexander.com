import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import Page from '../components/Page'
import Title from '../components/Title'
import Close from '../components/Close'
import WorkSection from '../components/WorkSection'

import archivedProjects from '../data/archived-projects.json'

class More extends PureComponent {
  render() {
    return (
      <Page>
        <Helmet title='More Work' />
        <Close />
        <p>a brief history of digital work -</p>
        {archivedProjects.map((item) => (
          <WorkSection key={item.imageName} {...{ item }} />
        ))}
      </Page>
    )
  }
}

export default More
