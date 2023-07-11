import Header from '@/components/header';
import useDarkMode from '@/hooks/useDarkMode';
import Countries from '@/Countries';
import { Container } from '@/components/UI/container';

function App() {
  const toggleDarkMode = useDarkMode();
  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} />
      <Container>
        <main className="mb-16 mt-6 lg:mt-12">
          <Countries />
        </main>
      </Container>
    </>
  );
}

export default App;
