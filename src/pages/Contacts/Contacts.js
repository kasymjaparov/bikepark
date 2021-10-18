import "./Contacts.css"
import { InputGroup, FormControl, Button } from "react-bootstrap"

export default function Contacts() {
  return (
    <div className='contacts delivery'>
      <div className='delivery_block contacts_block'>
        <div className='delivery_title contacts_title'>Контакты</div>
        <div className='contacts_row'>
          <div className='contacts_row_info'>
            <div className='delivery_conditions_item_title contacts_row_info_title'>
              Номер телефона
            </div>
            <div className='info_subtitle contacts_row_info_subtitle'>
              999 999 999
            </div>
            <div className='delivery_conditions_item_title contacts_row_info_title'>
              E-mail
            </div>
            <div className='info_subtitle contacts_row_info_subtitle'>
              info@bikerental.ae
            </div>
            <div className='delivery_conditions_item_title contacts_row_info_title'>
              Адрес шоурума
            </div>
            <div className='info_subtitle contacts_row_info_subtitle'>
              Страна А, город Б, ул. АААА
            </div>
          </div>
          <div className='contacts_row_form'>
            <div className='delivery_conditions_item_title contacts_row_info_title'>
              Оставить заявку
            </div>
            <div className='info_subtitle contacts_row_info_subtitle'>
              Остались вопросы? Свяжитесь с нами
            </div>
            <InputGroup>
              <FormControl
                name='name'
                className='auth_input'
                placeholder='Имя*'
              />
            </InputGroup>
            <InputGroup>
              <FormControl
                name='phone'
                className='auth_input'
                placeholder='Номер телефона*'
              />
            </InputGroup>
            <Button className='auth_btn' variant='primary'>
              Отправить
            </Button>
          </div>
        </div>
        <div className='contacts_map'>
          <iframe
            src='https://yandex.ru/map-widget/v1/?um=constructor%3A9b7cbbf870527bd7dd16db04f8fe01218529b26b4015915f328f77d7dfa14ef7&amp;source=constructor'
            width='500'
            height='400'
            frameborder='0'
          ></iframe>
        </div>
      </div>
    </div>
  )
}
