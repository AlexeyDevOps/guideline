import Button from '../guideline/button'

export default class Control extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container'>
                <div>
					<Button className='normal' title='Click Me' hint='Some hint text'/>
					<Button className='warning' title='Click Me' hint='Some hint text'/>
					<Button className='cancel' title='Click Me' hint='Some hint text'/>
					<Button className='normal' title='Click Me' hint='Some hint text' disabled={true}/>
				</div>
            </div>
        )
    }
}