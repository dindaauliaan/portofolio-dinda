import Button from '../components/ui/Button';
import Doodle from '../components/ui/Doodle';
import PhotoFrame from '../components/ui/PhotoFrame';
import Scribble from '../components/ui/Scribble';
import WaveDivider from '../components/ui/WaveDivider';
import { photos } from '../data/content';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">
            <span className="t-script">The</span>
            <span className="t-big">ENGINEER</span>
            <span className="t-script">behind</span>
            <span className="t-big t-yellow">BEYOND</span>
            <span className="t-mid">the CODE STUDIO</span>
          </h1>
          <Scribble className="hero__move" rotate={-8}>move me!</Scribble>
          <Doodle kind="arrow" className="hero__arrow" color="#ffe58a" size={72} />
          <div className="hero__actions">
            <Button href="#about">MEET THE DEVELOPER</Button>
            <Button href="#projects">VIEW MY PROJECTS</Button>
          </div>
        </div>

        <div className="hero__photos">
          <PhotoFrame frame="polaroid" alt="Amanda bekerja di depan laptop" src={photos.hero}
            ratio="4 / 5" tilt={4} background="#ffe58a" className="hero__back" />
          <PhotoFrame frame="plain" alt="" ratio="1 / 1" tilt={-7} background="#cdbff0" className="hero__mid" />
          <PhotoFrame frame="polaroid" alt="Amanda mengenakan blazer gelap di meja kerja" src={photos.hero}
            ratio="4 / 5" tilt={-2} background="#b9e8d0" caption="debugging, but make it fashion" className="hero__front" />
          <Doodle kind="star" className="hero__d1" color="#ffe58a" size={54} />
          <Doodle kind="cursor" className="hero__d2" color="#f7f1e3" size={46} />
          <Doodle kind="squiggle" className="hero__d3" color="#cdbff0" size={70} />
        </div>
      </div>
      <WaveDivider fill="#f7f1e3" />
    </section>
  );
}
