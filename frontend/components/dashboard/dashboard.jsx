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

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    render() {
        // const follow = this.props.follow;
        // const allUsers = this.props.allUsers;
        // const currentUser = this.props.currentUser;



        // let recommended = allUsers.slice(0, 7).map(user => {
        //     if (!currentUser.followings.includes(user.id) && user.id != currentUser.id) {
        //         // let otherAvatar;
        //         // if (user.photoUrl) {
        //         //     otherAvatar = <Avatar klass={"other-avatar"} photoUrl={user.photoUrl} user={user.username} />
        //         // } else {
        //         //     otherAvatar = <img className="other-avatar" src={window.brentURL}></img>
        //         // }
        //         return (
        //             <li key={user.id} className="recommended-users">
        //                 <div>
        //                     {/* {otherAvatar} */}
        //                     <div>{user.username}</div>
        //                 </div>
        //                 <button className="follow-button" onClick={() => follow(user.id)}><i className="fas fa-plus-square"></i></button>
        //             </li>
        //         )
        //     }
        // });

        return (
            <div>
                <NavbarContainer />
                <div className="post-nav-container">
                    {/* {avatar} */} Avatar
                    <PostNavContainer />
                </div>
                <div><Modal /></div>
                <div>
                    <PostIndexContainer />
                </div>
                <ul className="recommended-blogs"> <p>Recommended Blogs</p>
                            {/* {recommended} */}
                </ul>
            </div>
        );
    }
}



export default Dashboard;