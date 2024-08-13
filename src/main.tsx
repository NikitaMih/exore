import { createRoot } from 'react-dom/client';
import Navigation from 'src/app/Navigation.tsx';
import { setupStore } from 'src/app/store/store.ts';
import { Provider } from 'react-redux';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Header } from 'src/widgets/Header';
import { Footer } from 'src/widgets/Footer';

const store = setupStore();
const theme = createTheme({});

createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <Provider store={store}>
      <Header />
      <Navigation />
      <Footer />
    </Provider>
  </MantineProvider>,
);
