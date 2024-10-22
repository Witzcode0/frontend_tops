import { useParams } from "react-router-dom";

function ServiceDetail() {
  const { id } = useParams();

  return (
    <div>
      <h3>Service Detail for Service {id}</h3>
      <p>Details about service {id}...</p>
    </div>
  );
}

export default ServiceDetail;
