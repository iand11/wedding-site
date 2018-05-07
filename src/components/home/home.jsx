import React from 'react';
import WOW from 'wowjs';

import './style/home.scss';

export default class OurWedding extends React.Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
      <div className="home wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
        <p className="home__title">Ian & Ali</p>
        <p className="home__date">09 . 24 . 19</p>
        <p className="home__location">Morgan Hill, CA</p>
      </div>
    );
  }
}
