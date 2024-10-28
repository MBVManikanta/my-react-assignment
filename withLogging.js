import React from 'react';

const withLogging = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log('Wrapped Component Mounted');
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLogging;
