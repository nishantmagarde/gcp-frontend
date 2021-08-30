/* eslint-disable */
import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Dropdown, ButtonGroup, Button} from 'react-bootstrap';

class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            userType: '',
            firstName: '',
            lastName: '',
            password: '',
            emailId: '',
            contact: '',
            err: 0
        }
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.loginEmp = this.loginEmp.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    changeUserIdHandler= (event) => {
        this.setState({userId: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    handleSelect = (event) => {
        this.setState({userType: event});
        console.log(event);
    }

    loginEmp = (e) => {
        e.preventDefault();
        let employee = {userId: this.state.userId, userType:this.state.userType,firstName: this.state.firstName, lastName: this.state.lastName, contact: this.state.contact, password: this.state.password
        };
        console.log('employee => ' + JSON.stringify(employee));
        
        // step 5
        EmployeeService.login(employee).then(res =>{
            let s=res.data;
            if(s.booleanMsg){
            this.props.history.push('/admin');
            }
            else{
                this.state.err=1;
                this.state.userId='';
                this.state.password='';
                this.state.userType='';
                this.props.history.push('/login');
                this.state.err=0;
            }
        });

        
    }

    cancel(){
        this.props.history.push('/employees');
    }


    render() {
        const err=this.state.err;
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    <h3 className="text-center">Login</h3>
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>Email: </label>
                                            <input placeholder="Email" name="userId" className="form-control" 
                                                value={this.state.userId} onChange={this.changeUserIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
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
                                        <div>
                                            {err ? (
                                                <h6 style={{color: "red"}}>Enter correct credentials</h6>
                                            ) : (
                                                <h4 color="red"></h4>
                                            )}
                                        </div>
                                        <button className="btn btn-success" onClick={this.loginEmp}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default LoginComponent