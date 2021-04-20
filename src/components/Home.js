import React, { Component } from 'react';
import AccountBalance from './AccountBalance';

import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <img src="https://photos2.fotosearch.com/bthumb/CSP/CSP996/bank-icon-clipart__k17206634.jpg" alt="bank" />
                <h1>Bank of React</h1>

                <div>
                    <Link to="/userProfile">User Profile</Link>
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
                <AccountBalance accountBalance={this.props.accountBalance} />
            </div>
        );
    }
}

export default Home;