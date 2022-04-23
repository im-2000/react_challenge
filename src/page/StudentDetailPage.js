import { useParams } from "react-router-dom";

const StudentDetailPage = () => {
  const routeParams = useParams();
  return <p>{routeParams.student_name}</p>;
};
export default StudentDetailPage;
