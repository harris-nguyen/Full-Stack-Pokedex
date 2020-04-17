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
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Image</th>
              <th scope="col">Pokemon</th>
              <th scope="col">Type</th>
              <th scope="col">Attacks</th>
              <th scope="col">Stats</th>
              <th scope="col">Weight</th>
            </tr>
          </thead>
          <tbody>{pokeData}</tbody>
        </table>
      </div>
    );
  }
}
