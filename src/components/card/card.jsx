import React from 'react';
import './card.css';

const ProfileCard = ({ header, comment, picture, title }) => {
    return (
        <div className="profileCard">
            <div className="profileCard-header">{header}</div>
            <img src={picture} alt="Profile" className="profileCard-image" />
            <div className="profileCard-comment">{comment}</div>
            <div className="profile-title">{title}</div>
        </div>
    );
};

export default ProfileCard;
