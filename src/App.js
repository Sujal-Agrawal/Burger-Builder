import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import Header from './Components/Header/Header';
import BugerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <Header />
          <BugerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
