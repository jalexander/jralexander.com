import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Waypoint from 'react-waypoint'
import SkewWrapper from './SkewWrapper'

import Title from '../components/Title'

const Wrapper = styled.section`
  min-height: 500px;
`

class WorkSection extends PureComponent {
  state = {
    isInView: false,
  }

  handleWaypointEnter = () => {
    this.image = require(`../images/${this.props.item.imageName}.jpg`)
    const imagePreload = new Image()
    imagePreload.onload = () => {
      this.setState({ isInView: true })
    }
    imagePreload.src = this.image
  }

  render() {
    const { isInView } = this.state
    const { item } = this.props
    const { title, link, linkText, clientAndYear, description } = item
    return (
      <Wrapper>
        <hr />
        <SkewWrapper {...{isInView}}>
          <Title>{title}</Title>
          {link && <a target="_blank" href={link} rel="noopener noreferrer">{linkText}</a>}
          <p>{clientAndYear}</p>
          <p>{description}</p>
          <p><img className="small" src={this.image} alt={title} /></p>
        </SkewWrapper>
        <Waypoint
          onEnter={this.handleWaypointEnter}
        >
          <div />
        </Waypoint>
      </Wrapper>
    )
  }
}

export default WorkSection
