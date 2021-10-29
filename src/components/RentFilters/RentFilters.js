import { useState } from "react"
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { getFiltered } from "../../store/actions/bikes"

export default function RentFilters() {
  const filters = {
    brands: ["Stels", "Aist", "Десна"],
    wheelsSize: [26, 28, 24],
    frameSize: [19, 16, 24],
  }
  const [params, setParams] = useState({
    brand: "Все",
    wheelsSize: "Все",
    frameSize: "Все",
    isRented: "Все",
  })
  const dispatch = useDispatch()
  const findByFilters = () => {
    console.log("click")
    dispatch(getFiltered(params))
  }
  return (
    <div className='rent_bikes_filters'>
      <div className='rent_bikes_filters_item'>
        <span className='auth_label rent_bikes_label'>Бренд</span>
        <Form.Select
          onChange={e => setParams({ ...params, brand: e.target.value })}
        >
          <option value='Все'>Все</option>
          {filters.brands.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Form.Select>
      </div>
      <div className='rent_bikes_filters_item'>
        <span className='auth_label rent_bikes_label'>Размер рамы</span>
        <Form.Select
          onChange={e => setParams({ ...params, frameSize: e.target.value })}
        >
          <option value='Все'>Все</option>
          {filters.frameSize.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Form.Select>
      </div>
      <div className='rent_bikes_filters_item'>
        <span className='auth_label rent_bikes_label'>Размер колес</span>
        <Form.Select
          onChange={e => setParams({ ...params, wheelsSize: e.target.value })}
        >
          <option value='Все'>Все</option>
          {filters.wheelsSize.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Form.Select>
      </div>
      <div className='rent_bikes_filters_item'>
        <span className='auth_label rent_bikes_label'>Статус</span>
        <Form.Select
          onChange={e => setParams({ ...params, isRented: e.target.value })}
        >
          <option value='Все'>Все</option>
          <option value={true}>Арендованные</option>
          <option value={false}>Свободные</option>
        </Form.Select>
      </div>
      <Button onClick={findByFilters} type='button' variant='primary'>
        Найти
      </Button>
    </div>
  )
}
