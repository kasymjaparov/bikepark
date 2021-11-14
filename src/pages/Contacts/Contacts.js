import "./Contacts.css"
import { InputGroup, FormControl, Button } from "react-bootstrap"
import { Formik } from "formik"
import * as yup from "yup"

export default function Contacts() {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Обязательное поле")
      .min(3, "Минимальное количество символов 3"),
    phone: yup
      .string()
      .required("Обязательное поле")
      .matches(/^\+996(\d{9})$/, "Заполните по форме +996XXXXXXXXX "),
  })
  const onSubmit = (data, { resetForm }) => {
    console.log(data)
    resetForm({})
  }
  return (
    <div className='contacts delivery'>
      <Formik
        initialValues={{
          phone: "",
          name: "",
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
          <div className='delivery_block contacts_block'>
            <div className='delivery_title contacts_title'>Контакты</div>
            <div className='contacts_row'>
              <div className='contacts_row_info'>
                <div className='delivery_conditions_item_title contacts_row_info_title'>
                  Номер телефона
                </div>
                <div className='info_subtitle contacts_row_info_subtitle'>
                  999 999 999
                </div>
                <div className='delivery_conditions_item_title contacts_row_info_title'>
                  E-mail
                </div>
                <div className='info_subtitle contacts_row_info_subtitle'>
                  info@bikerental.ae
                </div>
                <div className='delivery_conditions_item_title contacts_row_info_title'>
                  Адрес шоурума
                </div>
                <div className='info_subtitle contacts_row_info_subtitle'>
                  Страна А, город Б, ул. АААА
                </div>
              </div>
              <div className='contacts_row_form'>
                <div className='delivery_conditions_item_title contacts_row_info_title'>
                  Оставить заявку
                </div>
                <div className='info_subtitle contacts_row_info_subtitle'>
                  Остались вопросы? Свяжитесь с нами
                </div>
                <InputGroup>
                  <FormControl
                    name='name'
                    className='auth_input'
                    placeholder='Имя*'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.name && errors.name}
                  />
                </InputGroup>
                {touched.name && errors.name && (
                  <div className='input_error'>{errors.name}</div>
                )}
                <InputGroup>
                  <FormControl
                    name='phone'
                    className='auth_input'
                    placeholder='Номер телефона*'
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.phone && errors.phone}
                  />
                </InputGroup>
                {touched.phone && errors.phone && (
                  <div className='input_error'>{errors.phone}</div>
                )}
                <Button
                  type='button'
                  disabled={!isValid || !dirty}
                  onClick={handleSubmit}
                  className='auth_btn'
                  variant='primary'
                >
                  Отправить
                </Button>
              </div>
            </div>
            <div className='contacts_map'>
              <iframe
                src='https://yandex.ru/map-widget/v1/?um=constructor%3A9b7cbbf870527bd7dd16db04f8fe01218529b26b4015915f328f77d7dfa14ef7&amp;source=constructor'
                width='500'
                height='400'
                frameBorder='0'
              ></iframe>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}
