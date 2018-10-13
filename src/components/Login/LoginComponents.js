import styled from 'styled-components';
import { Colors, Callout, Intent } from '@blueprintjs/core';

export const LoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(${Colors.WHITE}, ${Colors.LIGHT_GRAY2});
  height: 100%;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  border-radius: 5px;
  background-color: ${Colors.WHITE};
  border: 1px solid ${Colors.LIGHT_GRAY1};
  overflow: hidden;
`;

export const LoginHero = styled.div`
  border-bottom: 1px solid ${Colors.LIGHT_GRAY1};
  background-color: ${Colors.WHITE};
  padding: 30px;
  flex: 0.5;

  h1 {
    margin: 0;
  }
  
  p {
    margin-bottom: 0;
  }
`;

export const LoginContent = styled.form`
  padding: 30px;
  flex: 0.5;
`;

export const LoginError = styled(Callout).attrs({
  intent: Intent.DANGER
})`
  display: ${props => props.visible ? 'flex' : 'none'};
  margin-bottom: 10px;
`;