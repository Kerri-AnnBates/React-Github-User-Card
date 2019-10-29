import React from 'react';
import './App.css';
import axios from 'axios';
import User from './components/User';

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
      console.log(resolve.data);
      this.setState({
        userData: resolve.data,
        followersData: resolve.data.followers_url
      })
      return axios.get('https://api.github.com/users/Kerri-AnnBates/followers');
    })
    .then(resolve => {
      this.setState({
        followersData: resolve.data
      })
    })
    .catch(error => {
      console.log('Error: Unable to fetch data', error);
    })
  }

  
  render() {
    console.log('loading data...');
    console.log(this.state.followersData)
    return (
      <div className="App">
        <h1>Hello, User</h1>
        <User userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
