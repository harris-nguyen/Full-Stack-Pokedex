import React from 'react';

export default class DiscoveredList extends React.Component {
  render() {
    const pokeID = this.props.pokeid;
    const img = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeID}.png?raw=true`;
    return (
      <div className="col-sm-4 paddingCard">
        <div className="card">
          <img
            src={img}
            className="rounded w-50 p-3 center"
            alt="pokemon"
          ></img>
          <div className="card-body">
            <div className="container text-center">
              <button
                type="button"
                className="btn btn-primary"
                // eslint-disable-next-line no-console
                onClick={() => this.props.releasePokemon(this.props.pokeid)}
              >
                Release
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
