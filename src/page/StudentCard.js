const StudentCard = (props) => {
  return (
    <div className="Student">
      <h1>{props.id}</h1>
      <h1>{props.name}</h1>
      <p>{props.born}</p>
      <p>{props.houseID}</p>
      <p>{props.house.name}</p>
    </div>
  );
};
export default StudentCard;
