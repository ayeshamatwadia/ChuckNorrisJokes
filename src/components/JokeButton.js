import React from 'react';
import './JokeButton.css';

const JokeButton = (props) => {
    return (
        <div className="container">
            <input className="chuckButton" type='button' value="button" onClick={props.getNewJoke} />
        </div>
        
    )
}

export default JokeButton;