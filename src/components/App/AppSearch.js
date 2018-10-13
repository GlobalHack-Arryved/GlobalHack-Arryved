import React, { PureComponent } from 'react';
import { ControlGroup, Button, Popover, InputGroup, HTMLSelect } from '@blueprintjs/core';
import { Menu, MenuItem } from '@blueprintjs/core';

class AppSearch extends PureComponent {
  renderCategoryMenu() {
    const { t } = this.props;

    return (
      <Menu>
        {this.props.categories.data.map(category =>
          <MenuItem key={category.id} icon={category.icon} text={t(category.name)} />
        )}
      </Menu>
    );
  }

  renderCategoryButton() {
    const { t } = this.props;
    
    return (
      <Popover content={this.renderCategoryMenu()}>
        <Button rightIcon="caret-down" text={t('Employment')} minimal />
      </Popover>
    );
  }

  render() {
    const { t } = this.props;
    
    return (
      <ControlGroup style={{ padding: 10 }} fill>
        <InputGroup
          leftIcon="search"
          placeholder={t('Search posts...')}
          rightElement={this.renderCategoryButton()}
          fill
          large
        />
      </ControlGroup>
    );
  }
}

export default AppSearch;