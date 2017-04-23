import styled from 'styled-components'

export default styled.div`
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
