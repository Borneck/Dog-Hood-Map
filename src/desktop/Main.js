import React, { Component } from 'react';
import Map from '../components/Map';
import Sidebar from '../components/Sidebar';

import './Main.css';

class Main extends Component {
  render() {
    return (
      <main className="App-main">
        
        <Map />

        <Sidebar />
            
      </main>
    );
  }
}

export default Main;