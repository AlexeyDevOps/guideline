import './style.css'
import React from 'react'

const Table = (props) => 
	<table className='table'>
		<thead>
			<tr>
				{props.headers.map((e, i) => <th key={i}>{e}</th>)}
			</tr>
		</thead>
		<tbody>
			{props.rows.map((e, i) => <tr key={i}>{e.map((f, j) => <td key={j}>{f}</td>)}</tr>)}
		</tbody>
	</table>

export default Table