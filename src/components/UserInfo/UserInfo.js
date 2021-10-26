import "./UserInfo.css"
import { InputGroup, FormControl, Button, Row, Col } from "react-bootstrap"

export default function UserInfo() {
  return (
    <Row className='userInfo'>
      <Col className='userInfo_group' lg={4} md={6} sm={12}>
        <div className='userInfo_group_item'>
          <span className='auth_label'>Имя</span>
          <InputGroup>
            <FormControl name='name' className='auth_input' placeholder='Имя' />
          </InputGroup>
        </div>
        <div className='userInfo_group_item'>
          <span className='auth_label'>Номер телефона</span>
          <InputGroup>
            <FormControl
              name='phone'
              className='auth_input'
              placeholder='Номер телефона'
            />
          </InputGroup>
        </div>
      </Col>
      <Col className='userInfo_group' lg={4} md={6} sm={12}>
        <div className='userInfo_group_item'>
          <span className='auth_label'>Email</span>
          <InputGroup>
            <FormControl
              name='email'
              className='auth_input'
              placeholder='Введите email'
            />
          </InputGroup>
        </div>
        <div className='userInfo_group_item'>
          <span className='auth_label'>Адрес доставки</span>
          <InputGroup>
            <FormControl
              name='address'
              className='auth_input'
              placeholder='Адрес доставки'
            />
          </InputGroup>
        </div>
      </Col>
      <Col className='userInfo_group' lg={4} md={6} sm={12}>
        <div className='userInfo_group_item'>
          <span className='auth_label'>Старый пароль</span>
          <InputGroup>
            <FormControl
              type='password'
              name='password'
              className='auth_input'
              placeholder='Пароль'
            />
          </InputGroup>
        </div>
        <div className='userInfo_group_item'>
          <span className='auth_label'>Новый пароль</span>
          <InputGroup>
            <FormControl
              type='password'
              name='password'
              className='auth_input'
              placeholder='Новый пароль'
            />
          </InputGroup>
        </div>
      </Col>
    </Row>
  )
}
