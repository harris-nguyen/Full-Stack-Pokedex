import React from 'react';
import Pokemon from './pokemon';
import Details from './Details';
import Header from './Header';
import Discovered from './discovered';
import DiscoveredInfo from './DiscoveredInfo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      allpokemon: [],
      view: { name: 'pokedex', params: {} },
      visiable: 9,
      test: '',
      pokeid: [],
      id: []
    };
    this.getPokeApi = this.getPokeApi.bind(this);
    this.loadmore = this.loadmore.bind(this);
    this.setView = this.setView.bind(this);
    this.getDiscovered = this.getDiscovered.bind(this);
    this.addToDiscovered = this.addToDiscovered.bind(this);
    this.releasePokemon = this.releasePokemon.bind(this);
  }

  componentDidMount() {
    this.getDiscovered();
    this.getPokeApi();

    fetch('/api/health-check')
      .then(res => res.json())
      .then(data =>
        this.setState({
          message: data.message || data.error
        })
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
        visiable: old.visiable + 9
      };
    });
  }

  getDiscovered() {
    fetch('/api/discovered')
      .then(response => {
        return response.json();
      })
      .then(discovered => {
        const pokeid = discovered.map(e => e.pokeid);
        const id = discovered.map(e => e.id);
        this.setState({
          pokeid: pokeid,
          id: id
        });
      })
      .catch(err => console.error(err));
  }

  addToDiscovered(pokemon) {
    const test = this.state.pokeid.includes(pokemon);

    if (!test) {
      fetch('/api/discovered', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pokeid: pokemon })
      }).then(data =>
        this.setState({ pokeid: this.state.pokeid.concat(pokemon) })
      );
    }
  }

  releasePokemon(id) {
    const idSelected = this.state.pokeid.findIndex(e => e === id);

    fetch(`/api/discovered/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        const newPokeid = [...this.state.pokeid];
        newPokeid.splice(idSelected, 1);
        this.setState({
          pokeid: newPokeid
        });
      })
      .catch(err => console.error(err));
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
            <div>
              <Header />
            </div>

            <div>
              <Pokemon
                pokemon={this.state.allpokemon}
                visiable={this.state.visiable}
                pokeAPI={this.state.allpokemon}
                loadmore={this.loadmore}
                setView={this.setView}
              />
            </div>
          </div>
        );
      case 'details':
        return (
          <div>
            <div>
              <Header />
            </div>

            <div>
              <Details
                setView={this.setView}
                id={this.state.view.params}
                caughtArr={this.state.pokeid}
                addToDiscovered={this.addToDiscovered}
              />
            </div>
          </div>
        );
      case 'discovered':
        return (
          <div>
            <div>
              <Header />
            </div>

            <div>
              <Discovered
                allpokemon={this.state.allpokemon}
                setView={this.setView}
                pokeid={this.state.pokeid}
                userid={this.state.userid}
                id={this.state.id}
                releasePokemon={this.releasePokemon}
              />
            </div>
          </div>
        );
      case 'discoveredInfo':
        return (
          <div>
            <div>
              <Header />
            </div>

            <div>
              <DiscoveredInfo
                allpokemon={this.state.allpokemon}
                id={this.state.view.params}
                setView={this.setView}
                pokeid={this.state.pokeid}
                iddd={this.state.id}
              />
            </div>
          </div>
        );
    }
  }
}
