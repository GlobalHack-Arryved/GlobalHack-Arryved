import styled from 'styled-components';

export const TopButton = styled.button`
  background-color: #3C86B5;
  color: #D5EEFF;
  height: 56px;
  width: 100%;
  padding: 0 30px;
  border-radius: 3px;
  border: 0;
  margin: ${props => props.first ? `12px 0` : `0 0 12px 0`}
  box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 1px 1px 0 rgba(16,22,26,0.2);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 500px;

  &:active {
    background-color: #2f6a8f;
  }

  p {
    margin: 0;
    font-size: 15px;
    font-weight: 600;
    font-family: "SF Pro Text", sans-serif;
  }

  span {
    padding-right: 12px;
  }
`;
