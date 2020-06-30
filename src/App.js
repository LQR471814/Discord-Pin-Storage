import React from 'react';
import MessageContainer from './components/MessageContainer'
import AddButton from './components/AddButton'
import "./css/App.css"

class App extends React.Component {
    state = {
        messages: [
            {
                value: "Who are you?",
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
                value: "BOo!",
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
                value: "AHHHHH!",
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
                value: "JFOSJDFOJO!",
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
                value: "REEEEEEEE!",
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
                value: "WJESAHDOFHASfhasdihfiahsdighz!",
                author: {
                    name: "Jack",
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
            {
                value: "WJESAHDOFHASfhasdihfiahsdighz!",
                author: {
                    name: "Jack",
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
            {
                value: "WJESAHDOFHASfhasdihfiahsdighz!",
                author: {
                    name: "Jack",
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
            {
                value: "WJESAHDOFHASfhasdihfiahsdighz!",
                author: {
                    name: "Jack",
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
            {
                value: "WJESAHDOFHASfhasdihfiahsdighz!",
                author: {
                    name: "Jack",
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
                <div className="Title" id="Title">
                    <h2>A Database of Random Out of Context Messages</h2>
                </div>
                <div className="Body" id="Body">
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