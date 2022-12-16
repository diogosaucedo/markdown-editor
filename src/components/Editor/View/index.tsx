import React from 'react';
import * as Styles from './styles';
import ViewType from './type';

// eslint-disable-next-line react/display-name
const View = React.forwardRef(
  ({ children, width, height, dangerouslySetInnerHTML }: ViewType, ref) => {
    return (
      <Styles.View
        width={width}
        height={height}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        ref={ref}
      >
        {children}
      </Styles.View>
    );
  },
);

export default View;
