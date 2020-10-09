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
        this.handleDemo = this.handleDemo.bind(this);
    };
    componentDidMount(){
        this.props.clearSessionErrors();
    }

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

    handleDemo(e) {
        e.preventDefault();
        const demoUser = {            
            email: "demo@woof.com",
            password: "password",
            username: "demoDoge"}

        let { email, password } = demoUser;
        let interval = 100;
        let login = () => {
            this.props.createSession(this.state);
            this.props.history.push("/")
        };
        let fillPassword = () => {
            let inputPassword = setInterval(() => {
                if (this.state.password !== password) {
                    let tempPassword = password.slice(0, this.state.password.length + 1);
                    this.setState({ password: tempPassword });
                } else {                    
                    clearInterval(inputPassword);
                    login();
                }
            }, interval);
        };        
        
        if (this.state.email !== email) {
            let inputEmail = setInterval(() => {
                if (this.state.email !== email) {
                    let tempEmail = email.slice(0, this.state.email.length + 1);
                    this.setState({ email: tempEmail });
                } else {                    
                    clearInterval(inputEmail);
                    fillPassword();
                }
            }, interval);
        }

    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li class="errors" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        let usernameField;
        let userLink;
        let demoLogin;

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
        };

        if (this.props.formType === "Sign Up") {
            demoLogin = (<span></span>)
        } else {
            demoLogin = (
                <button className="submit" onClick={this.handleDemo}>Demo Login</button>
            )
        }


        return (
            <div className="session-form">
                {userLink}
                <h1 className="title-session"><Link className="title-link" to="/">woofblr</Link></h1>
                <div className="form-container">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="fields">
                            <input 
                                className='field'
                                type="text" 
                                value={this.state.email} 
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
                        </div>
                        <ul>
                            {this.renderErrors()}
                        </ul>
                        
                        <div className="buttons">
                            <input className="submit" type="submit" value={this.props.formType} />
                            {demoLogin}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SessionForm;