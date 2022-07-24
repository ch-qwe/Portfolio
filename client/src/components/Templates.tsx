import styled from 'styled-components';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Btn11 } from './Buttons';
import masthead from '../imgs/masthead.jpg';

const MyContainer = styled(Container)`
  & .MyCard {
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 10px 5px 5px rgba(182, 167, 167, 0.2);
    }
  }
`;

const LiveBtn = styled(Btn11)`
  width: fit-content;
  margin: 5px 0;
`;

function component() {
  let arr = [];

  for (let i = 0; i < 12; i++) {
    arr.push(i);
  }

  return (
    <MyContainer fluid={true}>
      <Container className="mt-5">
        <Row className="text-center pt-5">
          <h1>
            <b>Templates</b>
          </h1>
        </Row>
        <Row className="m-5 ps-3">
          <h4>
            <b>사이트 제작에 활용할 템플릿 입니다. </b>
          </h4>
          <hr />
        </Row>
        <Row>
          {arr.map((v, i) => (
            <Col key={i} className="col-lg-4 col-6 mb-5">
              <Card border="light" className="MyCard">
                <Card.Img variant="top" src={masthead} alt="No Image" />
              </Card>
              <LiveBtn>Live Preview</LiveBtn>
            </Col>
          ))}
        </Row>
      </Container>
    </MyContainer>
  );
}
export default component;
