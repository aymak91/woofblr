import React from 'react';
import {Link} from 'react-router-dom';
import Avatar from '../avatar/avatar'


// const Navbar = ({currentUser, deleteSession}) => {

//     const logo = (
//         <Link to='/'></Link>
//     )


// }

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    };


    render() {
        const {currentUser, deleteSession} = this.props;
        // let avatar;
        // if (currentUser.photoUrl) {
        //     avatar = <Avatar
        //         klass={"post-avatar"}
        //         photoUrl={photoUrl}
        //         user={currentUser}
        //         currentUser={currentUser}
        //     />
        // } 

        const rightNav = (

            <ul className="nav-list">
                <li>
                    <Link to="/">
                        <i class='big fas fa-home'></i>
                    </Link>
                </li>
                <li>
                    <Link to="/explorer">
                        <i className="big fas fa-compass"></i>
                    </Link>
                </li>
                <li className="account">                        
                    <p className="big fas fa-user"></p>
                    <ul className="account-dropdown">
                        <span>Welcome, {currentUser.username}!</span>

                        <li>
                            <Link to="/"><span>Home</span></Link>
                        </li>
                        <li>
                            <Link to="/likes"><span>Likes</span></Link>
                        </li>
                        <li>
                            <Link><span className="" onClick={() => deleteSession()}>Logout</span></Link>
                        </li>
                        {/* <li>
                            <Link to="/following">FOLLOWING<span>Following</span></Link>
                        </li> */}
                    </ul>
                </li>
            </ul>
        )
    
        if (currentUser) {
            return (
                <nav className="navbar navbar-user">
                    <Link to="/" className="title-icon">woofblr</Link>
                    {rightNav}
                </nav>
            )
        } else {    
            return(
                <div>
                    <Link to="/" className="title-icon">woofblr</Link>
                </div>
            )
        }
    }
}

export default Navbar;