import React, {PureComponent} from 'react';
import styled from 'styled-components';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {compose} from 'redux'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import Header from '../header/header'

const LinkContainer = styled.div`
    margin:1rem 0;
`,
SignUpContainer = styled.div`
margin:2rem 5rem;
`

class Login extends PureComponent{
    state ={
        email:"",
        password:''
    }
    onChange = ({target}) => this.setState({[target.name]: target.value})

    onClick = async (e) => {
        try{
            e.preventDefault()
            console.log('clicked')
            await Firebase.auth.createUserWithEmailAndPassword(this.state.email,this.state.password)
            this.props.history.push('/login')
        }
        catch(err){
            console.log(err)
        }
    } 
    render(){
        return(
            <div>

                <Header/>
            <SignUpContainer>
            <h2>Login</h2>
            <Form>
            <Form.Field>
                <label>Email</label>
                <input placeholder='email' type="email" name="email" onChange={this.onChange} value={this.state.email}/>
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input placeholder='password' type="password" name="password" onChange={this.onChange} value={this.state.password}/>
                </Form.Field>
                <Button fluid type='submit' onClick={this.onClick}>Login</Button>
            </Form>
            <LinkContainer>
                <Button fluid><Link to="/signup">Sign up</Link></Button>
            </LinkContainer>
            </SignUpContainer>
            </div>
        )
    }
}


export default compose(
    withRouter
)(Login);