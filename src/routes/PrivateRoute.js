import { Route, Redirect, Switch } from "react-router-dom"
import Main from "../pages/Main/Main"
import Lk from "../pages/Lk/Lk"
import Delivery from "../pages/Delivery/Delivery"
import Info from "../pages/Info/Info"
import Contacts from "../pages/Contacts/Contacts"
import NoPage from "../pages/404/404"

export default function PrivateRoute() {
  const commonRoutes = [
    { path: "/", component: Main },
    { path: "/lk", component: Lk },
    { path: "/delivery", component: Delivery },
    { path: "/info", component: Info },
    { path: "/contacts", component: Contacts },
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
      <Route component={NoPage} />
    </Switch>
  )
}
