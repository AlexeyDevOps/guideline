import Input from '../guideline/input'

export default class Control extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container'>
                <div>
					<Input hint='Some text input' placeholder='Please, enter some value...'/>
					<Input hint='Some text input' placeholder='You can not enter value' disabled={true}/>
				</div>                
            </div>
        )
    }
}