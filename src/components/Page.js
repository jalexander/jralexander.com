import React from 'react'
import styled from 'styled-components'
import styles from '../config/styles'

const PageWrapper = styled.div`
  min-height: 100vh;
  font-family: ${styles.inconsolata};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background: ${props => props.green ? styles.green : styles.lightGray};
  display: flex;
  flex-direction: column;
  padding: 80px 20px;
  z-index: 1;
  ${props => props.centered && 'justify-content: center;'}

  p {
    font-size: 16px;
    font-weight: 100;
    margin-bottom: 1rem;
    letter-spacing: 0.03rem;
  }

  a {
    color: ${styles.green};
    text-decoration: none;

    &:hover, &:focus {
      text-decoration: underline;
    }
  }

  img {
    margin: 10px 0;
    border: 10px solid ${styles.white};
    max-width: 100%;
    width: 100%;
  }

  img.small {
    max-width: 300px;
  }

  hr {
    border: none;
    display: block;
    height: 1px;
    background: ${styles.green};
    max-width: 100px;
    margin: 40px auto;
  }
`

const Page = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`

export default ({ children, green, centered }) => (
  <PageWrapper {...{ green, centered }}><Page>{children}</Page></PageWrapper>
)
