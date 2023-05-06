import './App.css';
import Users from './userCard'
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: false };
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ loading: true });
    
    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2000
    );
  } 

  render() {
    return (
      <>
        <div className='container'>
          <nav className="navbar">
            <h2>Koach</h2>
            <button className="fetchbtn" onClick={this.updateState}>
              Get Users
            </button>
          </nav>
          <div className="userdatacontainer">
            <Users loading={this.state.loading} users={this.state.users_data} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
