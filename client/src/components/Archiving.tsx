import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import naverBlog from '../imgs/archiving/naverBlog.png';
import git from '../imgs/archiving/git.png';
import ArchivingCard from './elements/ArchivingCard';

const MyContainer = styled(Container)`
  background: linear-gradient(90deg, #131417, #2f313a 35% 65%, #131417);
`;

function component() {
  return (
    <MyContainer fluid={true}>
      <Container className="pb-5">
        <Row className="text-center py-5">
          <h1>
            <b>Archiving</b>
          </h1>
        </Row>
        <Row className="d-flex flex-row justify-content-center">
          <Col lg={6}>
            <ArchivingCard>
              <li className="member">
                <div className="thumb">
                  <img src={naverBlog} />
                </div>
                <div className="description">
                  <h3>Blog</h3>
                  <div>
                    <h5 className="text-dark m-5">학습 목적의 블로그 입니다.</h5>
                    <ul>
                      <li className="m-1">
                        집중력이 부족할 때 단원별로 요약 정리를 기록하며 집중력을 높이는 용도로 활용
                      </li>
                      <li className="m-1">새로운 것을 학습할 때 유용했던 정보와 개인적인 생각을 기록</li>
                      <li className="m-1">실패했던 기록과 경험들을 기록</li>
                      <li className="m-1">웹 개발자의 길을 걸으며 공부한 웹 관련 지식들을 정리</li>
                    </ul>
                    <br />
                    <a href="https://blog.naver.com/minqt98" target="_blank">
                      @NaverBlog
                    </a>
                  </div>
                </div>
              </li>

              <li className="member">
                <div className="thumb">
                  <img src={git} />
                </div>
                <div className="description">
                  <h3>Code</h3>
                  <div>
                    <h5 className="text-dark m-5">소스코드 저장소입니다.</h5>
                    <ul>
                      <li className="m-1">과거 프로젝트, 프로그램, 앱의 소스 코드</li>
                      <li className="m-1">혼자서 코딩 연습을 위해 작성한 소스 코드</li>
                      <li className="m-1">학부 시절 수강한 수업들의 코딩 과제 소스 코드</li>
                    </ul>
                    <br />
                    <a href="https://github.com/mincheolhong" target="_blank">
                      @GitHub
                    </a>
                  </div>
                </div>
              </li>
            </ArchivingCard>
          </Col>
        </Row>
      </Container>
    </MyContainer>
  );
}

export default component;
