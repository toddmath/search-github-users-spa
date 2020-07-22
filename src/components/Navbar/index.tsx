import React, { memo } from "react"
import { useAuth0 } from "@auth0/auth0-react"

import { Wrapper } from "./Navbar.styles"

interface Props {}

export default memo(function Navbar({}: Props) {
  const {
    error,
    user,
    isLoading,
    isAuthenticated,
    getAccessTokenSilently,
    getAccessTokenWithPopup,
    getIdTokenClaims,
    loginWithRedirect,
    loginWithPopup,
    logout,
  } = useAuth0()

  return (
    <Wrapper>
      <h2>navbar component</h2>
    </Wrapper>
  )
})
