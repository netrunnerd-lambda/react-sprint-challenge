import React from 'react';

const CharacterProfile = props => {
  return (
    <section className="character-profile">
      <h2>{props.name}</h2>
      <h3>About Me</h3>
      <ul className="about">
        <li>Born: <span className="detail">{props.birth_year}</span></li>
        <li>Gender: <span className="detail">{props.gender}</span></li>
        <li>Height: <span className="detail">{props.height}</span></li>
        <li>Mass: <span className="detail">{props.mass}</span></li>
        <li>Skin: <span className="detail">{props.skin_color}</span></li>
        <li>Hair: <span className="detail">{props.hair_color}</span></li>
        <li>Eyes: <span className="detail">{props.eye_color}</span></li>
      </ul>
    </section>
  );
}

export default CharacterProfile;