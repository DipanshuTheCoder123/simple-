import axios from "axios";

const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await axios.post(
    "http://localhost:8080/student",
    student
  );

  console.log(response.data);
  alert("Student Added Successfully!");
};