import React, { Component } from 'react';
import { Icon, Spinner } from '@blueprintjs/core';
import { TopButton, CategoriesWrapper } from './CategoriesComponents';

class Categories extends Component {
  render() {
    const { t } = this.props;

    return (
      <CategoriesWrapper>
        <h1>
          St. Louis, MO
        </h1>

        <p className="bp3-text-large bp3-text-muted">
          {t('Select your desired category to find what you need.')}
        </p>

        {this.props.categories.data.map((c, index) =>
          <TopButton
            first={index === 0}
            key={c.id}
            onClick={(e) => {
              this.props.onCategoryPress(e, c);
            }}
          >
            <Icon icon={c.icon} iconSize={20} />
            <p>{t(c.name)}</p>
          </TopButton>
        )}
      </CategoriesWrapper>
    );
  }
}

export default Categories;
