import './style.css'

const Input = (props) => <input type='text' className='input' title={props.hint} placeholder={props.placeholder} disabled={props.disabled ? 'disabled' : ''} value={props.value}/>

export default Input