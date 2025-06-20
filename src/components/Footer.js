import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #111827;
  color: white;
  padding: 3rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Section = styled.div``;

const Title = styled.h4`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: #9ca3af;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ListItem = styled.li``;

const FooterLink = styled(Link)`
  color: #9ca3af;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

const ExternalLink = styled.a`
  color: #9ca3af;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

const Divider = styled.div`
  padding-top: 2rem;
  border-top: 1px solid #374151;
  text-align: center;
  color: #6b7280;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid>
          <Section>
            <Title>Reflection Hub</Title>
            <Text>Where Stories Remember. Reflections Awaken.</Text>
          </Section>
          
          <Section>
            <Title>Navigation</Title>
            <List>
              <ListItem>
                <FooterLink to="/">Home</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink to="/stories">Stories</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink to="/posts">Reflections</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink to="/categories">Community</FooterLink>
              </ListItem>
            </List>
          </Section>
          
          <Section>
            <Title>Legal</Title>
            <List>
              <ListItem>
                <FooterLink to="/privacy">Privacy Policy</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink to="/terms">Terms of Service</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink to="/cookies">Cookie Policy</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink to="/contact">Contact Us</FooterLink>
              </ListItem>
            </List>
          </Section>
          
          <Section>
            <Title>Contact</Title>
            <List>
              <ListItem>
                <ExternalLink href="mailto:info@reflectionhub.com">
                  info@reflectionhub.com
                </ExternalLink>
              </ListItem>
              <ListItem>+234 803 456 7890</ListItem>
              <ListItem>Lagos, Nigeria</ListItem>
            </List>
          </Section>
        </Grid>
        
        <Divider>
          <p>Powered by Equity Premier / Echoes</p>
          <p style={{ marginTop: '0.5rem' }}>© 2025 Reflection Hub. All rights reserved.</p>
        </Divider>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 