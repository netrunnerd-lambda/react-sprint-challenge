import React, { Component } from 'react';
import CharProfile from './CharacterProfile';
import './StarWars.css';

class StarWars extends Component {
  render() {
    const characters = this.props.characters;
    
    return (
      <main className="character-container">
        {characters.map(char => <CharProfile key={char.created} {...char} />)}
      </main>
    );
  }
}

export default StarWars;