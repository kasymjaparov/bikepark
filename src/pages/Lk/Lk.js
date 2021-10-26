import "./Lk.css"
import { NavLink } from "react-router-dom"
import { Route } from "react-router-dom"
import CurrentOrders from "../../components/CurrentOrders/CurrentOrders"
import DoneOrders from "../../components/DoneOrders/DoneOrders"
import UserInfo from "../../components/UserInfo/UserInfo"

export default function Lk() {
  return (
    <div className='lk delivery'>
      <div className='lk_block delivery_block'>
        <div className='delivery_title'>Личный кабинет</div>
        <div className='lk_links'>
          {/* <div className='lk_links_line' /> */}
          <NavLink
            className='lk_links_item'
            activeClassName='lk_links_item-active'
            to='/lk'
            exact
          >
            Текущие заказы
          </NavLink>
          <NavLink
            className='lk_links_item'
            activeClassName='lk_links_item-active'
            to='/lk/orders'
            exact
          >
            Выполненные заказы
          </NavLink>
          <NavLink
            className='lk_links_item'
            activeClassName='lk_links_item-active'
            to='/lk/userinfo'
            exact
          >
            Личные данные
          </NavLink>
        </div>
        <Route path='/lk' component={CurrentOrders} exact />
        <Route path='/lk/orders' component={DoneOrders} exact />
        <Route path='/lk/userinfo' component={UserInfo} exact />
      </div>
    </div>
  )
}
