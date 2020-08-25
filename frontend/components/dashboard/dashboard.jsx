import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexContainer from '../posts/post_index_container';
import NavbarContainer from '../navbar/navbar_container';

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
                <NavbarContainer />
                <h1>This is the dashboard</h1>
                <div>
                    <PostIndexContainer />
                </div>
            </div>
        );
    }
}



export default Dashboard;