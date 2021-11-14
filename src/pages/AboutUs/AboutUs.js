import "./AboutUs.css"
import { Carousel } from "react-bootstrap"
import bikers from "../../assets/images/aboutUs_bikers.png"
import authorIcon from "../../assets/icons/author.svg"

export default function AboutUs() {
  var carouselItems = []
  for (var i = 0; i < 3; i++) {
    carouselItems.push(
      <Carousel.Item key={i} interval={600000}>
        <div className='aboutUs-carousel_block'>
          <div className='aboutUs-carousel_block_item'>
            <div className='aboutUs-carousel_block_item_text'>
              Безусловно, семантический разбор внешних противодействий
              способствует повышению качества вывода текущих активов.
              противодействий способствует повышению качества вывода текущих
              активов.
            </div>
            <div className='aboutUs-carousel_block_item_author'>
              <span className='aboutUs-carousel_block_item_author_icon'>
                <img src={authorIcon} alt='authorIcon' />
              </span>
              <span className='aboutUs-carousel_block_item_author_name'>
                Name
              </span>
            </div>
          </div>
          <div className='aboutUs-carousel_block_item'>
            <div className='aboutUs-carousel_block_item_text'>
              Безусловно, семантический разбор внешних противодействий
              способствует повышению качества вывода текущих активов.
              противодействий способствует повышению качества вывода текущих
              активов.
            </div>
            <div className='aboutUs-carousel_block_item_author'>
              <span className='aboutUs-carousel_block_item_author_icon'>
                <img src={authorIcon} alt='authorIcon' />
              </span>
              <span className='aboutUs-carousel_block_item_author_name'>
                Name
              </span>
            </div>
          </div>
          <div className='aboutUs-carousel_block_item'>
            <div className='aboutUs-carousel_block_item_text'>
              Безусловно, семантический разбор внешних противодействий
              способствует повышению качества вывода текущих активов.
              противодействий способствует повышению качества вывода текущих
              активов.
            </div>
            <div className='aboutUs-carousel_block_item_author'>
              <span className='aboutUs-carousel_block_item_author_icon'>
                <img src={authorIcon} alt='authorIcon' />
              </span>
              <span className='aboutUs-carousel_block_item_author_name'>
                Name
              </span>
            </div>
          </div>
        </div>
      </Carousel.Item>
    )
  }
  return (
    <div className='aboutUs'>
      <div className='delivery aboutUs-info'>
        <div className='delivery_block aboutUs_block'>
          <div className='delivery_title aboutUs_title'>О нас</div>
          <div className=' aboutUs_row'>
            <div className='aboutUs_text'>
              Товарищи! постоянный количественный рост и сфера нашей активности
              позволяет выполнять важные задания по разработке направлений
              прогрессивного развития. Идейные соображения высшего порядка, а
              также постоянный количественный рост и сфера нашей активности
              играет важную роль в формировании позиций, занимаемых участниками
              в отношении поставленных задач. <br /> <br /> Таким образом
              дальнейшее развитие различных форм деятельности способствует
              подготовки и реализации позиций, занимаемых участниками в
              отношении.
            </div>
            <div className='aboutUs_image'>
              <img src={bikers} alt='bikers' />
            </div>
          </div>
        </div>
      </div>
      <div className='delivery aboutUs-carousel'>
        <div className='delivery_block'>
          <Carousel>{carouselItems}</Carousel>
        </div>
      </div>
    </div>
  )
}
