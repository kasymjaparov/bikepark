import { Route, Redirect, Switch } from "react-router-dom"
import Main from "../pages/Main/Main"
import Auth from "../pages/Auth/Auth"
import Delivery from "../pages/Delivery/Delivery"
import Info from "../pages/Info/Info"
import Contacts from "../pages/Contacts/Contacts"

export default function CommonRoute() {
  return (
    <Switch>
      <Route path='/' component={Main} exact={true} />
      <Route path='/auth' component={Auth} />
      <Route path='/delivery' component={Delivery} />
      <Route path='/info' component={Info} />
      <Route path='/contacts' component={Contacts} />
      <Redirect to='/auth' />
    </Switch>
  )
}
