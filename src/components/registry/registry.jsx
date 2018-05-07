import React from 'react';

import './style/registry.scss';

export default class Registry extends React.Component {
  handleButtonClick() {
    window.location = 'https://www.zola.com/registry/ali_ian';
  }

  renderDonateButton() {
    return (
      <button
        onClick={this.handleButtonClick}
        className="registry__registry-button"
      >
        Our Registry Fund
      </button>
    );
  }

  render() {
    return (
      <div className="registry">
        <div className="registry__ask-for-money">
          <p>We’re so lucky to be able to spend our wedding day with all of our friends and family.<br /> <br />
          Your presence is truly all the present we need.<br /> <br />
          Because we have all the basic household supplies covered if you’d like to get us a gift to celebrate<br /> <br />
          We’ve created a registry fund that we’ll use for a down payment for our home together</p>
        </div>
        {this.renderDonateButton()}
      </div>
    );
  }
}
