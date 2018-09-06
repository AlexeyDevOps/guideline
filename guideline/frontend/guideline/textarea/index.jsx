import './style.css'
import React from 'react'

const TextArea = (props) => <textarea className='textarea' title={props.hint} placeholder={props.placeholder} disabled={props.disabled ? 'disabled' : ''}></textarea>

export default TextArea