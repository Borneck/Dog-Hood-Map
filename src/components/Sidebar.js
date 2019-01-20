import React, { Component } from 'react';

import './Sidebar.css';
import WikipediaResultsContainer from './wikipediaResult';

class Sidebar extends Component {
  render() {
    return (
      <nav className="App-sidebar">
        
        <WikipediaResultsContainer/>
            
      </nav>
    );
  }
}

export default Sidebar;