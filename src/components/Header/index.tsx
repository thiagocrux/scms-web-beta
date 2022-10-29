import * as Styled from './styles';

interface Props {
  onThemeToggle?: () => void;
  currentTheme?: 'light' | 'dark';
}

function Header({ onThemeToggle, currentTheme }: Props) {
  return (
    <Styled.Header>
      <h4>Create your header here</h4>
      <span onClick={onThemeToggle}>
        {currentTheme === 'dark' ? '🌞' : '🌚'}
      </span>
    </Styled.Header>
  );
}

export default Header;
