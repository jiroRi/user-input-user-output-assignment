import React from 'react';

const userInput = (props) => {
    const style = {
        border: '2px solid rgb(119, 119, 15)',
        marginTop: '24px'
    }
    return (
        <input style={style} type="text" onChange={props.changed} value={props.username}/>
    )
}

export default userInput;