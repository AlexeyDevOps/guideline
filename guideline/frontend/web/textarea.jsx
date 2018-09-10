import TextArea from '../guideline/textarea'

export default class Control extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container'>
                <TextArea hint='Some text area' placeholder='Please, enter some text...'/>
				<TextArea hint='Some text area' placeholder='You can not enter value' disabled={true}/>
            </div>
        )
    }
}