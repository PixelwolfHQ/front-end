import React from 'react';
import { ThemeProvider } from 'styled-components';

// Global styles
import GlobalStyles from '../src/global-styles';
import theme from '../src/global-styles/theme';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];
