import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexContainer from '../posts/post_index_container';

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
                <Link to='/'>
                    <button onClick={this.props.deleteSession}>Logout</button>
                </Link>
                <h1>This is the dashboard</h1>
                <div>
                    <PostIndexContainer />
                </div>
            </div>
        );
    }
}



export default Dashboard;