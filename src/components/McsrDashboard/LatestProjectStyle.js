import styled from "styled-components";

export const CardWrap = styled.div`
  width: 100%;
  border-radius: 18px;
  margin: 20px 0 56px;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(19, 173, 199, 0.35),
    rgba(148, 93, 214, 0.25)
  );
  box-shadow: 0 10px 24px rgba(8, 10, 24, 0.3);

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 16px 0 44px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 12px 0 34px;
  }
`;

export const Card = styled.div`
  border-radius: 16px;
  background:
    radial-gradient(
      circle at 12% 0%,
      rgba(19, 173, 199, 0.12),
      transparent 42%
    ),
    radial-gradient(
      circle at 100% 100%,
      rgba(148, 93, 214, 0.1),
      transparent 40%
    ),
    #0f1624;
  padding: 42px 38px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    padding: 32px 28px;
    gap: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 26px 20px;
    border-radius: 14px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Label = styled.span`
  width: fit-content;
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #e8eeff;
  font-weight: 700;
  background: rgba(20, 28, 45, 0.78);
  border: 1px solid rgba(146, 185, 255, 0.35);
`;

export const Heading = styled.h3`
  margin: 0;
  font-size: clamp(2.3rem, 4vw, 3.8rem);
  line-height: 1.1;
  color: #eef8ff;
`;

export const Description = styled.p`
  margin: 0;
  max-width: 620px;
  color: rgba(230, 241, 255, 0.85);
  font-size: 1.8rem;
  line-height: 1.55;
`;

export const LinkButton = styled.a`
  width: fit-content;
  margin-top: 8px;
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  box-shadow: 0 6px 12px rgba(20, 20, 55, 0.3);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(20, 20, 55, 0.4);
  }
`;

export const StatPanel = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(125, 166, 240, 0.24);
  padding: 18px;
  background: rgba(15, 23, 42, 0.72);
`;

export const StatTitle = styled.p`
  margin: 0;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: rgba(184, 207, 247, 0.92);
`;

export const StatValue = styled.p`
  margin: 10px 0 0;
  font-size: clamp(2.6rem, 3vw, 3.3rem);
  font-weight: 800;
  color: #ffffff;
`;

export const StatMeta = styled.div`
  margin: 10px 0 0;
  font-size: 1.3rem;
  line-height: 1.6;
  color: rgba(222, 235, 247, 0.78);
`;

export const FeatureList = styled.ul`
  list-style: disc;
  margin: 12px 0 0;
  padding-left: 20px;

  li {
    list-style: inherit;
    display: list-item;
    margin: 6px 0;
  }
`;
