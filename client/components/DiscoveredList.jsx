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
          </div>
        </div>
      </div>
    );
  }
}
