import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import IndexContainer from './index/index_container';
import DashboardContainer from './dashboard/dashboard_container';
import {AuthRoute, ProtectedRoute} from '../util/route_utils';
import LikesIndexContainer from './likes/likes_index_container';
import FollowingIndexContainer from './following/following_index_container';

const App = () => {
    return(
        <Switch>
            <AuthRoute path="/signup" component={SignUpFormContainer}/>
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <ProtectedRoute path="/dashboard" component={DashboardContainer}/>
            <ProtectedRoute path="/likes" component={LikesIndexContainer} />
            <ProtectedRoute path="/following" component={FollowingIndexContainer} />
            <AuthRoute path="/" component={IndexContainer}/>
        </Switch>
    )
}

export default App;