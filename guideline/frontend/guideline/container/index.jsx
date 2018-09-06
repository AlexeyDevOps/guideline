import './style.css'
import React from 'react'

const Container = (props) => <div className={`blocks-container ${props.className}`}>{props.content}</div>

export default Container