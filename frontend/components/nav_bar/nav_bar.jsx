import React from 'react';
import {Link} from 'react-router-dom';
import { deleteSession } from '../../actions/session_actions';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <header className='nav-bar'>
                <h1>{currentUser.username}</h1>
                <button onClick={deleteSession}>Log Out</button>
            </header>
        );
    }
}