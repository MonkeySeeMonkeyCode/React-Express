import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Summary(props) {
    return (
        <li>
            {props.summary}
        </li>
    );
}

class List extends Component {
    // init state
    constructor(props) {
        super(props);
        this.state = {
            list: []
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
        fetch('/api/firstapi')
        .then(function (res) {
            return res.json()
        })
        .then(list => {
            let summaryArray = [];
            for (let i = 0; i<list.length; i++) {
                let key = list[i]._id;
                let summary = list[i].summary;
                summaryArray.push([key,summary]);
            }
            this.setState({ list: summaryArray });
        })
    }

    render() {
        const { list } = this.state;
        console.log(list)
            return (
                <div className="App">
                    <h1>List of Notes</h1>
                    <ul>
                        {list.map(note => this.renderNoteSummary(note[0],note[1]))}
                    </ul>
                    <p>
                        <div>
                            <p>
                                This page is finding documents from my Notes project and displaying it using React
                            </p>
                            <p>
                                Project can be found at <a href="https://github.com/MonkeySeeMonkeyCode/Learning-Web-Project">my Github.</a>
                            </p>
                        </div>
                    </p>
                </div>
            );
    }
}

export default List;