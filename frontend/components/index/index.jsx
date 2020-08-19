import React from 'react';
import { Link } from 'react-router-dom';

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
                    <nav className="links">               
                        <h1 className="title">woofblr</h1>
                        <Link className="signup" to='/signup'>Get Started</Link><br />
                        <Link className="login" to='/login'>Log In</Link>
                    </nav>
                {/* test */}
            </div>
        );
    }
}

export default Index;