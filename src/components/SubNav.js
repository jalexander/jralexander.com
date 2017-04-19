import styled from 'styled-components'
import { withRouter } from 'react-router'
import styles from '../config/styles'

const SubNav = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
  font-family: ${styles.inconsolata};
  margin-bottom: 2rem;
  opacity: ${props => props.animateNav ? '1' : '0'}
  transition: opacity 500ms ease-out 700ms;

  > * {
    color: ${styles.green};
    text-decoration: none;
    margin: 0 1rem;

    &:hover, &:focus, &:active {
      transition: color 200ms ease;
      color: ${styles.lightGray};
    }
  }

  @media screen and (max-width: 515px) {
    > * {
      display: block;
    }
  }
`

export default SubNav
