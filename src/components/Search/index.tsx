import React, { memo } from "react"

import Search from "@styled-icons/feather/Search"
// import { GithubContext } from 'context/context'

import { Wrapper, ErrorWrapper } from "./Search.styles"

interface Props {}

export default memo(function Search({}: Props) {
  return (
    <Wrapper>
      <h2>search component</h2>
      <Search />
    </Wrapper>
  )
})
