import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Dropdown, ButtonGroup, Button} from 'react-bootstrap';

class SignUpComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            userId: '',
            userType: '',
            firstName: '',
            lastName: '',
            password: '',
            emailId: '',
            contact: '',
            is_Active: '',
            p: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    // step 3
    
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {userId: this.state.emailId, userType:this.state.userType,firstName: this.state.firstName, lastName: this.state.lastName, contact: this.state.contact, password: this.state.password
        };
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        EmployeeService.signUp(employee).then(res =>{
            let s=res.data;
            if(s.booleanMsg){
            this.props.history.push('/admin');
            }
            else{
                console.log("unsuccessful");
            }
        });
    }

    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changeContactHandler= (event) => {
        this.setState({contact: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    handleSelect = (event) => {
        this.setState({userType: event});
        console.log(event);
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                
                                    <h3 className="text-center">Sign Up</h3>
                                
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Contact: </label>
                                            <input placeholder="Contact" name="contact" className="form-control" 
                                                value={this.state.contact} onChange={this.changeContactHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Confirm Password: </label>
                                            <input placeholder="Confirm Password" name="confirmPassword" className="form-control" 
                                                value={this.state.confirmPassword} onChange={this.changeConfirmPasswordHandler}/>
                                        </div>
                                        <br></br>
                                        <div>
                                            <Dropdown as={ButtonGroup} onSelect={this.handleSelect}>
                                                <Button variant="success">User Type</Button>
                                                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                                                <Dropdown.Menu>
                                                    <Dropdown.Item eventKey="Candidate">Candidate</Dropdown.Item>
                                                    <Dropdown.Item eventKey="RMG">RMG</Dropdown.Item>
                                                    <Dropdown.Item eventKey="Account POC">Account POC</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <br></br>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default SignUpComponent
