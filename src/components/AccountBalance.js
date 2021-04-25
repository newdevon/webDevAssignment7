import React, {Component} from 'react';
import "./AccountBalance.css"

class AccountBalance extends Component {
  render() {
    return (
        <div className="balance">
          Balance: {this.props.accountBalance}  
        </div>
        
    );
  }
}

export default AccountBalance;