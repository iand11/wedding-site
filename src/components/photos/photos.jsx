import React from 'react';
import FontAwesome from 'react-fontawesome';

import photoData from './photoData';

import './style/photos.scss';

export default class Photos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carouselIsVissible: false,
      carouselPhoto: -1,
      trigger: 'fade'
    };
    this.handlePhotoCarouselClose = this.handlePhotoCarouselClose.bind(this);
    this.handleNextPhotoClick = this.handleNextPhotoClick.bind(this);
    this.handlePreviousPhotoClick = this.handlePreviousPhotoClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleArrowKeyPress = this.handleArrowKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('keydown', this.handleArrowKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('keydown', this.handleArrowKeyPress);
  }

  handlePhotoClick(index) {
    this.setState({
      carouselIsVissible: true,
      carouselPhoto: index
    }, () => window.scrollTo(0, 0));
    window.addEventListener('scroll', this.noscroll);
  }

  noscroll() {
    window.scrollTo(0, 0);
  }

  delayFade() {
    setTimeout(() => {
      this.setState({ trigger: 'fade' });
    }, 10);
  }

  handlePhotoCarouselClose() {
    this.setState({ carouselIsVissible: false }, () => window.removeEventListener('scroll', this.noscroll));
  }

  handleArrowKeyPress(event) {
    const leftArrow = event.keyCode === 37;
    const rightArrow = event.keyCode === 39;

    if (leftArrow) { this.handlePreviousPhotoClick(); }
    if (rightArrow) { this.handleNextPhotoClick(); }
  }

  handleClickOutside(event) {
    if (this.state.carouselIsVissible && (!this.closeButton.contains(event.target) && !this.previousButton.contains(event.target) && !this.nextButton.contains(event.target) && !this.previousButtonMobile.contains(event.target) && !this.nextButtonMobile.contains(event.target))) {
      this.handlePhotoCarouselClose();
    }
  }

  handleNextPhotoClick() {
    if (this.state.carouselPhoto < photoData.length - 1) {
      this.setState({
        carouselPhoto: this.state.carouselPhoto + 1,
        trigger: null
      }, this.delayFade());
    }
  }

  handlePreviousPhotoClick() {
    if (this.state.carouselPhoto > 0) {
      this.setState({
        carouselPhoto: this.state.carouselPhoto - 1,
        trigger: null
      }, this.delayFade());
    }
  }

  renderIcon(direction) {
    return (
      <FontAwesome
        name={direction}
        size="2x"
        style={{ color: 'white' }}
      />
    );
  }

  renderMobileButtons() {
    return (
      <div className="photo-carousel__mobile-buttons">
        <button
          ref={(c) => { this.previousButtonMobile = c; }}
          className="photo-carousel__previous-button--mobile"
          onClick={this.handlePreviousPhotoClick}
        >
          {this.renderIcon('angle-left')}
        </button>
        <button
          ref={(c) => { this.nextButtonMobile = c; }}
          className="photo-carousel__next-button--mobile"
          onClick={this.handleNextPhotoClick}
        >
          {this.renderIcon('angle-right')}
        </button>
      </div>
    );
  }

  renderPhotoCarousel() {
    if (this.state.carouselIsVissible) {
      return (
        <div className="photo-carousel" ref={(c) => { this.photoCarousel = c; }}>
          <button
            className="photo-carousel__close-button"
            ref={(c) => { this.closeButton = c; }}
            onClick={this.handlePhotoCarouselClose}
          >
            x
          </button>

          <div className="photo-carousel--large-photo__wrapper">
            <button
              ref={(c) => { this.previousButton = c; }}
              className="photo-carousel__previous-button"
              onClick={this.handlePreviousPhotoClick}
            >
              {this.renderIcon('angle-left')}
            </button>
            <img
              className={`photo-carousel--large-photo ${this.state.trigger}`}
              src={photoData[this.state.carouselPhoto].image}
              alt="oops"
            />
            <button
              ref={(c) => { this.nextButton = c; }}
              className="photo-carousel__next-button"
              onClick={this.handleNextPhotoClick}
            >
              {this.renderIcon('angle-right')}
            </button>
          </div>
          {this.renderMobileButtons()}
        </div>
      );
    }
    return null;
  }

  renderPhoto() {
    let photoNumber;
    return photoData.map((photo, index) => {
      photoNumber = index;
      return (
        <button
          key={photoNumber}
          className="image"
          onClick={() => this.handlePhotoClick(index)}
          disabled={this.state.carouselIsVissible}
        >
          <p className="image-body">{photo.body}</p>
          <img className="photo-list__photo" src={photo.image} alt="oops" />
        </button>
      );
    });
  }

  render() {
    return (
      <div className="photo-list">
        {this.renderPhoto()}
        {this.renderPhotoCarousel()}
      </div>
    );
  }
}
