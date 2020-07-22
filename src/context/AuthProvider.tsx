import React, { ReactElement } from "react"
import { useHistory } from "react-router-dom"
import { AppState } from "@auth0/auth0-react/src/auth0-provider"
import { Auth0Provider } from "@auth0/auth0-react"

interface Props {}

export default function AuthProvider({
  children,
}: React.PropsWithChildren<Props>): ReactElement {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN!
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID!
  const history = useHistory()

  const onRedirect = (appState: AppState) => {
    history.push(appState?.returnTo || window?.location?.pathname)
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      // audience={}
      scope='read:users'
      onRedirectCallback={onRedirect}
      cacheLocation='localstorage'
    >
      {children}
    </Auth0Provider>
  )
}
