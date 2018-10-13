import React, { PureComponent } from 'react';
import { LocaleNavbar } from './LocaleBarComponents';
import { Switch, HTMLSelect } from '@blueprintjs/core';

class LocaleBar extends PureComponent {
  render() {
    return (
      <LocaleNavbar>
        <HTMLSelect value={this.props.language} onChange={this.props.onLanguageUpdate} fill>
          <option value="en">English</option>
          <option value="es">Español</option>
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