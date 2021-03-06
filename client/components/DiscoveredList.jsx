import React from 'react';

export default class DiscoveredList extends React.Component {
  render() {
    const namesData = this.props.allpokemon;
    const name = namesData.map(
      e => e.name.charAt(0).toUpperCase() + e.name.slice(1)
    );
    const pokeID = this.props.pokeid;
    const img = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeID}.png?raw=true`;
    return (
      <div className="col-sm-4 paddingCard">
        <div className="card">
          <img
            onClick={() =>
              this.props.setView('discoveredInfo', {
                clicked: this.props.pokeid
              })
            }
            src={img}
            className="rounded w-50 p-3 center zoom2"
            alt="pokemon"
          ></img>
          <div className="card-body">
            <div className="container text-center">
              <button
                type="button"
                className="btn btn-primary zoom2"
                onClick={() => this.props.releasePokemon(this.props.pokeid)}
              >
                Release
              </button>
              <div className="conatiner text-center">
                {name[this.props.pokeid - 1]}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
