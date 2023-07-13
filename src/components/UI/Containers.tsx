import clsx from 'clsx';
import React from 'react';

export const Container = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={clsx('max-w-container px-4 mx-auto md:px-8', className)}
      {...props}
    >
      {children}
    </div>
  );
};
