import React from "react";
import Footer from "@/app/components/Footer.jsx";
import NavBar from "../app/components/NavBar";
import StudentList from "@/app/components/StudentList";

export default function Home() {
    return (
        <main >
        <NavBar/>
        <StudentList/>
        </main>
    );
    }