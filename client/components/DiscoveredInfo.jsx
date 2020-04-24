import React from 'react';

export default class DiscoveredInfo extends React.Component {
  render() {
    const pokeID = this.props.id.clicked;
    const img = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeID}.png?raw=true`;

    return (
      <div className="container text-center">
        <button
          type="button"
          className="btn btn-link"
          onClick={() => this.props.setView('discovered', {})}
        >
          Caught List
        </button>

        <div className="container backGroundGreen">
          <div className="card">
            <div className="row align-items-center">
              <div className="col-4 text-right">
                <img
                  src={img}
                  className=" w-100 p-3 center"
                  alt="pokemon"
                ></img>
                <div className="text-center">
                  <b>{'Ready for battle!'}</b>
                </div>
              </div>
              <div className="col-8">
                <div className="container">
                  <img
                    src="https://media.giphy.com/media/j2xgBIuAgmrpS/source.gif"
                    className=" w-75 p-3 center"
                    alt="pokemon"
                  ></img>
                </div>
                <div>
                  <b className="greenFont">Remember to take your Pokemon out on walks</b>
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
      </div>
    );
  }
}
