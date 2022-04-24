import { NavLink } from "react-router-dom";

function HouseCard(props) {
  return (
    <div
      style={{
        border: "2px solid white",
        marginTop: 60,
        marginLeft: 600,
        marginRight: 600,
      }}
    >
      <h2>{props.name}</h2>
      <img src={props.imgUrl} style={{ maxWidth: 200 }} alt={props.name} />
      <p>HOUSE ID: {props.id}</p>
      <p>HOUSE FOUNDER: {props.founder}</p>
      <p>HOUSE ANIMAL: {props.animal}</p>
      <p>HOUSE COLORS: {props.colors}</p>
      <p>HOUSE GHOST: {props.ghost}</p>
      <p>CREATED AT: {props.createdAt}</p>
      <p>UPDATED AT: {props.updatedAt}</p>

      <NavLink to={`/details/${props.id}`}></NavLink>
    </div>
  );
}

export default HouseCard;
