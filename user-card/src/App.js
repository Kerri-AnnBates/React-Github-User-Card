import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userData: [],
      followersData: []
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, User</h1>
      </div>
    );
  }
}

export default App;
