import React from 'react';
import { Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    };
    componentDidMount(){
        this.props.fetchPosts();
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.props.match.path === '/login' ? this.props.
    // }

    render() {
        return (
            <div>
            </div>
        );
    }
}