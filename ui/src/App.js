import React, { Component } from 'react';
// import Api from "./Utils/Api";
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from "./Components/Header";

import Home from "./Routes/Home";
import Signin from "./Routes/Signin";
import Signup from "./Routes/Signup";

class App extends Component {
  teste = async () => {
    // const a = await Api.get("/teste2.php");
  }

  render() {
    const { pathname } = this.props.location;
    const isSign = pathname.match(/\/sign/);

    return (
      <div style={{ padding: !isSign ? "0 140px" : 0, height: "100%", width: "100%" }}>
        {
          isSign
            ? null
            : <Header />
        }
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </div >
    );
  }
}

export default withRouter(App);
