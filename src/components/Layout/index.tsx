import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

import * as Styled from './styles';

interface Props {
  children: React.ReactNode;
  onThemeToggle: () => void;
  currentTheme: 'light' | 'dark';
}

function Layout({ children, onThemeToggle, currentTheme }: Props) {
  return (
    <Styled.Container>
      <Header onThemeToggle={onThemeToggle} currentTheme={currentTheme} />
      <Styled.Main>{children}</Styled.Main>
      <Footer />
    </Styled.Container>
  );
}

export default Layout;
