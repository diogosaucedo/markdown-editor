import React from 'react';
import * as Styles from './styles';
import TextareaType from './type';

const Textarea = ({
  value,
  onChange,
  placeholder,
  width,
  height,
  minHeight,
  padding,
  borderRadius,
  background,
  border,
  color,
  fontSize,
  fontFamily,
  outline,
}: TextareaType) => {
  return (
    <Styles.Textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      width={width}
      height={height}
      minHeight={minHeight}
      padding={padding}
      borderRadius={borderRadius}
      background={background}
      border={border}
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      outline={outline}
    ></Styles.Textarea>
  );
};

export default Textarea;
