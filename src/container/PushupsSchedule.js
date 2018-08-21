import React, { Component } from 'react'
import PushupsScheduleRow from './PushupsScheduleRow'

class PushupsSchedule extends Component {
	render() {
		const days = this.props.days;
		const goal = this.props.goals;
		
		return (
			<table>
				<thead>
					<tr>
						<th></th>
						<th>Date</th>
						<th>Goal</th>
						<th>Actual</th>
					</tr>
				</thead>
				<tbody>
					{ days.length > 0 ? days.map((day, i) => <PushupsScheduleRow key={i} day={day} goal={goal[i]} />) : <tr><td colSpan='4' className='empty'>You don't have a plan setup yet.</td></tr> }
				</tbody>
			</table>
		)
	}
}

export default PushupsSchedule