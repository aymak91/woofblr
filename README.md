# [woofblr](https://woofblr.herokuapp.com/ "woofblr")

🐾[Live Site](https://woofblr.herokuapp.com/ "woofblr")🐾

![alt text](https://woofblr-dev.s3-us-west-1.amazonaws.com/woofblr-index.PNG "login page")

Woof! woofblr is a full-stack web-application clone of Tumblr, except for dogs! The application utilizes Ruby on Rails with a postgreSQL database back-end and a React / Redux front-end. Amazon Web Service S3 allows for cloud-based hosting of files.

woofblr is a social media micro-blogging application that allows users to create various types of posts such as text and images. A dashboard displays content posted by other users that a user follows.

## Features

### User authentication
- Users are able sign up and login.
- Credentials are checked to restrict users from accessing certain pages features by redirecting the user to an appropriate page.
- If a user attempts to access any pages other than the index, login, or signup pages without being logged in, they will be redirected to the index page, where they will be able to either sign up for a new account or sign into an existing account.
- If a user attemps to access the index, login, or signup pages while already logged in, they will be redirected to the dashboard page.
```
const mSTP = (state) => ({
     loggedIn: Boolean(state.session.id),
});

const Auth = ({loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/dashboard" /> : <Component {...props} />
        )}
    />
);

const Protected = ({loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )}
    />
);

export const AuthRoute = withRouter(connect(mSTP, null)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP, null)(Protected));
```
```
import {AuthRoute, ProtectedRoute} from '../util/route_utils';

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
```

### Dashboard

- The dashboard's contents change according to what other users are followed and filters out posts that are not created by a user that is followed.
- Blogs can be added to your follow list by adding them from the Recommended Blogs section on the right. Blogs can be unfollowed by hovering over a username on the post and clicking "Unfollow".
- Modular components are imported and rendered onto the dashboard. Components can also be passed to other parts of the application to be rendered (e.g. The PostIndexItem component is passed to both the Dashboard and Likes pages but are filtered differently for each).

![alt text](https://woofblr-dev.s3-us-west-1.amazonaws.com/dashboard.PNG "dashboard")

```
  render() {
        return (
            <div className="main">
                <NavbarContainer />
                <div><Modal /></div>
                <div className="post-nav-container">
                    <div className="avatar">
                        {avatar}
                    </div>
                    <PostNavContainer 
                    />
                </div>                
                <div className="dashboard">
                    <div>
                        <PostIndexContainer />
                    </div>
                    <div className="dashboard-side">
                        <ul className="recommended-blogs"> <p>Recommended Blogs</p>
                            {recommended}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
```

### Dynamic Modal Forms

- The post create and edit forms utilize a dynamic modal form. Clicking on different links opens different forms in a modal by setting the modal slice of state. The modal then displays the proper form depending on what the current modal slice of state has been set it.

![alt text](https://woofblr-dev.s3-us-west-1.amazonaws.com/modal.PNG "modal")

```
const Modal = ({modal, closeModal}) => {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal.modal) {
        case 'Create Text Form':
            component = <CreatePostContainer postType="text" />;
            break;
        case 'Edit Text Form':
            component = <EditPostContainer postId={modal.postId} />;
            break;
        case 'Create Photo Form':
            component = <CreatePhotoPostContainer />
            break;
        case 'Edit Photo Form':
            component = <EditPhotoPostContainer postId={modal.postId} />
            break;
        case 'Create Quote Form':
            component = <CreateQuoteContainer postType="quote" />;
            break;
        case 'Edit Quote Form':
            component = <EditQuoteContainer postId={modal.postId}/>;
            break;
        case 'Create Link Form':
            component = <CreateLinkContainer />
            break;
        case 'Edit Link Form':
            component = <EditLinkContainer postId={modal.postId}/>;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={() => closeModal()}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
            <div></div>
        </div>
    )
}
```


## Architecture and Technologies

woofblr utilizes the following technologies:
- `PostgreSQL` for the database
- `BCrypt` for encrypting password
- `Ruby on Rails` for structuring the backend
- `React` for rendering frontend components
- `Redux` for structuring the frontend
- `AWS S3` for media storage
- `JBuilder` for formatting JSON responses from the back end for the front end

Tables for users, posts, likes, and follows are stored in the postgreSQL database. Users are connected to liked posts utilizing a like joins table. A follow joins tables is used to similarly connect a user to followers and other users they are following. Controllers are utilized to render JSON objects that have been structured withj JBuilder before being sent to the front end.

React components such as posts, navbars, and modals are imported and rendered onto the page. Modal components are rendered in front of all other components based on the current state.

### Future Implementations
- A reblogging feature where users can reshare blogs posted by other users
- A user show page feature where only blogs of a particular user are displayed.
