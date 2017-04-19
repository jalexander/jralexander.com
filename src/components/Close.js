import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import styles from '../config/styles'

const CloseWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10;

  a {
    display: block;
    width: 30px;
    height: 30px;
    position: relative;

    &:before, &:after {
      content: "";
      height: 2px;
      width: 40px;
      transition: background 0.2s ease;
      transform: rotate(45deg);
      background: ${props => props.white ? styles.white : styles.green};
      position: absolute;
      top: 14px;
      left: -5px;
    }

    &:after {
      transform: rotate(-45deg);
    }

    &:hover, &:focus {
      &:before, &:after {
        background: ${styles.darkGray};
      }
    }
  }

  @media screen and (max-width: 466px) {
    position: fixed;
    top: 0;
    right: 0;
    padding: 4px;
    background: ${styles.white};
  }
`

const Close = ({ white }) => (
  <CloseWrapper {...{ white }}>
    <Link to="/" />
  </CloseWrapper>
)

export default Close
