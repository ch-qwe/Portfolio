import { Container } from "react-bootstrap";
import styled from "styled-components";

const MyContainer = styled(Container)`
  font-family: "Space Mono", monospace;
  display: flex;
  flex-direction: column;
  max-width: 420px;
  padding: 32px;
  margin: 60px auto;
  border: 1px solid #eee;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.06);

  ol {
    padding-left: 50px;
  }
  li {
    color: #4f4f4f;
    padding-left: 16px;
    margin-top: 24px;
    position: relative;
    font-size: 16px;
    line-height: 20px;

    &:before {
      content: "";
      display: block;
      height: 42px;
      width: 42px;
      border-radius: 50%;
      border: 2px solid #ddd;
      position: absolute;
      top: -12px;
      left: -40px;
    }
  }

  strong {
    color: #292929;
  }

  ol.alternating-colors {
    li:nth-child(odd):before {
      border-color: #0bad02;
    }
    li:nth-child(even):before {
      border-color: #2378d5;
    }
  }
`;

function component() {
  return (
    <MyContainer>
      <strong>Best First-Person Shooters</strong>

      <ol className="alternating-colors">
        <li>
          <strong>Half-Life 2</strong>
          <p>Fight aliens, wear a head crab, learn about gravity</p>
        </li>
        <li>
          <strong>Halo: Combat Evolved</strong>
          <p>Fight aliens, wear an AI, learn about screen peeking siblings</p>
        </li>
        <li>
          <strong>Team Fortress 2</strong>
          <p>Fight non-alien residents, wear hats, learn about teamwork</p>
        </li>
        <li>
          <strong>Tribes</strong>
          <p>Ski, slip, and slide your way to victory</p>
        </li>
      </ol>
    </MyContainer>
  );
}

export default component;
