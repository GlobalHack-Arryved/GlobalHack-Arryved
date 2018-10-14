import styled from 'styled-components';
import { Navbar } from '@blueprintjs/core';

export const LocaleNavbar = styled(Navbar)`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: fixed;
  bottom: 15px;
  left: ${props => props.open ? '15px' : '-285px'};
  border-radius: 5px;
  width: 300px;
  overflow: hidden;

  z-index: 1000;

  .bp3-switch {
    width: 140px;
    margin-bottom: 0;
    margin-left: 15px;
  }
`;

export const Handle = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e3e3e3;
`;