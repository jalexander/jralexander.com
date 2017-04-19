import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Waypoint from 'react-waypoint'

import Title from '../components/Title'

const Wrapper = styled.section`
  min-height: 500px;
`

const Content = styled.section`
  opacity: 0;
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  transform: perspective(400px) rotate3d(1, 0, 0, 3deg) translateY(-10px);
  ${props => {
    if (props.isInView) {
      return `
        opacity: 1;
        transform: perspective(400px) translateY(0);
      `
    }
  }}
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
        <Content {...{isInView}}>
          <Title>{title}</Title>
          {link && <Link target="_blank" to={link}>{linkText}</Link>}
          <p>{clientAndYear}</p>
          <p>{description}</p>
          <p><img className="small" src={this.image} alt={title} /></p>
        </Content>
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
