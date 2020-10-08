import React from 'react';
import { Link } from 'react-router-dom';
import AboutMe from '../dashboard/about_me';

class Index extends React.Component {
    constructor(props) {
        super(props);
    };

    // componentDidMount(){
    //     this.props.function();
    // }

    render() {
        return (
            <div className="index">
                <div className="link-invis" />
                <div className="index-container">
                    <nav className="links">               
                        <h1 className="title"><Link className="title-link" to="/">woofblr</Link></h1>
                        <Link className="signup" to='/signup'>Get Started</Link><br />
                        <Link className="login" to='/login'>Log In</Link>
                    </nav>
                </div>
                <AboutMe />
            </div>
        );
    }
}

export default Index;