import React, { Component } from "react";
import styled from "styled-components";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breedInput: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitSearch = e => {
    e.preventDefault();
    this.props.getDoggos(this.state.breedInput);
    this.setState({
      breedInput: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitSearch}>
        <input
          type="text" placeholder="doggo breed" name="breedInput" onChange=
          {this.handleChange}
        />
        <button type="submit">search</button>
      </form>
    );
  }
}

export default SearchBar;
