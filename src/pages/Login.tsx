import React, { ReactElement } from "react"
// import { useAuth0 } from "@auth0/auth0-react"
import styled from "styled-components/macro"
import { ReactComponent as LoginImg } from "images/login-img-opt.svg"

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`

interface Props {}

export default function Login({}: Props): ReactElement {
  return (
    <Wrapper>
      <h2>Login Page</h2>
      <LoginImg />
    </Wrapper>
  )
}
