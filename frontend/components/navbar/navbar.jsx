import React from 'react';
import {Link} from 'react-router-dom';

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
        
        const rightNav = (

            <ul className="nav-list">
                {/* <li>
                    <Link to="/">HOME BUTTON</Link>
                </li> */}
                <li className="account">                        
                    <p className="small fas fa-user"></p>
                    <ul className="account-dropdown">
                        <li>
                            <span>{currentUser.username}</span>
                            <span className="small fas fa-heart" onClick={() => deleteSession()}>Logout</span>
                        </li>
                        <li>
                            <Link to="/likes">LIKE<span>Likes</span></Link>
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
                <Link to="/" className="paw-logo"><i klass="fas fa-paw"></i></Link>
                    {rightNav}
                </nav>
            )
        } else {    
            return(
                <div>
                <Link to="/" className="paw-logo"><i klass="fas fa-paw"></i></Link>
                </div>
            )
        }
    }
}

export default Navbar;