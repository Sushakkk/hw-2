// components/icons/CheckIcon.tsx
import * as React from 'react';
import Icon, { IconProps } from '../Icon';



const getColor = (color?: 'primary' | 'secondary' | 'accent') => {
  switch (color) {
    case 'primary':
      return 'var(--primary)';
    case 'secondary':
      return 'var(--secondary)';
    case 'accent':
      return 'var(--accent)';
    default:
      return 'currentColor'; // Цвет по умолчанию (наследование от родителя)
  }
};

const CheckIcon: React.FC<IconProps> = ({ width = 24, height = 24, color, ...props }) => (
  <Icon width={width} height={height} viewBox="0 0 24 24" {...props}>
    <path
      d="M4 11.6129L9.87755 18L20 7"
      stroke={getColor(color)}
      strokeWidth="2"
      fill="none"
    />
  </Icon>
);

export default CheckIcon;
