import "./Rents.css"
import freeitem1 from "../../assets/images/rent_header_image1.png"
import freeitem2 from "../../assets/images/rent_header_image2.png"
import freeitem3 from "../../assets/images/rent_header_image3.png"

export default function Rent() {
  return (
    <div className='rent '>
      <div className='rent_header delivery'>
        <div className='delivery_block rent_header_block'>
          <div className='delivery_title rent_header_title'>
            Аренда велосипедов c доставкой
          </div>
          <div className='rent_header_free'>
            <div className='rent_header_free_item'>
              <div className='rent_header_free_item_group'>
                <img src={freeitem1} alt='freeitem1' />
                <div className='rent_header_free_item_info'>
                  <div className='rent_header_free_item_info_title'>
                    Фонарик
                  </div>
                  <div className='rent_header_free_item_info_subtitle'>
                    Бесплатно
                  </div>
                </div>
              </div>
            </div>

            <div className='rent_header_free_item'>
              <div className='rent_header_free_item_group'>
                <img src={freeitem2} alt='freeitem1' />
                <div className='rent_header_free_item_info'>
                  <div className='rent_header_free_item_info_title'>
                    Фонарик
                  </div>
                  <div className='rent_header_free_item_info_subtitle'>
                    Бесплатно
                  </div>
                </div>
              </div>
            </div>

            <div className='rent_header_free_item'>
              <div className='rent_header_free_item_group'>
                <img src={freeitem3} alt='freeitem1' />
                <div className='rent_header_free_item_info'>
                  <div className='rent_header_free_item_info_title'>Замок</div>
                  <div className='rent_header_free_item_info_subtitle'>
                    Бесплатно
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="delivery block-prefix rent_bikes">
        <div className="delivery_block">fsdfs</div>
      </div>
    </div>
  )
}
