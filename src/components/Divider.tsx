import clsx from 'clsx';
import React from 'react';
import type { DynamicRefForwardingComponent } from '@restart/ui/types';
import { Color } from './ui/types';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  as?: React.ElementType | undefined;
  size: 'sm' | 'md' | 'lg';
  direction: 'horizontal' | 'vertical';
  color: Color;
}

const Divider: DynamicRefForwardingComponent<'div', DividerProps> = React.forwardRef<
  HTMLDivElement,
  DividerProps
>(({ as: Component = 'div', size, direction, color, className, ...props }, ref) => {
  let width = '100%';
  let height = '100%';
  if (direction === 'horizontal') {
    width = '100%';
    height = size === 'sm' ? '1px' : size === 'md' ? '2px' : '3px';
  } else {
    width = size === 'sm' ? '1px' : size === 'md' ? '2px' : '3px';
    height = '100%';
  }
  const margin =
    direction === 'horizontal'
      ? size === 'sm'
        ? 'my-3'
        : size === 'md'
          ? 'my-5'
          : 'my-8'
      : size === 'sm'
        ? 'mx-1'
        : size === 'md'
          ? 'mx-2'
          : 'mx-3';
  return (
    <Component
      role="separator"
      style={{ width, height }}
      ref={ref}
      className={clsx(className, `bg-${color}`, margin)}
      {...props}
    />
  );
});

export default Divider;
