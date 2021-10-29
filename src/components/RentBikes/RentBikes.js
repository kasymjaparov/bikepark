import { useSelector } from "react-redux"
export default function RentBikes() {
  const bikesState = useSelector(state => state.bikes.allBikes)
  return (
    <div className='rent_bikes_row'>
      {bikesState.bikes.map((item, index) => (
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
          <div className='rent_bikes_row_item_btn'>Выбрано</div>
        </div>
      ))}
    </div>
  )
}
