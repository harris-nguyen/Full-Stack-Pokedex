import React from 'react';
import PokemonTable from './pokemonTable';

export default class Pokemon extends React.Component {
  render() {
    const visiable = this.props.visiable;
    const data = this.props.pokemon;
    const pokeData = data.slice(0, visiable).map((e, index) => {
      return (
        <PokemonTable key={index} name={e.name} setView={this.props.setView} />
      );
    });
    return (
      <div>
        <div className="container text-center">
          <button
            type="button"
            className="btn btn-link"
            onClick={() => this.props.setView('discovered', {})}
          >
            Caught List
          </button>
        </div>
        <div className="conatiner card-deck cardText text-center">
          {pokeData}
        </div>

        <div className="container">
          <div className="row text-center">
            <div className="col">
              <div className="pokedexIcon">
                {visiable < this.props.pokemon.length && (
                  <button
                    onClick={this.props.loadmore}
                    type="button"
                    className="btn btn-dark"
                  >
                    Load 10 More
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
