import './base.css'
import './page.css'
import { Link } from 'react-router-dom'

export default class Control extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='page-container'>
				<header className='header'>
					<div className='container'>
						<a className='logo' href='javascript:void(0)'>Company</a>
						<div className='menu-block'>
							<ul className='navbar'>
								<li><Link to={routing.pages.main}>main</Link></li>
								<li><Link to={routing.pages.button}>button</Link></li>
								<li><Link to={routing.pages.container}>container</Link></li>
								<li><Link to={routing.pages.input}>input</Link></li>
								<li><Link to={routing.pages.textarea}>textarea</Link></li>
								<li><Link to={routing.pages.table}>table</Link></li>
								<li><Link to={routing.pages.popover}>popover</Link></li>
								<li><Link to={routing.pages.modal}>modal</Link></li>
								<li><Link to={routing.pages.dropdown}>dropdown</Link></li>
							</ul>
						</div>
						<div className='profile-block'>
							<button className='button'>Login</button>
						</div>
					</div>
				</header>

				<div className='container content'>
					{this.props.children}
				</div>

				<footer className='footer'>
					<div className='container'>
						<a className='link' href='javascript:void(0)'>Logo</a>
						<a className='link' href='javascript:void(0)'>allo-react-guideline</a>
					</div>
				</footer>
			</div>
        )
    }
}