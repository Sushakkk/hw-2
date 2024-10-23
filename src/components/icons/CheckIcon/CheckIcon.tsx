// components/icons/CheckIcon.tsx
import * as React from 'react';
import Icon, { IconProps } from '../Icon';

const CheckIcon: React.FC<IconProps> = ({ width = 24, height = 24, color, ...props }) => (
  <Icon width={width} height={height} viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.33563 8.74741L3.66436 7.25259L12 14.662L20.3356 7.25259L21.6644 8.74741L12 17.338L2.33563 8.74741Z"
      fill={color}
    />
  </Icon>
);

export default CheckIcon;
