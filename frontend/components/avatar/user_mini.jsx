import React from 'react';
import Avatar from './avatar';

const UserMini = (props) => {
    let follow;
    if (props.otherUser) {
        if (props.otherUser.username === props.currentUser.username) {
            follow = <span></span>
        } else if (props.currentUser.followings.includes(props.otherUser.id)) {
            follow = <button className="follow-button" onClick={() => props.unfollow(props.otherUser.id)}>Unfollow</ button>
        } else {
            follow = <button className="follow-button" onClick={() => props.follow(props.otherUser.id)}>Follow</ button>
        };

        return (
            <ul className="user-hover"><p>{props.otherUser.username}</p>
                <li className="user-hover-dropdown">
                    <div className="user-dropdown-top"><div className="user-dropdown-info">{props.otherUser.username} {follow}</div>
                    </div>
                </li>
            </ul>
        )
    } else {
        return (
            <div></div>
        )
    }
    
    
}

export default UserMini;