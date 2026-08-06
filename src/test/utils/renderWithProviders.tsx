import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

export function renderWithProviders(ui: React.ReactElement) {
  const queryClient = new QueryClient();
  return render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18n}>{ui}</I18nextProvider>
      </QueryClientProvider>
    </BrowserRouter>,
  );
}
