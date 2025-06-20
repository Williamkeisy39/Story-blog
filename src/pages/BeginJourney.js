import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
`;

const BeginJourney = () => {
  return (
    <Container>
      <Title>Begin Your Journey</Title>
      <p>Begin Journey page content coming soon...</p>
    </Container>
  );
};

export default BeginJourney; 