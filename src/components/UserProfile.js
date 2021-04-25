import React, { Component } from 'react';
import './UserProfile.css';

class UserProfile extends Component {
  render() {
    return (
      <div className="center">
        <h1>User Profile</h1>

        <div>Username: {this.props.userName}</div>
        <div>Member Since: {this.props.memberSince}</div>

        <h4>Proceed to add Credit or Debit</h4>

      </div>
    );
  }
}

export default UserProfile;