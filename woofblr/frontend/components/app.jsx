import React from 'react';
import DashboardContainer from './dashboard/dashboard_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';



const App = () => {
    return(
        <div className='app'>
            <Route path="/signup" component={SignupFormContainer} /> {/*authroute*/}
            <Route path="/login" component={LoginFormContainer} /> {/*authroute*/}
            <Route path="/dashboard" component={DashboardContainer} /> {/*protected-route*/}
        </div>
    )
  };
  
  export default App;