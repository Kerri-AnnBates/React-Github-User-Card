import React from 'react';
import { FollwerCard } from './Card';

function Followers(props) {
    const {followersData} = props;
    return (
        <div className="followers">
                {/* <FollwerCard followersData={followersData} /> */}
                {followersData.map(follower => (
                    <FollwerCard followersData={follower} key={follower.id} />
                ))}
        </div>
    )
}

export default Followers;