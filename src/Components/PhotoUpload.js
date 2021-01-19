import React from 'react'
import { Card,Button } from 'react-bootstrap';
const PhotoUpload = () => {
    return (
        <div>
        <Card style={{ width: '48rem' }}>
        <Card.Img variant="top" height="300vh"  src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button className="btn-info">Go somewhere</Button>
        </Card.Body>
      </Card>
        </div>
    )
}

export default PhotoUpload
