import { Card, Col, Collapse, Container, Image, Row } from 'react-bootstrap';
import styled from 'styled-components';
import icon_html from '../imgs/skills/front/icon_html.png';
import icon_css from '../imgs/skills/front/icon_css.png';
import icon_js from '../imgs/skills/front/icon_js.png';
import icon_ts from '../imgs/skills/front/icon_ts.png';
import icon_react from '../imgs/skills/front/icon_react.png';
import icon_styled from '../imgs/skills/front/icon_styled.png';
import icon_sass from '../imgs/skills/front/icon_sass.png';
import icon_bootstrap from '../imgs/skills/front/icon_bootstrap.png';
import icon_node from '../imgs/skills/back/icon_node.png';
import icon_express from '../imgs/skills/back/icon_express.png';
import icon_hbs from '../imgs/skills/back/icon_hbs.png';
import icon_aws from '../imgs/skills/icon_aws.png';
import { useState } from 'react';

const MyContainer = styled(Container)`
  background-color: khaki;
  padding-bottom: 40px;
`;

const Icons = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  & img {
    width: 64px;
    height: auto;
    max-height: 64px;
    margin: 10px 10px;

    background-color: whitesmoke;
    box-shadow: 4px 4px 6px saddlebrown;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(120%, 120%);
    }
  }

  & span {
    padding: 8px;
    margin: auto 10px;
    box-shadow: 4px 4px 6px saddlebrown;
    border-radius: 20px;

    background-color: aliceblue;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(120%, 120%);
    }
  }
`;

function Component() {
  const [onHtml, setOnHtml] = useState(false);

  return (
    <MyContainer fluid={true}>
      <Container className="h-100 pb-5">
        <Row className="text-center pt-5">
          <h1>
            <b>Skills</b>
          </h1>
        </Row>
        <Row className="text-center m-auto h-100">
          <Col className="col-lg-4 col-12 mt-5">
            <div>
              <h3>FrontEnd</h3>
            </div>
            <Icons>
              <img src={icon_html} alt="html" />
              <img src={icon_css} alt="css" />
              <img src={icon_js} alt="js" />
              <img src={icon_ts} alt="ts" />
              <img src={icon_react} alt="react" />
              <img src={icon_styled} alt="styled" />
              <img src={icon_sass} alt="sass" />
              <img src={icon_bootstrap} alt="bootstrap" />
            </Icons>
          </Col>
          <Col className="col-lg-4 col-12 mt-5">
            <div>
              <h3>BackEnd</h3>
            </div>
            <Icons>
              <img src={icon_node} alt="node" />
              <img src={icon_express} alt="express" />
              <img src={icon_hbs} alt="handlebars" />
            </Icons>
          </Col>
          <Col className="col-lg-4 col-12 mt-5">
            <div>
              <h3>Deployment</h3>
            </div>
            <Icons>
              <img src={icon_aws} alt="aws" />
            </Icons>
          </Col>
          <Col className="col-lg-4 col-12 mt-5">
            <div>
              <h3>Certificate</h3>
            </div>
            <Icons>
              <span>
                <b>정보처리 기사</b>
              </span>
            </Icons>
          </Col>
        </Row>
      </Container>
    </MyContainer>
  );
}

export default Component;
