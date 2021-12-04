import React, { useEffect, useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { OverlayTrigger, Popover } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import "./Header.css"
import logo from "../../assets/icons/logo.svg"
import login from "../../assets/icons/user.svg"
import { logout } from "../../store/actions/auth"

const Header = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const date = new Date()
  const seconds = date.getSeconds()
  const milliseconds = (60 - seconds) * 1000
  const links = [
    { href: "/aboutus", text: t("header/nav_aboutus") },
    { href: "/", text: t("header/nav_rent") },
    { href: "/delivery", text: t("header/nav_delivery") },
    { href: "/info", text: t("header/nav_wheredrive") },
    { href: "/contacts", text: t("header/nav_contacts") },
  ]
  const [changeTime, setChangeTime] = useState(date)
  const [showTooltip, setShowTooltip] = useState(false)
  const [show, setShow] = React.useState(true)
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "ru")
  const target = useRef(null)
  const success =
    useSelector(state => state.auth.login.success) ||
    window.sessionStorage.getItem("token")
  useEffect(() => {
    setTimeout(() => {
      setChangeTime(new Date())
    }, milliseconds)
  }, [changeTime])
  useEffect(() => {
    if (window.matchMedia("(max-width:750px)").matches) {
      setShow(false)
    }
  }, [])
  const changeOverflow = () => {
    if (window.matchMedia("(max-width:750px)").matches) {
      setShow(!show)
    }
    if (show) {
      document.querySelector("body").style.overflow = "auto"
    } else {
      document.querySelector("body").style.overflow = "hidden"
    }
  }
  const logoutFromApp = () => {
    dispatch(logout())
  }
  const changeLang = lang => {
    setLanguage(lang)
    localStorage.setItem("lang", lang)
    i18n.changeLanguage(lang)
  }
  return (
    <div className={"header"}>
      <img src={logo} alt='logo bike park' />
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
          <div className='header_language'>
            <div className='header_language_item'>
              <input
                onChange={e => changeLang(e.target.value)}
                type='radio'
                id='ru'
                name='lang'
                value='ru'
                checked
                checked={language == "ru"}
              />
              <label htmlFor='ru'>RU</label>
            </div>
            <div className='header_language_item'>
              <input
                onChange={e => changeLang(e.target.value)}
                type='radio'
                id='en'
                name='lang'
                value='en'
                checked={language == "en"}
              />
              <label htmlFor='en'>EN</label>
            </div>
          </div>

          <OverlayTrigger
            target={target.current}
            show={showTooltip}
            placement='bottom'
            overlay={
              <Popover>
                <Popover.Body>
                  {success ? (
                    <div>
                      <NavLink onClick={() => setShowTooltip(false)} to='/lk'>
                        {t("header/nav/lk")}
                      </NavLink>
                      <span onClick={logoutFromApp}>
                        {t("header/nav/logout")}
                      </span>
                    </div>
                  ) : (
                    <>
                      <NavLink
                        onClick={() => setShowTooltip(false)}
                        to='/auth/registr'
                      >
                        {t("header/nav_reg")}
                      </NavLink>
                      <br />
                      <NavLink onClick={() => setShowTooltip(false)} to='/auth'>
                        {t("header/nav_login")}
                      </NavLink>
                    </>
                  )}
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
            <span> {t("header/nav_lk")}</span>
          </NavLink>
          {success && (
            <div
              onClick={logoutFromApp}
              className='header_logout header__authLinks'
            >
              {t("header/nav_logout")}
            </div>
          )}
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
