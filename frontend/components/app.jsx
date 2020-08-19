import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import IndexContainer from './index/index_container';
import DashboardContainer from './dashboard/dashboard_container';


const App = () => {
    return(
    <div>
        <Route exact path="/" component={IndexContainer}/>
        <Route path="/signup" component={SignUpFormContainer}/>
        <Route path="/login" component={LoginFormContainer}/>
        <Route path="/dashboard" component={DashboardContainer}/>

    </div>
    )
}

export default App;