import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexContainer from '../posts/post_index_container';
import NavbarContainer from '../navbar/navbar_container';
import PostNavContainer from '../post_nav/post_nav_container';
import Modal from '../modal/modal'


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
                <div className="post-nav-container">
                    {/* {avatar} */} Avatar
                    <PostNavContainer />
                </div>
                <div><Modal /></div>
                <div>
                    <PostIndexContainer />
                </div>
            </div>
        );
    }
}



export default Dashboard;