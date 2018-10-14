import styled from 'styled-components';
import { Callout, Intent, TextArea } from '@blueprintjs/core';

export const AddPostWrapper = styled.form`
  padding: 30px;
`;

export const PostContentTextArea = styled(TextArea)`
  height: 200px !important;
  resize: none
`;

export const RegisterError = styled(Callout).attrs({
  intent: Intent.DANGER
})`
  display: ${props => props.visible ? 'flex' : 'none'};
  margin-bottom: 10px;
`;