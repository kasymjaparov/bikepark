import { Route, Switch } from "react-router-dom"
import Lk from "../pages/Lk/Lk"
import Delivery from "../pages/Delivery/Delivery"
import Info from "../pages/Info/Info"
import Contacts from "../pages/Contacts/Contacts"
import NoPage from "../pages/404/404"
import AboutUs from "../pages/AboutUs/AboutUs"
import Rent from "../pages/Rent/Rent"

export default function PrivateRoute() {
  const privateRoutes = [
    { path: "/lk", component: Lk, exact: false },
    { path: "/", component: Rent, exact: true },
    { path: "/delivery", component: Delivery, exact: true },
    { path: "/info", component: Info, exact: true },
    { path: "/contacts", component: Contacts, exact: true },
    { path: "/aboutus", component: AboutUs, exact: true },
  ]
  return (
    <Switch>
      {privateRoutes.map(item => (
        <Route
          key={item.path}
          path={item.path}
          component={item.component}
          exact={item.exact}
        />
      ))}
      <Route component={NoPage} />
    </Switch>
  )
}
