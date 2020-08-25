import React, { Component, Fragment } from "react";
import { Text, Input } from "./components";

// import styles from "./App.module.css";

class App extends Component {
  state = {
    data: [],
  };

  onSubmit = async (term) => {
    await this.setState({ data: [...this.state.data, term] });
    await localStorage.setItem("data", JSON.stringify(this.state.data));
    // console.log(this.state.data);
  };

  render() {
    return (
      <Fragment>
        <Input onSubmit={this.onSubmit} />
        <Text />
      </Fragment>
    );
  }
}

export default App;
