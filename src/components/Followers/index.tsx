import React, { memo } from "react"

// import { GithubContext } from 'context/context';
import { Wrapper } from "./Followers.styles"

interface Props {}

export default memo(function Followers({}: Props) {
  return (
    <Wrapper>
      <h2>followers component</h2>
    </Wrapper>
  )
})
