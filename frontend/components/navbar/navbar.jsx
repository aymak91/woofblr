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
                        <span>{currentUser.username}</span>

                        <li>
                            <Link to="/"><span>Home</span></Link>
                        </li>
                        <li>
                            <Link to="/likes"><span>Likes</span></Link>
                        </li>
                        <li>
                            <Link className="" onClick={() => deleteSession()}>Logout</Link>
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