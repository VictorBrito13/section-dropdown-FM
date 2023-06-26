import './Button.css'
import PropType from 'prop-types'

export default function Button(props) {
  const { text, cssClasses } = props

  return <button className={ cssClasses && cssClasses.join(' ') }>{text}</button>
}

Button.propTypes = {
  text: PropType.string.isRequired,
  cssClasses: PropType.array
}
