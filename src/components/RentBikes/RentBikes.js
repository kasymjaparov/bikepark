import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addBike, deleteBike, clearBikes } from "../../store/actions/bikes"

export default function RentBikes() {
  const allBikesState = useSelector(state => state.bikes.allBikes)
  const bikesState = useSelector(state => state.bikes.choosenBikes)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(clearBikes())
  }, [])
  return (
    <div className='rent_bikes_row'>
      {allBikesState.bikes.map((item, index) => (
        <div key={index} className='rent_bikes_row_item'>
          <div className='rent_bikes_row_item_header'>
            <div className='rent_bikes_row_item_header_size'>
              {item.wheelsSize}”
            </div>
            <div className='rent_bikes_row_item_header_brand'>
              {item.frameMaterial}
            </div>
          </div>
          <div className='rent_bikes_row_item_image'>
            <img src={item.img} alt={item.id} />
          </div>
          <div className='rent_bikes_row_item_title'>{item.name}</div>
          <div className='rent_bikes_row_item_price'>{item.price} сом</div>
          {!item.isRented ? (
            bikesState.includes(item) ? (
              <div
                onClick={() => dispatch(deleteBike(item._id))}
                className='rent_bikes_row_item_btn-choosen'
              >
                Выбрано
              </div>
            ) : (
              <div
                onClick={() => dispatch(addBike(item))}
                className='rent_bikes_row_item_btn'
              >
                Выбрать
              </div>
            )
          ) : (
            <div className='auth_label'>Арендован до 26.11.2021</div>
          )}
        </div>
      ))}
    </div>
  )
}
