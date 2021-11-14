import React from "react"
import "./Delivery.css"
import { Row, Col } from "react-bootstrap"

export default function Delivery() {
  return (
    <div className='delivery'>
      <div className='delivery_block'>
        <h1 className='delivery_title'>Правила</h1>
        <h2 className='delivery_subtitle'>Условия аренды</h2>
        <Row className='delivery_conditions'>
          <Col className='delivery_conditions_item' lg={4} md={6} sm={12}>
            <h3 className='delivery_conditions_item_title'>Срок аренды</h3>
            <p className='delivery_conditions_item_text'>
              Минимальный срок аренды велосипеда составляет 1 день. При брони от
              5 дней действует скидка 10%
            </p>
          </Col>
          <Col className='delivery_conditions_item' lg={4} md={6} sm={12}>
            <h3 className='delivery_conditions_item_title'>Срок аренды</h3>
            <p className='delivery_conditions_item_text'>
              Минимальный срок аренды велосипеда составляет 1 день. При брони от
              5 дней действует скидка 10%
            </p>
          </Col>
          <Col className='delivery_conditions_item' lg={4} md={12} sm={12}>
            <h3 className='delivery_conditions_item_title'>Срок аренды</h3>
            <p className='delivery_conditions_item_text'>
              Минимальный срок аренды велосипеда составляет 1 день. При брони от
              5 дней действует скидка 10%
            </p>
          </Col>
        </Row>
        <h2 className='delivery_subtitle'>Возмещение ущерба</h2>
        <p className='delivery_conditions_item_text'>
          Товарищи! постоянный количественный рост и сфера нашей активности
          позволяет выполнять важные задания по разработке направлений
          прогрессивного развития. Идейные соображения высшего порядка, а также
          постоянный количественный рост и сфера нашей активности играет важную
          роль в формировании позиций, занимаемых участниками в отношении
          поставленных задач. <br />
          <p> </p>
          Таким образом дальнейшее развитие различных форм деятельности
          способствует подготовки и реализации позиций, занимаемых участниками в
          отношении поставленных задач.
        </p>
      </div>
    </div>
  )
}
