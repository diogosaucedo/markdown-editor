import styled from 'styled-components';
import ButtonType from './type';

const Button = styled.button<ButtonType>`
  // Box Model
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  // Display
  border-radius: ${({ borderRadius }) => borderRadius};
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  outline: none;
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight || 'inherit'};
  text-decoration: ${({ textDecoration }) => textDecoration};
  :hover {
    cursor: pointer;
    ${({ hover }) => hover}
  }
`;

export { Button };
