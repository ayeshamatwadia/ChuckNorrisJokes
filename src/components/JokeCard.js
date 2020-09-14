import React from "react";
import JokeText from './JokeText';
import JokeButton from './JokeButton';

class JokeCard extends React.Component {

  constructor() {
    super();
    this.state = {joke: ''};
  };

  componentDidMount() {
    this.getChuckNorrisJoke();
  }

  getChuckNorrisJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((joke) => {
      const jokeValue = joke.value
      this.setState({ joke: jokeValue })
    });
  }

   getNewJoke = (event) => {
    this.getChuckNorrisJoke();
   }

  render() {
    return (
    <div>
        <JokeText joke={this.state.joke}/>
        <JokeButton getNewJoke={this.getNewJoke}/>
    </div>
    )
  }
}

export default JokeCard;
