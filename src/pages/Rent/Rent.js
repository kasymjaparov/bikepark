import "./Rents.css"
import freeitem1 from "../../assets/images/rent_header_image1.png"
import freeitem2 from "../../assets/images/rent_header_image2.png"
import freeitem3 from "../../assets/images/rent_header_image3.png"

export default function Rent() {
  return (
    <div className='rent delivery'>
      <div className='delivery_block rent_block'>
        <div className='rent_header'>
          <div className='delivery_title rent_header_title'>
            Аренда велосипедов c доставкой
          </div>
          <div className='rent_header_free'>
            <div className='rent_header_free_item'>
              <img src={freeitem1} alt='freeitem1' />
              <div className='rent_header_free_item_title'>Шлем</div>
            </div>
            <div className='rent_header_free_item'>
              <img src={freeitem2} alt='freeitem2' />
              <div className='rent_header_free_item_title'>Шлем</div>
            </div>
            <div className='rent_header_free_item'>
              <img src={freeitem3} alt='freeitem3' />
              <div className='rent_header_free_item_title'>Шлем</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
