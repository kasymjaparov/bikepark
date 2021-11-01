import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import "./Header.css"
import logo from "../../assets/icons/logo.svg"
import login from "../../assets/icons/user.svg"
import { NavLink } from "react-router-dom"

const Header = () => {
  const date = new Date()
  const seconds = date.getSeconds()
  const milliseconds = (60 - seconds) * 1000
  const links = [
    { href: "/aboutus", text: "О нас" },
    { href: "/", text: "Аренда" },
    { href: "/delivery", text: "Доставка" },
    { href: "/info", text: "Где кататься" },
    { href: "/contacts", text: "Контакты" },
  ]
  const success =
    useSelector(state => state.auth.login.success) ||
    window.sessionStorage.getItem("token")
  const [changeTime, setChangeTime] = useState(date)
  const [show, setShow] = React.useState(true)
  useEffect(() => {
    setTimeout(() => {
      setChangeTime(new Date())
    }, milliseconds)
  }, [changeTime])

  useEffect(() => {
    if (window.matchMedia("(max-width:650px)").matches) {
      setShow(false)
    }
  }, [])
  const changeOverflow = () => {
    if (window.matchMedia("(max-width:650px)").matches) {
      setShow(!show)
    }
    if (show) {
      document.querySelector("body").style.overflow = "auto"
    } else {
      document.querySelector("body").style.overflow = "hidden"
    }
  }

  return (
    <div className={"header"}>
      <div className={"header__title"}>
        <img src={logo} alt='logo bike park' />{" "}
      </div>
      {show && (
        <nav>
          <div className='header__links'>
            {links.map(item => (
              <NavLink
                activeClassName='header__links-item-active'
                key={item.text}
                to={item.href}
                onClick={() => changeOverflow()}
                className='header__links-item'
                exact
              >
                {item.text}
              </NavLink>
            ))}
          </div>
          <NavLink
            onClick={() => changeOverflow()}
            to={success ? "/lk" : "/auth"}
            className={"header__authLinks"}
          >
            <img src={login} alt='login' />
            <span>Личный кабинет</span>
          </NavLink>
        </nav>
      )}
      <div className='header_date_burger'>
        <div className={"header__date"}>
          {changeTime.getHours() < 10
            ? `0${changeTime.getHours()}`
            : changeTime.getHours()}
          :
          {changeTime.getMinutes() < 10
            ? `0${changeTime.getMinutes()}`
            : changeTime.getMinutes()}
        </div>
        <div
          onClick={() => changeOverflow()}
          className={!show ? "burger" : "burger-open burger"}
        >
          <div className='burger_item' />
          <div className='burger_item' />
          <div className='burger_item' />
        </div>
      </div>
    </div>
  )
}

export default Header
