import { BrowserRouter } from 'react-router-dom';
import App from './routes/App';
import { ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import AppThemeProvider from './utils/theme/AppThemeProvider';

const Bootstrap: React.FC = (): ReactNode => {
  let AppToRender = App;

  const AppContent = (
    <BrowserRouter>
      <AppThemeProvider>
        <CssBaseline />
        <AppToRender />
      </AppThemeProvider>
    </BrowserRouter>
  );

  return AppContent;
};

export default Bootstrap;
