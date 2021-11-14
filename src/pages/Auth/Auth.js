import React from "react"
import { Route, NavLink } from "react-router-dom"
import "./Auth.css"
import Login from "../../components/Login/Login"
import Registration from "../../components/Registration/Registration"

export default function Auth() {
  return (
    <div className='auth'>
      <div className='auth_block'>
        <div className='auth_links'>
          <div className='auth_links_item'>
            <NavLink
              to='/auth'
              className='auth_links_item'
              activeClassName='auth_links_item-active'
              exact
            >
              Вход
            </NavLink>
          </div>
          <div className='auth_links_item'>
            <NavLink
              to='/auth/registr'
              className='auth_links_item'
              activeClassName='auth_links_item-active'
              exact
            >
              Регистрация
            </NavLink>
          </div>
        </div>
        <Route path='/auth' component={Login} exact />
        <Route path='/auth/registr' component={Registration} exact />
      </div>
    </div>
  )
}
