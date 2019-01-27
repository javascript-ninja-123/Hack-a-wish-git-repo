import React from 'react'
import RegisterForm from '../register/registerForm'



class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirm: "",
        }
    }

    handleChange = evt => {
        const key = evt.target.name
        const val = evt.target.value
        this.setState({
            [key]: val
        })
    }
    render() {
        return (
            <div style={{padding:"250px",backgroundColor:"#0075B8", backgroundSize:"cover" }}>
                <div className="form-control border rounded mx-auto" style={{width: "400px",backgroundColor: "white",height:"400px"}}>
                        <h3 style={{textAlign:"center"}}>Register Page</h3>
                        <hr/>
                    <div className='panel panel-default'>
                    </div>
                    <div className="form-group">
                        <RegisterForm
                            state={this.state}
                            handleChange={this.handleChange}
                            handleClick={this.handleClick}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Register