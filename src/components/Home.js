import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import "./Home.css"

class Home extends Component {
    render() {
        return (
            <div>
                <div className="screenDisplay">
                    <AccountBalance accountBalance={this.props.accountBalance} />
                </div>
            </div>
        );
    }
}

export default Home;