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
      stats1: ''
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
        const pokeType = type.length === 2 ? `${type[0]}, ${type[1]}` : type[0];
        const abilities = data.abilities.map(e => e.ability.name);
        const pokeAbilities = `${abilities[0]}, ${abilities[1]}`;
        const stats = data.stats.map(e => e.stat.name);
        const baseStat = data.stats.map(e => e.base_stat);
        const pokeStats1 = `
        ${stats[0]}: ${baseStat[0]},
        ${stats[1]}: ${baseStat[1]} ,
        ${stats[2]}: ${baseStat[2]} ,
        ${stats[3]}: ${baseStat[3]} ,
        ${stats[4]}: ${baseStat[4]} ,
        ${stats[5]}: ${baseStat[5]}`;

        this.setState({
          id: data.id,
          height: data.height,
          weight: data.weight,
          type: pokeType,
          abilities: pokeAbilities,
          stats1: pokeStats1
        });
      });
  }

  render() {
    const pokeID = this.state.id;
    const img = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeID}.png?raw=true`;
    const name = this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1);

    return (
      <div
        type="button"
        className="col-sm-4 paddingCard zoom"
        onClick={() =>
          this.props.setView('details', {
            id: this.state.id,
            type: this.state.type,
            abilities: this.state.abilities,
            stats: this.state.stats1,
            weight: this.state.weight,
            name: name
          })
        }
      >
        <div className="card ">
          <img
            src={img}
            className="rounded w-50 p-3 center"
            alt="pokemon"
          ></img>
          <div className="card-body">
            <h5 className="card-title">
              {`${this.state.id}. `}
              {name}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
