import Table from '../guideline/table'

export default class Control extends React.Component {
    constructor(props) {
        super(props)
		
		this.headers = [ 'ID', 'Domain', 'Phone', 'Address' ]
		this.rows = [
			[1230001, 'example1.com', '(123) 456-789-001', 'Moscow, Russia'],
			[1230002, 'example2.com', '(123) 456-789-002', 'Moscow, Russia'],
			[1230003, 'example3.com', '(123) 456-789-003', 'Moscow, Russia'],
			[1230004, 'example4.com', '(123) 456-789-004', 'Moscow, Russia'],
			[1230005, 'example5.com', '(123) 456-789-005', 'Moscow, Russia']
		]
    }

    render() {
        return (
            <div className='container'>
                <Table headers={this.headers} rows={this.rows}/>
            </div>
        )
    }
}