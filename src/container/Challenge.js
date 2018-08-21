import React, { Component } from 'react';

import ConfigurePlan from './ConfigurePlan'
import PushupsSchedule from './PushupsSchedule'


class Challenge extends Component {
  constructor(props) {
    super(props)

    this.handleConfigData = this.handleConfigData.bind(this);

    this.state = {
      'pushupsDate': localStorage.pushupsDate ? localStorage.pushupsDate : "",
      'pushupsLength': localStorage.pushupsLength ? localStorage.pushupsLength : 0,
      'scheduleDates': [],
      'scheduleGoals': []
    }
  }

  componentWillMount() {
    if (localStorage.pushupsLength) {
      if (this.state.pushupsDate && this.state.pushupsLength) {
        this.createSchedule();
        this.createGoal();
      }
    }

  }

  handleConfigData(data) {
    this.setState(data, function () {
      if (this.state.pushupsDate && this.state.pushupsLength) {
        this.createSchedule();
        this.createGoal();
      }
    });
  }

  createSchedule = () => {
    const date = new Date(this.state.pushupsDate);
    const scheduleDates = [];
    for (var i = 0; i < this.state.pushupsLength; i++) {
      date.setDate(date.getDate() + 1);
      scheduleDates.push(date.toLocaleDateString())
    }

    this.setState({
      scheduleDates: scheduleDates
    });
  }

  createGoal = () => {
    const step = 1000 / (this.state.pushupsLength / 3)
    const scheduleGoals = [];

    for (var i = 0; i < this.state.pushupsLength; i++) {
      if (i < 2) {
        scheduleGoals.push(25)
      } else {
        scheduleGoals.push(Math.round(step * Math.round(i/3)))
      }
    }

    this.setState({
      scheduleGoals: scheduleGoals
    });
  }

  render() {
    return (
	    <div className="pushup-app">
	      <ConfigurePlan getConfigData={this.handleConfigData} pushupsDate={this.state.pushupsDate} pushupsLength={this.state.pushupsLength} />
	      <PushupsSchedule days={this.state.scheduleDates} goals={this.state.scheduleGoals} />
	    </div>
    );
  }
}

export default Challenge;