import React, { Component } from 'react';
import { fetchData } from '../APIcalls';
import Reservations from '../Components/Reservations/Reservations';
import Form from '../Components/Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      error: ''
    }
  }

  addReservation = (newReservation) => {
    this.setState({ reservations: [...this.state.reservations, newReservation] });
  }

 componentDidMount() {
    fetchData().then(data => this.setState({ 
      reservations: data
    }))
    .catch(error => this.setState({error: error}))
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
