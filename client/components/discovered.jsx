import React from 'react';

export default class Discovered extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <b>{this.props.discovered}</b>
            </div>
            <div className="col">test</div>
            <div className="w-100"></div>
            <div className="col">test</div>
            <div className="col">test</div>
          </div>
        </div>
      </div>
    );
  }
}
