import React from "react"
import { InputGroup, FormControl, Button } from "react-bootstrap"
import "../../pages/Auth/Auth.css"

export default function Login() {
  const [show, setShow] = React.useState(false)
 
  return (
    <form className='login'>
      <span className='auth_label'>Номер телефона*</span>
      <InputGroup>
        <FormControl
          className='auth_input'
          placeholder='Введите номер телефона'
        />
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

      <Button className='auth_btn' variant='primary'>
        Войти
      </Button>
    </form>
  )
}
