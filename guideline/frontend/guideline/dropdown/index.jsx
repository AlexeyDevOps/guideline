import './style.css'
import Button from '../button/index'

export default class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
			display: false,
			title: this.props.title || 'Click Me'
		}
		this.toggle = this.toggle.bind(this)
		this.select = this.select.bind(this)
    }
	
	toggle() {
        this.setState({display: !this.state.display})
    }
	
	select(value) {
		this.toggle()
		this.setState({title: value})
	}

    render() {
        return (
            <div className='dropdown'>
                <button className='button popover-click' title={this.state.title} onClick={this.toggle}>{this.state.title}</button>
                <div className={`dropdown-content ${this.state.display ? 'show' : ''}`}>
					{this.props.options.map((e, i) => <a key={i} href='javascript:void(0)' onClick={() => this.select(e)}>{e}</a>)}
				</div>
            </div>
        )
    }
}