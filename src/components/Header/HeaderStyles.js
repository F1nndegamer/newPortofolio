import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto auto;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
export const Span = styled.span`
  font-size: 2rem;
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  margin-top: 10px;
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-left: auto;
  margin-right: auto;

 @media ${(props) => props.theme.breakpoints.sm} {
  grid-area: 2 / 2 / 3 / 3;
  width: 100%;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  margin-top: -5px;
  margin-bottom: -20px;
}
`;

export const Img = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none
  }
`;

export const Div3 = styled.div`
  margin-top: -10px;
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 4 / 2 / 6;
    margin-top: -15px;
    margin-left: 0;
    justify-content: flex-end;
    align-items: center;
  }
`;
// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;


export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


export const SocialIcons = styled.a`
  display: flex;
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
export const ReportBugButton = styled(SocialIcons)`
  white-space: nowrap;
  display: flex;
  justify-content: center;
  height: 1.4rem;
  line-height: 1;
  padding: 0 8px;
`;

