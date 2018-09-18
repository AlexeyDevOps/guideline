import './base.css'
import './page.css'
import Button from './guideline/button'
import Input from './guideline/input'

class Calculator extends React.Component {
	constructor(props){
		super(props)
	}

	render() {
		const { value, btns, addElem, clear, equal } = this.props;
		
		return (
			<div className='calculator-container'>
				<div className='value-container'>
					<Input hint='Результат вычисления' value={value}/>
				</div>
				<div className='buttons-container'>
					{
						btns.map((item, key) => {
							if (item === 'AC') {
								return (
									<Button className='normal' title={item} hint={item} onClick={clear.bind(this)} key={key}/>									
								)
							} else if (item === '=') {
								return (
									<Button className='normal' title={item} hint={item} onClick={equal.bind(this, value)} key={key}/>
								)
							} else {
								return (
									<Button className='normal' title={item} hint={item} onClick={addElem.bind(this, item)} key={key}/>
								)
							}
						})
					}
				</div>
			</div>
		)
	}
}

export default Calculator