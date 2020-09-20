import React from 'react';
import StickyFooter from './StickyFooter/StickyFooter';

export default function withHeaderFooter<T>(Component: React.ComponentType<T>) {

  return class extends React.Component<T> {
    render() {
      return (
        <>
          <Component {...this.props as T} />
          {/* <StickyFooter></StickyFooter> */}
        </>
      );
    }
  };
}
