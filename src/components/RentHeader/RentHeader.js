import freeitem1 from "../../assets/images/rent_header_image1.png"
import freeitem2 from "../../assets/images/rent_header_image2.png"
import freeitem3 from "../../assets/images/rent_header_image3.png"
import { useTranslation } from "react-i18next"

export default function RentHeader() {
  const { t, i18n } = useTranslation()
  return (
    <div className='rent_header delivery'>
      <div className='delivery_block rent_header_block'>
        <div className='delivery_title rent_header_title'>
          {t("main/header_title")}
        </div>
        <div className='rent_header_free'>
          <div className='rent_header_free_item'>
            <div className='rent_header_free_item_group'>
              <img src={freeitem1} alt='freeitem1' />
              <div className='rent_header_free_item_info'>
                <div className='rent_header_free_item_info_title'>Фонарик</div>
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
                <div className='rent_header_free_item_info_title'>Фонарик</div>
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
  )
}
