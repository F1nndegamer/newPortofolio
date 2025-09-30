import styled from 'styled-components';

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 48px;
  
  @media ${(props) => props.theme.breakpoints.md} {
    gap: 32px;
    margin-top: 32px;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 24px;
  }
`;

export const SkillCategory = styled.div`
  background: #212D45;
  border-radius: 12px;
  padding: 32px;
  
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 20px;
  }
`;

export const SkillCategoryTitle = styled.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #FFFFFF;
  margin-bottom: 16px;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.8) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 14px;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 12px;
  }
`;

export const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 20px;
    margin-top: 20px;
  }
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  transition: 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

export const SkillIcon = styled.div`
  color: ${(props) => props.theme.colors.accent1};
  flex-shrink: 0;
  margin-top: 4px;
`;

export const SkillInfo = styled.div`
  flex: 1;
`;

export const SkillTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 8px;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
  }
`;

export const SkillDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.75);
  
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 20px;
  }
`;