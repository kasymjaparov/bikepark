import React from "react"
import "../../pages/Auth/Auth.css"
import { Formik } from "formik"
import * as yup from "yup"
import { useDispatch, useSelector } from "react-redux"
import { InputGroup, FormControl, Button } from "react-bootstrap"
import { registration } from "../../store/actions/auth"

export default function Login() {
  const [show, setShow] = React.useState(false)
  const dispatch = useDispatch()
  const validationSchema = yup.object().shape({
    phone: yup
      .string()
      .required("Обязательное поле")
      .matches(/^\+996(\d{9})$/, "Заполните по форме +996XXXXXXXXX "),
    username: yup
      .string()
      .required("Обязательное поле")
      .min(3, "Минимальное количество символов 3"),
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
    dispatch(registration(data))
    resetForm({})
  }
  return (
    <div className='registration'>
      <Formik
        initialValues={{
          phone: "",
          username: "",
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
            <span className='auth_label'>Имя*</span>
            <InputGroup>
              <FormControl
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.username && errors.username}
                name='username'
                className='auth_input'
                placeholder='Введите имя'
              />
            </InputGroup>
            {touched.username && errors.username && (
              <div className='input_error'>{errors.username}</div>
            )}
            <span className='auth_label'>Номер телефона*</span>
            <InputGroup>
              <FormControl
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.phone && errors.phone}
                type='tel'
                name='phone'
                className='auth_input'
                placeholder='Введите номер телефона'
              />
            </InputGroup>
            {touched.phone && errors.phone && (
              <div className='input_error'>{errors.phone}</div>
            )}
            <span className='auth_label'>E-mail*</span>
            <InputGroup>
              <FormControl
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.email && errors.email}
                name='email'
                className='auth_input'
                placeholder='Введите E-mail'
              />
            </InputGroup>
            {touched.email && errors.email && (
              <div className='input_error'>{errors.email}</div>
            )}
            <span className='auth_label'>Пароль*</span>
            <InputGroup>
              <FormControl
                name='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.password && errors.password}
                className='auth_input'
                placeholder='Введите пароль'
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
