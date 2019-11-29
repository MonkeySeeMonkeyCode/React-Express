import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <h1>Project Home</h1>
                {/* link to List.js */}
                <p>
                    Hello, Im using <a href='https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3'>this article</a> as a starting point. It created the Home and List pages.
                    
                </p>
                <p>
                    The List of Notes page is where my main work resides. It is making an API call to the express backend server to get documents from MongoDB and display it.
                </p>
                <p>
                    The tic tac toe page was my work from going through the react.org tutorial.
                </p>
                <Link to={'./list'}>
                    <button variant="raised">
                        My List
                    </button>
                </Link>
                <Link to={'./noteList'}>
                    <button variant="raised">
                        List of Notes
                    </button>
                </Link>
            </div>
        );
    }
}
export default Home;