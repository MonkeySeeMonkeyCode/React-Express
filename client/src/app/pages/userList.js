import React, { Component } from 'react';

function User(props) {
    return (
        <li>
            {props.user}
        </li>
    );
}

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userlist: [],
            error: ''
        }
    }

    componentDidMount() {
        this.getUserList();
    }

    getUserList = () => {
        fetch('/api/allUsers')
        .then(res => res.json())
        .then(userlist => {
            if (userlist.message) {
                // error occured, display to user
            this.setState({ error: userlist.message });
            }
            else {
                let userArray = [];
                for (let i = 0; i<userlist.length; i++) {
                    let key = userlist[i]._id;
                    let name = userlist[i].name;
                    userArray.push([key,name]);
                }
                this.setState({ userlist: userArray });
            }
        })
    }

    renderUser(id,user) {
        return (
            <User key={id}
            user={user}
            />
        )
    }

    render() {
        const state = this.state;
        return (
            <div className="App">
                <h1>List of Users</h1>
                {state.error ? <div><b>Error: {state.error}</b></div>:
                    <ul>
                        {state.userlist.map(user => this.renderUser(user[0],user[1]))}
                    </ul>
                }
            </div>
        )
    }
}

export default UserList;