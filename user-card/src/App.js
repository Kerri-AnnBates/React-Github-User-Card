import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      userData: [],
      followersData: []
    }
  }
  
  componentDidMount() {
    axios.get('https://api.github.com/users/Kerri-AnnBates')
    .then(resolve => {
      // console.log(resolve.data);
      this.setState({
        userData: resolve.data
      })

    })
    .catch(error => {
      console.log('Error: Unable to fetch data', error);
    })
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
