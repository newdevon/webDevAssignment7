import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import "./Home.css"
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="grid-container">
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
                </div>
                <div className="screenDisplay">
                    <AccountBalance accountBalance={this.props.accountBalance} />
                </div>
            </div>
        );
    }
}

export default Home;