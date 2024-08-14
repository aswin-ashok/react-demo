import React from "react";
import { Card, Button } from "react-bootstrap";


const BootCards = () => {
  return (
    <Card style={{ width: "18rem" }} className="mt-5">
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2023/11/02/09/09/healthy-8360076_640.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success">Buy Now</Button>
      </Card.Body>

      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2023/11/02/09/09/healthy-8360076_640.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success">Buy Now</Button>
      </Card.Body>

      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2023/11/02/09/09/healthy-8360076_640.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success">Buy Now</Button>
      </Card.Body>
    </Card>
  );
};

export default BootCards;
