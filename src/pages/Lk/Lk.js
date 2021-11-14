import "./Lk.css"
import { NavLink } from "react-router-dom"
import { Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import CurrentOrders from "../../components/CurrentOrders/CurrentOrders"
import DoneOrders from "../../components/DoneOrders/DoneOrders"
import UserInfo from "../../components/UserInfo/UserInfo"
import { getOrders } from "../../store/actions/order"
import { useEffect } from "react"

export default function Lk() {
  const getOrder = useSelector(state => state.order.deleteOrder)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrders())
  }, [getOrder])
  return (
    <div className='lk delivery'>
      <div className='lk_block delivery_block'>
        <div className='delivery_title'>Личный кабинет</div>
        <div className='lk_links'>
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
