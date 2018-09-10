import './style.css'

const Button = (props) => <button className={`button ${props.className}`} title={props.hint} onClick={props.onClick} disabled={props.disabled ? 'disabled' : ''}>{props.title}</button>

export default Button