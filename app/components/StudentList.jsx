"use client"

// StudentList.js
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import AddStudentForm from './AddStudentForm';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/students.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStudents(data.students);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (index) => {
    // Your existing edit logic here
  };

  const handleRemove = (index) => {
    // Your existing remove logic here
  };

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
    // You can also send the new student data to your backend/API to update the JSON file
  };

  return (
    <div className="bg-blue-500 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Student List</h1>
      <ul className="list-none p-0">
        {students.map((student, index) => (
          <li key={index} className="mb-8 border-b-2 pb-4">
            <strong>Name:</strong> {`${student.first_name} ${student.last_name}`} <br />
            <strong>Date of Birth:</strong> {student.date_of_birth} <br />
            <strong>Grade Percentage:</strong> {student.current_grade_percentage}%
            <div className="mt-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded mr-4" onClick={() => handleEdit(index)}>Edit</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleRemove(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-4">
        <AddStudentForm onAddStudent={handleAddStudent} />
      </div>
      <div className="bg-gray-200 text-gray-700 p-8 mb-4 text-center">
        <Footer />
      </div>
    </div>
  );
};

export default StudentList;
