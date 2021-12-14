import React from "react";
import { Card } from "react-bootstrap";
import "./CardUser.css";

const CardUser = ({ user }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="cardofuser">
        <Card.Body>
          <Card.Title>Name : {user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            User Name :{user.username}
          </Card.Subtitle>
          <Card.Text>
            Phone: {user.phone}
            <br />
            Email : {user.email}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardUser;
