import React from 'react'
import ReactDOM from 'react-dom'
import Button from './guideline/button/index'
import Container from './guideline/container/index'
import Input from './guideline/input/index'
import TextArea from './guideline/textarea/index'
import Table from './guideline/table/index'
import Popover from './guideline/popover/index'
import Dropdown from './guideline/dropdown/index'
import Modal from './guideline/modal/index'

const headers = [ 'ID', 'Домен', 'Телефон', 'Адрес' ]
const rows = [
	[1230001, 'example1.com', '(123) 456-789-001', 'Россия, Москва'],
	[1230002, 'example2.com', '(123) 456-789-002', 'Россия, Москва'],
	[1230003, 'example3.com', '(123) 456-789-003', 'Россия, Москва'],
	[1230004, 'example4.com', '(123) 456-789-004', 'Россия, Москва'],
	[1230005, 'example5.com', '(123) 456-789-005', 'Россия, Москва']
]

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']

let path = window.location.pathname

if (path.indexOf('button.html') !== -1) {
	ReactDOM.render(<Button className='' title='Click Me' hint='Some hint text'/>, document.getElementById('root'))	
}

if (path.indexOf('container.html') !== -1) {
	ReactDOM.render(<Container className='block-sample' content='Some container content'/>, document.getElementById('root'))	
}

if (path.indexOf('input.html') !== -1) {
	ReactDOM.render(<Input hint='Some text input' placeholder='Please, enter some value...'/>, document.getElementById('root'))	
}

if (path.indexOf('textarea.html') !== -1) {
	ReactDOM.render(<TextArea hint='Some text area' placeholder='Please, enter some text...'/>, document.getElementById('root'))	
}

if (path.indexOf('table.html') !== -1) {
	ReactDOM.render(<Table headers={headers} rows={rows}/>, document.getElementById('root'))	
}

if (path.indexOf('popover.html') !== -1) {
	ReactDOM.render(<Popover title='Click Me' content='This is popover content' position='right'/>, document.getElementById('root'))	
}

if (path.indexOf('dropdown.html') !== -1) {
	ReactDOM.render(<Dropdown title='Click Me' options={options}/>, document.getElementById('root'))	
}

if (path.indexOf('modal.html') !== -1) {
	ReactDOM.render(<Modal title='Click Me' size='{"width": 0.7, "height": 0.6}' content='{"header": "Тестовый загловок модального окна", "content": "Произвольное содержимое модального окна. Некоторый текст..."}'/>, document.getElementById('root'))	
}