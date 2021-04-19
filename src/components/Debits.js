import React, { Component } from 'react';
//import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';

class Debits extends Component {

    render() {
        return (
            <div>
                <div>
                    <h1>Debits</h1>
                </div>

                <div>
                    Balance: {this.props.accountBalance}  
                </div>

                <div>
                    <Link to="/">Return to Home</Link>
                </div>

                <div>
                    {
                        this.props.debits.map((debits) => {
                            let desc = debits.description;
                            let amt = debits.amount;
                            let date = debits.date;

                            return (
                                <div>
                                    <p>{desc} {amt} {date}</p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        )
    }
}

export default Debits;