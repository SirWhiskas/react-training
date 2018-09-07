import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getGenres } from '../services/fakeGenreService';

class MovieNewForm extends Form {
    state = {
        data: { title: '', genre: '', numberInStock: '', rate: '' },
        errors: {}
    };

    schema = {
        title: Joi.string().required().label('Title'),
        numberInStock: Joi.number().integer().min(1).max(100),
        rate: Joi.number().min(0).max(10)
    };

    doSubmit = () => {
        console.log('test');
    };

    render() {
        return (
            <div>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title')}
                    {this.renderSelect('genre', 'Genre', getGenres())}
                    {this.renderInput('numberInStock', 'Number in Stock', 'number')}
                    {this.renderInput('rate', 'Rate')}
                    {this.renderButton('Login')}
                </form>
            </div>
        );
    }
}

export default MovieNewForm;