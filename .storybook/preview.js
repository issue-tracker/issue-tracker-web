import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import theme from '../src/styles/theme';
import GlobalStyle from '../src/styles/globalStyle';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { addDecorator } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export const decorators = [
  (Story) => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.append(modalRoot);

    return (
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MemoryRouter>
              <div id="root">
                <Story />
              </div>
            </MemoryRouter>
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    );
  },
];

initialize();
addDecorator(mswDecorator);
