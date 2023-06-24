import { useState } from 'react';
import './Dropdown.css'
import { PropTypes } from "prop-types";

export default function Dropdown(props) {
  const { dropdown } = props;
  const [ dropdownOpened, setDropdownOpened ] = useState(false)

  function handleDropdown() {
    setDropdownOpened(!dropdownOpened)
  }

  return (
    <div className='dropdown-container'>
      <div className='dropdown-title-wrapper click-element' onClick={ handleDropdown }>
        <span className='dropdown-name'>{dropdown['dropdown-name']}</span>
        <img src="icon-arrow-down.svg" className={ 'icon-arrow-down' + ` ${ dropdownOpened && 'icon-arrow-up' }`} />
      </div>

      <ul className={'dropdown-list' + ` ${ dropdownOpened && 'dropdown-list-opened' }` }>
        {
          dropdown.items.map((item, index) => {
            return (
              <li key={index} className='dropdown-list-item'>
                <img src={item['item-icon']} className='dropdown-icon' />
                <span className='dropdown-item-name'>{item['item-name']}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )

}

Dropdown.propTypes = {
  dropdown: PropTypes.object
}
