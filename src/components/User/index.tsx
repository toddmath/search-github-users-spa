import React, { memo } from "react"

import Card from "components/Card"
import Followers from "components/Followers"
import { Wrapper } from "./User.styles"

interface Props {}

export default memo(function User({}: Props) {
  return (
    <Wrapper>
      <h2>search component</h2>
    </Wrapper>
  )
})
