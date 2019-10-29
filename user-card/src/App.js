import React from 'react';
import './App.css';
import axios from 'axios';
import User from './components/User';
import Followers from './components/Follwers';
import SearchForm from './components/SearchForm';

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
      })
      return axios.get('https://api.github.com/users/Kerri-AnnBates/followers');
    })
    .then(resolve => {
      // console.log(resolve.data)
      this.setState({
        followersData: resolve.data
      })
    })
    .catch(error => {
      console.log('Error: Unable to fetch data', error);
    })

    // axios.get('https://api.github.com/users/Kerri-AnnBates/followers')
    //   .then(resolve => {
    //     console.log(resolve.data);
    //     this.setState({
    //       followersData: resolve.data
    //     })
    //   }).catch(error => {
    //     console.log(error);
    //   })
  }

  
  render() {
    console.log('loading data...');
    console.log(this.state.followersData);
    return (
      <div className="App">
        <h1>Hello, User</h1>
        <SearchForm />
        <User userData={this.state.userData} />
        {this.state.followersData.length === 0 && console.log('followers loading')}
          <h2>Followers</h2>
          <Followers followersData={this.state.followersData} />
      </div>
    );
  }
}

export default App;
