import React from "react";

import Footer from "@/app/components/Footer.jsx";
import NavBar from "../app/components/NavBar";
import StudentList from "@/app/components/StudentList";
import AddStudentForm from "./components/AddStudentForm";



// export default function Home() {
//   return (
//     <main >
//       <NavBar/>
//       <StudentList/>
//     </main>
//   );
// }

export default function Home(){
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow flex flex-row p-4 space-x-4">
        <div className="w-1/2">
          <AddStudentForm/>
        </div>
        <div className="w-1/2 overflow-auto">  
          <StudentList/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}