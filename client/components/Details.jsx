import React from 'react';

export default class Details extends React.Component {

  render() {
    const pokeID = this.props.id.id;
    const img = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeID}.png?raw=true`;
    return (
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="col-4 ">
              <img
                src={img}
                className="rounded w-50 p-3 center"
                alt="pokemon"
              ></img>
              <div className="text-center">
                <b>{this.props.id.name}</b>
              </div>
            </div>
            <div className="col-8">
              <div>
                <b>Type:</b> {this.props.id.type}
              </div>
              <div>
                <b>Abilities:</b> {this.props.id.abilities}
              </div>
              <div>
                <b>Stats:</b> {this.props.id.stats}
              </div>
              <div>
                <b>Weight:</b> {this.props.id.weight}
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-link text-center"
            onClick={() => this.props.setView('pokedex', {})}
          >
            Pokedex
          </button>
        </div>
      </div>
    );
  }
}
