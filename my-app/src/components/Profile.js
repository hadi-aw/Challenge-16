import React from 'react';

function Profile({ name, role, photo }) {
    return (
        <div className="profile">
            <img src={ProcessingInstruction.env.PUBLIC_URL + '/' + photo} alt={'${name}'s photo'} />
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    );
}

export default Profile;