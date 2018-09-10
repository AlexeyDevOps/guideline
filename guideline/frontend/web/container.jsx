import Container from '../guideline/container'

export default class Control extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container'>
                <div>
					<Container className='container' content='Some container content'/>
					<Container className='container' content='Some container content'/>
					<Container className='container' content='Some container content'/>
					<Container className='container' content='Some container content'/>
					<Container className='container' content='Some container content'/>
				</div>
            </div>
        )
    }
}