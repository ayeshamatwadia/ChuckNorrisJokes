import React from 'react';

const JokeButton = (props) => {
    return (
        <input type='button' value="button" onClick={props.getNewJoke} />
    )
}

export default JokeButton;