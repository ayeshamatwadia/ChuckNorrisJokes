import React from "react";
import JokeText from './JokeText';
import JokeButton from './JokeButton';

// async function getJoke() {
//   const response = await fetch("https://api.chucknorris.io/jokes/random");
//   const joke = await response.json();
//   return joke.value;
// }

class JokeCard extends React.Component {
  render() {
    return (
    <div>
        <JokeText joke='This is some test text'/>
        <JokeButton/>
    </div>
    )
  }
}

export default JokeCard;
