import React from 'react';

const PostNav = ({ avatar, openModal }) => {
    return (
        <div>
            <ul className="post_buttons">
                <li onClick={() => openModal('Create Text Form')}>
                    <div><p className="post_button text">Aa</p><span>Text</span></div>
                </li>
                <li onClick={() => openModal('Create Photo Form')}>
                    <div><i className="post_button fas fa-camera"></i><span>Photo</span></div>
                </li>
                <li onClick={() => openModal('Create Quote Form')}>
                    <div><i className="post_button fas fa-quote-right"></i><span>Quote</span></div>
                </li>
                <li onClick={() => openModal('Create Link Form')}>
                    <div><i className="post_button fas fa-link"></i><span>Link</span></div>
                </li>
            </ul>
        </div>
    )
}

export default PostNav;