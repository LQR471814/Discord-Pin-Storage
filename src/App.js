import React from 'react';
import MessageContainer from './components/MessageContainer'
import AddButton from './components/AddButton'
import "./css/App.css"

// const bodyScrollLock = require('body-scroll-lock');
// const title = document.querySelector("#Title");

// bodyScrollLock.disableBodyScroll(title)

class App extends React.Component {
    state = {
        messages: [
            {
                id: 0,
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
                id: 1,
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
                id: 2,
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
                id: 3,
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
                id: 4,
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
                id: 5,
                value: "WJESAHDOFHz!",
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
            }
        ]
    }

    render() {
        return (
            <div>
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