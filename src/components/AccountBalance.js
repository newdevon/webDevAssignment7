import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div>
          Balance: {this.props.accountBalance}
          <Link to="/">Return to Home</Link>
        </div>
        
    );
  }
}

export default AccountBalance;