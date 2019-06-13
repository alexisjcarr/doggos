import React, { Component } from "react";
import axios from "axios";

import SearchBar from "./components/SearchBar";
import DogList from "./components/DogList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doggos: [],
      error: "",
      loading: false
    };
  }

  getDoggos = breed => {
    this.setState({
      loading: true,
    })
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images`)
      .then(res => {
        console.log('breed: ', breed)
        console.log('response: ', res.data.message);
        this.setState({
          doggos: res.data.message,
          error: "",
          loading: false,
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({
          doggos: [],
          error: "sorry :( no doggos of that breed are found.",
          loading: false,
        })
      });
  };

  render() {
    return( 
    <div>
      <SearchBar getDoggos={this.getDoggos} />
      {this.state.loading ? <p>doggos are loading...</p> : null}
      {this.state.error.length > 0 ? <p>{this.state.error}</p> : null} 
      <DogList doggos={this.state.doggos} />
    </div>
    );
  }
}

export default App;
