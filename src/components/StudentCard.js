import { NavLink } from "react-router-dom";

function StudentCard(props) {
  return (
    <div style={{ border: "2px solid white", marginTop: 30 }}>
      <img src={props.imgUrl} style={{ maxWidth: 100 }} alt={props.name} />

      <h2>{props.name}</h2>
      <p>birth date: {props.born}</p>
      <p>house id: {props.houseId}</p>
      <p>house name: {props.house.name}</p>

      <NavLink to={`/details/${props.id}`}>
        <button>read more</button>
      </NavLink>
    </div>
  );
}

export default StudentCard;
