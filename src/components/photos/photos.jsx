import React from 'react';
import FontAwesome from 'react-fontawesome';

import photoData from './photoData';

import './style/photos.scss';

export default class Photos extends React.Component {

  state = {
    carouselIsVissible: false,
    carouselPhoto: -1,
    trigger: 'fade',
    xDown: null,
    yDown: null
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('keydown', this.handleArrowKeyPress);
    document.addEventListener('touchstart', this.handleTouchStart, false);
    document.addEventListener('touchmove', this.handleTouchMove, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('keydown', this.handleArrowKeyPress);
    document.removeEventListener('touchstart', this.handleTouchStart, false);
    document.removeEventListener('touchmove', this.handleTouchMove, false);
  }

  handleTouchStart = (event) => {
    const xDown = event.touches[0].clientX;
    const yDown = event.touches[0].clientY;

    this.setState({ xDown, yDown });
  };

  handleTouchMove = (event) => {
    const { xDown, yDown } = this.state;

    if (!xDown || !yDown) {
      return null;
    }

    const xUp = event.touches[0].clientX;
    const yUp = event.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        setTimeout(() => {
          this.handleNextPhotoClick();
        }, 100);
      } else {
        setTimeout(() => {
          this.handlePreviousPhotoClick();
        }, 100);
      }
    }

    this.setState({ xDown: null, yDown: null });
  };

  handlePhotoClick(index) {
    this.setState(
      {
        carouselIsVissible: true,
        carouselPhoto: index
      },
      () => window.scrollTo(0, 0)
    );
  }

  noscroll() {
    window.scrollTo(0, 0);
  }

  delayFadeLeft() {
    setTimeout(() => {
      this.setState({ trigger: 'fade-left' });
    }, 10);
  }

  delayFadeRight() {
    setTimeout(() => {
      this.setState({ trigger: 'fade-right' });
    }, 10);
  }

  delayFade() {
    setTimeout(() => {
      this.setState({ trigger: 'fade' });
    }, 10);
  }

  handlePhotoCarouselClose = () => {
    document.body.style.position = 'static';
    this.setState({ carouselIsVissible: false });
  }

  handleArrowKeyPress = (event) => {
    const leftArrow = event.keyCode === 37;
    const rightArrow = event.keyCode === 39;

    if (leftArrow) {
      this.handlePreviousPhotoClick();
    }
    if (rightArrow) {
      this.handleNextPhotoClick();
    }
  }

  handleClickOutside = (event) => {
    if (
      this.state.carouselIsVissible &&
      (!this.closeButton.contains(event.target) &&
        !this.previousButton.contains(event.target) &&
        !this.nextButton.contains(event.target))
    ) {
      this.handlePhotoCarouselClose();
    }
  }

  handleNextPhotoClick = () => {
    if (this.state.carouselPhoto < photoData.length - 1) {
      this.setState(
        {
          carouselPhoto: this.state.carouselPhoto + 1,
          trigger: null
        },
        this.delayFadeLeft()
      );
    }
  }

  handlePreviousPhotoClick = () => {
    if (this.state.carouselPhoto > 0) {
      this.setState(
        {
          carouselPhoto: this.state.carouselPhoto - 1,
          trigger: null
        },
        this.delayFadeRight()
      );
    }
  }

  renderIcon(direction) {
    return (
      <FontAwesome name={direction} size="2x" style={{ color: 'white' }} />
    );
  }

  renderPhotoCarousel() {
    if (this.state.carouselIsVissible) {
      document.body.style.position = 'fixed';
      document.documentElement.style.overflow = 'hidden';
      return (
        <div
          className="photo-carousel"
          ref={(c) => {
            this.photoCarousel = c;
          }}
        >
          <button
            className="photo-carousel__close-button"
            ref={(c) => {
              this.closeButton = c;
            }}
            onClick={this.handlePhotoCarouselClose}
          >
            x
          </button>

          <div className="photo-carousel--large-photo__wrapper">
            <button
              ref={(c) => {
                this.previousButton = c;
              }}
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
              ref={(c) => {
                this.nextButton = c;
              }}
              className="photo-carousel__next-button"
              onClick={this.handleNextPhotoClick}
            >
              {this.renderIcon('angle-right')}
            </button>
          </div>
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
