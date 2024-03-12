"use client"
import React, { useState, useEffect } from "react";
import Footer from "@/app/components/Footer.jsx";
import NavBar from "../app/components/NavBar";
import StudentList from "@/app/components/StudentList";
import AddStudentForm from "./components/AddStudentForm";

export default function Home() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5001/students');
      const data = await response.json();
      setStudents(data);
    };
    fetchData();
  }, []);

  const handleAddOrEditStudent = async (studentData) => {
    if (editStudent) {
      // Edit mode
      const response = await fetch(`http://localhost:5001/students/${editStudent.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentData),
      });
      if (response.ok) {
        setStudents(students.map(student => student.id === editStudent.id ? { ...student, ...studentData } : student));
        setEditStudent(null); // Reset edit mode
      }
    } else {
      // Add new student mode
      const response = await fetch('http://localhost:5001/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentData),
      });
      if (response.ok) {
        const newStudent = await response.json();
        setStudents([...students, newStudent]);
      }
    }
  };

  const handleEdit = (studentId) => {
    const studentToEdit = students.find(student => student.id === studentId);
    setEditStudent(studentToEdit);
  };

  const handleRemove = async (studentId) => {
    try {
      const response = await fetch(`http://localhost:5001/students/${studentId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setStudents(students.filter(student => student.id !== studentId));
    } catch (error) {
      console.error("Error removing student:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow flex flex-row p-4 space-x-4">
        <div className="w-1/2">
          <AddStudentForm onAddStudent={handleAddOrEditStudent} editStudent={editStudent} />
        </div>
        <div className="w-1/2 overflow-auto">
          <StudentList students={students} onEdit={handleEdit} onRemove={handleRemove} />
        </div>
      </div>
      <Footer />
    </div>
  );
}