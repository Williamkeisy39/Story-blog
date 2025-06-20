import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeroSection = styled.section`
  position: relative;
  background-image: url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  background-color: rgba(79, 51, 34, 0.7);
  padding: 6rem 0;
  
  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #fef3c7;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  background-color: #8c6d46;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  font-size: 1.125rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #6e5636;
    transform: translateY(-2px);
  }
`;

const Section = styled.section`
  padding: 4rem 0;
  
  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: 3rem;
  
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const WelcomeCard = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #fbbf24;
  border-radius: 0.5rem;
  text-align: center;
  background-color: #fffbeb;
`;

const WelcomeText = styled.p`
  font-size: 1.125rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background-color: #fffbeb;
  padding: 2rem;
  border-radius: 0.5rem;
  border: 1px solid #fbbf24;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 15rem;
  background-color: #e5e7eb;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  
  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
    margin-right: 1rem;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardText = styled.div`
  width: 100%;
  
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const CardSubtitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  color: #374151;
  margin-bottom: 1rem;
`;

const CommunitySection = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommunityCard = styled.div`
  background-color: #f9fafb;
  padding: 2rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

const CommunityText = styled.div`
  font-style: italic;
  color: #374151;
  
  p:first-child {
    margin-bottom: 1rem;
  }
  
  p:last-child {
    text-align: right;
  }
`;

const BadgeSection = styled.div`
  background-color: #f9fafb;
  padding: 2rem;
  border-radius: 0.5rem;
`;

const BadgeContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const BadgeImage = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #e5e7eb;
  border-radius: 0.5rem;
  margin-right: 1rem;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BadgeText = styled.div`
  h4 {
    font-weight: 500;
  }
  
  p {
    font-size: 0.875rem;
    color: #6b7280;
  }
`;

const StayConnectedSection = styled.section`
  background-color: #92400e;
  color: white;
  padding: 4rem 0;
`;

const StayConnectedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Form = styled.form`
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.375rem;
  color: #1f2937;
  margin-bottom: 1rem;
  border: none;
`;

const SubmitButton = styled.button`
  background-color: white;
  color: #92400e;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f3f4f6;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #92400e;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f3f4f6;
  }
`;

const StayConnectedImage = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
    
    img {
      width: 100%;
      height: auto;
      border-radius: 0.5rem;
      object-fit: cover;
    }
  }
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <Container>
          <HeroTitle>ENTER THE CIRCLE OF WISDOM</HeroTitle>
          <HeroSubtitle>Stories. Sounds. Stillness. A journey home to self.</HeroSubtitle>
          <Button to="/begin-journey">BEGIN REFLECTION</Button>
        </Container>
      </HeroSection>

      <Section style={{ backgroundColor: 'white' }}>
        <Container>
          <SectionTitle>Welcome Message / About the Hub</SectionTitle>
          <WelcomeCard>
            <WelcomeText>
              The Reflection Hub is not a place—it's a pause. A doorway back to the sacred within. 
              Here, words walk, sounds stir, and silence speaks. In this digital sanctuary, 
              we reconnect with ancestral wisdom and awaken our inner knowing.
            </WelcomeText>
            <Button to="/manifesto">READ OUR MANIFESTO</Button>
          </WelcomeCard>
        </Container>
      </Section>

      <Section style={{ backgroundColor: '#f9fafb' }}>
        <Container>
          <SectionTitle>FEATURED REFLECTION OF THE WEEK</SectionTitle>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ 
              animation: 'spin 1s linear infinite',
              borderRadius: '50%',
              height: '2rem',
              width: '2rem',
              borderBottom: '2px solid #92400e',
              margin: '0 auto'
            }}></div>
            <p style={{ marginTop: '0.5rem', color: '#6b7280' }}>Loading stories...</p>
          </div>
        </Container>
      </Section>

      <Section style={{ backgroundColor: 'white' }}>
        <Container>
          <Grid>
            <Card>
              <CardTitle>FEATURED REFLECTION OF THE WEEK</CardTitle>
              <CardContent>
                <CardImage>
                  <img src="/images/zebra-harmony.jpg" alt="The Zebra - Path of Inner Harmony" />
                </CardImage>
                <CardText>
                  <CardSubtitle>The Zebra – Path of Inner Harmony</CardSubtitle>
                  <CardDescription>
                    Visual or title of a current story or theme exploring the duality within us all and how to find balance in life's journey.
                  </CardDescription>
                  <Button to="/explore">EXPLORE NOW</Button>
                </CardText>
              </CardContent>
            </Card>
            
            <CommunitySection>
              <CommunityCard>
                <CardTitle>COMMUNITY FEEDBACK OR "VOICES FROM THE FIRE"</CardTitle>
                <CommunityText>
                  <p>"The Reflection Hub has awakened parts of my soul I had forgotten existed. The stories speak directly to my heart."</p>
                  <p>— Aminata K., Lagos</p>
                </CommunityText>
              </CommunityCard>
              
              <BadgeSection>
                <CardTitle>JOURNEY BADGES</CardTitle>
                <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  Unlock badges as you listen, learn, and grow
                </p>
                <BadgeContent>
                  <BadgeImage>
                    <img src="/images/wisdom-circle.jpg" alt="Badge" />
                  </BadgeImage>
                  <BadgeText>
                    <h4>Example: Keeper of Wisdom</h4>
                    <p>Awarded after completing 5 reflections</p>
                  </BadgeText>
                </BadgeContent>
                <div style={{ textAlign: 'center' }}>
                  <Button to="/begin-journey">BEGIN YOUR JOURNEY</Button>
                </div>
              </BadgeSection>
            </CommunitySection>
          </Grid>
        </Container>
      </Section>

      <StayConnectedSection>
        <Container>
          <StayConnectedGrid>
            <div>
              <CardTitle>STAY CONNECTED</CardTitle>
              <p style={{ marginBottom: '1.5rem' }}>
                Receive weekly reflections, audio stories & sacred whispers.
              </p>
              <Form>
                <Input type="email" placeholder="Email Address" />
                <SubmitButton type="submit">Subscribe</SubmitButton>
              </Form>
              <SocialLinks>
                <SocialLink href="#">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </SocialLink>
                <SocialLink href="#">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </SocialLink>
                <SocialLink href="#">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </SocialLink>
                <SocialLink href="#">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </SocialLink>
              </SocialLinks>
            </div>
            <StayConnectedImage>
              <img src="/images/savanna-sunset.jpg" alt="Stay Connected" />
            </StayConnectedImage>
          </StayConnectedGrid>
        </Container>
      </StayConnectedSection>
    </>
  );
};

export default Home; 