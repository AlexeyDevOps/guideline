import './style.css'
import React from 'react'

const Input = (props) => <input type='text' className='input' title={props.hint} placeholder={props.placeholder} disabled={props.disabled ? 'disabled' : ''}/>

export default Input