import React from 'react';
import '../App.css';

function Cards(props) {
    const { userData } = props;

    return (
        <div className="card">
            <h2>{userData.name}</h2>
            <div className="avatar">
                <img src={userData.avatar_url} alt={userData.name} />
            </div>
            <div className="details">
                <p>{userData.location}</p>
                <p>{userData.bio}</p>
                <div className="social">
                    <p>Profile: <a href={userData.html_url}>{userData.html_url}</a></p>
                    <p>Followers: {userData.followers}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards;