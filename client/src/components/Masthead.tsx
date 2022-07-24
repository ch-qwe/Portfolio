import { Container } from "react-bootstrap";
import styled from "styled-components";
import img_masthead from "../imgs/masthead.jpg";

const MyContainer = styled(Container)`
  height: calc(100vh - 56px);
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url(${img_masthead});
  background-size: cover;
  background-repeat: no-repeat;

  text-align: center;
  color: white;
`;

const Intro = styled.div`
  text-align: center;
  margin: auto;

  & p {
    line-height: 1.6;
  }
`;

const Line = styled.div`
  width: 50px;
  background-color: white;
  height: 3px;
  margin: 20px auto;
`;

function component() {
  return (
    <MyContainer fluid={true}>
      <Container className="h-100 d-flex align-items-center">
        <Intro>
          <h1>웹 개발자 민철홍</h1>
          <Line />
          <h4>
            <p>
              <span>
                안녕하세요.
                <br />
              </span>
              <span>
                성장을 위해 끊임없이 고민하는 개발자 입니다.
                <br />
              </span>
              <span>
                부족한 부분을 인지하고 해결책을 찾으려는 자발성이 저의
                장점입니다.
              </span>
            </p>
          </h4>
        </Intro>
      </Container>
    </MyContainer>
  );
}

export default component;

/*
RESPONSIVE TEMPLATES
Design & Development
*/

/*
HIGH QUALITY CODE
HTML5 & CSS3
*/
