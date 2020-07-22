import React, { memo } from "react"
// import { useAuth0 } from "@auth0/auth0-react"

import { Wrapper } from "./Navbar.styles"

// interface Props {}

export default memo(function Navbar() {
  return (
    <Wrapper>
      <h2>navbar component</h2>
    </Wrapper>
  )
})
