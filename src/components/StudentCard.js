import { NavLink } from "react-router-dom";

function StudentCard(props) {
  return (
    <div
      className="StudentCard"
      style={{
        border: "2px solid white",
        marginTop: 60,
        marginLeft: 600,
        marginRight: 600,
      }}
    >
      <img
        className="Image"
        src={props.imgUrl}
        style={{ width: 200, height: 200, borderRadius: 75 }}
        alt={props.name}
      />

      <h2 className="Name"> {props.name}</h2>
      <div className="Description">
        <p>birth date: {props.born}</p>
        <NavLink to={`/house/details/${props.houseId}`}>
          <p> HOUSE ID: {props.houseId} </p>
        </NavLink>

        <NavLink className="NavElement" to={`/details/${props.id}`}>
          <button>read more</button>
        </NavLink>
      </div>
    </div>
  );
}

export default StudentCard;
