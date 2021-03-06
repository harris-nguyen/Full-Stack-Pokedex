import React from 'react';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    this.setState({
      clicked: true
    });
  }

  render() {
    const pokeID = this.props.id.id;
    const img = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeID}.png?raw=true`;
    return (
      <div className="container backGroundRed">
        <div className="card">
          <div className="row align-items-center">
            <div className="col-4 ">
              <img src={img} className=" w-100 p-3 center" alt="pokemon"></img>
              <div className="text-center">
                <b>{this.props.id.name}</b>
              </div>
            </div>
            <div className="col-8">
              <div className="container">
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
                  <b>Weight:</b> {`${this.props.id.weight} lbs`}
                </div>
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
          <div className="container text-center" onClick={this.clicked}>
            <button
              type="button"
              className="btn btn-success text-center zoom2"
              onClick={() => this.props.addToDiscovered(this.props.id.id)}
            >
              {this.state.clicked === false &&
              !this.props.caughtArr.includes(this.props.id.id) ? (
                  <div>Caught</div>
                ) : (
                  <div className="maroonFont">Recorded</div>
                )}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
