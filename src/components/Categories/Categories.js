import React, { Component } from 'react';
import { Icon, Spinner } from '@blueprintjs/core';
import { PageContainer } from '../Common/StyledComponents';
import { TopButton } from './CategoriesComponents';

class Categories extends Component {
  render() {
    const { t } = this.props;

    return (
      <PageContainer>
        {
          this.props.categories.data.length
            ? this.props.categories.data.map((c, index) =>
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
            )
            : <Spinner />
        }
      </PageContainer>
    );
  }
}

export default Categories;
