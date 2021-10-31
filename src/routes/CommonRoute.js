import { Route, Switch, Redirect } from "react-router-dom"
import Auth from "../pages/Auth/Auth"
import Delivery from "../pages/Delivery/Delivery"
import Info from "../pages/Info/Info"
import Contacts from "../pages/Contacts/Contacts"
import Verification from "../pages/Verification/Verification"
import NoPage from "../pages/404/404"
import AboutUs from "../pages/AboutUs/AboutUs"
import Rent from "../pages/Rent/Rent"

export default function CommonRoute() {
  const commonRoutes = [
    { path: "/", component: Rent, exact: true },
    { path: "/delivery", component: Delivery, exact: true },
    { path: "/info", component: Info, exact: true },
    { path: "/contacts", component: Contacts, exact: true },
    { path: "/aboutus", component: AboutUs, exact: true },
    { path: "/auth", component: Auth, exact: false },
    { path: "/verification/:token", component: Verification, exact: false },
  ]
  return (
    <Switch>
      {commonRoutes.map(item => (
        <Route
          key={item.path}
          path={item.path}
          component={item.component}
          exact={item.exact}
        />
      ))}
      <Redirect to='/auth' />
    </Switch>
  )
}
