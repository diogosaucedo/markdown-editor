import React from 'react';
import * as Styles from './styles';
import ButtonType from './type';

const Button = ({
  children,
  onClick,
  width,
  height,
  borderRadius,
  background,
  border,
  color,
  fontSize,
  fontFamily,
  fontWeight,
  textDecoration,
  hover,
}: ButtonType) => {
  return (
    <Styles.Button
      onClick={onClick}
      width={width}
      height={height}
      borderRadius={borderRadius}
      background={background}
      border={border}
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      textDecoration={textDecoration}
      hover={hover}
    >
      {children}
    </Styles.Button>
  );
};

export default Button;
