import styled from 'styled-components';
import { Navbar } from '@blueprintjs/core';

export const LocaleNavbar = styled(Navbar)`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: fixed;
  bottom: 15px;
  left: 15px;
  border-radius: 5px;
  width: 280px;
  overflow: hidden;

  z-index: 1000;

  .bp3-switch {
    width: 140px;
    margin-bottom: 0;
    margin-left: 15px;
  }
`;