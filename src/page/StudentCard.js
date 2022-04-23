const StudentCard = (props) => {
  return (
    <div className="Student">
      <h1>{props.id}</h1>
      <h1>{props.name}</h1>
      <h2>{props.house}</h2>
      <h3>{props.houseId}</h3>
    </div>
  );
};
export default StudentCard;
