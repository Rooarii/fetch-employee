import React from 'react';
import './App.css';
import axios from 'axios';

// import the DisplayEmployee component
import DisplayEmployee from './components/DisplayEmployee';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: null
    };
    this.getEmployee = this.getEmployee.bind(this);
  }

  componentDidMount(){
    this.getEmployee();
  }

  getEmployee() {
    // Send the request
    axios.get('https://randomuser.me/api?nat=fr')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log(data.results[0])
        this.setState({
          employee: data.results[0],
        });
    });
  }
  
  render() {
    return (
      <div className="App">
        {this.state.employee ? (
          <DisplayEmployee employee={this.state.employee} />
        ) : (
          <p>loading data</p>
        )}
        <button type="button" onClick={this.getEmployee}>Get employee</button>
      </div>
    );
  }
}

export default App;
