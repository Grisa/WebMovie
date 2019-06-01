import React, { Component } from 'react';
// import Api from "./Services/Api";
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from "./Components/Header";

import Home from "./Routes/Home/index";

const teste2 = () => (<div>teste 2</div>);


class App extends Component {
  teste = async () => {
    // const a = await Api.get("/teste2.php");
  }

  render() {
    const { pathname } = this.props.location;

    return (
      <div>
        {
          pathname.match(/\/sign/)
            ? null
            : <Header />
        }
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route path='/teste2' component={teste2} />
        </Switch>
      </div >
    );
  }
}

export default withRouter(App);
