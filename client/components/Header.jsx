import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="container fade-in">
          <div className="row">
            <div className="col">
              <img
                src="./images/logo.png"
                className="card-img-top rounded w-75 p-3"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
