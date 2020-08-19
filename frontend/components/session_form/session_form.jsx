import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    };
    // componentDidMount(){
        // this.props.function();
    // }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value});
        }
    };

    handleSubmit(e) {
        e.preventDefault;
        this.props.action(this.state)
    };

    render() {

        let usernameField;
        let userLink;

        if (this.props.formType === "Sign Up") {
            
            usernameField = ( <input 
                className=""
                type="text" 
                value={this.state.username} 
                placeholder="Username" 
                onChange={this.handleInput("username")} 
            /> );

            userLink = (<Link to='/login'>Log in</Link>)
        } else {
            usernameField = (<span></span>)
            userLink = (<Link to='/signup'>Sign up</Link>)
        }


        return (
            <div>
                {userLink}
                <h1>woofblr</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        className=''
                        type="text" 
                        name={this.state.email} 
                        placeholder="Email"
                        onChange={this.handleInput('email')}
                    />
                    <input 
                        className=''
                        type="password" 
                        value={this.state.password} 
                        placeholder="Password"
                        onChange={this.handleInput('password')}
                    />                    
                    {usernameField}
                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        );
    }
}

export default SessionForm;