import React, { Component } from 'react';

class ConfigurePlan extends Component {
	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
	    const target = event.target;
	    const value = target.value;
	    const name = target.name

		this.props.getConfigData({[name]: value})

	    localStorage.setItem(name, value);
	}

	render() {
		return (
			<div className="config">
      			<h1>1000 Challenge</h1>
				<form className="configform">
					<div className="form-group">
						<label>When do you want to start?</label>
						<input 
							value={this.props.pushupsDate}
							name="pushupsDate"
							type="date"
							onChange={this.handleChange}
						 />
					</div>
					<div className="form-group">
						<label>How many days do you want to take to get to 1000 pushups?</label>
			            <select value={this.props.pushupsLength} name="pushupsLength" onChange={this.handleChange}>
							<option value="">- Select -</option>
							<option value="30">30</option>
							<option value="60">60</option>
							<option value="90">90</option>
							<option value="120">120</option>
			            </select>
					</div>
				</form>
			</div>
		)
	}

}

export default ConfigurePlan;
// .toISOString().substr(0, 10)