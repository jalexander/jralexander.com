import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Waypoint from 'react-waypoint'
import SkewWrapper from './SkewWrapper'

const Wrapper = styled.section`
  min-height: 500px;
`

class WorkSection extends PureComponent {
  state = {
    isInView: false,
  }

  handleWaypointEnter = () => {
    const imagePreload = new Image()
    imagePreload.onload = () => {
      this.setState({ isInView: true })
    }
    imagePreload.src = this.props.src
  }

  render() {
    const { isInView } = this.state
    const { src, alt } = this.props
    return (
      <Wrapper>
        <SkewWrapper {...{isInView}}>
          <p><img {...{ src }} alt={alt} /></p>
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
