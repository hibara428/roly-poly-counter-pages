import { RouteLocationNormalized, Router } from 'vue-router'
import { VueCookieNext } from 'vue-cookie-next'
import BackendApi from '@/libs/BackendApi'
import { getEmailFromToken, cookieName } from '@/libs/cloudflare-utils'
import { store } from '@/stores/index'
import { isAxiosError } from 'axios'

export const authenticationGuard = (router: Router) => {
  const api = new BackendApi(process.env.VUE_APP_API_URL)

  router.beforeEach(async (to: RouteLocationNormalized) => {
    // Excluding routes.
    if (['logout'].includes(String(to.name))) {
      return true
    }

    // Get a token from cookie.
    const token =
      process.env.NODE_ENV === 'local'
        ? process.env.VUE_APP_LOCAL_TOKEN
        : VueCookieNext.getCookie(cookieName)
    if (!token) {
      return { name: 'logout' }
    }

    // Get an e-mail from token.
    const email = getEmailFromToken(token)

    try {
      // Get the user from DB.
      const user = await api.getUserByEmail(email)
      // Update state.
      store.state.user = user

      return true
    } catch (e) {
      if (isAxiosError(e) && e.response?.status === 404) {
        try {
          // Add a user.
          const user = await api.addUser(email)
          // Update state.
          store.state.user = user

          return true
        } catch (e) {
          if (e instanceof Error) {
            store.state.errors.push('認証エラーが発生しました。')
            console.error(e.message)
          }
        }
      } else if (e instanceof Error) {
        store.state.errors.push('認証エラーが発生しました。')
        console.error(e.message)
      }
    }

    return { name: 'logout' }
  })
}
