import { useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import type { GetTokenSilentlyOptions } from "@auth0/auth0-spa-js/dist/typings/global"

export const useApi = (
  url: string,
  options: GetTokenSilentlyOptions = {}
): { error?: Error | null; loading: boolean; data?: any } => {
  const { getAccessTokenSilently } = useAuth0()
  const [state, setState] = useState({
    error: null,
    loading: true,
    data: null,
  })

  useEffect(() => {
    const _useApi = async () => {
      try {
        const { audience, scope, ...fetchOptions } = options
        const accessToken = await getAccessTokenSilently({ audience, scope })
        const res = await fetch(url, {
          ...fetchOptions,
          headers: {
            ...fetchOptions.headers,
            // Add the Authorization header to the existing headers
            Authorization: `Bearer ${accessToken}`,
          },
        })

        const data = await res.json()

        setState(s => ({
          ...s,
          data,
          error: null,
          loading: false,
        }))
      } catch (error) {
        setState({
          ...state,
          error,
          loading: false,
        })
      }
    }

    _useApi()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return state
}
