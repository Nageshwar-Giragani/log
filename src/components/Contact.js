import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Dashboard from '../Dashboard';
import Login from './Login';

class Contact extends Component {
    constructor() {
        super();

        this.state = {
           
            Fname: '',
            Mname: '',
            Lname: '',
            email: '',
            numb: '',
            password: '',
            repass: '',
            touched: {
               
                Fname: false,
                Mnamre: false,
                Lanme: false,
                email: false,
                numb: false,
                password: false,
                repass: false

            }
        }
    }

    onChange = (e) => {
        var value = (e.target.type == 'checkbox') ? e.target.checked : e.target.value;
        console.log(value);
        this.setState({
            [e.target.name]: value
        })
    }

    onBlur = (e) => {
        var touched = Object.assign({}, this.state.touched);
        touched[e.target.name] = true;
        this.setState({
            touched
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        

    }

    isValidEmail = (email) => {
        return email.indexOf("@") != -1;
    }

    validate = () => {
        var errors = {}
        var isValid = false;


        if (this.state.Fname == "") {
            errors.Fname = "Please Enter First Name";
        }

        
        if (this.state.Lname == "") {
            errors.Lname = "Please Enter Last Name";
        }

        if (this.state.numb == "")  {
            errors.numb = "Ph Number is required";
        }
        else{
            if((this.state.numb.length !== 10))
            errors.numb = "In-Valid Ph Number";
        }

        if (this.state.email == "") {
            errors.email = "Please Enter Your Email";
        }
        else {
            if (!this.isValidEmail(this.state.email)) {
                errors.email = "Enter Valid Email"
            }
        }


        if (this.state.password == "")  {
            errors.password = "Please Enter Password";
        }
        else{
            if(this.state.password.length < 6)
            errors.password="Password is weak"
        }

        if (this.state.repass != this.state.password) {
            errors.repass = "Please Enter Correct Password";
        }



        return {
            errors,
            isValid: Object.keys(errors).length == 0
        }
    }

    render() {
        var { errors, isValid } = this.validate();
        var { touched } = this.state;
        return (
            
                <div className="container ae">
                
                    <h3>Registration Form</h3>
                    <form>

                       
                        <label>First Name </label>
                            <input type="text" value={this.state.Fname} className="form-control" onChange={this.onChange} placeholder="First Name" onBlur={this.onBlur} name="Fname" />
                            <p>{ touched.Fname && errors.Fname}</p>
                            

                            <label>Middle Name </label>
                            <input type="text" value={this.state.Mname} className="form-control" onChange={this.onChange} placeholder="Middle Name" onBlur={this.onBlur} name="Mname" />
                            <p></p>

                            <label>Last Name </label>
                            <input type="text" value={this.state.Lname} className="form-control" onChange={this.onChange} placeholder="Last Name" onBlur={this.onBlur} name="Lname" />
                            <p>{touched.Lname && errors.Lname}</p>

                            <label>Phone Number</label>
                            <input type="text" value={this.state.numb}  className="form-control" onChange={this.onChange} placeholder="Phone Number" onBlur={this.onBlur} name="numb" />
                            <p>{touched.numb && errors.numb}</p>

                            <label>Email:</label>
                            <input type="text" value={this.state.email}  className="form-control" onChange={this.onChange} placeholder="Email" onBlur={this.onBlur} name="email" />
                            <p>{touched.email && errors.email}</p>

                            <label>Password   </label>
                            <input value={this.state.password}  className="form-control" onChange={this.onChange} placeholder="Password" type="password" onBlur={this.onBlur} name="password" />
                            <p>{touched.password && errors.password}</p>

                            <label>ReType Password</label>
                            <input value={this.state.repass}  className="form-control" onChange={this.onChange} placeholder="Re Enter Password" type="password" onBlur={this.onBlur} name="repass" />
                            <p>{touched.repass && errors.repass}</p>

                            

                        <button className="submit" type="button" onClick={this.onSubmit} disabled={!isValid}><Link to="/">Register</Link></button>
                        </form>
                </div>
                

        )
    }
}

export default Contact;