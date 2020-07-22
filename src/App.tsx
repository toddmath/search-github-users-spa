import React from "react"
import { Switch, Route } from "react-router-dom"

import DashBoard from "pages/DashBoard"
import Login from "pages/Login"
import Error from "pages/Error"

export default function App() {
  return (
    <Switch>
      <Route path='/' exact component={DashBoard} />
      <Route path='/login' exact component={Login} />
      <Route path='/*' component={Error} />
    </Switch>
  )
}
