import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Manifesto from './pages/Manifesto';
import BeginJourney from './pages/BeginJourney';
import Categories from './pages/Categories';
import Stories from './pages/Stories';
import Posts from './pages/Posts';
import Paths from './pages/Paths';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/begin-journey" element={<BeginJourney />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/paths" element={<Paths />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App; 