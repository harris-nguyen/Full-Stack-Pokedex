import React from 'react';
import PokemonTable from './pokemonTable';

export default class Pokemon extends React.Component {
  render() {
    const data = this.props.pokemon;
    const pokeData = data.map((e, index) => {
      return <PokemonTable key={index} name={e.name} url={e.url}/>;
    });
    return (
      <div>
        <div className="conatiner card-deck cardText text-center">
          {pokeData}
        </div>
      </div>
    );
  }
}
