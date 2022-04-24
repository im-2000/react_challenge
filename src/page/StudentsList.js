import { useEffect, useState } from "react";
import StudentCard from "../components/StudentCard";
import HouseCard from "../components/HouseCard";
import axios from "axios";

const StudentsList = () => {
  const [getStudents, setStudents] = useState([]);
  const [getInputText, setInputText] = useState("");
  const [getHouse, setHouse] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState("0");

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
    <div className="List">
      <h1>HOGWARTS STUDENTS</h1>
      <p>{getInputText}</p>
      <input
        type="text"
        value={getInputText}
        onChange={(event) => setInputText(event.target.value)}
      />

      <label
        className="SELECTOR
      "
        htmlFor="search by house"
      >
        search by house:
      </label>
      <select
        onChange={(event) => setSelectedHouse(event.target.value)}
        name="search by house"
        id=""
      >
        <option value="0">All</option>
        {getHouse.map((house) => (
          <option value={house.id}>{house.name}</option>
        ))}
      </select>

      {studentsSorted
        .filter(
          (student) =>
            student.houseId === parseInt(selectedHouse) ||
            parseInt(selectedHouse) === 0
        )
        .filter((student) =>
          student.name.toLowerCase().includes(getInputText.toLowerCase())
        )
        .map((student) => (
          <StudentCard key={student.id} {...student} />
        ))}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default StudentsList;
