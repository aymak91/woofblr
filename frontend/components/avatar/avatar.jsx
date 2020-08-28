import React from 'react';

const Avatar = ({ photoUrl, klass}) => {

    return (
        <div className="user-avatar">
            <img className={klass} src={photoUrl} alt=""/>
        </div>
    )
    
}

export default Avatar;