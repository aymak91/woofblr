import React from 'react';
import ExplorerIndexItemContainer from './explorer_index_item_container';
import NavbarContainer from '../navbar/navbar_container';

class Explorer extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const currentUser = this.props.currentUser;

        let allPosts = this.props.posts;
        let colOne;
        let colTwo;
        let colThree;
        let colFour;

        if (allPosts.length > 0) {
            let col1 = [];
            let col2 = [];
            let col3 = [];
            let col4 = [];

            // splits posts into different columns
            for (let i = 0; i < allPosts.length; i++) {
                let temp = i % 4;
                if (temp === 0) {
                    col1.push(allPosts[i]);
                } else if (temp === 1) {
                    col2.push(allPosts[i]);
                } else if (temp === 2) {
                    col3.push(allPosts[i]);
                } else {
                    col4.push(allPosts[i]);
                }
            }

            colOne = col1.map(post => {
                if (post.author_id != this.props.currentUser.id) {
                    return (
                        <ExplorerIndexItemContainer
                            key={post.id}
                            post={post}
                            deletePost={this.props.deletePost}
                            currentUser={this.props.currentUser}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            openModal={this.props.openModal}
                        />
                    )
                }
            });

            colTwo = col2.map(post => {
                if (post.author_id != this.props.currentUser.id) {
                    return (
                        <ExplorerIndexItemContainer
                            key={post.id}
                            post={post}
                            deletePost={this.props.deletePost}
                            currentUser={this.props.currentUser}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            openModal={this.props.openModal}
                        />
                    )
                }
            });

            colThree = col3.map(post => {
                if (post.author_id != this.props.currentUser.id) {
                    return (
                        <ExplorerIndexItemContainer
                            key={post.id}
                            post={post}
                            deletePost={this.props.deletePost}
                            currentUser={this.props.currentUser}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            openModal={this.props.openModal}
                        />
                    )
                }
            });

            colFour = col4.map(post => {
                if (post.author_id != this.props.currentUser.id) {
                    return (
                        <ExplorerIndexItemContainer
                            key={post.id}
                            post={post}
                            deletePost={this.props.deletePost}
                            currentUser={this.props.currentUser}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            openModal={this.props.openModal}
                        />
                    )
                }
            });
        }


        return (
            <div className="explorer">
                <NavbarContainer />
                <div className="explore-container">
                    <ul className="col col-1">
                        {colOne}
                    </ul>
                    <ul className="col col-2">
                        {colTwo}
                    </ul>
                    <ul className="col col-3">
                        {colThree}
                    </ul>
                    <ul className="col col-4">
                        {colFour}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Explorer;