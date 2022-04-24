import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function StudentDetailPage() {
  const routeParams = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    async function getStudentDetails() {
      const studentResponse = await axios.get(
        `https://hp-assessment-api.herokuapp.com/hp/character/${routeParams.student_id}`
      );
      setStudent(studentResponse.data);
    }
    getStudentDetails();
  }, []);

  return student ? (
    <div>
      <h2>{student.name}</h2>
      <img src={student.imgUrl} style={{ maxWidth: 300 }} alt={student.name} />
      <p>ID: {student.id}</p>
      <p>BLOOD: {student.blood}</p>
      <p>SPECIES: {student.species}</p>
      <p>PATRONUS: {student.patronus}</p>
      <p>BIRTH DATE: {student.born}</p>
      <p>QUOTE: {student.quote}</p>
      <p>HOUSE NAME{student.house.name}</p>
      <img
        src={student.house.imgUrl}
        style={{ maxWidth: 200 }}
        alt={student.house.name}
      />
      <p>HOUSE ID: {student.houseId}</p>
      <p>HOUSE FOUNDER: {student.house.founder}</p>
      <p>HOUSE ANIMAL: {student.house.animal}</p>
      <p>HOUSE COLORS: {student.house.colors}</p>
      <p>HOUSE GHOST{student.house.ghost}</p>
    </div>
  ) : (
    <p>Loading ...</p>
  );
}

export default StudentDetailPage;
