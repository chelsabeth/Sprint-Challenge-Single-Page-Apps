import React from "react";
import {
    Col, 
    Card,
    CardText,
    CardTitle, 
    CardImg
} from "reactstrap";

function CharacterCard(props) {
  return (
    <Col xs="6">
     <Card outline color="warning">
        <CardImg src={props.image} alt="character" />
        <CardTitle>Name: {props.name}</CardTitle>
        <CardText>Species: {props.species}</CardText>
     </Card>
    </Col>
  );
}

export default CharacterCard;
