import { DetailsList, SmallHeading } from '@/components/UI/text';

export function CardWithImage({
  image,
  name,
  details,
}: {
  image: string;
  name: string;
  details: { title: string; body: string }[];
}) {
  return (
    <article className="rounded-md bg-white dark:bg-darkblue w-68 overflow-hidden shadow-box text-left h-full">
      <img
        className="h-40 w-68 object-cover"
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
