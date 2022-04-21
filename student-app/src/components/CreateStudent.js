import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class CreateStudent extends Component {
    constructor() {
        super();
        this.state = {
            studentID: '',
            lastName: '',
            firstName: '',
            course: '',
            year: ''
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const data = {
            studentID: this.state.studentID,
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            course: this.state.course,
            year: this.state.year
        };

        axios
            .post('http://localhost:8082/api/students', data)
            .then(res => {
                this.setState({
                    studentID: '',
                    lastName: '',
                    firstName: '',
                    course: '',
                    year: '',
                    image: ''
                })
                this.props.history.push('/');
            })
            .catch(err => {
                console.log("Error in CreateStudent! " + err);
            })
    };

    render() {
        return (
            <div className='CreateStudent'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 m-auto'>
                            <br />
                            <Link to="/" className='btn btn-outline-warning float-left'>
                                Show Student List
                            </Link>
                        </div>
                        <div className='col-md-8 m-auto'>
                            <h1 className='display-4 text center'>Add Student</h1>
                            <p className='lead text-center'>
                                Create new student
                            </p>

                            <form noValidate onSubmit={this.onSubmit}>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Student ID'
                                        name='studentID'
                                        className='form-control'
                                        value={this.state.studentID}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <br />

                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Last Name'
                                        name='lastName'
                                        className='form-control'
                                        value={this.state.lastName}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='First Name'
                                        name='firstName'
                                        className='form-control'
                                        value={this.state.firstName}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Course'
                                        name='course'
                                        className='form-control'
                                        value={this.state.course}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Year'
                                        name='year'
                                        className='form-control'
                                        value={this.state.year}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <input
                                    type="submit"
                                    className="btn btn-outline-warning btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateStudent;
