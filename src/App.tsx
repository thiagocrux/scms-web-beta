import { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Layout onThemeToggle={handleThemeToggle} currentTheme={theme}>
        <h3>Here goes your application pages 🚀</h3>
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
