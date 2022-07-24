import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import bg_about from '../imgs/aboutMe/bg_about.jpg';
import img_me from '../imgs/aboutMe/img_me.jpg';
import { Card } from './elements/AboutMeCard';
import { MdCall, MdLocationOn, MdEmail } from 'react-icons/md';
import { BsFacebook, BsGithub } from 'react-icons/bs';

const MyContainer = styled(Container)`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;

  background-image: url(${bg_about});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function Component() {
  const [tabIndex, setTabIndex] = useState(1);
  const btnHandler = (num: any) => {
    setTabIndex(num);
  };

  return (
    <MyContainer fluid={true}>
      <Container className="d-flex flex-column align-items-center">
        <Row className="text-center pt-5">
          <h1>
            <b>About Me</b>
          </h1>
        </Row>
        <Card data-state="#about" className={tabIndex !== 1 ? 'is-active' : ''}>
          <div className="card-header">
            <div
              className="card-cover"
              style={{
                background: bg_about,
              }}
            ></div>
            <img className="card-avatar" src={img_me} alt="avatar" />
            <h1 className="card-fullname">민철홍</h1>
            <h2 className="card-jobtitle">WEB Developer</h2>
          </div>
          <div className="card-main">
            {/* About */}
            <div className={tabIndex === 1 ? 'card-section is-active' : 'card-section'}>
              <div className="card-content">
                <div className="card-subtitle">ABOUT</div>
                <p className="card-desc">
                  안녕하세요. <br />
                  성장을 위해 끊임없이 고민하는 개발자 입니다.
                  <br />
                  부족한 부분을 인지하고 해결책을 찾으려는 자발성이
                  <br /> 저의 장점입니다.
                </p>
              </div>
              <div className="card-social">
                {/* 페북 */}
                <a href="#foo1">
                  <BsFacebook />
                </a>
                <a href="https://github.com/mincheolhong" target="_blank">
                  <BsGithub />
                </a>
              </div>
            </div>
            {/* EXPERIENCE */}
            <div className={tabIndex === 2 ? 'card-section is-active' : 'card-section'}>
              <div className="card-content">
                <div className="card-subtitle">WORK EXPERIENCE</div>
                <div className="card-timeline">
                  <div className="card-item" data-year="2022">
                    <div className="card-item-title">
                      Study AI at <span>KT Aivle School</span>
                    </div>
                    <div className="card-item-desc">
                      AI를 활용하여 문제를 해결할 수 있는 과제를 스스로 발굴하고, 서비스∙제안서를 구현하는 실무적인
                      능력을 학습하고 있습니다.
                    </div>
                    <br />
                    <div className="card-item-title">
                      <span>웹 개발 프리랜서</span>
                    </div>
                    <div className="card-item-desc">
                      React, Express 를 활용하여 웹 사이트 개발 하고 AWS EC2를 이용해 배포하며 웹을 개발하고 있습니다.
                    </div>
                  </div>
                  <div className="card-item" data-year="2021">
                    <div className="card-item-title">
                      Web Developer at <span>And4</span>
                    </div>
                    <div className="card-item-desc">
                      jquery, spring 을 활용한 웹 개발과, Selenium 을 활용하여 데이터 수집 프로그램을 개발했습니다.
                    </div>
                  </div>
                  <div className="card-item" data-year="2015">
                    <div className="card-item-title">
                      Study Computer Science at <span>성공회대학교</span>
                    </div>
                    <div className="card-item-desc">
                      컴퓨터 공학에 대한 기초 지식과, 문제 해결 능력을 키우는 다양한 교양 지식을 학습 했습니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* CONTACT */}
            <div className={tabIndex === 3 ? 'card-section is-active' : 'card-section'}>
              <div className="card-content">
                <div className="card-subtitle">CONTACT</div>
                <div className="card-contact-wrapper">
                  <div className="card-contact">
                    <MdLocationOn />
                    경기도 부천시
                  </div>
                  <div className="card-contact">
                    <MdCall />
                    010-9931-3321
                  </div>
                  <div className="card-contact">
                    <MdEmail />
                    minqt98@gmail.com
                  </div>
                  <button className="contact-me">WORK TOGETHER</button>
                </div>
              </div>
            </div>
            <div className="card-buttons">
              <button
                data-section="#about"
                className={tabIndex === 1 ? 'is-active' : ''}
                onClick={() => {
                  btnHandler(1);
                }}
              >
                ABOUT
              </button>
              <button
                data-section="#experience"
                className={tabIndex === 2 ? 'is-active' : ''}
                onClick={() => {
                  btnHandler(2);
                }}
              >
                EXPERIENCE
              </button>
              <button
                data-section="#contact"
                className={tabIndex === 3 ? 'is-active' : ''}
                onClick={() => {
                  btnHandler(3);
                }}
              >
                CONTACT
              </button>
            </div>
          </div>
        </Card>
      </Container>
    </MyContainer>
  );
}

export default Component;
