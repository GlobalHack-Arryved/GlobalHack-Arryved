import React, { Component } from 'react';
import { Icon, InputGroup } from '@blueprintjs/core';

class SearchInput extends Component {
  render() {
    const leftIcon = <Icon className="search-icon" icon="search" iconSize={16} color="#ADB7BF" />;

    return (
      <InputGroup {...this.props} leftIcon={leftIcon} />
    );
  }
}

export default SearchInput;
