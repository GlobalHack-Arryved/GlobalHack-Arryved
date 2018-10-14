import styled from 'styled-components';
import { Callout, Intent } from '@blueprintjs/core';

export const RegisterError = styled(Callout).attrs({
  intent: Intent.DANGER
})`
  display: ${props => props.visible ? 'flex' : 'none'};
  margin-bottom: 10px;
`;

export const SubmitButton = styled.input.attrs({
  type: 'submit',
  value: props => props.t('Submit')
})`
  height: 50px;
  color: #106BA3;
  background-color: #9FD8FC;
  border: 0;
  border-radius: 3px;
  margin-top: 25px;
  width: 100%;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

export const Select = styled.select.attrs({
  required: true
})`
  width: 100%;
  font-family: "SF Pro Text", sans-serif;
  color: #3f3f3f;
  background-color: #fff;
  border: 0;
  height: 30px;
  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px 0 rgba(16,22,26,0.2);
`;

export const TextInput = styled.input.attrs({
  required: true
})`
  color: #3f3f3f;
  padding: 8px;
  border-radius: 3px; 
  border: 0;
  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px 0 rgba(16,22,26,0.2);
  width: 100%;
  height: ${props => props.large ? '200px' : '30px' };
  overflow-y: visible;
  font-size: 15px;
  margin-bottom: 12px;
`;

export const TextArea = styled.textarea.attrs({
  required: true
})`
  color: #3f3f3f;
  padding: 8px;
  border-radius: 3px; 
  border: 0;
  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px 0 rgba(16,22,26,0.2);
  width: 100%;
  height: 200px;
  overflow-y: visible;
  font-size: 15px;
  margin-bottom: 12px;
  resize: none;
`;
