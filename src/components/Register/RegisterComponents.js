import styled from 'styled-components';
import { Colors, Callout, Intent } from '@blueprintjs/core';

export const RegisterPage = styled.div`
  
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  z-index: 999;
`;

export const RegisterHero = styled.div`
  border-bottom: 1px solid ${Colors.LIGHT_GRAY1};
  background-color: ${Colors.WHITE};
  padding: 55px;

  h1 {
    margin: 40px 0 10px 0;
    color: ${Colors.BLUE2};
  }
  
  p {
    margin-bottom: 0;
  }
`;

export const RegisterContent = styled.form`
  padding: 55px;

  .bp3-popover-target {
    width: 100%;
  }
`;

export const RegisterError = styled(Callout).attrs({
  intent: Intent.DANGER
})`
  display: ${props => props.visible ? 'flex' : 'none'};
  margin-bottom: 10px;
`;

export const RegisterActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RegisterSteps = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RegisterStep = styled.p`
  color: ${props => props.active ? Colors.BLUE2 : Colors.LIGHT_GRAY2};
  font-size: ${props => props.active ? 18 : 14}px;
  margin: 0 10px;
  &:first-child { margin-left: 0; }
  &:last-child { margin-right: 0; }
`;

export const RegisterIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  position: fixed;
  top: -50px;
  right: -60px;
  border-radius: 100px;
  background-color: ${Colors.BLUE2};
  padding: 40px 40px 0 0;
`;