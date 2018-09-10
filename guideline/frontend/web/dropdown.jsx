import Dropdown from '../guideline/dropdown'

export default class Control extends React.Component {
    constructor(props) {
        super(props)
		
		this.options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']
    }
	
	render() {
        return (
            <div className='container'>
                <div>
					<Dropdown title='Click Me' options={this.options}/>
				</div>
            </div>
        )
    }
}