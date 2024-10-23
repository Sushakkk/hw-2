// components/icons/Icon.tsx
import * as React from 'react';

export type IconProps = React.SVGAttributes<SVGElement> & {
  className?: string;
  color?: 'primary' | 'secondary' | 'accent';
  width?: number;
  height?: number;
};

const Icon: React.FC<React.PropsWithChildren<IconProps>> = ({
  className = '',
  color,
  width = 24,
  height = 24,
  children,
  ...props
}) => {
  const getColor = () => {
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

  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={getColor()}
      {...props}
    >
      {children}
    </svg>
  );
};

export default Icon;
