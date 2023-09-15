import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleClickSelect}) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("Courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
      {courses.map((course) => (
        <Course key={course.id} course={course} handleClickSelect={handleClickSelect}></Course>
      ))}
    </div>
  );
};

export default Courses;
