import styled from 'styled-components';
import ViewType from './type';

const View = styled.div<ViewType>`
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  padding: 8px 9px;
  word-wrap: break-word;

  :nth-child(n) {
    width: 41ch;
  }
`;
export { View };
