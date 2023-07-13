import { DetailsList, SmallHeading } from '@/components/UI/Texts';
import clsx from 'clsx';

interface CardWithImageProps extends React.HTMLAttributes<HTMLElement> {
  image: string;
  name: string;
  details: { title: string; body: string }[];
}

export function CardWithImage({
  image,
  name,
  details,
  className,
  ...props
}: CardWithImageProps) {
  return (
    <article
      className={clsx(
        'rounded-md bg-white dark:bg-darkblue w-68 overflow-hidden shadow-box text-left h-full',
        className,
      )}
      {...props}
    >
      <img
        className="h-40 w-68"
        src={image}
        height={160}
        width={264}
        alt={`Flag of ${name}`}
      />
      <div className="mx-6 mt-6 mb-12 space-y-4">
        <SmallHeading>{name}</SmallHeading>
        <DetailsList details={details} />
      </div>
    </article>
  );
}
