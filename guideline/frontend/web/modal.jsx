import Modal from '../guideline/modal'

export default class Control extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container'>
                <Modal title='Click Me' size='{"width": 0.7, "height": 0.6}' content='{"header": "Some modal header", "content": "Some modal content. Some text..."}'/>				
            </div>
        )
    }
}