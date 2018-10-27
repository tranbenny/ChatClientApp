import axios from 'axios';
import { Component } from 'react';
import * as React from 'react';
import { Redirect } from 'react-router-dom';

interface ILoginState {
    userName: string,
    password: string,
    isLoggedIn: boolean
}

class Login extends Component<object, ILoginState> {
    
    constructor(props: object) {
        super(props);
        // what does this do? 
        this.login = this.login.bind(this);
        this.updateUserName = this.updateUserName.bind(this);
        this.updatePassword = this.updatePassword.bind(this);

        this.state = {
            isLoggedIn: false,
            password: '',
            userName: '',
        }
    }

    public updateUserName(inputUpdateEvent: any) {
        this.setState({
            userName: inputUpdateEvent.target.value
        });
    }

    public updatePassword(inputUpdateEvent: any) {
        this.setState({
            password: inputUpdateEvent.target.value
        });
    }

    public login(submitEvent: any) {
        submitEvent.preventDefault();
        axios.post('http://localhost:3000/login', {
            'password': this.state.password,
            'user': this.state.userName,
        })
        .then((response: any) => {
            this.setState({isLoggedIn: true})
        });
    }

    public render() {
        // const { from }= this.props.location.state || '/';
        const { isLoggedIn } = this.state; 
        if (isLoggedIn === true) {
            return <Redirect to='localhost:3000' />
        }
        return (
            <div className="col-md-6" id="login_box">
                <h1>Login</h1>
                <form onSubmit={this.login}>
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                            className="form-control" 
                            id="login_username" 
                            placeholder="Enter username" 
                            value={this.state.userName}
                            onChange={this.updateUserName} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="login_password" 
                            placeholder="Password" 
                            value={this.state.password}
                            onChange={this.updatePassword} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;
