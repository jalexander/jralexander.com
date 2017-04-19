import styled from 'styled-components'
import { withRouter } from 'react-router'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 0;
`

export default Nav
