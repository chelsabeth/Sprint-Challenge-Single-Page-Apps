import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody, 
    CardTitle
} from "reactstrap";

const CharacterCard = (props) => {
  return (
    <div>
     <Card outline color="warning">
        <CardImg top width="25%" src={props.image} alt="character" />
        <CardBody>
        <CardTitle>Name: {props.name}</CardTitle>
        <CardText>Species: {props.species}</CardText>
      </CardBody>
     </Card>
    </div>
  );
}

export default CharacterCard;
