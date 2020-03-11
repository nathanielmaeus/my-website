import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import AppProvider from 'store/provider';

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const ConnectedBody = () => <AppProvider>{bodyComponent}</AppProvider>;
  replaceBodyHTMLString(renderToString(<ConnectedBody />));

  const sheet = new ServerStyleSheet();
  const styleElement = sheet.getStyleElement();
  setHeadComponents(styleElement);
};
