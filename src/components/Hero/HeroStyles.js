import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const QuoteBanner = styled.div`
  margin-top: 24px;
  padding: 28px 28px 26px;
  border-radius: 20px;
  background: rgba(11, 18, 32, 0.72);
  border: 1px solid rgba(125, 211, 252, 0.22);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(10px);

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 32px 32px 30px;
  }
`;

export const QuoteLabel = styled.p`
  margin: 0 0 10px;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(125, 211, 252, 0.9);
`;

export const QuoteText = styled.p`
  margin: 0;
  font-size: clamp(1.4rem, 2.6vw, 1.95rem);
  line-height: 1.42;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: clamp(1.5rem, 2vw, 2rem);
  }
`;

export const QuoteMeta = styled.p`
  margin: 14px 0 0;
  font-size: 1.15rem;
  font-weight: 600;
  font-style: italic;
  color: rgba(226, 232, 240, 0.72);
`;
