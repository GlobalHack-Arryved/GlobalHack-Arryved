import styled from 'styled-components';
import { Colors } from '@blueprintjs/core';

export const PostWrapper = styled.div`
`;

export const Post = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  width: 100%;
  padding: 15px;
  text-align: left;
  -webkit-appearance: none;

  background: none;
  border: none;
  border-top: 1px solid ${Colors.LIGHT_GRAY1};

  &:last-child {
    border-bottom: 1px solid ${Colors.LIGHT_GRAY1};
  }

  &:active {
    background-color: ${Colors.LIGHT_GRAY4};
  }
`;

export const PostTitle = styled.h4`
  margin: 0 0 5px 0;
`;

export const PostBody = styled.p.attrs({
  className: 'bp3-text-muted'
})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  margin-bottom: 0;
`;