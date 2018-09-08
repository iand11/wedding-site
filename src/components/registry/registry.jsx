import React from 'react';

import './style/registry.scss';
import Heath from './images/heath-logo.png';
import Zola from './images/zola-logo.jpg';

export default class Registry extends React.Component {
  handleButtonClick(url) {
    window.location = url;;
  }

  renderRegistriesButtons() {
    const registries = [
      {
        name: "Heath",
        url: 'http://www.heathceramics.com/giftregistry/view/index/id/98ce3256604d609d30806286c2d396f4/',
        image: Heath
      },
      {
        name: "Zola",
        url: 'https://www.zola.com/registry/ali_ian',
        image: Zola
      }
    ]
    return registries.map((registry) => {
      return (
        <button
          onClick={() => this.handleButtonClick(registry.url)}
          className="registry__registry-button"
        >
          <img style={{ width: '300px', backgroundColor: 'white' }} src={registry.image} alt={registry.name}/>
        </button>
      );
    })
  }

  render() {
    return (
      <div className="registry">
        <div className="registry__ask-for-money">
          <p>We’re so lucky to be able to spend our wedding day with all of our friends and family.<br /> <br />
          Your presence is truly all the present we need.<br /> <br />
          If you’d like to get us a gift to celebrate<br /> <br />
          We’ve created registries at:</p>
        </div>
        <div className="registry__buttons">
          {this.renderRegistriesButtons()}
        </div>
      </div>
    );
  }
}
