import './Menu.css'
import { useState } from 'react'

export default function Menu() {
  const isMobile = window.matchMedia("(max-width: 1040px)").matches
  const [ menuStatus, setMenuStatus ] = useState(false)

  function handleMenuStatus() {
    setMenuStatus(!menuStatus)
  }

  return (
    <menu className='menu'>

      <li>
        <img src="./logo.svg" />
      </li>

      {/* Menu icon for mobile devices */}
      {
        isMobile &&
        <img
          src="icon-menu.svg"
          alt="open menu"
          className='menu-icon'
          onClick={ handleMenuStatus }
        />
      }

      {/* First section (wraps the logo and dropdowns) */}
      <li className={ `menu-item ${ menuStatus && 'menu-opened'}`}>
        <ul className='navigation-container'>
          {
            isMobile &&
            <li>
              <img
                src="icon-close-menu.svg"
                className='icon-close-menu'
                onClick={ handleMenuStatus }
              />
            </li>
          }
          <li className='navigation-item'>
            dropdown 1
          </li>
          <li className='navigation-item'>
            dropdown 2
          </li>
          <li className='navigation-item'><a href="#">Careers</a></li>
          <li className='navigation-item'><a href="#">About</a></li>
        </ul>
      {/* </li> */}
      {/* Second section (wraps register actions) */}
      {/* <li className='menu-item'> */}
        <ul className='register-actions-container'>
          <li className='register-action'><button>Login</button></li>
          <li className='register-action'><button className='outline'>Register</button></li>
        </ul>
      </li>
    </menu>
  )
}
