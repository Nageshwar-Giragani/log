
import React, { Component } from 'react'

export default class Register extends Component {

constructor(){
    super();
    this.state={
        Fname:'',
        Mname:'',
        Lname:'',
        Numb:'',
        EMail:'',
        Password:'',
        Repass:'',
        touched:{
            Email:false,
            Password:false

        }



    }
}


onChange=(e)=>{
    var value= e.target.value;
    console.log(value);
    this.setState({
        [e.target.name]:value
    })
}

onBlur=(e)=>{
    var touched=Object.assign({},this.state.touched);
    touched[e.target.name]=true;
    this.setState({
        touched
    })
}

onSubmit=(e)=>{
    e.preventDefault();

    //send this information to server
    
}

isValidEmail=(Email)=>{
    return Email.indexOf("@")!=-1;
}

validate=()=>{
    var errors={}
    var isValid=false;

    if(this.state.name==""){
        errors.name="Name is required";
    }

    if(this.state.Email==""){
        errors.Email="Email is required";
    }
    else {
        if (!this.isValidEmail(this.state.email)){
            errors.Email="Invalid email"
        }
    }

    if(this.state.message==""){
        errors.message="Message is required";
    }

    return {
        errors,
        isValid:Object.keys(errors).length==0
    }
}






























    render() {

        var {errors, isValid}=this.validate();
        var {touched}=this.state;

        return (
            <div>
<form>First Name:
                <input type="text"      value={this.state.name}   onChange={this.onChange} onBlur={this.onBlur}    name="Fname" placeHolder="First Name" /><br/>
                {errors.name && touched.name && <span className="error">{errors.name}</span>}
Middle Name:
                <input type="text" name="Mname" placeHolder="Middle Name" /><br/>
Last Name:
                <input type="text" name="Lname" placeHolder="Last Name" /><br/>
Email:
                <input type="text" Email="Email" placeHolder="Email" /><br/>
Mobile No.:
                <input type="number" name="Numb"placeHolder="9876543210" /><br/>
Password:
                <input type="password" name="Password" placeHolder="password" /><br/>
                
 Confirm Password:               
                <input type="password" name="RePass" placeHolder="Confirm Password" /><br/>


                <button>Register</button>
                </form>

            </div>
        )
    }
}
