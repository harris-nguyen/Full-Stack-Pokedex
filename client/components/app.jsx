import React from 'react';
import Pokemon from './pokemon';
import Details from './Details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      allpokemon: [],
      view: { name: 'pokedex', params: {} },
      visiable: 10
    };
    this.getPokeApi = this.getPokeApi.bind(this);
    this.loadmore = this.loadmore.bind(this);
    this.setView = this.setView.bind(this);
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

  loadmore() {
    this.setState(old => {
      return {
        visiable: old.visiable + 10
      };
    });
  }

  getPokeApi() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
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
    switch (this.state.view.name) {
      case 'pokedex':
        return (
          <div>
            <Pokemon
              pokemon={this.state.allpokemon}
              visiable={this.state.visiable}
              pokeAPI={this.state.allpokemon}
              loadmore={this.loadmore}
              setView={this.setView}
            />
          </div>
        );
      case 'details':
        return (
          <div className="">
            <div>
              <Details setView={this.setView} id={this.state.view.params} />
            </div>
          </div>
        );
    }
  }
}
