import React, { useEffect } from "react"
import "../../pages/Auth/Auth.css"
import { InputGroup, FormControl, Button } from "react-bootstrap"
import { Formik } from "formik"
import * as yup from "yup"
import { useDispatch } from "react-redux"
import { login } from "../../store/actions/auth"
import { useHistory } from "react-router-dom"

export default function Login(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const dispatch = useDispatch()
  const [show, setShow] = React.useState(false)
  let history = useHistory()
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Обязательное поле")
      .email("Формат почты неверен"),
    password: yup
      .string()
      .required("Обязательное поле")
      .min(9, "Минимальное количество символов 9"),
  })
  const onSubmit = (data, { resetForm }) => {
    dispatch(login(data, history))
    resetForm({})
  }
  return (
    <div className='login'>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validateOnBlur
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <form>
            <span className='auth_label'>Номер телефона*</span>
            <InputGroup>
              <FormControl
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name='email'
                className='auth_input'
                isInvalid={touched.email && errors.email}
                placeholder='Введите email'
              />
            </InputGroup>
            {touched.email && errors.email && (
              <div className='input_error'>{errors.email}</div>
            )}
            <span className='auth_label'>Пароль*</span>
            <InputGroup>
              <FormControl
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.password && errors.password}
                name='password'
                className='auth_input'
                placeholder='Введите пароль'
                type={!show ? "password" : "text"}
                autoComplete='on'
              />
              <div className='auth_password_eye'>
                <i
                  onClick={() => setShow(!show)}
                  className={!show ? "fas fa-eye" : "fas fa-eye-slash"}
                ></i>
              </div>
            </InputGroup>
            {touched.password && errors.password && (
              <div className='input_error'>{errors.password}</div>
            )}
            <Button
              type='button'
              disabled={!isValid || !dirty}
              onClick={handleSubmit}
              className='auth_btn'
              variant='primary'
            >
              Войти
            </Button>
          </form>
        )}
      </Formik>
    </div>
  )
}
