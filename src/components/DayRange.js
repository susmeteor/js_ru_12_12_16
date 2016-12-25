import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import DayPicker, {DateUtils} from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class DayRange extends Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }

    state = {
        from: null,
        to: null
    }

    render() {
        const { from, to } = this.state;
        return (
            <div className="RangeExample">
                { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
                { from && !to && <p>Please select the <strong>last day</strong>.</p> }
                { from && to &&
                <p>
                    You chose from { moment(from).format('L') } to { moment(to).format('L') }.
                    { ' ' }<a href="." onClick={ this.handleResetClick }>Reset</a>
                </p>
                }
                <DayPicker
                    numberOfMonths={ 2 }
                    selectedDays={ day => DateUtils.isDayInRange(day, {from, to })}
                    onDayClick={this.handleDayClick}
                    />
            </div>
        )
    }

    handleResetClick = (ev) => {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({from: null, to: null});
    }

    //так не работает :(
    // handleDayClick = (ev) => (day) => {
    //     const range = DateUtils.addDayToRange(day, this.state);
    //     this.setState({range});
    // }

    handleDayClick(e, day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }
}
export default DayRange