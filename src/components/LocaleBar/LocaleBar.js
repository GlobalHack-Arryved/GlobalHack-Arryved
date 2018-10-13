import React, { PureComponent } from 'react';
import { LocaleNavbar } from './LocaleBarComponents';
import { Switch, HTMLSelect } from '@blueprintjs/core';

class LocaleBar extends PureComponent {
  render() {
    return (
      <LocaleNavbar>
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
      </LocaleNavbar>
    );
  }
}

export default LocaleBar;