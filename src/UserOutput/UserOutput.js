import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="container">
            <p>My username is <b>{props.username}</b>, and I like the number 420</p>
            <p>bzzt bzzt bzzt</p>
        </div>
    )
}

export default userOutput;