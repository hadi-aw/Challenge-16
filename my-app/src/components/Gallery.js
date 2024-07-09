import React from 'react';
import Profile from './Profile';

function Gallery({ members }) {
    return (
        <div className="gallery">
            {members.map((member, index) => (
                <Profile key={index} {...member} />
            ))}
        </div>
    );
}

export default Gallery;