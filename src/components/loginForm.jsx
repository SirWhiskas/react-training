import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './common/input';

class LoginForm extends Component {
    // username = React.createRef(); Don't use refs if you don't have to
    state = {
        account: { username: '', password: '' },
        errors: {}
    }; 

    scheme = {
        username: Joi.string().required(),
        password: Joi.string().required()
    };

    validate = () => {
        const errors = {};

        const { account } = this.state;
        if (account.username.trim() === '')
            errors.username = 'Username is required';
        if (account.password.trim() === '')
            errors.password = 'Password is required';

        return Object.keys(errors).length === 0 ? null : errors;
    };

    validateProperty = ({ name, value }) => {
        if (name === 'username') {
            if (value.trim() === '') return 'Username is required.';
            // ...
        }
        if (name === 'password') {
            if (value.trim() === '') return 'Password is required.';
            // ...
        }
    };

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        // const username = this.username.current.value;
        console.log('Submitted');
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account} // Cloning
        account[input.name] = input.value;
        this.setState({ account, errors });
    };

    render() { 
        const { account, errors } = this.state;

        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        name="username" 
                        label="Username" 
                        value={account.username} 
                        error={errors.username}
                        onChange={this.handleChange} 
                    />
                    <Input 
                        name="password" 
                        label="Password"
                        value={account.password}
                        error={errors.password}
                        onChange={this.handleChange}
                    />
                    <button className="bt btn-primary">Login</button>
                </form>
            </div>
         );
    }
}
 
export default LoginForm;