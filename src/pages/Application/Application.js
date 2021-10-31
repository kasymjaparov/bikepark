import "./Application.css"
import { InputGroup, FormControl, Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useState } from "react"
import { Formik } from "formik"
import * as yup from "yup"

export default function Application(props) {
  const validationSchema = yup.object().shape({
    phone: yup
      .string()
      .required("Обязательное поле")
      .matches(/^\+996(\d{9})$/, "Заполните по форме +996XXXXXXXXX "),
    name: yup
      .string()
      .required("Обязательное поле")
      .min(3, "Минимальное количество символов 3"),
    madeAt: yup.string().required("Обязательное поле"),
    expiresAt: yup.string().required("Обязательное поле"),
    addressOfClient: yup.string().required("Обязательное поле"),
    addressOfAdmin: yup.string().required("Обязательное поле"),
  })
  const onSubmit = (data, { resetForm }) => {
    console.log({ ...data, bikes: bikes })
    resetForm({})
  }
  const diff_days = (dt2, dt1) => {
    const date2 = new Date(dt2)
    const date1 = new Date(dt1)
    const diffTime = Math.abs(date2 - date1) || 0
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }
  const [date1, setDate1] = useState()
  const [date2, setDate2] = useState()
  const bikes = useSelector(state => state.bikes.choosenBikes)
  const sum = (date2, date1) => {
    let sum = 0
    bikes.forEach(item => {
      sum += item.price * (diff_days(date1, date2) || 0)
    })
    return sum
  }

  return (
    <div className='application'>
      <Formik
        initialValues={{
          phone: "",
          name: "",
          madeAt: "",
          expiresAt: "",
          addressOfClient: "",
          addressOfAdmin: "",
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
            <div className='delivery'>
              <div className='application_block delivery_block'>
                <div className='delivery_title application_title'>
                  Заявка на аренду велосипедов
                </div>

                <div className='application_row'>
                  <div className='application_row_left'>
                    <span className='auth_label'>Имя*</span>
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
                    <span className='auth_label'>Номер телефона*</span>
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
                  </div>
                  <div className='application_row_right'>
                    <span className='auth_label'>Дата начала*</span>
                    <InputGroup>
                      <FormControl
                        name='madeAt'
                        className='auth_input'
                        placeholder='Дата начала*'
                        type='date'
                        value={values.madeAt}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.madeAt && errors.madeAt}
                      />
                    </InputGroup>
                    {touched.madeAt && errors.madeAt && (
                      <div className='input_error'>{errors.madeAt}</div>
                    )}
                    <span className='auth_label'>Дата окончания*</span>
                    <InputGroup>
                      <FormControl
                        name='expiresAt'
                        className='auth_input'
                        placeholder='Дата начала*'
                        type='date'
                        value={values.expiresAt}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.expiresAt && errors.expiresAt}
                      />
                    </InputGroup>
                    {touched.expiresAt && errors.expiresAt && (
                      <div className='input_error'>{errors.expiresAt}</div>
                    )}
                  </div>
                </div>
                <div className='application_row'>
                  <div className='application_row_left'>
                    <span className='auth_label'>Доставка по адресу*</span>
                    <InputGroup>
                      <FormControl
                        name='addressOfClient'
                        className='auth_input'
                        placeholder='Адрес'
                        value={values.addressOfClient}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={
                          touched.addressOfClient && errors.addressOfClient
                        }
                      />
                    </InputGroup>
                    {touched.addressOfClient && errors.addressOfClient && (
                      <div className='input_error'>
                        {errors.addressOfClient}
                      </div>
                    )}
                  </div>
                  <div className='application_row_right'>
                    <span className='auth_label'>Возврат по адресу*</span>
                    <InputGroup>
                      <FormControl
                        name='addressOfAdmin'
                        className='auth_input'
                        placeholder='Адрес'
                        value={values.addressOfAdmin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={
                          touched.addressOfAdmin && errors.addressOfAdmin
                        }
                      />
                    </InputGroup>
                    {touched.addressOfAdmin && errors.addressOfAdmin && (
                      <div className='input_error'>{errors.addressOfAdmin}</div>
                    )}
                  </div>
                </div>
                <div className='auth_label'>*Тарификация считается по дням</div>
              </div>
            </div>
            <div className='delivery block-prefix rent_bikes choosenBikes'>
              <div className='delivery_block choosenBikes_block'>
                {bikes.map(bike => (
                  <div key={bike._id} className='choosenBikes_item'>
                    <div className='choosenBikes_item_group'>
                      <div className='choosenBikes_item_image'>
                        <img src={bike.img} alt={bike.name} />
                      </div>
                      <div className='choosenBikes_item_name'>{bike.name}</div>
                    </div>
                    <div className='choosenBikes_item_price'>
                      {bike.price} сом
                    </div>
                  </div>
                ))}
                <div className='choosenBikes_block_row'>
                  <div
                    onClick={() => props.history.push("/")}
                    className='rent_bikes_row_item_btn-choosen choosenBikes_block_row_btn'
                  >
                    Назад к выбору велосипедов
                  </div>
                  <div className='choosenBikes_block_row_prices'>
                    <div className='choosenBikes_block_row_prices_hours'>
                      <div className='choosenBikes_block_row_prices_title'>
                        Дни:
                      </div>
                      <div className='choosenBikes_block_row_prices_value'>
                        {diff_days(values.expiresAt, values.madeAt)}
                      </div>
                    </div>
                    <div className='choosenBikes_block_row_prices_price'>
                      <div className='choosenBikes_block_row_prices_title'>
                        Итого:
                      </div>
                      <div className='choosenBikes_block_row_prices_value choosenBikes_block_row_prices_value-som'>
                        {sum(values.expiresAt, values.madeAt)} сом
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  disabled={!isValid || !dirty}
                  onClick={handleSubmit}
                  style={{ marginTop: 20 }}
                  className='rent_bikes_button'
                >
                  Забронировать
                </Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}
