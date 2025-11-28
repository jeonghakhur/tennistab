import clsx from 'clsx';
import React from 'react';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: string;
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ direction, justify, align, wrap, gap, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          className,
          `d-flex`,
          `flex-${direction}`,
          `justify-content-${justify}`,
          `align-items-${align}`,
          `flex-wrap-${wrap}`,
          `gap-${gap}`,
        )}
        {...props}
      />
    );
  },
);

Flex.displayName = 'Flex';

export default Flex;
