import React from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import WOW from 'wowjs';

import './style/header.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listIsVissible: false,
      buttonIsVissible: false,
      currentPage: 'Menu'
    };

    this.mobileView = this.mobileView.bind(this);
    this.webView = this.webView.bind(this);
  }

  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
    if (this.windowWidth >= 414) {
      this.webView();
    } else {
      this.mobileView();
    }
  }

  get windowWidth() {
    return window.innerWidth;
  }

  webView() {
    this.setState({
      buttonIsVissible: false,
      listIsVissible: true
    });
  }

  mobileView(currentPage) {
    if (this.windowWidth <= 414 && currentPage) {
      this.setState({
        buttonIsVissible: true,
        listIsVissible: false,
        currentPage
      });
    } else if (this.windowWidth <= 414) {
      this.setState({
        buttonIsVissible: true,
        listIsVissible: false
      });
    }
  }


  renderMobileMenuBars() {
    return (
      <div className="menu-icon--wrapper">
        <FontAwesome
          className="menu-icon"
          name="bars"
          size="2x"
        />
      </div>
    );
  }

  renderMobileMenu() {
    if (this.state.buttonIsVissible) {
      return (
        <div className="header__mobile-view">
          <button
            className="header__mobile-view--menu-button"
            onClick={this.webView}
          >
            {this.renderMobileMenuBars()}
          </button>
          <div className="header__mobile-view--title-wrapper">
            <p className="header__mobile-view--title">{this.state.currentPage}</p>
          </div>
        </div>
      );
    }
    return null;
  }

  renderNavList() {
    if (this.state.listIsVissible) {
      return (
        <div className="header__nav-list">
          <NavLink
            activeStyle={{ color: '#13a5a5' }}
            className="header__nav-list--link wow fadeInDown"
            exact
            to="/"
            onClick={() => this.mobileView('Menu')}
          >
            Home
          </NavLink>
          <NavLink
            data-wow-delay="0.2s"
            activeStyle={{ color: '#13a5a5' }}
            className="header__nav-list--link wow fadeInDown"
            to="/details"
            onClick={() => this.mobileView('Details')}
          >
            Details
          </NavLink>
          <NavLink
            data-wow-delay="0.4s"
            activeStyle={{ color: '#13a5a5' }}
            className="header__nav-list--link wow fadeInDown"
            to="/accommodations"
            onClick={() => this.mobileView('Accommodations')}
          >
            Accommodations
          </NavLink>
          <NavLink
            data-wow-delay="0.6s"
            activeStyle={{ color: '#13a5a5' }}
            className="header__nav-list--link wow fadeInDown"
            to="/activities"
            onClick={() => this.mobileView('Activities')}
          >
            Activities
          </NavLink>
          <NavLink
            data-wow-delay="0.8s"
            activeStyle={{ color: '#13a5a5' }}
            className="header__nav-list--link wow fadeInDown"
            to="/photos"
            onClick={() => this.mobileView('Photos')}
          >
            Photos
          </NavLink>
          <NavLink
            data-wow-delay="1s"
            activeStyle={{ color: '#13a5a5' }}
            className="header__nav-list--link wow fadeInDown"
            to="/registry"
            onClick={() => this.mobileView('Registry')}
          >
            Registry
          </NavLink>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="header">
        {this.renderMobileMenu()}
        {this.renderNavList()}
      </div>
    );
  }
}
