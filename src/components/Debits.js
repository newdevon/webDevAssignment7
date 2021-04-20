import React, { Component } from 'react';
//import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';

class Debits extends Component {


    constructor() {
        super()
        this.state = {
            //this will keep track of things inputed in form
            item: {
                description: '',
                amount: 0,
                date: ''
            }
        }
    }

    //this will update our states that keep track of form input
    handleChange = (e) => {
        const updatedItem = { ...this.state.item };   //gets the current item object
        const inputField = e.target.name;
        const inputValue = e.target.value;
        updatedItem[inputField] = inputValue;   //updates item object with whatever was changed

        this.setState({ item: updatedItem }); //updates the state with updated item made
    }

    //this will update App.js states after submitting assuming input is valid
    handleSubmit = (e) => {
        e.preventDefault();
        const currItem = { ...this.state.item };  //gets the current item state

        if (currItem.description === '') //if statements validate input
        {
            alert("Enter a description");
            return;
        }
        else if (!Number(currItem.amount)) {
            alert("Enter a number for amount");
            return;
        }
        else if (currItem.amount <= 0) {
            alert("Enter a non zero positive value for amount")
            return;
        }
        else if (currItem.date === '') {
            alert("Enter a date");
            return;
        }

        this.props.addDebit(currItem);  //calls function passed as prop from App.js

    }

    render() {
        return (
            <div>
                <div>
                    <h1>Debits</h1>
                </div>

                <div>
                    <Link to="/">Home</Link>
                </div>

                <div>
                    <Link to="/Login">Log in</Link>
                </div>

                <div>
                    <Link to="/userProfile">User Profile</Link>
                </div>

                <div>
                    <Link to="/Credits">Credits</Link>
                </div>

                <div>
                    Balance: {this.props.accountBalance}
                </div>


                <div>
                    <form onSubmit={this.handleSubmit} >
                        <div>
                            <label>description</label>
                            <input type="text" name="description" onChange={this.handleChange} value={this.state.description} />

                            <label>amount</label>
                            <input type="text" name="amount" onChange={this.handleChange} value={this.state.amount} />

                            <label>date</label>
                            <input type="text" name="date" onChange={this.handleChange} value={this.state.date} />

                            <button>Submit</button>
                        </div>
                    </form>
                </div>

                <div>
                    <ul>
                        {
                            //Debits array passed from props is rendered here
                            this.props.debits.map((debits, index) => {
                                let desc = debits.description;
                                let amt = debits.amount;
                                let date = debits.date;

                                return (
                                    <div key={index}>
                                        <li>{desc} {amt} {date}</li>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>

            </div >

        )
    }
}

export default Debits;