import React from "react";
import './style/style.scss';

var Spinner = require('react-spinkit');


export default class Rsvp extends React.Component {
  state = {
    isLoading: true
  }

  handleLoadingChange = () => {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <Spinner
            className="spinner"
            name="double-bounce"
            color="#13a5a5"
            fadeIn="none"
          />
        ) : null }
        <iframe
          title="rsvp"
          onLoad={this.handleLoadingChange}
          id="if1"
          width="100%"
          height="800"
          style={{ visibility: "visible", border: 'none' }}
          src="https://ian-ali.app.rsvpify.com/"
        />
      </div>
    );
  }
}
