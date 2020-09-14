import React from 'react';
import './JokeText.css';

const JokeText = (props) => {
    return (
        <div className="textContainer">
            <p className="chuckJokeText">{props.joke}</p>
        </div>
    )
}

export default JokeText;