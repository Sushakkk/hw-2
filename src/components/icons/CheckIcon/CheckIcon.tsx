import * as React from 'react';
import Icon, { IconProps } from '../Icon';

const getColor = (color?: 'primary' | 'secondary' | 'accent' | 'disabled') => {
  switch (color) {
    case 'primary':
      return 'var(--primary)';
    case 'secondary':
      return 'var(--secondary)';
    case 'accent':
      return 'var(--accent)';
    case 'disabled':
      return 'var(--disabled)';
    default:
      return 'currentColor'; // Цвет по умолчанию (наследование от родителя)
  }
};

const CheckIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color,
  ...props
}) => {
  // Проверка на размеры
  const isLargeIcon = width === 40 && height === 40;

  return (
    <Icon width={width} height={height} viewBox="0 0 40 40" {...props}>
      {isLargeIcon ? (
        <path
          d="M6.66663 19.3548L16.4625 30L33.3333 11.6667"
          stroke={getColor(color)}
          fill="none"
          strokeWidth="3.33333"
        />
      ) : (
        <path
          d="M4 11.6129L9.87755 18L20 7"
          stroke={getColor(color)}
          fill="none"
          strokeWidth="2"
        />
      )}
    </Icon>
  );
};

export default CheckIcon;
