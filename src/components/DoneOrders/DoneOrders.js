import { useSelector } from "react-redux";
import "./DoneOrders";
import Accordion from "./Accordion";
import Loading from "../../components/Loading/Loading";
import diff_days from "../../utils/DiffDays";

export default function DoneOrders() {
  const ordersState = useSelector((state) => state.order.getOrders);
  console.log(ordersState.orders.completedOrders);
  return (
    <div className="doneOrders">
      <div className="doneOrders_header">
        <div className="doneOrders_header_item">Номер заказа</div>
        <div className="doneOrders_header_item">Дата</div>
        <div className="doneOrders_header_item">Стоимость</div>
      </div>
      {ordersState.loading && <Loading />}
      {ordersState.success &&
        ordersState.orders.completedOrders.map((order) => (
          <Accordion
            key={order.orderNumber}
            number={order.orderNumber}
            date={new Date(order.expiresAt).toLocaleDateString()}
            price={order.totalPrice}
          >
            <div>
              <div className="doneOrders_line"></div>
              <div className="doneOrders_header">
                <div className="doneOrders_header_item">Название</div>
                <div className="doneOrders_header_item">Цена</div>
                <div className="doneOrders_header_item">Дни</div>
                <div className="doneOrders_header_item">Сумма</div>
              </div>
              {order.bikes.map((item) => (
                <div
                  key={item.bikeId.name}
                  className="accordion_body_bikes doneOrders_header"
                >
                  <div className="accordion_body_bikes_item">
                    {item.bikeId.name}
                  </div>
                  <div className="accordion_body_bikes_item">
                    {order.totalPrice}
                  </div>
                  <div className="accordion_body_bikes_item">
                    {diff_days(order.expiresAt, order.madeAt)}
                  </div>
                  <div className="accordion_body_bikes_item">
                    {diff_days(order.expiresAt, order.madeAt) *
                      order.totalPrice}
                    сом
                  </div>
                </div>
              ))}
            </div>
          </Accordion>
        ))}
    </div>
  );
}
