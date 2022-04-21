import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateStudentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentID: '',
            lastName: '',
            firstName: '',
            course: '',
            year: ''
        };
    }

    componentDidMount() {
        console.log("Print id: " + this.props.match.params.id);
        axios
            .get('http://localhost:8082/api/students/' + this.props.match.params.id)
            .then(res => {
                // this.setState({...this.state, student: res.data})
                this.setState({
                    studentID: res.data.studentID,
                    lastName: res.data.lastName,
                    firstName: res.data.firstName,
                    course: res.data.course,
                    year: res.data.year
                })
            })
            .catch(err => {
                console.log("Error from UpdateStudentInfo");
            })
    };

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
            .put('http://localhost:8082/api/students/' + this.props.match.params.id, data)
            .then(res => {
                this.props.history.push('/show-student/' + this.props.match.params.id);
            })
            .catch(err => {
                console.log("Error in UpdateStudentInfo!");
            })
    };

    render() {
        return (
            <div className='UpdateStudentInfo'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 m-auto'>
                            <br />
                            <Link to="/" className='btn btn-outline-warning float-left'>
                                Show Student List
                            </Link>
                        </div>
                        <div className='col-md-8 m-auto'>
                            <h1 className='display-4 text-center'>Edit Student</h1>
                            <p className='lead text-center'>
                                Update Student's Information
                            </p>
                        </div>
                    </div>

                    <div className="col-md-8 m-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className='form-group'>
                                <label htmlFor="id">Student ID</label>
                                <input
                                    type='text'
                                    placeholder='Student ID'
                                    name="studentID"
                                    className='form-control'
                                    value={this.state.studentID}
                                    onChange={this.onChange}
                                />
                            </div>
                            <br />

                            <div className='form-group'>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    placeholder='Last Name'
                                    name='lastName'
                                    className='form-control'
                                    value={this.state.lastName}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='firstName'>First Name</label>
                                <input
                                    type="text"
                                    placeholder='First Name'
                                    name='firstName'
                                    className='form-control'
                                    value={this.state.firstName}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='course'>Course</label>
                                <input
                                    type="text"
                                    placeholder='Course'
                                    name='course'
                                    className='form-control'
                                    value={this.state.course}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='year'>Year</label>
                                <input
                                    type="text"
                                    placeholder='Year'
                                    name='year'
                                    className='form-control'
                                    value={this.state.year}
                                    onChange={this.onChange}
                                />
                            </div>



                            <button type="submit" className='btn btn-outline-info btn-lg btn-block'>Update Student</button>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
    //
    // //<div className='form-group'>
    // <label htmlFor='year'>Year</label>
    // <input
    //     type ='text'
    //     placeholder = 'Year'
    //     name = 'year'
    //     className = 'form-control'
    //     value = {this.state.year}
    //     onChange ={this.onChange}
    //     />
    //mag kuha na sila sa giinput sa user sa input ang value i set niya based sa katong gi input(this.state) sa input form then 
    //ang value = {this.state.year} kwaon niya ang gi input sa input form kwaon niya ang value og mao na dayon tong value then
    // ang onChange ={this.onChange} i change na dayon niya ang value pag i click ang submit uppdated button since ang vlaue ma change based sa gi input sa user sa input so more like
    // value == input form sa <input
}

export default UpdateStudentInfo;
