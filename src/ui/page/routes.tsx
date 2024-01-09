import { FC } from 'react'
import { Route } from 'wouter'

import { home_page } from './home'
import { login_page } from './auth/login'
import { signup_page } from './auth/signup'

interface Route_opts {
  path: string
  Component: FC
}

const routes: Route_opts[] = [
  home_page,
  login_page,
  signup_page,
]

export
const Router = () =>
  routes.map(route =>
    <Route path={route.path} key={route.path}>
      <route.Component />
    </Route>
  )
