import { LargeHeading } from '@/components/UI/Texts';

export default function ErrorMessage({ error }: { error: string }) {
  return (
    <>
      <LargeHeading>Uh oh.... Something went wrong</LargeHeading>
      <p>{error}</p>
    </>
  );
}
