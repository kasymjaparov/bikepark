import React, { useEffect, useState } from "react"
import "./Header.css"
import logo from "../../assets/icons/logo.svg"
import login from "../../assets/icons/user.svg"
import { NavLink } from "react-router-dom"

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
  const links = [
    { href: "/aboutus", text: "О нас" },
    { href: "/rent", text: "Аренда" },
    { href: "/delivery", text: "Доставка" },
    { href: "/info", text: "Где кататься" },
    { href: "/contacts", text: "Контакты" },
  ]
  return (
    <div className={"header"}>
      <NavLink to='/' className={"header__title"}>
        <img src={logo} alt='logo bike park' />{" "}
      </NavLink>
      <div className='header__links'>
        {links.map(item => (
          <NavLink
            activeClassName='header__links-item-active'
            to={item.href}
            className='header__links-item'
          >
            {item.text}
          </NavLink>
        ))}
      </div>
      <NavLink to='/auth' className={"header__authLinks"}>
        <img src={login} alt='login' />
      </NavLink>
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
