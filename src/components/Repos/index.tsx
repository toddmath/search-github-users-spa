import React, { memo } from "react"

// import { GithubContext } from 'context/context'
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "components/Charts"
import { Wrapper } from "./Repos.styles"

interface Props {}

export default memo(function Repos({}: Props) {
  return (
    <Wrapper>
      <h2>repos component</h2>
    </Wrapper>
  )
})
