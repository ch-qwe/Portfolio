import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Templates from './components/Templates';
import Footer from './components/Footer';
import Btns from './components/Buttons';
import OL from './components/origin/OL';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Archiving from './components/Archiving';
import { useMemo, useRef, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
const Anchor = styled.div`
  position: relative;
  top: -56px;
`;

const ScrollToTop = styled.div`
  width: 64px;
  height: 64px;
  position: fixed;
  right: 5%;
  bottom: 5%;
  display: none;

  &.on {
    display: block;
  }
`;

const GlobalStyle = createGlobalStyle`
    body{
      font-family: MyFontKr, MyFontEn;
    }
`;

function App() {
  const [scrollTop, setScrollTop] = useState(false);

  window.addEventListener('scroll', () => {
    let scrollY: number = window.scrollY || 0;

    if (scrollY >= 100 && !scrollTop) {
      setScrollTop(true);
    } else if (scrollY < 100 && scrollTop) {
      setScrollTop(false);
    }
  });

  return (
    <>
      <GlobalStyle />
      <header>
        <Header />
      </header>
      <article>
        <Anchor id="AboutMe" />
        <AboutMe />
        <Anchor id="Skills" />
        <Skills />
        <Anchor id="Archiving" />
        <Archiving />
        {/* <Anchor id="Projects" /> */}
        <Anchor id="Templates" />
        <Templates />
        <Anchor id="Btns" />
        <Btns />
        <OL />
      </article>
      <footer>
        <Footer />
      </footer>
      <ScrollToTop className={scrollTop ? 'on' : ''}>
        <a href="#AboutMe">
          <BsFillArrowUpCircleFill
            style={{
              fontSize: '64px',
              opacity: '0.9',
            }}
          />
        </a>
      </ScrollToTop>
    </>
  );
}

export default App;
//d
