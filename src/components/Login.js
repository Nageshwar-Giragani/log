import React, { Component } from 'react'

import { Link, Redirect } from 'react-router-dom'
import Dashboard from '../Dashboard';
import Contact from './Contact';
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            Email: '',
            Password: '',
            touched: {
                Email: false,
                Password: false,
                loggedIn: false
            }
        }

    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    login = () => {
        if ((this.state.Email == "user@gmail.com") && (this.state.Password == "123456")) {
            this.setState({
                loggedIn: true
            })
            

            console.log("loggedin true")
        }
        else{
            alert("invalid Login Details")
        }
    }


    render() {
        if (this.state.loggedIn == true) {
            return (
                <Redirect to="/Dashboard"></Redirect>
            )
        }
        return (
            <div><div className='container ac'>
                <h3 class="sign" align="center">Login in</h3>
                <form className="text-center">
                <label>Email:</label>               
                    <input type="text"  onChange={this.onChange} name="Email" className="form-control" placeholder="Email ID" />
                    <br/>
                    <label>Password:</label>
                    <input  type="password"  onChange={this.onChange} name="Password" className="form-control" placeholder="Password" />
                    <br />
                    <button className="submit" align="center" type="button" onClick={this.login} >Login</button>

                    <br />
                   <div className="ad"> <p>Register Here</p>
                    <button className="submit" align="center"  type="button" ><Link to="/Contact">Register</Link></button>
                    </div>

                </form>


            </div>

            </div>
        )
    }
}