import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import styled from "styled-components"

export default function AuthWrapper({ children }: React.PropsWithChildren<{}>) {
  const { isLoading, error } = useAuth0()

  return (
    <Wrapper>
      {isLoading && "Loading..."}
      {error && <h1>{JSON.stringify(error.message, null, 2)}</h1>}
      {!isLoading && !error && children}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;

  img {
    width: 150px;
  }
`
