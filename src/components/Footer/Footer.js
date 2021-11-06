import React from "react"
import "./Footer.css"
import Container from "../../components/Container"

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <div className='footer_row'>
          <h1 className='footer_title'>Аренда велосипедов</h1>
          <div className='footer_nav'>
            <div className='footer_nav_item'>Правила</div>
            <div className='footer_nav_item'>Контакты</div>
            <div className='footer_nav_item'>Обратная связь</div>
          </div>
        </div>
        <div className='footer_types'>
          <div className='footer_types_item'>Алюминий</div>
          <div className='footer_types_item'>Карбон</div>
          <div className='footer_types_item'>Горные/городские</div>
          <div className='footer_types_item'>Городские эконом</div>
        </div>
        <div className='footer_info'>
          <div className='footer_info_name'>© BikePark, 2021</div>
          <div className='footer_info_links'>
            <div className='footer_info_links_politic'>
              Политика конфиденциальности
            </div>
            <div className='footer_info_links_item fab fa-facebook-f' />
            <div className='footer_info_links_item fab fa-instagram' />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
