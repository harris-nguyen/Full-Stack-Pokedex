import React from 'react';

export default class PokemonTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      height: '',
      weight: '',
      type: '',
      abilities: '',
      stats1: '',
      state2: ''
    };
    this.getPokeType = this.getPokeType.bind(this);
  }

  componentDidMount() {
    this.getPokeType();
  }

  getPokeType() {
    const name = this.props.name;
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then(res => res.json())
      .then(data => {
        const type = data.types.map(e => e.type.name);
        const pokeType = `${type[0]}, ${type[1]}`;
        const abilities = data.abilities.map(e => e.ability.name);
        const pokeAbilities = `${abilities[0]}, ${abilities[1]}`;
        const stats = data.stats.map(e => e.stat.name);
        const baseStat = data.stats.map(e => e.base_stat);
        const pokeStats1 = `
        ${stats[0]}: ${baseStat[0]},
        ${stats[1]}: ${baseStat[1]} ,
        ${stats[2]}: ${baseStat[2]} ,
        `;

        const pokeStats2 = `
        ${stats[3]}: ${baseStat[3]} ,
        ${stats[4]}: ${baseStat[4]} ,
        ${stats[5]}: ${baseStat[5]}`;

        this.setState({
          id: data.id,
          height: data.height,
          weight: data.weight,
          type: pokeType,
          abilities: pokeAbilities,
          stats1: pokeStats1,
          stats2: pokeStats2
        });
      });
  }

  render() {
    const pokeID = this.state.id;
    const img = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeID}.png?raw=true`;

    return (
      <tr>
        <td>{this.state.id}</td>
        <td>
          <div>
            <img src={img} className="rounded w-5 p-3 " alt="pokemon"></img>
          </div>
        </td>
        <td>{this.props.name}</td>
        <td>{this.state.type}</td>
        <td>{this.state.abilities}</td>
        <td>
          {this.state.stats1}
          <div>
            {this.state.stats2}
          </div>
        </td>
        <td>{`${this.state.weight} lbs`}</td>
      </tr>
    );
  }
}
