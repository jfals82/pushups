import React, { Component } from 'react'

class PushupsScheduleRows extends Component {
	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this);

		this.state = {
			actualPushups: localStorage['actualPushups' + Date.parse(this.props.day)] ? localStorage['actualPushups' + Date.parse(this.props.day)] : "",
			timePushups: localStorage['timePushups' + Date.parse(this.props.day)] ? localStorage['timePushups' + Date.parse(this.props.day)] : "",
		}
	}

	handleChange(event) {
	    const target = event.target;
	    const value = target.value;
	    const name = target.name

		this.setState({
			[name]: value
		})

	    localStorage.setItem(name + Date.parse(this.props.day), value);
	}

	render() {
		return (
			<tr>
				<td className="checkCell">{this.props.goal <= this.state.actualPushups ? <div className="check"><svg width="25" height="25" viewBox="0 0 25 25"><path d="m256 32c-124 0-224 100-224 224 0 124 100 224 224 224 124 0 224-100 224-224 0-124-100-224-224-224z m115 149l-139 179c-1 1-3 3-5 3-3 0-4-1-5-3-2-1-79-76-79-76l-2-1c0-1-1-2-1-3 0-2 1-3 1-4 1 0 1 0 1-1 8-8 24-24 25-25 1-2 2-3 4-3 3 0 5 2 6 3 1 1 45 43 45 43l111-143c1 0 2-1 4-1 1 0 2 0 3 1l31 24c0 1 1 3 1 4 0 1 0 2-1 3z" transform="scale(0.046875 0.046875)"></path></svg></div> : ""}</td>
				<td>{this.props.day}</td>
				<td>{this.props.goal}</td>
				<td>
					<input 
						className="progressInput"
						value={this.state.actualPushups}
						name="actualPushups"
						type="number"
						onChange={this.handleChange}
					 />
				</td>
			</tr>
		)
	}
}

export default PushupsScheduleRows