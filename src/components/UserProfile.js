import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
      <div>
        <h1>User Profile</h1>

        <div>Username: {this.props.userName}</div>
        <div>Member Since: {this.props.memberSince}</div>

        <div>
          <Link to="/">Home</Link>
        </div>

        <div>
          <Link to="/Login">Log in</Link>
        </div>

        <div>
          <Link to="/Debits">Debits</Link>
        </div>

        <div>
          <Link to="/Credits">Credits</Link>
        </div>
      </div>
    );
  }
}

export default UserProfile;