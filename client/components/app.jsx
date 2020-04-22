import React from 'react';
import Pokemon from './pokemon';
import Details from './Details';
import Header from './Header';
import Discovered from './discovered';

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
      pokeid: []
    };
    this.getPokeApi = this.getPokeApi.bind(this);
    this.loadmore = this.loadmore.bind(this);
    this.setView = this.setView.bind(this);
    this.getTest = this.getTest.bind(this);
    this.addToDiscovered = this.addToDiscovered.bind(this);
  }

  componentDidMount() {
    this.getTest();
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

  getTest() {
    fetch('/api/discovered')
      .then(response => {
        return response.json();
      })
      .then(discovered => {
        const pokeid = discovered.map(e => e.pokeid);
        this.setState({ pokeid: pokeid });
      })
      .catch(err => console.error(err));
  }

  addToDiscovered(pokemon) {
    // eslint-disable-next-line no-console
    console.log('pokemon id', pokemon);
    fetch('/api/discovered', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pokeid: pokemon })
    })
      .then(data =>
        this.setState({ pokeid: this.state.pokeid.concat(pokemon) })
      );
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
    // eslint-disable-next-line no-console
    console.log('caught arr', this.state.pokeid);
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
                setView={this.setView}
                pokeid={this.state.pokeid}
                userid={this.state.userid}
              />
            </div>
          </div>
        );
    }
  }
}
