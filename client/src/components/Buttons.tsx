import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Base = styled.button`
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  margin: 20px;
`;

export const Btn1 = styled(Base)`
  background: rgb(6, 14, 131);
  background: linear-gradient(0deg, rgba(6, 14, 131, 1) 0%, rgba(12, 25, 180, 1) 100%);
  border: none;

  &:hover {
    background: rgb(0, 3, 255);
    background: linear-gradient(0deg, rgba(0, 3, 255, 1) 0%, rgba(2, 126, 251, 1) 100%);
  }
`;

export const Btn2 = styled(Base)`
  background: rgb(96, 9, 240);
  background: linear-gradient(0deg, rgba(96, 9, 240, 1) 0%, rgba(129, 5, 240, 1) 100%);
  border: none;

  &:hover {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5), -4px -4px 6px 0 rgba(116, 125, 136, 0.5),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2), inset 4px 4px 6px 0 rgba(0, 0, 0, 0.4);
  }
`;

export const Btn3 = styled(Base)`
  background: rgb(0, 172, 238);
  background: linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, rgba(2, 126, 251, 1) 100%);
  width: 130px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;

  & span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    right: 0;
    top: 0;
    background: rgba(2, 126, 251, 1);
    transition: all 0.3s ease;
  }
  &:before {
    height: 0%;
    width: 2px;
  }
  &:after {
    width: 0%;
    height: 2px;
  }
  &:hover {
    background: transparent;
    box-shadow: none;
  }
  &:hover:before {
    height: 100%;
  }
  &:hover:after {
    width: 100%;
  }
  & span:hover {
    color: rgba(2, 126, 251, 1);
  }
  & span:before,
  & span:after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    background: rgba(2, 126, 251, 1);
    transition: all 0.3s ease;
  }
  & span:before {
    width: 2px;
    height: 0%;
  }
  & span:after {
    width: 0%;
    height: 2px;
  }
  & span:hover:before {
    height: 100%;
  }
  & span:hover:after {
    width: 100%;
  }
`;

export const Btn4 = styled(Base)`
  background-color: #4dccc6;
  background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
  line-height: 42px;
  padding: 0;
  border: none;

  &:hover {
    background-color: #89d8d3;
    background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
  }
  & span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  &:before,
  &:after {
    position: absolute;
    content: '';
    right: 0;
    top: 0;
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.9), -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.9), inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
    transition: all 0.3s ease;
  }
  &:before {
    height: 0%;
    width: 0.1px;
  }
  &:after {
    width: 0%;
    height: 0.1px;
  }
  &:hover:before {
    height: 100%;
  }
  &:hover:after {
    width: 100%;
  }
  & span:before,
  & span:after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.9), -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.9), inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
    transition: all 0.3s ease;
  }
  & span:before {
    width: 0.1px;
    height: 0%;
  }
  & span:after {
    width: 0%;
    height: 0.1px;
  }
  & span:hover:before {
    height: 100%;
  }
  & span:hover:after {
    width: 100%;
  }
`;

export const Btn5 = styled(Base)`
  width: 130px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
  background: rgb(255, 27, 0);
  background: linear-gradient(0deg, rgba(255, 27, 0, 1) 0%, rgba(251, 75, 2, 1) 100%);

  &:hover {
    color: #f0094a;
    background: transparent;
    box-shadow: none;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #f0094a;
    box-shadow: -1px -1px 5px 0px #fff, 7px 7px 20px 0px #0003, 4px 4px 5px 0px #0002;
    transition: 400ms ease all;
  }
  &:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  &:hover:before,
  &:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
`;

export const Btn6 = styled(Base)`
  background: rgb(247, 150, 192);
  background: radial-gradient(circle, rgba(247, 150, 192, 1) 0%, rgba(118, 174, 241, 1) 100%);
  line-height: 42px;
  padding: 0;
  border: none;

  & span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  &:before,
  &:after {
    position: absolute;
    content: '';
    height: 0%;
    width: 1px;
    box-shadow: -1px -1px 20px 0px rgba(255, 255, 255, 1), -4px -4px 5px 0px rgba(255, 255, 255, 1),
      7px 7px 20px 0px rgba(0, 0, 0, 0.4), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  }
  &:before {
    right: 0;
    top: 0;
    transition: all 500ms ease;
  }
  &:after {
    left: 0;
    bottom: 0;
    transition: all 500ms ease;
  }
  &:hover {
    background: transparent;
    color: #76aef1;
    box-shadow: none;
  }
  &:hover:before {
    transition: all 500ms ease;
    height: 100%;
  }
  &:hover:after {
    transition: all 500ms ease;
    height: 100%;
  }
  & span:before,
  & span:after {
    position: absolute;
    content: '';
    box-shadow: -1px -1px 20px 0px rgba(255, 255, 255, 1), -4px -4px 5px 0px rgba(255, 255, 255, 1),
      7px 7px 20px 0px rgba(0, 0, 0, 0.4), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  }
  & span:before {
    left: 0;
    top: 0;
    width: 0%;
    height: 0.5px;
    transition: all 500ms ease;
  }
  & span:after {
    right: 0;
    bottom: 0;
    width: 0%;
    height: 0.5px;
    transition: all 500ms ease;
  }
  & span:hover:before {
    width: 100%;
  }
  & span:hover:after {
    width: 100%;
  }
`;

export const Btn7 = styled(Base)`
  background: linear-gradient(0deg, rgba(255, 151, 0, 1) 0%, rgba(251, 75, 2, 1) 100%);
  line-height: 42px;
  padding: 0;
  border: none;

  & span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  &:before,
  &:after {
    position: absolute;
    content: '';
    right: 0;
    bottom: 0;
    background: rgba(251, 75, 2, 1);
    box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9), -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
      7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }
  &:before {
    height: 0%;
    width: 2px;
  }
  &:after {
    width: 0%;
    height: 2px;
  }
  &:hover {
    color: rgba(251, 75, 2, 1);
    background: transparent;
  }
  &:hover:before {
    height: 100%;
  }
  &:hover:after {
    width: 100%;
  }
  & span:before,
  & span:after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    background: rgba(251, 75, 2, 1);
    box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9), -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
      7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }
  & span:before {
    width: 2px;
    height: 0%;
  }
  & span:after {
    height: 2px;
    width: 0%;
  }
  & span:hover:before {
    height: 100%;
  }
  & span:hover:after {
    width: 100%;
  }
`;

export const Btn8 = styled(Base)`
  background-color: #f0ecfc;
  background-image: linear-gradient(315deg, #f0ecfc 0%, #c797eb 74%);
  line-height: 42px;
  padding: 0;
  border: none;

  & span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  &:before,
  &:after {
    position: absolute;
    content: '';
    right: 0;
    bottom: 0;
    background: #c797eb;
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5), -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5), inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
    transition: all 0.3s ease;
  }
  &:before {
    height: 0%;
    width: 2px;
  }
  &:after {
    width: 0%;
    height: 2px;
  }
  &:hover:before {
    height: 100%;
  }
  &:hover:after {
    width: 100%;
  }
  &:hover {
    background: transparent;
  }
  & span:hover {
    color: #c797eb;
  }
  & span:before,
  & span:after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    background: #c797eb;
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5), -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5), inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
    transition: all 0.3s ease;
  }
  & span:before {
    width: 2px;
    height: 0%;
  }
  & span:after {
    height: 2px;
    width: 0%;
  }
  & span:hover:before {
    height: 100%;
  }
  & span:hover:after {
    width: 100%;
  }
`;

export const Btn9 = styled(Base)`
  border: none;
  transition: all 0.3s ease;
  overflow: hidden;
  z-index: 2;

  &:after {
    position: absolute;
    content: ' ';
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1fd1f9;
    background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
    transition: all 0.3s ease;
  }

  &:hover {
    background: transparent;
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5), -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5), inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
    color: #fff;
  }

  &:hover:after {
    -webkit-transform: scale(2) rotate(180deg);
    transform: scale(2) rotate(180deg);
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5), -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5), inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
  }
`;

export const Btn10 = styled(Base)`
  background: rgb(22, 9, 240);
  background: linear-gradient(0deg, rgba(22, 9, 240, 1) 0%, rgba(49, 110, 244, 1) 100%);
  color: #fff;
  border: none;
  transition: all 0.3s ease;
  overflow: hidden;
  z-index: 2;

  &:after {
    position: absolute;
    content: ' ';
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
  }
  &:hover {
    color: #fff;
    border: none;
    background: transparent;
  }
  &:hover:after {
    background: rgb(0, 3, 255);
    background: linear-gradient(0deg, rgba(2, 126, 251, 1) 0%, rgba(0, 3, 255, 1) 100%);
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

export const Btn11 = styled(Base)`
  border: none;
  background: rgb(251, 33, 117);
  background: linear-gradient(0deg, rgba(251, 33, 117, 1) 0%, rgba(234, 76, 137, 1) 100%);
  color: #fff;
  overflow: hidden;

  &:hover {
    text-decoration: none;
    color: #fff;
  }
  &:before {
    position: absolute;
    content: '';
    display: inline-block;
    top: -180px;
    left: 0;
    width: 30px;
    height: 100%;
    background-color: #fff;
    animation: shiny-btn1 3s ease-in-out infinite;
  }
  &:hover {
    opacity: 0.7;
  }
  &:active {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3), -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2), inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
  }

  @keyframes shiny-btn1 {
    0% {
      -webkit-transform: scale(0) rotate(45deg);
      opacity: 0;
    }
    80% {
      -webkit-transform: scale(0) rotate(45deg);
      opacity: 0.5;
    }
    81% {
      -webkit-transform: scale(4) rotate(45deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(50) rotate(45deg);
      opacity: 0;
    }
  }
`;

export const Btn12 = styled(Base)`
  position: relative;
  right: 20px;
  bottom: 20px;
  border: none;
  box-shadow: none;
  width: 130px;
  height: 40px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;

  & span {
    background: rgb(0, 172, 238);
    background: linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, rgba(2, 126, 251, 1) 100%);
    display: block;
    position: absolute;
    width: 130px;
    height: 40px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin: 0;
    text-align: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  & span:nth-child(1) {
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    -webkit-transform: rotateX(90deg);
    -moz-transform: rotateX(90deg);
    transform: rotateX(90deg);
    -webkit-transform-origin: 50% 50% -20px;
    -moz-transform-origin: 50% 50% -20px;
    transform-origin: 50% 50% -20px;
  }
  & span:nth-child(2) {
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: 50% 50% -20px;
    -moz-transform-origin: 50% 50% -20px;
    transform-origin: 50% 50% -20px;
  }
  &:hover span:nth-child(1) {
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }
  &:hover span:nth-child(2) {
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    color: transparent;
    -webkit-transform: rotateX(-90deg);
    -moz-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
  }
`;

export const Btn13 = styled(Base)`
  background-color: #89d8d3;
  background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
  border: none;
  z-index: 1;

  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: 5px;
    background-color: #4dccc6;
    background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    transition: all 0.3s ease;
  }
  &:hover {
    color: #fff;
  }
  &:hover:after {
    top: 0;
    height: 100%;
  }
  &:active {
    top: 2px;
  }
`;

export const Btn14 = styled(Base)`
  background: rgb(255, 151, 0);
  border: none;
  z-index: 1;

  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 5px;
    background-color: #eaf818;
    background-image: linear-gradient(315deg, #eaf818 0%, #f6fc9c 74%);
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  &:hover {
    color: #000;
  }
  &:hover:after {
    top: auto;
    bottom: 0;
    height: 100%;
  }
  &:active {
    top: 2px;
  }
`;

export const Btn15 = styled(Base)`
  background: #b621fe;
  border: none;
  z-index: 1;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: #663dff;
    border-radius: 5px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  &:hover {
    color: #fff;
  }
  &:hover:after {
    left: 0;
    width: 100%;
  }
  &:active {
    top: 2px;
  }
`;

export const Btn16 = styled(Base)`
  border: none;
  color: #000;
  z-index: 2;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    direction: rtl;
    z-index: -1;
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    transition: all 0.3s ease;
  }

  &:hover {
    color: #000;
  }

  &:hover:after {
    left: auto;
    right: 0;
    width: 100%;
  }

  &:active {
    top: 2px;
  }
`;

const MyContainer = styled(Container)`
  background: #e0e5ec;
  font-size: 12px;
`;

function component() {
  return (
    <MyContainer fluid={true}>
      <Row className="text-center pt-5">
        <h1>
          <b>Buttons</b>
        </h1>
      </Row>
      <Row className="m-5 ps-3">
        <h4>
          <b>사이트 제작에 활용할 버튼 디자인 입니다. </b>
        </h4>
        <hr />
      </Row>
      <Container className="d-flex flex-wrap justify-content-center">
        <Btn1>Read More</Btn1>
        <Btn2>Read More</Btn2>
        <Btn3>
          <span>Read More</span>
        </Btn3>
        <Btn4>
          <span>Read More</span>
        </Btn4>
        <Btn5>
          <span>Read More</span>
        </Btn5>
        <Btn6>
          <span>Read More</span>
        </Btn6>
        <Btn7>
          <span>Read More</span>
        </Btn7>
        <Btn8>
          <span>Read More</span>
        </Btn8>
        <Btn9>Read More </Btn9>
        <Btn10>Read More</Btn10>
        <Btn11>
          Read More<div></div>
        </Btn11>
        <Btn12>
          <span>Click!</span>
          <span>Read More</span>
        </Btn12>
        <Btn13>Read More</Btn13>
        <Btn14>Read More</Btn14>
        <Btn15>Read More</Btn15>
        <Btn16>Read More</Btn16>
      </Container>
    </MyContainer>
  );
}
export default component;
