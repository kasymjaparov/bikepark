import React, { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import "./Header.css"
import logo from "../../assets/icons/logo.svg"
import login from "../../assets/icons/user.svg"
import { NavLink } from "react-router-dom"
import { OverlayTrigger, Popover, Tooltip } from "react-bootstrap"

const Header = () => {
  const links = [
    { href: "/aboutus", text: "О нас" },
    { href: "/", text: "Аренда" },
    { href: "/delivery", text: "Доставка" },
    { href: "/info", text: "Где кататься" },
    { href: "/contacts", text: "Контакты" },
  ]
  const [showTooltip, setShowTooltip] = useState(false)
  const target = useRef(null)
  const success =
    useSelector(state => state.auth.login.success) ||
    window.sessionStorage.getItem("token")
  const [show, setShow] = React.useState(true)
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
  const logoutFromApp = () => {
    console.log("logout")
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

          <OverlayTrigger
            target={target.current}
            show={showTooltip}
            placement='bottom'
            overlay={
              <Popover>
                <Popover.Body>
                  <NavLink onClick={() => setShowTooltip(false)} to='/lk'>
                    Личный кабинет
                  </NavLink>
                  <span onClick={logoutFromApp}>Выйти</span>
                </Popover.Body>
              </Popover>
            }
          >
            <img
              onClick={() => setShowTooltip(!showTooltip)}
              className='header_authLinks-img'
              src={login}
              alt='login'
            />
          </OverlayTrigger>

          <NavLink
            onClick={() => changeOverflow()}
            to={success ? "/lk" : "/auth"}
            className={"header__authLinks"}
          >
            <span>Личный кабинет</span>
          </NavLink>
        </nav>
      )}
      <div className='header_date_burger'>
        <div className={"header__date"}>
          {new Date().toLocaleTimeString().substring(0, 5)}
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
