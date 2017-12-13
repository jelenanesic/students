import React from 'react';
import PropTypes from 'prop-types';

import { FaFemale, FaMale } from 'react-icons/fa';

import StudentOptions from '../StudentOptions/StudentOptions';

import './students.scss';

// let temporaryImg = 'http://www.freeiconspng.com/uploads/no-image-icon-13.png';

const SingleStudent = (props) => {

    const { firstName, lastName, attendanceMark, image, gender } = props.student;

    // debugger

    return(
        <div className="SingleStudent col-md-3 col-sm-6">
            <div className="wrapStudent col-md-10 offset-md-1 text-center">
                <img className="studentImg img-responsive" src={image} />
                <p className="studentName">{ firstName + ' ' + lastName }</p>
                <div className="studentGender">
                    {
                        gender === 'female' ?
                            <FaFemale color={'#a52770'} size={20} />  :
                            <FaMale color={'#223f9c'} size={20} />
                    }
                </div>
                <StudentOptions attendanceMark={attendanceMark} />
            </div>
        </div>
    );
};

SingleStudent.propTypes = {
    student: PropTypes.object
};

export default SingleStudent;