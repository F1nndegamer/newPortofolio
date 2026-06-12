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
  padding: 18px 20px;
  border-radius: 18px;
  background: rgba(11, 18, 32, 0.72);
  border: 1px solid rgba(125, 211, 252, 0.22);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(10px);

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 20px 24px;
  }
`;

export const QuoteLabel = styled.p`
  margin: 0 0 8px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(125, 211, 252, 0.9);
`;

export const QuoteText = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.05rem;
  }
`;

export const QuoteMeta = styled.p`
  margin: 12px 0 0;
  font-size: 0.88rem;
  font-style: italic;
  color: rgba(226, 232, 240, 0.72);
`;
