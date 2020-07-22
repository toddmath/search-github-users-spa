import React, { ReactElement } from "react"
import styled from "styled-components/macro"
// import { Link } from "react-router-dom"

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;

  h1 {
    font-size: 10rem;
  }

  h3,
  pre {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`

interface Props {
  message: string
}

export default function Error({ message }: Props): ReactElement {
  return (
    <Wrapper>
      <h1>Oops...</h1>
      <pre>{JSON.stringify(message, null, 2)}</pre>
    </Wrapper>
  )
}
