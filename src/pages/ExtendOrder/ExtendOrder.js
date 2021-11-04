import "./ExtendOrder.css"
import { Button, FormControl, InputGroup } from "react-bootstrap"
import diff_hours from "../../utils/diffHours"
import { Formik } from "formik"
import * as yup from "yup"
import { useDispatch } from "react-redux"
import { extendOrder } from "../../store/actions/order"

export default function ExtendOrder(props) {
  const dispatch = useDispatch()
  const order = JSON.parse(window.sessionStorage.getItem("order")) || 0
  const validationSchema = yup.object().shape({
    dateEnd: yup.string().required("Обязательное поле"),
  })
  console.log(new Date(order.minDate).toISOString())
  const onSubmit = (data, { resetForm }) => {
    dispatch(
      extendOrder(
        { endTime: data.dateEnd, orderNumber: order.orderNumber },
        props.history
      )
    )
    resetForm({})
  }
  return (
    <div className='delivery extend'>
      <Formik
        initialValues={{
          dateEnd: "",
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
          <div className='delivery_block'>
            <div className='delivery_title'>Продление аренды</div>
            <div className='extend_row_item'>
              <span className='auth_label'>Дата и время конца</span>
              <InputGroup>
                <FormControl
                  name='dateEnd'
                  className='auth_input'
                  placeholder='Дата и время конца'
                  type='datetime-local'
                  min={new Date(order.minDate).toISOString().substring(0, 16)}
                  value={values.dateEnd}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.dateEnd && errors.dateEnd}
                />
              </InputGroup>
            </div>
            <div className='auth_label'>Сумма доплаты</div>
            <div className='choosenBikes_item_price'>
              {order.sum * diff_hours(values.dateEnd, order.minDate)} сом
            </div>
            <Button disabled={!isValid || !dirty} onClick={handleSubmit}>
              Продлить
            </Button>
          </div>
        )}
      </Formik>
    </div>
  )
}
