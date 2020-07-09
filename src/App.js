import React from 'react';
import MessageContainer from './components/MessageContainer'
import AddButton from './components/AddButton'
import "./css/App.css"

class App extends React.Component {
    state = {
        messages: [
            {
                value: "Discord Pin Message System.",
                author: {
                    name: "Johnny",
                    pfp: "pfp"
                },
                date: {
                    month: 6,
                    day: 26,
                    year: 2020,
                    hour: 12,
                    minute: 22,
                    timeOfDay: "PM"
                }
            },
            {
                value: "Is honestly great.",
                author: {
                    name: "Jane",
                    pfp: "pfp2"
                },
                date: {
                    month: 6,
                    day: 26,
                    year: 2020,
                    hour: 12,
                    minute: 24,
                    timeOfDay: "PM"
                }
            },
            {
                value: "Agreed.",
                author: {
                    name: "Johnny",
                    pfp: "pfp"
                },
                date: {
                    month: 6,
                    day: 26,
                    year: 2020,
                    hour: 12,
                    minute: 30,
                    timeOfDay: "PM"
                }
            },
            {
                value: "Boo!!!",
                author: {
                    name: "Jack",
                    pfp: "pfp3"
                },
                date: {
                    month: 6,
                    day: 26,
                    year: 2020,
                    hour: 11,
                    minute: 31,
                    timeOfDay: "PM"
                }
            },
            {
                value: "No?",
                author: {
                    name: "Jack",
                    pfp: "pfp3"
                },
                date: {
                    month: 6,
                    day: 26,
                    year: 2020,
                    hour: 8,
                    minute: 32,
                    timeOfDay: "AM"
                }
            },
            {
                value: "Absolutely not.",
                author: {
                    name: "Johnny",
                    pfp: "pfp"
                },
                date: {
                    month: 6,
                    day: 26,
                    year: 2020,
                    hour: 9,
                    minute: 33,
                    timeOfDay: "AM"
                }
            },
            {
                value: "Awh...",
                author: {
                    name: "Jack",
                    pfp: "pfp3"
                },
                date: {
                    month: 6,
                    day: 26,
                    year: 2020,
                    hour: 9,
                    minute: 35,
                    timeOfDay: "AM"
                }
            },
            {
                value: "Fine!!!",
                author: {
                    name: "Jack",
                    pfp: "pfp3"
                },
                date: {
                    month: 6,
                    day: 26,
                    year: 2020,
                    hour: 9,
                    minute: 36,
                    timeOfDay: "AM"
                }
            },
            {
                value: "Good.",
                author: {
                    name: "Jane",
                    pfp: "pfp2"
                },
                date: {
                    month: 6,
                    day: 26,
                    year: 2020,
                    hour: 9,
                    minute: 33,
                    timeOfDay: "AM"
                }
            },
            {
                value: "Alright.",
                author: {
                    name: "Johnny",
                    pfp: "pfp3"
                },
                date: {
                    month: 6,
                    day: 26,
                    year: 2020,
                    hour: 9,
                    minute: 33,
                    timeOfDay: "AM"
                }
            },
        ]
    }

    render() {
        return (
            <div id="AppDiv" style={{filter: "blur(5px)", transition: "all 0.2s"}}>
                <div className="TitleContainer" id="Title">
                    <img src={require("./logo.svg")} alt="Logo" height="60" width="60" style={{marginLeft:"10px", marginRight:"10px"}} />
                    <span className="Title">A Database of Random Out of Context Messages</span>
                </div>
                <div id="Body">
                    <MessageContainer messages={this.state.messages} />
                </div>
                <div>
                    <AddButton />
                </div>
            </div>
        )
    }
}

export default App;