import React from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import styles from '../config/styles'

const NavLink = styled.div`
  a {
    margin: 0 0 0.3em 0;
    display: inline-block;
    line-height: 1;

    transition: transform 0.5s ease-out ${props => props.animDelay}, opacity 0.5s ease-out ${props => props.animDelay};
    transform: ${props => props.animateNav ? 'translateY(0px)': 'translateY(-10px)'};
    text-transform: ${props => props.notUppercase ? 'none' : 'uppercase'};

    color: ${styles.lightGray};
    text-shadow: ${styles.shadowSize} ${styles.shadowSize} 0px ${styles.green};

    font-size: ${props => props.main ? '64px' : '54px'};
    font-weight: 100;
    text-decoration: none;

    opacity: ${props => props.animateNav ? '1': '0'};
    position: relative;
    letter-spacing: 0.1rem;
    outline: none;

    &:hover, &:focus {
      color: ${styles.green};
      text-shadow: ${styles.shadowSize} ${styles.shadowSize} 0px ${styles.lightGray};
    }

    &:active {
      transition: color 0.5s ease-out 0.4s;
      text-shadow: none;
      color: ${styles.lightGray};
      top: ${styles.shadowSize};
      left: ${styles.shadowSize};
    }

    @media screen and (max-width: 400px) {
      font-size: 40px;
    }
  }
`

export default ({path, exact, notUppercase, animDelay, animateNav, main, ...props}) => (
  <Route path={path} exact={exact} children={({match}) => (
    <NavLink active={match} {...{notUppercase, animDelay, animateNav, main}}>
      <Link to={path}>{props.title}</Link>
    </NavLink>
  )} />
)
