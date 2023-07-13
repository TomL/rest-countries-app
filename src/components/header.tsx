import { Container } from '@/components/UI/container';
import { DarkModeIcon } from '@/components/UI/icons';
import { MainHeading } from '@/components/UI/text';

export default function Header({
  toggleDarkMode,
}: {
  toggleDarkMode: () => void;
}) {
  return (
    <header className="bg-white dark:bg-darkblue shadow-header">
      <Container className="flex items-center justify-between py-7">
        <MainHeading>Where in the world?</MainHeading>
        <button
          aria-label={`Toggle dark mode`}
          className="font-semibold text-xs inline-flex items-center lg:text-base"
          type="button"
          onClick={toggleDarkMode}
        >
          <DarkModeIcon className="mr-2 w-4 h-4 lg:h-5 lg:w-5" />
          Dark Mode
        </button>
      </Container>
    </header>
  );
}
