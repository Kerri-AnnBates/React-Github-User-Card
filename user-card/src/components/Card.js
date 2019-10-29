import React from 'react';
import '../App.css';

export function UserCard(props) {
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

export function FollwerCard(props) {
    const { followersData } = props;

    return (
        <div className="follower-card">
            <h3>{followersData.login}</h3>
            <div className="avatar">
                <img src={followersData.avatar_url} alt={followersData.login} />
            </div>
            <div className="details">
                <div className="social">
                    <p><a href={followersData.html_url}>{followersData.html_url}</a></p>
                </div>
            </div>
        </div>
    )
}