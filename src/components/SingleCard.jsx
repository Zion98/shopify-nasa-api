import React from "react";
import { dateConv } from "../utils/helper";
import { Card, ListGroup } from "react-bootstrap";
const SingleCard = ({
  rover,
  camera,
  earth_date,
  img_src,
  sol,
  checked,
  id,
  checker,
}) => {
  return (
    <>
      <Card style={{ width: "100%", flexBasis: "40%" }}>
        <Card.Img variant="top" src={img_src} />
        <Card.Body>
          <Card.Title>{rover?.name}</Card.Title>
          <Card.Text>
            Solar Day {sol}, {dateConv(earth_date)}
          </Card.Text>
          <Card.Header>Camera Details</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>* {camera?.full_name}</ListGroup.Item>
            <ListGroup.Item>* {camera?.name}</ListGroup.Item>
          </ListGroup>

          <label class="containerx">
            {checked[id] === true ? "Unlike" : "Like"}
            <input
              type="checkbox"
              checked={checked[id]}
              onChange={() => checker(id)}
            />
            <span class="checkmark"></span>
          </label>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleCard;
