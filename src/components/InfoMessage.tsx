import { LargeHeading } from '@/components/UI/Texts';

export default function InfoMessage({ info }: { info: string }) {
  return (
    <>
      <LargeHeading>{info}</LargeHeading>
    </>
  );
}
