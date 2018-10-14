import React, { PureComponent } from 'react';
import { LocaleNavbar, Handle } from './LocaleBarComponents';
import { Switch, HTMLSelect, Icon } from '@blueprintjs/core';

class LocaleBar extends PureComponent {
  render() {
    return (
      <LocaleNavbar open={this.props.open}>
        <HTMLSelect value={this.props.language} onChange={this.props.onLanguageUpdate} fill>
          {
            this.props.languages.data.map(language =>
              <option key={language.id} value={language.locale}>{language.name}</option>
            )
          }
        </HTMLSelect>

        <Switch
          checked={this.props.rtl}
          onChange={this.props.onRtlUpdate}
          label="RTL Text"
        />

        <Handle onClick={this.props.onToggleOpen}>
          <Icon icon={this.props.open ? "chevron-left" : "chevron-right"} />
        </Handle>
      </LocaleNavbar>
    );
  }
}

export default LocaleBar;