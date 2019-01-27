import React from 'react'
import TextInput from '../login/textInput'
import SubmitButton from './submitButton'

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email: "",
            password: ""
        }
    }

    handleChange = evt => {
        const key = evt.target.name
        const val = evt.target.value
        this.setState({
            [key]:val
        })
    }
    render() {
        return (
            <div className="loginForm" style={{padding:"300px",backgroundColor:"#0075B8", backgroundSize:"cover" }}>
                <div className = "col-md-10 border rounded mx-auto" style={{width: "900px",backgroundColor: "white"}}>
                    <h2 className="mt-4" style={{textAlign:"center"}}>Make A Wish Login</h2>
                    <hr/>
                    <div className="col-md-6 mx-auto" style={{width: "400px"}}>
                        <TextInput label="Email" id="email" type="email" val={this.state.email} handleChange={this.handleChange}/>
                        <TextInput label="Password" id="password" type="password" val={this.state.password} handleChange={this.handleChange}/>
                        <div className="row">
                         <SubmitButton className="btn btn-primary mt-2 mb-2 ml-3" label="Log In" onClick={this.logIn}/>   
                         <p className="mt-2 ml-3">or <button className="btn btn-link"onClick={this.goToRegister}>Sign up</button> </p>                        
                        </div>
                    </div>            
                </div>
            </div>
        )
    }

}