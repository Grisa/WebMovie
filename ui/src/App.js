import React, { Component } from 'react';
import styled from "styled-components";
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from "./Components/Workspace/Header";
import Wave from "./Components/Wave/Wave";

import Home from "./Routes/Home";
import Signin from "./Routes/Signin";
import Signup from "./Routes/Signup";
import Ranking from "./Routes/RankingList";
import MyList from "./Routes/MyList";
import Admin from "./Routes/Admin";

const Footer = styled.div`
  height: 300px;
  background: #7d4cdb;
`;

const NoMatch = () => {
  return (<div>
    Nenhum resultado encontrado
  </div>);
}

class App extends Component {
  state = {
    open: false,
    component: null
  }

  handleOpen = (component, movie) => () => {
    this.setState({
      open: true,
      movie,
      component
    })
  }

  handleClose = () => () => {
    this.setState({
      open: false,
      movie: null,
      component: null
    })
  }

  render() {
    const { pathname } = this.props.location;
    const isSign = pathname.match(/\/sign/);
    const { open, movie, component } = this.state;

    return (
      <div style={{ height: isSign ? "inherit" : "fit-content" }} id="main">
        {
          isSign
            ? null
            : <Header handleOpen={this.handleOpen} handleClose={this.handleClose} />
        }

        <Wave open={open && !isSign} handleClose={this.handleClose} data={movie} component={component} />
        <Switch>
          <Route exact path='/home' render={() => <Home open={open && !isSign} handleOpen={this.handleOpen} />} />
          <Route path='/ranking' render={() => <Ranking open={open && !isSign} handleOpen={this.handleOpen} />} />
          <Route path='/mylist' render={() => <MyList open={open && !isSign} handleOpen={this.handleOpen} />} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='/admin' render={() => <Admin open={open && !isSign} handleOpen={this.handleOpen} />} />
          <Route component={NoMatch} />
        </Switch>
        <Footer></Footer>
      </div >
    );
  }
}

export default withRouter(App);
