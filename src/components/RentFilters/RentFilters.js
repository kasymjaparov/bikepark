import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { getFiltered } from "../../store/actions/bikes"
import api from "../../api"

export default function RentFilters() {
  const [params, setParams] = useState({
    brand: "Все",
    wheelsSize: "Все",
    frameSize: "Все",
    isRented: "Все",
  })
  const [filters, setFilters] = useState({
    brands: ["Stels", "Aist", "Десна"],
    wheelsSizes: [26, 28, 24],
    frameSizes: [19, 16, 24],
  })
  useEffect(() => {
    fetch(api.bikes.getFilters)
      .then(response => response.json())
      .then(data => {
        setFilters(data)
      })
  }, [])
  const dispatch = useDispatch()
  return (
    <div className='rent_bikes_filters'>
      <div className='rent_bikes_filters_item'>
        <span className='auth_label rent_bikes_label'>Бренд</span>
        <Form.Select
          onChange={e => {
            setParams({ ...params, brand: e.target.value })
            dispatch(getFiltered({ ...params, brand: e.target.value }))
          }}
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
          onChange={e => {
            setParams({ ...params, frameSize: e.target.value })
            dispatch(getFiltered({ ...params, frameSize: e.target.value }))
          }}
        >
          <option value='Все'>Все</option>
          {filters.frameSizes.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Form.Select>
      </div>
      <div className='rent_bikes_filters_item'>
        <span className='auth_label rent_bikes_label'>Размер колес</span>
        <Form.Select
          onChange={e => {
            setParams({ ...params, wheelsSize: e.target.value })
            dispatch(getFiltered({ ...params, wheelsSize: e.target.value }))
          }}
        >
          <option value='Все'>Все</option>
          {filters.wheelsSizes.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Form.Select>
      </div>
      <div className='rent_bikes_filters_item'>
        <span className='auth_label rent_bikes_label'>Статус</span>
        <Form.Select
          onChange={e => {
            setParams({ ...params, wheelsSize: e.target.value })
            dispatch(getFiltered({ ...params, isRented: e.target.value }))
          }}
        >
          <option value='Все'>Все</option>
          <option value={true}>Арендованные</option>
          <option value={false}>Свободные</option>
        </Form.Select>
      </div>
    </div>
  )
}
