import React from 'react';
import DiscoveredList from './DiscoveredList';

export default class Discovered extends React.Component {
  render() {
    const data = this.props.pokeid;
    // const userid = this.props.userid;

    const pokeid = data.map((pokeid, index) => {
      return (
        <DiscoveredList
          key={index} pokeid={pokeid}
        />
      );
    });

    return (
      <div>
        <div className="container text-center ">
          <button
            type="button"
            className="btn btn-link"
            onClick={() => this.props.setView('pokedex', {})}
          >
            Pokedex
          </button>
        </div>
        <h1 className="text-center">Caught Pokemon</h1>
        <div>
          {data.length === 0 ? (
            <h3 className="text-center">History Empty</h3>
          ) : (
            <div className="conatiner card-deck blueBackGround">{pokeid}</div>
          )}
        </div>
      </div>
    );
  }
}
