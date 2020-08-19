import React from 'react';
import { Link } from 'react-router-dom';
import { deleteSession } from '../../actions/session_actions';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    };

    // componentDidMount(){
    //     this.props.function();
    // }

    render() {
        return (
            <div>
                <h1>This is the dashboard</h1>
                <Link to='/'>
                    <button onClick={deleteSession}>Logout</button>
                </Link>
            </div>
        );
    }
}

export default Dashboard;