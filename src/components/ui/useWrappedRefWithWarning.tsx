import invariant from 'invariant';
import { useCallback } from 'react';
import useMergedRefs from '@restart/hooks/useMergedRefs';

export default function useWrappedRefWithWarning(ref: any, componentName: string) {
  if (process.env.NODE_ENV !== 'development') return ref;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const warningRef = useCallback(
    (refValue: any) => {
      console.log('refValue', refValue);
      console.log('componentName', componentName);
      invariant(
        refValue == null || !refValue.isReactComponent,
        `${componentName} injected a ref to a provided \`as\` component that resolved to a component instance instead of a DOM element. ` +
          'Use `React.forwardRef` to provide the injected ref to the class component as a prop in order to pass it directly to a DOM element',
      );
    },
    [componentName],
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMergedRefs(warningRef, ref);
}
