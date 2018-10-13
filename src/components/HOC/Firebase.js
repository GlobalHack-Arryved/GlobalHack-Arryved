import React, { PureComponent } from 'react';

export const withFirebaseDocument = (getRef, propKey = 'firebase', getOptions) => {
  return (WrappedComponent) => {
    return class extends PureComponent {
      state = {
        data: {
          loading: true,
          data: {}
        }
      }

      componentWillMount() {
        this.subscribe();
      }

      async subscribe() {
        if (this.unsub) this.unsub();
        
        const options = getOptions ? getOptions(this.props) : {};
        if (options.skip) return;

        const ref = getRef(this.props);
        this.unsub = ref.onSnapshot(this.handleUpdate.bind(this));
        
        const snapshot = await ref.get();
        this.handleUpdate(snapshot);
      }

      handleUpdate(doc) {
        this.setState({
          data: {
            loading: false,
            refetch: () => this.subscribe(),
            data: { id: doc.id, ...doc.data() }
          }
        });
      }

      render() {
        const allProps = {
          ...this.props,
          [propKey]: this.state.data
        };

        return <WrappedComponent {...allProps} />;
      }
    };
  };
};


export const withFirebaseCollection = (getRef, propKey = 'firebase', getOptions) => {
  return (WrappedComponent) => {
    return class extends PureComponent {
      state = {
        data: {
          loading: true,
          data: []
        }
      }

      componentWillMount() {
        this.subscribe();
      }

      async subscribe() {
        if (this.unsub) this.unsub();

        const options = getOptions ? getOptions(this.props) : {};
        if (options.skip) return;
        
        const ref = getRef(this.props);
        this.unsub = ref.onSnapshot(this.handleUpdate.bind(this));
        
        const snapshot = await ref.get();
        this.handleUpdate(snapshot);
      }

      handleUpdate(snapshot) {
        this.setState({
          data: {
            loading: false,
            refetch: () => this.subscribe(),
            data: snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }))
          }
        });
      }

      render() {
        const allProps = {
          ...this.props,
          [propKey]: this.state.data
        };

        return <WrappedComponent {...allProps} />;
      }
    };
  };
};
