import styled from 'styled-components';
import SearchInput from './SearchInput';

export const PageContainer = styled.div`
  padding: 30px;
`;

export const StyledSearchInput = styled(SearchInput).attrs({
  type: 'search'
})`
  input {
    height: 40px;
  }

  .search-icon {
    margin: 0 0 0 9px;
    top: 50%;
    left: 9px;
    transform: translate(0, -50%);
    height: 16px;
  }
`;