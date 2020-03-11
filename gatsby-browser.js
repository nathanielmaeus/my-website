import React from 'react';
import AppProvider from 'store/provider';

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};
