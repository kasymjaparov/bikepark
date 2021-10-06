import React from "react"

export default function PrivateRoute() {
  const commonRoutes = [
    { path: "/", component: Main },
    
  ]
  return (
    <Switch>
      {commonRoutes.map(item => (
        <Route
          key={item.path}
          path={item.path}
          component={item.component}
          exact={true}
        />
      ))}
      <Redirect to='/auth' />
    </Switch>
  )
}
