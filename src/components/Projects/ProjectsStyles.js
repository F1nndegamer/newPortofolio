import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 2fr));
  padding: 3rem 1rem; /* Changed from 3rem to 3rem 1rem - keeps top/bottom padding but reduces left/right */
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem; /* Also reduce mobile padding left/right */
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 100%; /* Changed from 400px to 100% */
  max-width: 400px; /* Added max-width for larger screens */
  position: relative;
  
  ${props => props.currentProject && `
    max-width: 350px;
    border: 2px solid #d0bb57;
    box-shadow: 0 0 20px rgba(208, 187, 87, 0.3), 3px 3px 20px rgba(80, 78, 78, 0.5);
    transform: scale(1.1);
  `}
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    ${props => props.currentProject && `
      transform: none;
      border: 3px solid #d0bb57;
      margin: 10px;
      max-width: calc(100% - 20px);
    `}
  }
`;

export const CurrentProjectBadge = styled.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(45deg, #d0bb57, #f4d03f);
  color: #1a1a1a;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(208, 187, 87, 0.4);
  z-index: 10;
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  color: ${(props) => props.color || "inherit"};
  padding-top: ${(props) => props.topPadding || "20px"};
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: middle;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;
