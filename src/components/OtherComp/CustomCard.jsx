import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import CallNowButton from "./CallNowButton";

const CustomCard = ({
  cardImage = "/twoPeopleLaugh.jpg",
  cardTitle,
  cardText,
  customClass = "",
  customClassTitle = "",
  customClassText = "",
}) => {
  return (
    <>
      <Card className="h-100">
        <div className="d-flex justify-content-center">
          <Card.Img
            className={`mw300 ${customClass}`}
            variant="top"
            src={cardImage}
          />
        </div>
        <Card.Body className={`text-center`}>
          <Card.Title
            className={`fs-5 text-capitalize fw-bolder mb-3${customClassTitle}`}
          >
            {cardTitle}
          </Card.Title>
          <div className="d-flex justify-content-center mb-3">
            <div className="blueline"></div>
            <div className="redline"></div>
          </div>
          <Card.Text
            className={`mb-4 ${customClassText}`}
            style={{ lineHeight: "1.4" }}
          >
            {cardText}
          </Card.Text>
          <div className="d-flex justify-content-center my-4">
            <CallNowButton showNumber={false} message=" US NOW" />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CustomCard;
