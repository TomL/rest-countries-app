import { Button } from '@/components/UI/Buttons';
import { ArrowLeftIcon } from '@/components/UI/Icons';

export default function CountryDetailNav({
  handleSelectedCountryChange,
}: {
  handleSelectedCountryChange: (country: string) => void;
}) {
  return (
    <nav className="mt-10 mb-16 lg:mt-20 lg:mb-20">
      <Button
        aria-label="Go back to countries page"
        onClick={() => handleSelectedCountryChange('')}
      >
        <ArrowLeftIcon className="h-4.5 w-4.5 lg:h-5 lg:w-5 mr-2 lg:mr-2.5" />
        Back to Countries
      </Button>
    </nav>
  );
}
