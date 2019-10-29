import React from 'react';
import Cards from './Card';
import '../App.css';

function User(props) {
    const { userData } = props;

    return (
        <div className="user-container">
            <Cards userData={userData} />
        </div>
    )
}

export default User;