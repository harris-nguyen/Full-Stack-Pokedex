import React from 'react';
import Pokemon from './pokemon';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      allpokemon: [],
      view: { name: 'pokedex' }
    };
    this.getPokeApi = this.getPokeApi.bind(this);
  }

  componentDidMount() {
    this.getPokeApi();
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data =>
        this.setState({ message: data.message || data.error })
      )
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  setView(name, params) {
    this.setState({ view: { name, params } });
  }

  getPokeApi() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
      .then(res => res.json())
      .then(allpokemon => {
        const data = allpokemon.results;
        data.forEach(function (pokemon) {
          return pokemon;
        });
        this.setState({
          allpokemon: data
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <Pokemon pokemon={this.state.allpokemon} />
      </div>
    );
  }
}
