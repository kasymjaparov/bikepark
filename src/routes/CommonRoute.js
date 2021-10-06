import React from "react"
import Main from "../pages/Main/Main"
import Auth from "../pages/Auth/Auth"
import { Route, Redirect, Switch } from "react-router-dom"

export default function CommonRoute() {
  // const commonRoutes = [
  //   { path: "/", component: Main },
  //   { path: "/auth", component: Auth },
  // ]
  return (
    <Switch>
      {/* {commonRoutes.map(item => (
        <Route
          key={item.path}
          path={item.path}
          component={item.component}
          exact={true}
        />
      ))} */}
      <Route path='/' component={Main} exact={true} />
      <Route path='/auth' component={Auth} />
      <Redirect to='/auth' />
    </Switch>
  )
}
