import { Form } from "react-bootstrap"
import { useSelector } from "react-redux"

export default function RentFilters() {
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index
  }

  const bikesBrand = useSelector(state =>
    state.bikes.allBikes.bikes.map(item => item.brand).filter(onlyUnique)
  )
  const bikesWheelSize = useSelector(state =>
    state.bikes.allBikes.bikes.map(item => item.wheelsSize).filter(onlyUnique)
  )
  const bikesFrameSize = useSelector(state =>
    state.bikes.allBikes.bikes.map(item => item.frameSize).filter(onlyUnique)
  )
  return (
    <div className='rent_bikes_filters'>
      <div className='rent_bikes_filters_item'>
        <span className='auth_label rent_bikes_label'>Бренд</span>
        <Form.Select>
          <option value=''>Все</option>
          {bikesBrand.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Form.Select>
      </div>
      <div className='rent_bikes_filters_item'>
        <span className='auth_label rent_bikes_label'>Размер рамы</span>
        <Form.Select>
          <option value=''>Все</option>
          {bikesWheelSize.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Form.Select>
      </div>
      <div className='rent_bikes_filters_item'>
        <span className='auth_label rent_bikes_label'>Размер колес</span>
        <Form.Select>
          <option value=''>Все</option>
          {bikesFrameSize.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Form.Select>
      </div>
      <div className='rent_bikes_filters_item'>
        <span className='auth_label rent_bikes_label'>Статус</span>
        <Form.Select>
          <option>Все</option>
          <option value='1'>Арендованные</option>
          <option value='2'>Свободные</option>
        </Form.Select>
      </div>
    </div>
  )
}
