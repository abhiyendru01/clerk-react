// Allow importing `.jsx` files
declare module '*.jsx' {
    import React from 'react';
    const component: React.ComponentType<any>;
    export default component;
  }
  