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
      followersData: [],
      query: '',
      userValue: ''
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

  handleChange = (e) => {
    this.setState({
      userValue: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    this.setState({
      query: this.state.userValue
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query != this.state.query) {
      axios.get(`https://api.github.com/users/${this.state.query}`)
        .then(resolve => {
          console.log(resolve.data);
          this.setState({
            userData: resolve.data,
          })
          return axios.get(`https://api.github.com/users/${this.state.query}/followers`);
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
    }
  }
  
  render() {
    // console.log('loading data...');
    // console.log(this.state.followersData);
    return (
      <div className="App">
        <h1>Hello, User</h1>
        <SearchForm 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
        />
        <User userData={this.state.userData} />
        {this.state.followersData.length === 0 && console.log('followers loading')}
          <h2>Followers</h2>
          <Followers followersData={this.state.followersData} />
      </div>
    );
  }
}

export default App;
