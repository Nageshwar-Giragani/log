import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            students: [],
            studentName: '',
            studentId: '',
            Email:'',
            Classs:'',
            EnrollYear:'',
            City:'',
            Country:''

        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addStudent = (e) => {
        e.preventDefault();
        this.setState({
            students: [
                ...this.state.students,
                {
                    studentName: this.state.studentName,
                    studentId: this.state.studentId,
                    Email:this.state.Email,
                    Classs:this.state.Classs,
                    EnrollYear:this.state.EnrollYear,
                    City:this.state.City,
                    Country:this.state.Country
                }
            ]

        })
    }
    
    removeStudent=(student)=>{
        this.setState({
            students:this.state.students.filter((currentStudent)=>{
                return currentStudent!=student
            })
        })
    }
    clearStudent=()=>{
        this.setState({
            studentName:'',
            studentId: '',
            Email:'',
            Classs:'',
            EnrollYear:'',
            City:'',
            Country:'' 
        })
    }
    render() {
        return (
            <div className="container ae"><h3>Student Registartion</h3>
                <form><label>Student Id</label>
                <input type="text" name="studentId" onChange={this.onChange} placeholder="Student ID" className="form-control" /><br />
                   <label> Student Name</label>
                <input type="text" name="studentName" onChange={this.onChange} placeholder="Student Name" className="form-control" /><br />
               <label>Email</label>
                <input type="text"   name="Email"    onChange={this.onChange}    placeholder="Email ID" className="form-control" /><br/>
             
                <label>Class</label>
                <input type="text" name="Classs" onChange={this.onChange} placeholder="Class Name" className="form-control" /><br />

             
                <label>Enrollment Year</label>
                <input type="text" name="EnrollYear" onChange={this.onChange} placeholder="Enrollment Year" className="form-control" /><br />

                <label>City</label>
                <input type="text" name="City" onChange={this.onChange} placeholder="City" className="form-control" /><br />

                <label>Country</label>
                <input type="text" name="Country" onChange={this.onChange} placeholder="Country" className="form-control" /><br />

                        
                   <div className="af"> <button type="button1" onClick={this.addStudent} className="btn btn-primary">Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button1" onClick={this.clearStudent} className="btn btn-primary" >Clear</button>
                    </div>
                    
                    
                    
                    
                    </form>

               <div> 
               <br/>
               <br/>
               <br/>
               <br/>
               <h3>Dash Board</h3>
               <table className="table"><tbody>
                    <tr><th>StudentID</th>
                    <th>Student Name</th>
                    <th>Email</th>
                    <th>Class</th>
                    <th>Enrollment Year</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Edit/Remove</th>
                   
                    </tr>
                    {
                        this.state.students.map((student,index) => {
                            return <tr key={index}>
                                <td>{student.studentId}</td>
                                <td>{student.studentName}</td>
                                <td>{student.Email}</td>
                                <td>{student.Classs}</td>
                                <td>{student.EnrollYear}</td>
                                <td>{student.City}</td>
                                <td>{student.Country}</td>
                              <td>  <button onClick={()=>{
                                this.removeStudent(student);
                            }}>Remove</button></td>
                            </tr>
                        })
                    }
                </tbody>
                </table>
</div>
            </div>
        )
    }
}
 