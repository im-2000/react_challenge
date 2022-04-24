import { useEffect, useState } from "react";
import StudentCard from "../components/StudentCard";
import HouseCard from "../components/HouseCard";
import axios from "axios";

const StudentsList = () => {
  const [getStudents, setStudents] = useState([]);
  const [getInputText, setInputText] = useState("");
  const [getHouse, setHouse] = useState([]);

  useEffect(() => {
    const fetchDataStudents = async () => {
      try {
        const responseStudents = await axios.get(
          "https://hp-assessment-api.herokuapp.com/hp/characters"
        );

        setStudents(responseStudents.data);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchDataStudents();
  }, []);

  useEffect(() => {
    const fetchDataHouses = async () => {
      try {
        const responseHouses = await axios.get(
          " https://hp-assessment-api.herokuapp.com/hp/houses"
        );

        setHouse(responseHouses.data);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchDataHouses();
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
