import './style.css'
import Button from '../button/index'

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {display: false}
		this.toggle = this.toggle.bind(this)
    }
	
	componentDidMount() {
		let sizeRaw = this.props.size
		let contentRaw = this.props.content		
		
		let w = window.innerWidth
		let h = window.innerHeight
		
		let size = JSON.parse(sizeRaw)
		
		let wm = w * size.width
		let hm = h * size.height
		
		let left = parseInt((w - wm) / 2)
		let top = parseInt((h - hm) / 2)
		
		let _body = this.refs._body
		
		_body.style.left = this.appendPxAttribute(left)
		_body.style.top = this.appendPxAttribute(top)
		
		_body.style.width = this.appendPxAttribute(wm)
		_body.style.height = this.appendPxAttribute(hm)
		
		let content = JSON.parse(contentRaw)
		
		this.refs._header.innerHTML = content.header
		this.refs._content.innerHTML = content.content
	}
	
	appendPxAttribute(value) {
		return value + "px"
	}

    toggle() {
        this.setState({display: !this.state.display})
    }

    render() {
        return (
            <div>
				<button className='button modal-button' title={this.props.title} onClick={this.toggle}>{this.props.title}</button>
				<div className={`modal ${this.state.display ? '' : 'hidden'}`}>
					<div className='modal-backdrop' onClick={this.toggle}></div>
					<div className='modal-body' ref='_body'>
						<button className='modal-close' title='Close modal' onClick={this.toggle}>&times;</button>
						<h1 className='modal-header' ref='_header'></h1>
						<div className='modal-content' ref='_content'></div>
					</div>
				</div>
			</div>
        )
    }
}