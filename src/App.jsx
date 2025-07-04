import React, { useState } from "react";
import StudentView from "./pages/StudentView";
import TutorView from "./pages/TutorView";

export default function App() {
  const [role, setRole] = useState("student");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Role: {role.toUpperCase()}</h1>
      <div className="mb-4">
        <button
          className="mr-2 p-2 bg-blue-500 text-white rounded"
          onClick={() => setRole("student")}
        >
          Student View
        </button>
        <button
          className="p-2 bg-green-500 text-white rounded"
          onClick={() => setRole("tutor")}
        >
          Tutor View
        </button>
      </div>
      {role === "student" ? <StudentView /> : <TutorView />}
    </div>
  );
}
