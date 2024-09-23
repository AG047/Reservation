import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const ContactHeader = () => {
  return (
    <>
      <div className="contactHeaderBackground">
        <div className="contactHeaderAbs"></div>
        <div>
          <div className="ptop100">Contact Us</div>
          <Row>
            <Col md={6}>
              <Button>Call ME</Button>
            </Col>
            <Col md={6}>
              <Button>Call ME</Button>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Row>
                <Col md={1}>
                  <svg
                    aria-hidden="true"
                    className="e-font-icon-svg e-fas-mail-bulk"
                    viewBox="0 0 576 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z"></path>
                  </svg>
                </Col>
                <Col md={11}>
                  <div className="p-3">
                    <div className="text-start fw-medium pb-3">Email</div>
                    <div className="text-start">
                      For all service and other inquiries, please email us at
                      help@ReservationTeams.com.
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={1}>
                  <svg
                    aria-hidden="true"
                    className="me-2"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="phone-volume"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z"></path>
                  </svg>
                </Col>
                <Col md={11}>
                  <div className="p-3">
                    <div className="text-start fw-medium pb-3">Call</div>
                    <div className="text-start">
                      The best way to reach us for all your needs. Feel free to
                      give us a call at +1 (855) 601-3858.
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ContactHeader;
