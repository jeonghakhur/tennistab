import type { DynamicRefForwardingComponent } from '@restart/ui/types';
import clsx from 'clsx';
import React from 'react';
import { Color } from './ui/types';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType | undefined;
  color?: Color;
  children: React.ReactNode | string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  weight?: 'lighter' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'bolder';
  align?: 'start' | 'center' | 'end';
  lineHeight?: '1' | 'sm' | 'base' | 'lg';
  // letterSpacing?: 'normal' | '0.5px';
  // textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  // textDecoration?: 'none' | 'underline' | 'overline' | 'line-through';
  // textShadow?: 'none' | '0 1px 1px rgba(0, 0, 0, 0.5)';
  // textOverflow?: 'clip' | 'ellipsis';
  // whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
  // wordBreak?: 'normal' | 'break-all' | 'break-word';
  // wordWrap?: 'normal' | 'break-word';
}

const Text: DynamicRefForwardingComponent<'p', TextProps> = React.forwardRef<
  HTMLParagraphElement,
  TextProps
>(
  (
    { as: Component = 'p', color, className, size, children, weight, align, lineHeight, ...props },
    ref,
  ) => {
    let fontSize = '';
    if (size === 'xs') {
      fontSize = '0.75rem';
    } else if (size === 'sm') {
      fontSize = '0.875rem';
    } else if (size === 'md') {
      fontSize = '1rem';
    } else if (size === 'lg') {
      fontSize = '1.5rem';
    } else if (size === 'xl') {
      fontSize = '2rem';
    } else if (size === 'xxl') {
      fontSize = '2.5rem';
    }
    return (
      <Component
        ref={ref}
        className={clsx(
          className,
          color && `text-${color}`,
          weight && `fw-${weight}`,
          align && `text-${align}`,
          lineHeight && `lh-${lineHeight}`,
        )}
        {...props}
        style={{ fontSize }}
      >
        {children}
      </Component>
    );
  },
);

export default Text;
