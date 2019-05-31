import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randoDoggos: []
    };
  }

  componentWillMount() {
    this.fetchDoggo();
  }

  fetchDoggo() {
    fetch('https://dog.ceo/api/breeds/image/random/3')
      .then(res => res.json())
      .then(data => this.setState({ randoDoggos: data.message }))
      .catch(err => { throw new Error(err); });
  }

  render() {
    return (
      <Fragment>
        <section className="doggos">
          { this.state.randoDoggos.map(doggo => <img src={ doggo } alt="a rando doggo" />) }
        </section>
        <button className="fetcher" onClick={ _ => setTimeout(this.fetchDoggo(), 1000) }>FETCH DOGGOS</button>
      </Fragment>
    );
  }
}

const element = document.getElementById('root');

render(<App />, element);