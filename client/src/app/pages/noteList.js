import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

function Summary(props) {
    return (
        <li>
            {props.summary}
        </li>
    );
}

class NoteList extends Component {
    // init state
    constructor(props) {
        super(props);
        this.state = {
            notelist: [],
            error: ''
        }
    }
    renderNoteSummary(id,summary) {
        return (
            <Summary key={id}
            summary={summary}
            />
        )
    }
    
    // fetch the list on first mount
    componentDidMount() {
        this.getList();
    }

    getList = () => {
        fetch('/api/allNotes')
        .then(function (res) {
            return res.json()
        })
        .then(notelist => {
            if (notelist.message) {
                // error occurred, display to user
                this.setState({ error: notelist.message});
            }
            else {
                let summaryArray = [];
                for (let i = 0; i<notelist.length; i++) {
                    let key = notelist[i]._id;
                    let summary = notelist[i].summary;
                    summaryArray.push([key,summary]);
                }
                this.setState({ notelist: summaryArray });
            }
        })
    }

    render() {
        const state = this.state;
            return (
                <div className="App">
                    <h1>List of Notes</h1>
                    {state.error ? <div><b>Error: {state.error}</b></div>:
                        <ul>
                            {state.notelist.map(note => this.renderNoteSummary(note[0],note[1]))}
                        </ul>
                    }
                        <div>
                            <p>
                                This page is finding documents from my Notes project and displaying it using React
                            </p>
                            <p>
                                Project can be found at <a href="https://github.com/MonkeySeeMonkeyCode/Learning-Web-Project">my Github.</a>
                            </p>
                        </div>
                </div>
            );
    }
}

export default NoteList;