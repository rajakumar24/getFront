import React, { useEffect } from "react";
import "./style.css";
import Aos from "aos";
import "../../../../../../node_modules/aos/dist/aos.css";
import { Jumbotron, Container } from "react-bootstrap";
export default function LeftCardTwo() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="row">
      <div className="col-md-6">
        <Jumbotron fluid className="Jumbo-container" data-aos="fade-right">
          <Container>
            <div className="text-center card-headings mb-3">
              <h1 className="text-center about-cards-headding-color">
                Get Right Property
              </h1>
              <small>
                <i>CEO- GET RIGHT ROPERTY</i>
              </small>
            </div>
            <p>
              <i>
                {" "}
                This is a modified jumbotron that occupies the entire horizontal
                space of its parent.{" "}
              </i>
            </p>
          </Container>
        </Jumbotron>
      </div>
      <div className="col-md-6"></div>
    </div>
  );
}
