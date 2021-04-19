import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';

class Debits extends Component {

    render() {
        return (
            <div>
                <div>
                    <h1>Debits</h1>
                </div>
                <Link to="/">Return to Home</Link>
            </div>

        )
    }
}

export default Debits;