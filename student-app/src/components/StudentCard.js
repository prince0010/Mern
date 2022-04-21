import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const StudentCard = (props) => {
    const student = props.student;

    return (
        <div className='card-container'>
            <img src="https://icon-library.com/images/icon-of-a-person/icon-of-a-person-4.jpg" alt="" />
            <div className='desc'>
                <h2>
                    <Link to={`/show-student/${student._id}`}>
                        {student.studentID}
                    </Link>
                </h2>
                <h3>{student.lastName}</h3>
                <p>{student.firstName}</p>
            </div>
        </div>
    )
};

export default StudentCard;
