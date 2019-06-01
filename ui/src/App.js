import React, { Component } from 'react';
import Api from "./Services/Api";

import Header from "./Components/Header";

class App extends Component {
  teste = async () => {
    const a = await Api.get("/teste2.php");

    console.log(a)
  }

  render() {
    return (
      <div>
        <Header />
      </div >
    );
  }
}

export default App;
