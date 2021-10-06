import React from "react"
import "../../pages/Auth/Auth.css"
import { InputGroup, FormControl, Form, Button } from "react-bootstrap"

export default function Login() {
  const [show, setShow] = React.useState(false)
  return (
    <form className='registration'>
      <span className='auth_label'>Имя*</span>
      <InputGroup>
        <FormControl className='auth_input' placeholder='Введите имя' />
      </InputGroup>
      <span className='auth_label'>Номер телефона*</span>
      <InputGroup>
        <FormControl
          className='auth_input'
          placeholder='Введите номер телефона'
        />
      </InputGroup>
      <span className='auth_label'>E-mail*</span>
      <InputGroup>
        <FormControl className='auth_input' placeholder='Введите E-mail' />
      </InputGroup>
      <span className='auth_label'>Пароль*</span>
      <InputGroup>
        <FormControl
          className='auth_input'
          placeholder='Введите номер телефона'
          type={!show ? "password" : "text"}
          autoComplete='on'
        />
        <b>
          <i
            onClick={() => setShow(!show)}
            className={!show ? "fas fa-eye" : "fas fa-eye-slash"}
          ></i>
        </b>
      </InputGroup>
      <Form.Check
        type='checkbox'
        label='Согласие на обработку персональных данных'
      />
      <Button className='auth_btn' variant='primary'>
        Войти
      </Button>
      '
    </form>
  )
}
