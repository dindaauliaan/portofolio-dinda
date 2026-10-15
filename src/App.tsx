import Navbar from './components/Navbar';
import SideLabel from './components/SideLabel';
import Marquee from './components/Marquee';
import Hero from './sections/Hero';
import Meet from './sections/Meet';
import Journey from './sections/Journey';
import Works from './sections/Works';

export default function App() {
  return (
    <>
      <Navbar />
      <SideLabel />
      <main>
        <Hero />
        <Meet />
        <Marquee />
        <Journey />
        <Works />
      </main>
    </>
  );
}
