import React, { Component } from 'react';
import { Select } from './AddPostComponents';

class CategorySelect extends Component {
  async componentDidUpdate(prevProps) {
    if (!this.props.categories.loading && prevProps.categories.loading) {
      await this.props.onCategoryChange({ target: { value: this.props.categories.data[0].id } });
    }
  }

  async componentDidMount() {
    if (!this.props.categories.loading) {
      await this.props.onCategoryChange({ target: { value: this.props.categories.data[0].id } });
    }
  }

  render() {
    const { t } = this.props;

    return (
      <Select onChange={this.props.onCategoryChange} required>
        {
          this.props.categories.data.length &&
          this.props.categories.data.map(c => {
            return <option value={c.id} key={c.id}>{t(c.name)}</option>
          })
        }
      </Select>
    );
  }
}

export default CategorySelect;
