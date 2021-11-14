import { useSelector, useDispatch } from "react-redux"
import { Button } from "react-bootstrap"
import Accordion from "../DoneOrders/Accordion"
import diffHours from "../../utils/diffHours"
import { deleteOrder } from "../../store/actions/order"
import SkeletonOrders from "../SkeletonOrders/SkeletonOrders"

export default function DoneOrders(props) {
  const ordersState = useSelector(state => state.order.getOrders)
  const dispatch = useDispatch()
  const extendOne = (orderNumber, order) => {
    let sum = 0
    order.bikes.forEach(item => {
      sum += item.price
    })
    window.sessionStorage.setItem(
      "order",
      JSON.stringify({ orderNumber, sum, minDate: order.expiresAt })
    )
    props.history.push("/extend")
  }
  return (
    <div className='doneOrders'>
      {ordersState.success && ordersState.orders.currentOrders.length > 0 && (
        <div className='doneOrders_header'>
          <div className='doneOrders_header_item'>Номер заказа</div>
          <div className='doneOrders_header_item'>Дата</div>
          <div className='doneOrders_header_item'>Стоимость</div>
        </div>
      )}

      {ordersState.loading && <SkeletonOrders />}
      {ordersState.success && ordersState.orders.currentOrders.length == 0 && (
        <div>Текущих заказов нет</div>
      )}
      {ordersState.success &&
        ordersState.orders.currentOrders.map(order => (
          <Accordion
            key={order.orderNumber}
            number={order.orderNumber}
            date={new Date(order.expiresAt).toLocaleDateString()}
            madeAt={order.madeAt}
            expiresAt={order.expiresAt}
            price={order.totalPrice}
          >
            <div>
              <div className='doneOrders_header'>
                <div className='doneOrders_header_item'>Название</div>
                <div className='doneOrders_header_item'>Цена</div>
                <div className='doneOrders_header_item'>Часы</div>
                <div className='doneOrders_header_item'>Сумма</div>
              </div>
              {order.bikes.map(item => (
                <div
                  key={item.bikeId.name}
                  className='accordion_body_bikes doneOrders_header'
                >
                  <div className='accordion_body_bikes_item'>
                    {item.bikeId.name}
                  </div>
                  <div className='accordion_body_bikes_item'>{item.price}</div>
                  <div className='accordion_body_bikes_item'>
                    {diffHours(order.expiresAt, order.madeAt)}
                  </div>
                  <div className='accordion_body_bikes_item'>
                    {diffHours(order.expiresAt, order.madeAt) * item.price}
                    сом
                  </div>
                </div>
              ))}
              <div className='doneOrders_row'>
                <div className='doneOrders_footer'>
                  <div className='doneOrders_footer_item'>
                    Тип аренды: почасовой
                  </div>
                  <div className='doneOrders_footer_item'>
                    Период аренды:
                    {` ${new Date(
                      order.madeAt
                    ).toLocaleDateString()} ${new Date(order.madeAt)
                      .toLocaleTimeString()
                      .substring(0, 5)} - ${new Date(
                      order.expiresAt
                    ).toLocaleDateString()} ${new Date(order.expiresAt)
                      .toLocaleTimeString()
                      .substring(0, 5)}`}
                  </div>
                  <div className='doneOrders_footer_item'>
                    Тип оплаты: на месте
                  </div>
                </div>
                <div className='doneOrders_buttons'>
                  <Button
                    onClick={() => dispatch(deleteOrder(order.orderNumber))}
                    variant='outline-primary'
                  >
                    Отменить заказ
                  </Button>

                  <Button onClick={() => extendOne(order.orderNumber, order)}>
                    Продлить аренду
                  </Button>
                </div>
              </div>
            </div>
          </Accordion>
        ))}
    </div>
  )
}
