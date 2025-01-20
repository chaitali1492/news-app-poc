'use client';

import { ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './utils/createEmotionCache';
import theme from './theme';
import Header from './components/header';

const clientSideEmotionCache = createEmotionCache();

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header/>
        <Container maxWidth="lg">
          {children}
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}
