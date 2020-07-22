import React from "react"
import { Route, RouteProps } from "react-router-dom"
import { withAuthenticationRequired } from "@auth0/auth0-react"
// import { Route, Redirect } from "react-router-dom"
// import { useAuth0 } from "@auth0/auth0-react"

// type Primitive = null | undefined | string | number | boolean | symbol | bigint
// type NonPrimitives<T> = T extends Primitive ? never : T

interface Props {
  component: React.ComponentType<any>
  args?: RouteProps
}

// eslint-disable-next-line no-empty-pattern
export default function PrivateRoute({ component, ...args }: Props) {
  return (
    <Route
      component={withAuthenticationRequired(component, {
        onRedirecting: () => <div>Loading...</div>,
      })}
      {...args}
    />
  )
}
