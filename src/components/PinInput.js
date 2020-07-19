import React from 'react';
import "../css/Form.css";
import PropTypes from 'prop-types';

class PinInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: "", date: "", time: ""};

        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
        this.setCurrentDate = this.setCurrentDate.bind(this);
    }
    
    messageChecks() {
        if (this.state.time === "") {
            document.getElementById("PinErrorLabel").textContent = "Time is empty!";
            return false;
        }
        if (this.state.date === "") {
            document.getElementById("PinErrorLabel").textContent = "Date is empty!";
            return false;
        }
        if (this.state.value === "") {
            document.getElementById("PinErrorLabel").textContent = "Message is empty!";
            return false;
        }
        document.getElementById("PinErrorLabel").textContent = "";
        return true;
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleDateChange(event) {
        this.setState({date: event.target.value});
    }

    handleTimeChange(event) {
        this.setState({time: event.target.value});
    }

    editPendingPin(event) {
        return {
            type: "EDIT_PENDING_PIN",
            value: event.target.value
        };
    }

    parseTime(time) {
        try {
            var timeArray = time.split(":");
            var hour = parseInt(timeArray[0])
            var minute = parseInt(timeArray[1])
            var timeOfDay = time.slice(-2)
        } catch {
            return null
        }
        if (hour > 12 || hour < 1) {
            return null
        }
        if (minute > 59 || minute < 1) {
            return null
        }
        if (timeOfDay !== "PM" && timeOfDay !== "AM") {
            return null
        }
        return {
            hour: hour,
            minute: minute,
            timeOfDay: timeOfDay
        }
    }

    parseDate(date) {
        try {
            var dateArray = date.split("/")
            var month = parseInt(dateArray[0])
            var day = parseInt(dateArray[1])
            var year = parseInt(dateArray[2])
        } catch {
            return null
        }
        if (month > 12 || month < 1) {
            return null
        }
        if (day > 31 || day < 1) {
            return null
        }
        if (year < 0) {
            return null
        }
        return {
            month: month,
            day: day,
            year: year
        }
    }
    
    setCurrentDate(event) {
        var today = new Date();

        var date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();

        var hour = today.getHours();
        var timeOfDay = "";
        if (hour > 12) {
            hour = hour - 12;
            timeOfDay = "PM";
        } else {
            timeOfDay = "AM";
        }
        
        var time = hour + ":" + today.getMinutes() + timeOfDay;

        this.setState({date: date, time: time});

        document.getElementById("PinDateField").value = date;
        document.getElementById("PinTimeField").value = time;
        event.preventDefault();
    }

    async handleClick(event) {
        event.persist();

        if (this.messageChecks() === true) {
            var parsedDate = this.parseDate(this.state.date);
            if (parsedDate === null) {
                this.setState({error: "Invalid date"});
                return;
            }
            var parsedTime = this.parseTime(this.state.time);
            if (parsedTime === null) {
                this.setState({error: "Invalid time"});
                return;
            }
            try {
                console.log()
                await this.props.websocket.send(JSON.stringify({
                    type: "addMessage",
                    apiToken: this.props.userData.apiToken,
                    value: this.state.value, 
                    author: {
                        "name": this.props.userData.username,
                        "pfp": this.props.userData.pfp
                    },
                    date: {
                        month: parsedDate.month,
                        day: parsedDate.day,
                        year: parsedDate.year,
                        hour: parsedTime.hour,
                        minute: parsedTime.minute,
                        timeOfDay: parsedTime.timeOfDay
                    }
                }));
            } catch {
                document.getElementById("PinErrorLabel").textContent = "ERROR: Isn't connected to server! CODE: 000";
                event.preventDefault();
                return;
            }

            document.getElementById("PinFormContainer").className = "FormLabel CloseForm"
            document.getElementById("PinFormContainer").onanimationend = this.handleAnimationEnd;
            this.forceUpdate()
        }
        event.preventDefault();
    }
    
    handleAnimationEnd(event) {
        this.setState({value: "", date: "", time: ""})
        document.getElementById("PinFormContainer").style.display = "none";
        document.getElementById("PinInputField").value = "";
        document.getElementById("PinDateField").value = "";
        document.getElementById("PinTimeField").value = "";
    }

    handleCancel (event) {
        document.getElementById("PinFormContainer").className = "FormLabel CloseForm";
        document.getElementById("PinFormContainer").onanimationend = this.handleAnimationEnd;
    }

    updateDimensions () {
        if (window.innerWidth < 200) {
            document.getElementById("Body").style.paddingTop = "410px";
        } else if (window.innerWidth < 234) {
            document.getElementById("Body").style.paddingTop = "410px";
        } else if (window.innerWidth < 254) {
            document.getElementById("Body").style.paddingTop = "360px";
        } else if (window.innerWidth < 290) {
            document.getElementById("Body").style.paddingTop = "300px";
        } else if (window.innerWidth < 370) {
            document.getElementById("Body").style.paddingTop = "240px";
        } else if (window.innerWidth < 507) {
            document.getElementById("Body").style.paddingTop = "180px";
        } else if (window.innerWidth < 600) {
            document.getElementById("Body").style.paddingTop = "130px";
        } else if (window.innerWidth < 700) {
            document.getElementById("Body").style.paddingTop = "130px";
        } else if (window.innerWidth < 900) {
            document.getElementById("Body").style.paddingTop = "130px";
        } else if (window.innerWidth < 980) {
            document.getElementById("Body").style.paddingTop = "130px";
        } else {
            document.getElementById("Body").style.paddingTop = "70px";
        }
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));

        document.getElementById("PinFormContainer").style.display="none";
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }
    
    render () {
        return (
            <div className="FormLabel" id="PinFormContainer">
                <span className="InputTitle">Pin</span>
                <div style={{display: "flex"}}>
                    <input className="InputField" type="text" name="pin" id="PinInputField" placeholder="Message" onChange={this.handleChange} autoFocus />
                    <input className="InputField" type="text" name="date" id="PinDateField" placeholder="MM/DD/YYYY" style={{width: "30%"}} onChange={this.handleDateChange} />
                    <input className="InputField" type="text" name="time" id="PinTimeField" placeholder="8:32PM" style={{width: "40%"}} maxLength="7" onChange={this.handleTimeChange} />
                    <input className="SubmitButton" type="submit" value="Current Date" onClick={this.setCurrentDate} />
                </div>
                <p className="ErrorText" id="PinErrorLabel" />
                <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                    <input className="SubmitButton" type="submit" value="Add" onClick={this.handleClick} />
                    <input className="SubmitButton" type="submit" value="Cancel" onClick={this.handleCancel} />
                </div>
            </div>
        );
    }
}

PinInput.propTypes = {
    websocket: PropTypes.object.isRequired,
    updateMessages: PropTypes.func.isRequired,
    userData: PropTypes.object.isRequired
}

export default PinInput;