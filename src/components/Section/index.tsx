import React from 'react';
import * as Styled from './styles';

interface Props {
  children: React.ReactNode;
}

function Section({ children }: Props) {
  return <Styled.Section>{children}</Styled.Section>;
}

export default Section;
