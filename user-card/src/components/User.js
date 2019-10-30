import React from 'react';
import {UserCard} from './Card';
import '../App.css';

function User(props) {
    const { userData } = props;

    return (
        <div className="user-container">
            <UserCard userData={userData} />
        </div>
    )
}

export default User;