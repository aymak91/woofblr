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
        e.preventDefault();
        this.props.action(this.state)
            .then( () => this.props.history.push('/dashboard'));
    };

    render() {

        let usernameField;
        let userLink;

        if (this.props.formType === "Sign Up") {
            
            usernameField = ( <input 
                className="field"
                type="text" 
                value={this.state.username} 
                placeholder="Username" 
                onChange={this.handleInput("username")} 
            /> );

            userLink = (<Link className="link" to='/login'>Log in</Link>)
        } else {
            usernameField = (<span></span>)
            userLink = (<Link className="link" to='/signup'>Sign up</Link>)
        }


        return (
            <div className="session-form">
                {userLink}
                <div className="form-container">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <h1 className="title" >woofblr</h1>
                        <input 
                            className='field'
                            type="text" 
                            name={this.state.email} 
                            placeholder="Email"
                            onChange={this.handleInput('email')}
                        />
                        <input 
                            className='field'
                            type="password" 
                            value={this.state.password} 
                            placeholder="Password"
                            onChange={this.handleInput('password')}
                        />                    
                        {usernameField}
                        
                        <input className="submit" type="submit" value={this.props.formType} />
                    </form>
                </div>
            </div>
        );
    }
}

export default SessionForm;