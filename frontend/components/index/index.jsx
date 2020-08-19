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
                <Link className="" to='/signup'>Get Started</Link>
                <Link className="" to='/login'>Log In</Link>
                {/* test */}
            </div>
        );
    }
}

export default Index;