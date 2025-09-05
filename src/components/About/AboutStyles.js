import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  align-items: center;
  
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    grid-gap: 32px;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-gap: 24px;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  @media ${(props) => props.theme.breakpoints.md} {
    order: 2;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media ${(props) => props.theme.breakpoints.md} {
    order: 1;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 300px;
  }
`;