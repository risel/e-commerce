import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 64px;  
  ${p=>p.theme.typo.nav14black}; 
`;

export const Gnb = styled.nav`
  position:fixed;
  z-index:500;
  height:64px;
  width: 100%;
  background-color: ${p => p.theme.colors.white}
`;
export const MainLogo = styled.img`
  width: 64px;
  height:64px;
  margin-left: 32px;
`;
export const MenuContainer= styled.ul`
 display:inline-block;
`;
export const MenuItem = styled.li`
  float:left;
  margin-right:24px;
  height:64px;
  ${p => p.theme.typo.nav14black}
  text-transform: uppercase;
  cursor:pointer; 
`; 
export const RightNav = styled.div`
  float: right;
  margin-right: 32px; 
`
export const IconWrapper = styled.div`
  display:flex;
  height: 100%;
  align-items: center; 
  & svg{
    display:block; 
  }
  
`; 
const Styled = {
  Container,
  Gnb,
  MainLogo,
  MenuContainer,
  MenuItem, 
  RightNav,
  IconWrapper
}
export default Styled ; 