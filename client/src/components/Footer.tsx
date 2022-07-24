import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const MyContainer = styled(Container)`
  height: 20rem;

  .footer-social-links {
    & li {
      list-style-type: none;
      float: left;
      margin: 1rem;
      cursor: pointer;
    }

    & li a:hover:after {
      opacity: 1;
      transform: translateY(0);
    }

    & li a:after {
      content: '';
      display: block;
      width: inherit;
      height: 1px;
      background: #fe8869;
      opacity: 0;
      transform: translateY(5px);
      transition: all 0.3s ease;
    }
  }
`;

function component() {
  return (
    <MyContainer fluid={true} className="bg-light mb-5">
      <Container className="h-100 d-flex flex-column justify-content-center align-items-center">
        <Row className="d-flex justify-content-center">
          <ul className="footer-social-links">
            <li>
              <a href="#facebook">BLOG</a>
            </li>
            <li>
              <a href="#facebook">GITHUB</a>
            </li>
            <li>
              <a href="twitter">LINKEDIN</a>
            </li>
            <li>
              <a href="#facebook">FACEBOOK</a>
            </li>
          </ul>
        </Row>
        <Row className="d-flex justify-content-center">
          <span>made by Min Cheol Hong.</span>
        </Row>
      </Container>
    </MyContainer>
  );
}
export default component;
