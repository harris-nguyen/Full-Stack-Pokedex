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
          <h1>Caught Pokemon</h1>
          <button
            type="button"
            className="btn btn-link"
            onClick={() => this.props.setView('pokedex', {})}
          >
            Pokedex
          </button>
        </div>
        <div className="conatiner card-deck blueBackGround">{pokeid}</div>
      </div>
    );
  }
}
