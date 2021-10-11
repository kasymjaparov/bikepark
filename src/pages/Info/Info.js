import React from "react"
import "./Info.css"
import { Row, Col } from "react-bootstrap"
import image from "../../assets/images/info_image.png"

export default function Info() {
  return (
    <div className='info'>
      <div className='info_block'>
        <h1 className='info_title'>Где кататься</h1>
        <h2 className='info_subtitle'>Подзаголовок</h2>
        <div className='info_text'>
          Товарищи! постоянный количественный рост и сфера нашей активности
          позволяет выполнять важные задания по разработке направлений
          прогрессивного развития. Идейные соображения высшего порядка, а также
          постоянный количественный рост и сфера нашей активности играет важную
          роль в формировании позиций, занимаемых участниками в отношении
          поставленных задач. <p></p> <br /> Таким образом дальнейшее развитие
          различных форм деятельности способствует подготовки и реализации
          позиций, занимаемых участниками в отношении поставленных задач.
        </div>
        <Row className='info_image-group'>
          <Col className='info_image' lg={4} sm={12}>
            <img src={image} alt='image' />
          </Col>
          <Col className='info_image' lg={4} sm={12}>
            <img src={image} alt='image' />
          </Col>
          <Col className='info_image' lg={4} sm={12}>
            <img src={image} alt='image' />
          </Col>
        </Row>
      </div>
    </div>
  )
}
