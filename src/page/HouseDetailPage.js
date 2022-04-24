import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import StudentCard from "../components/StudentCard";

function HouseDetailPage() {
  const routeParams = useParams();
  const [house, setHouse] = useState(null);

  useEffect(() => {
    async function getHouseDetails() {
      const houseResponse = await axios.get(
        `https://hp-assessment-api.herokuapp.com/hp/house/${routeParams.house_id}`
      );
      setHouse(houseResponse.data);
    }
    getHouseDetails();
  }, []);

  return house ? (
    <div className="Details">
      <h1>{house.name}</h1>
      <img
        src={house.imgUrl}
        style={{ height: 500, width: 700 }}
        alt={house.name}
      />
      <p>HOUSE ID: {house.id}</p>
      <p>HOUSE FOUNDER: {house.founder}</p>
      <p>HOUSE ANIMAL: {house.animal}</p>
      <p>HOUSE COLORS: {house.colors}</p>
      <p>HOUSE GHOST: {house.ghost}</p>

      <h2>STUDENTS</h2>
      {house.characters.map((student) => (
        <StudentCard key={student.id} {...student} />
      ))}
    </div>
  ) : (
    <p>Loading ...</p>
  );
}

export default HouseDetailPage;
