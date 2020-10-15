import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexContainer from '../posts/post_index_container';
import NavbarContainer from '../navbar/navbar_container';
import PostNavContainer from '../post_nav/post_nav_container';
import Modal from '../modal/modal';
import Avatar from '../avatar/avatar';
import AboutMe from './about_me';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    render() {
        const follow = this.props.follow;
        const allUsers = this.props.allUsers;
        const currentUser = this.props.currentUser;
        const photoUrl = this.props.currentUser.photoUrl;


        let avatar;
        if (currentUser.photoUrl) {
            avatar = <Avatar 
                klass={"post-avatar"} 
                photoUrl={photoUrl} 
                user={currentUser}
                currentUser={currentUser}
                 />
        } 
        else {
            avatar = <img className="post-avatar" src={window.defaultAvatar}></img>
        };

        let recommended = allUsers.slice(0, 7).map(user => {
            if (!currentUser.followings.includes(user.id) && user.id != currentUser.id) {
                let otherAvatar;
                if (user.photoUrl) {
                    otherAvatar = <Avatar klass={"other-avatar"} photoUrl={user.photoUrl} user={user.username} />
                } else {
                    otherAvatar = <img className="other-avatar" src={window.defaultAvatar}></img>
                }
                return (
                    <li key={user.id} className="recommended-users">
                        <div>
                            {otherAvatar}
                            <div>{user.username}</div>
                        </div>
                        <button className="follow-button" onClick={() => follow(user.id)}><i className="fas fa-plus-square"></i></button>
                    </li>
                )
            }
        });

        return (
            <div className="main">
                <NavbarContainer />
                <div><Modal /></div>
                <section className="post-nav-container">
                    <div className="avatar">
                        {avatar}
                    </div>
                    <PostNavContainer 
                    />
                </section>                
                <section className="dashboard">
                    <div>
                        <PostIndexContainer />
                    </div>
                    <section className="dashboard-side">
                        <ul className="recommended-blogs"> <p>Recommended Blogs</p>
                            {recommended}
                        </ul>
                    </section>
                </section>
                <section class='about'>
                    <AboutMe />
                </section>
            </div>
        );
    }
}



export default Dashboard;