import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Shop from './components/Shop';
import Product from './components/Product';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Shop} />
        <Route path="/product/:id" component={Product}/>
      </div>
    );
  }
}

export default App;
