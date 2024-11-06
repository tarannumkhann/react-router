import React from "react";
import { useParams } from "react-router-dom";

const DetailsPage = ({ data }) => {
  const { id } = useParams();
  console.log(id, "id");
  console.log(data, "data");

  // Find the specific user using the ID
  const user = data?.find((user) => user.id === parseInt(id));

  console.log(user, "user");
  if (!user) {
    return <div>User is not found</div>;
  }
  return (
    <div className="khan">
      <h1 style={{ color: "green" }}>Details Page</h1>
      <h4 style={{textDecorationLine:'underline'}}>Details for {user.name}</h4>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Contact:</strong> {user.contact}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Address:</strong> {user.address}
      </p>
      
    </div>
  );
};

export default DetailsPage;
