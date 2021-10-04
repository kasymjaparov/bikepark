import React, { useEffect, useState } from "react"
import "./Header.css"
import logo from "../../assets/icons/logo.png"
import login from "../../assets/icons/login.png"

const Header = () => {
  const date = new Date()
  const seconds = date.getSeconds()
  const milliseconds = (60 - seconds) * 1000
  const [changeTime, setChangeTime] = useState(date)
  useEffect(() => {
    setTimeout(() => {
      setChangeTime(new Date())
    }, milliseconds)
  }, [changeTime])

  return (
    <div className={"header"}>
      <h1 className={"header__title"}>
        <img src={logo} alt='logo bike park' />{" "}
      </h1>
      <div className={"header__links"}>
        <div className={"header__links-item"}>О нас</div>
        <div className={"header__links-item"}>Аренда</div>
        <div className={"header__links-item"}>Доставка</div>
        <div className={"header__links-item"}>Где кататься</div>
        <div className={"header__links-item"}>Контакты</div>
      </div> 
      <div className={"header__authLinks"}>
        <img src={login} alt='login' />
      </div>
      <div className={"header__feedback"}>Обратная свзяь</div>
      <div className={"header__date"}>
        {changeTime.getHours() < 10
          ? `0${changeTime.getHours()}`
          : changeTime.getHours()}
        :
        {changeTime.getMinutes() < 10
          ? `0${changeTime.getMinutes()}`
          : changeTime.getMinutes()}
      </div>
    </div>
  )
}

export default Header
