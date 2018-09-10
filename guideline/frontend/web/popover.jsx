import Popover from '../guideline/popover'

export default class Control extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container'>
                <Popover title='Click Me (right)' content='This is popover content' position='right'/>
				<Popover title='Click Me (top)' content='This is popover content' position='top'/>
				<Popover title='Click Me (left)' content='This is popover content' position='left'/>
				<Popover title='Click Me (bottom)' content='This is popover content' position='bottom'/>
            </div>
        )
    }
}