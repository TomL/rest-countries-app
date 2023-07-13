import clsx from 'clsx';

export function Button({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        'text-xs py-2 px-8 shadow-box lg:text-sm bg-white dark:bg-darkblue rounded-md inline-flex items-center dark:disabled:text-verydarkblue disabled:text-medgrey',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
