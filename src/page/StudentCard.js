const StudentCard = (props) => {
  return (
    <div className="Student">
      <h1>{props.id}</h1>
      <h1>{props.name}</h1>
      <p>{props.blood}</p>
      <p>{props.species}</p>
      <p>{props.patronus}</p>
      <p>{props.born}</p>
      <p>{props.quote}</p>
      <p>{props.createdAt}</p>
      <p>{props.updatedAt}</p>
      <p>{props.born}</p>
      <p>{props.houseID}</p>
      <p>{props.house.name}</p>
    </div>
  );
};
export default StudentCard;
