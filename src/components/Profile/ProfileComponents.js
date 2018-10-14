import styled from 'styled-components';
import { Colors } from '@blueprintjs/core';

export const ProfileWrapper = styled.div`

`;

export const UserNameAndLocation = styled.div`
  padding: 15px 30px;

  h2 {
    color: ${Colors.BLUE2};
  }
  
  h2, p {
    margin: 5px 0;
  }
`;

export const ProfileOption = styled.div`
  padding: 15px 30px;
  border-top: 1px solid ${Colors.LIGHT_GRAY1};
  border-bottom: 1px solid ${Colors.LIGHT_GRAY1};
  margin-bottom: -1px;

  h4, p {
    margin: 4px 0;
  }

  .password {
    letter-spacing: 2px;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const DeleteProfileWrapper = styled.div`
  padding: 40px 30px 30px 15px;
`;

export const ProfilePictureWrapper = styled.div`
  padding: 30px;
  text-align: center;
  background: radial-gradient(${Colors.LIGHT_GRAY4}, ${Colors.LIGHT_GRAY3});
`;

export const ProfilePicture = styled.img`
  min-width: 100px;
  height: 100px;
  border-radius: 50px;
  object-fit: cover;
  box-shadow: 0 0 30px #ccc;
`;