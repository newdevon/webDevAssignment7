import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';
import Credits from './components/Credits';
import axios from "axios"
import './App.css'

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      },
      debits: [],
      credits: []
    }

    this.addDebit = this.addDebit.bind(this);
    this.addCredit = this.addCredit.bind(this);
  }

  //function loads the debit and credits array as well as the balance
  async componentDidMount(){
    let debits = await axios.get("https://moj-api.herokuapp.com/debits");
    let credits = await axios.get("https://moj-api.herokuapp.com/credits");

    debits = debits.data;
    credits = credits.data;

    let debitSum = 0, creditSum = 0;

    debits.forEach((debit) => {
      debitSum += debit.amount;
    })

    credits.forEach((credit) => {
      creditSum += credit.amount
    })

    const accountBalance = (creditSum - debitSum).toFixed(2);

    this.setState({debits, credits, accountBalance}); //sets the state for debit credit and balance

  }

  //function pushes the new item to debit array and updates balance 
  //item is the item obj created in Debits.js
  addDebit = (item) => {

    let debArr = this.state.debits;
    let newBal = this.state.accountBalance - item.amount; //getting new balance

    //pushing new item to array
    debArr.push( { "description" : item.description ,
                    "amount" : item.amount,
                    "date" : item.date})

    //updating states
    this.setState({
      accountBalance: newBal,
      debits: debArr
    })
  }

  //credits version of above
  addCredit = (item) => {

    let credArr = this.state.credits;
    //cast int, gave errors otherwise
    let newBal = (this.state.accountBalance + item.amount * 1).toFixed(2); //getting new balance
    console.log(newBal);
    //pushing new item to array
    credArr.push( { "description" : item.description ,
                    "amount" : item.amount,
                    "date" : item.date})

    //updating states
    this.setState({
      accountBalance: newBal,
      credits: credArr
    })
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)

    //debits comp gets the debits arr, balance, addDebit function
    const DebitsComponent = () => (<Debits accountBalance={this.state.accountBalance} debits={this.state.debits} addDebit={this.addDebit}/>);
    //credits component with same functionality as above
    const CreditsComponent = () => (<Credits accountBalance={this.state.accountBalance} credits={this.state.credits} addCredit={this.addCredit}/>);
    return (
      <Router>
        <div>
          <img src="https://i.imgur.com/gWP6ILh.png" alt="bank" />
          <div className="grid-container">
            <div>
              <Link to="/">Home</Link>
            </div>

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
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/debits" render={DebitsComponent} />
          <Route exact path="/credits" render={CreditsComponent}/>
        </div>
      </Router>
    );
  }

}

export default App;