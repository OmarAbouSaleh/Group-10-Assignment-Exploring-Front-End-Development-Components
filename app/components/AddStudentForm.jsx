// AddStudentForm.jsx
"use client"
import React, { useState, useEffect } from 'react';

const AddStudentForm = ({ onAddStudent, editStudent }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [grade, setGrade] = useState('');

  // Effect to populate form when editing a student
  useEffect(() => {
    if (editStudent) {
      setFirstName(editStudent.first_name);
      setLastName(editStudent.last_name);
      setDob(editStudent.date_of_birth);
      setGrade(editStudent.current_grade_percentage.toString());
    }
  }, [editStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = {
      first_name: firstName,
      last_name: lastName,
      date_of_birth: dob,
      current_grade_percentage: parseFloat(grade),
    };
  
    if (editStudent) {
      onAddStudent({ ...studentData, id: editStudent.id });
    } else {
      onAddStudent(studentData); 
    }
  
    // Reset form fields
    setFirstName('');
    setLastName('');
    setDob('');
    setGrade('');
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grade Percentage</label>
        <input
          type="number"
          id="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          placeholder="Grade Percentage"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          {editStudent ? 'Update Student' : 'Add Student'}
        </button>
      </div>
    </form>
  );
};

export default AddStudentForm;