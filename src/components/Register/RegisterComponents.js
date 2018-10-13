import styled from 'styled-components';
import { Colors, Callout, Intent } from '@blueprintjs/core';

export const RegisterPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(${Colors.WHITE}, ${Colors.LIGHT_GRAY2});
  height: 100%;
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  border-radius: 5px;
  background-color: ${Colors.WHITE};
  border: 1px solid ${Colors.LIGHT_GRAY1};
  overflow: hidden;
`;

export const RegisterHero = styled.div`
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

export const RegisterContent = styled.form`
  padding: 30px;
  flex: 0.5;

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