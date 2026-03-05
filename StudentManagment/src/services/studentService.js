import axios from "axios";

const API_URL = "http://localhost:8080/student";

/* =========================
   CREATE
========================= */
export const addStudent = (student) => {
  return axios.post(API_URL, student);
};


/* =========================
   READ - Get All Students
========================= */
export const getAllStudents = () => {
  return axios.get(API_URL);
};



/* =========================
   READ - Get Student By RollNo
========================= */
export const getStudentByRollno = (rollno) => {
   return axios.get(`${API_URL}/${rollno}`);
};

 


/* =========================
   UPDATE - Update Marks
   PUT /student/{rollno}/{marks}
========================= */
export const updateStudentMarks = (rollno, marks) => {
  return axios.put(`${API_URL}/${rollno}/${marks}`);
};

/* =========================
   DELETE - By RequestBody
========================= */
export const deleteStudent = (student) => {
  return axios.delete(API_URL, {
    data: student
  });
};


/* =========================
   DELETE - By RollNo
========================= */
export const deleteStudentByRollno = (rollno) => {
  return axios.delete(`${API_URL}/${rollno}`);
};