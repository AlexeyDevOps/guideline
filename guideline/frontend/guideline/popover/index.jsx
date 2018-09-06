import './style.css'
import React from 'react'
import Button from '../button/index'

export default class Popover extends React.Component {
    constructor(props) {
        super(props)
        this.state = {display: false}
		this.toggle = this.toggle.bind(this)
    }
	
	componentDidMount() {
		let position = this.props.position
		
		let btn = this.refs._button
		let toggle = this.refs._toggle
		
		let wb = btn.offsetWidth
		let hb = btn.offsetHeight
		
		let wt = toggle.offsetWidth
		let ht = toggle.offsetHeight

		if (position == null || position === "top" || position === "bottom") {
			let mrgLeft = parseInt((wt - wb) / 2) * -1
			toggle.style.marginLeft = this.appendPxAttribute(mrgLeft)
			
			if (position === "top") {
				let mrgTop = (hb + ht) * -1
				toggle.style.marginTop = this.appendPxAttribute(mrgTop)
			} else {
				toggle.style.marginTop = this.appendPxAttribute(0)
			}
		} else {
			let mrgTop = parseInt(hb + (ht - hb) / 2) * -1
			toggle.style.marginTop = this.appendPxAttribute(mrgTop)
			
			if (position === "left") {
				let mrgLeft = wt * -1;
				toggle.style.marginLeft = this.appendPxAttribute(mrgLeft)
			} else {
				let mrgLeft = wb;
				toggle.style.marginLeft = this.appendPxAttribute(mrgLeft)
			}
		}
	}
	
	appendPxAttribute(value) {
		return value + "px"
	}

    toggle() {
        this.setState({display: !this.state.display})
    }

    render() {
        return (
            <div className='popover'>
                <button class='button popover-click' title={this.props.title} onClick={this.toggle} ref="_button">{this.props.title}</button>
                <div className={`popover-toggle ${this.state.display ? '' : 'hidden'}`} ref="_toggle">{this.props.content}</div>
            </div>
        )
    }
}