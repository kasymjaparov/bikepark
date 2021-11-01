import "./Application.css"
import { InputGroup, FormControl, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { Formik } from "formik"

import { addOrder } from "../../store/actions/order"
import diff_days from "../../utils/DiffDays"
import sum from "../../utils/Sum"
import validationSchema from "../../utils/ValidSchemaApplication"

export default function Application(props) {
  const dispatch = useDispatch()
  const bikes = useSelector(state => state.bikes.choosenBikes)
  const order = useSelector(state => state.bikes.choosenBikes)
  const onSubmit = (data, { resetForm }) => {
    const newBikes = bikes.map(item => {
      return {
        bikeId: item._id,
        price: item.price,
      }
    })
    dispatch(
      addOrder(
        {
          ...data,
          bikes: newBikes,
        },
        props.history
      )
    )
    resetForm({})
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
                        {sum(values.expiresAt, values.madeAt, bikes)} сом
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  disabled={!isValid || !dirty || !bikes.length}
                  onClick={handleSubmit}
                  style={{ marginTop: 20 }}
                  className='rent_bikes_button'
                >
                  {order.loading ? "Загрузка..." : "Забронировать"}
                </Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}
