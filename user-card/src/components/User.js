import React from 'react';

function User(props) {
    const { userData } = props;

    return (
        <div className="user-container">
            <h2>hello from user.js</h2>
            <p>My name is {userData.name}</p>
        </div>
    )
}

export default User;