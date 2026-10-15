import Doodle from '../components/ui/Doodle';
import PhotoFrame from '../components/ui/PhotoFrame';
import Sticker from '../components/ui/Sticker';
import WaveDivider from '../components/ui/WaveDivider';
import { journey } from '../data/content';
import '../styles/journey.css';

export default function Journey() {
  return (
    <section className="journey" id="stack">
      <h2 className="journey__title">
        My TECH STACK <span>&amp;</span> JOURNEY <em>(so far)</em>
      </h2>

      <ol className="journey__list">
        {journey.map((step, i) => (
          <li className={`step ${i % 2 ? 'step--right' : ''}`} key={step.year}>
            <PhotoFrame frame="polaroid" alt={`Perjalanan coding ${step.year}`} src={step.photo}
              tilt={step.tilt} ratio="4 / 3" background={`var(--${step.tone})`} className="step__photo" />
            <div className={`step__card step__card--${step.tone}`}>
              <span className="step__year">{step.year}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <div className="step__tags">
                {step.tags.map((t, k) => (
                  <Sticker key={t} label={t} tone={step.tone} tilt={k % 2 ? 3 : -3} />
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <Doodle kind="tag" className="journey__d1" color="#14141f" />
      <Doodle kind="branch" className="journey__d2" color="#1f4d3a" />
      <Doodle kind="star" className="journey__d3" color="#ffe58a" />
      <Doodle kind="arrow" className="journey__d4" color="#14141f" />
      <WaveDivider fill="#14141f" />
    </section>
  );
}
