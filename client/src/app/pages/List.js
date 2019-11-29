import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
    // init state
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    // fetch the list on first mount
    componentDidMount() {
        this.getList();
    }

    getList = () => {
        fetch('/api/getList')
        .then(res => res.json())
        .then(list => this.setState({ list }))
    }

    render() {
        const { list } = this.state;

        return (
            <div className="App">
                <h1>List of Items</h1>
                {/* check to see if any items are found */}
                {list.length ? (
                    <div>
                        {/* render the list of items */}
                        {list.map((item) => {
                            return(
                                <div>
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div>
                        <h2>No list items found</h2>
                    </div>
                )
            }
            <p>
                <Link to={'./'}>
                    <button variant="raised">
                        Return to Home
                    </button>
                </Link>
            </p>
                <p>
                <div>Followed this link as a guide:
                     https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3</div>
                </p>
            </div>
        );
    }
}

export default List;