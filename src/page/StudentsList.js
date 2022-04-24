import { useEffect, useState } from "react";
import StudentCard from "../components/StudentCard";
import axios from "axios";

const StudentsList = () => {
  const [getStudents, setStudents] = useState([]);
  const [getInputText, setInputText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hp-assessment-api.herokuapp.com/hp/characters"
        );

        setStudents(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchData();
  }, []);

  const sortByAlphabet = (a, b) => {
    return a.name.localeCompare(b.name);
  };

  const studentsSorted = [...getStudents].sort(sortByAlphabet);

  return studentsSorted ? (
    <div>
      <h1>HOGWARTS STUDENTS</h1>
      <p>{getInputText}</p>
      <input
        type="text"
        value={getInputText}
        onChange={(event) => setInputText(event.target.value)}
      />

      {studentsSorted
        .filter((student) =>
          student.name.toLowerCase().includes(getInputText.toLowerCase())
        )
        .map((student) => (
          <StudentCard {...student} />
        ))}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default StudentsList;
