import Button from '../components/ui/Button';
import Doodle from '../components/ui/Doodle';
import PhotoFrame from '../components/ui/PhotoFrame';
import Scribble from '../components/ui/Scribble';
import Sticker from '../components/ui/Sticker';
import { projects } from '../data/content';
import '../styles/works.css';

export default function Works() {
  return (
    <section className="works" id="projects">
      <div className="works__head">
        <h2 className="works__title">
          SELECTED WORKS <small>(and things I’ve built)</small>
        </h2>
        <Scribble className="works__check" rotate={-7}>check this out!</Scribble>
        <Doodle kind="arrow" className="works__arrow" color="#ffe58a" size={64} />
      </div>

      <div className="works__list">
        {projects.map((p, i) => (
          <article className={`project ${i % 2 ? 'project--flip' : ''}`} key={p.id}>
            <PhotoFrame frame={p.frame} alt={`Tampilan ${p.name}`} src={p.image} ratio="16 / 10"
              tilt={i % 2 ? 2.5 : -2.5} background={`var(--${p.tone})`} className="project__shot" />
            <div className="project__info">
              <span className="project__index">Project {p.index}</span>
              <h3>{p.name}</h3>
              <div className="project__tags">
                {p.tags.map((t, k) => (
                  <Sticker key={t} label={t} tone={k % 2 ? 'sky' : 'mint'} tilt={k % 2 ? 4 : -4} />
                ))}
              </div>
              <p>{p.description}</p>
              <div className="project__actions">
                <Button variant="scribble" href={p.liveUrl}>VIEW LIVE</Button>
                <Button variant="scribble" href={p.githubUrl}>GITHUB</Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Doodle kind="binary" className="works__d1" color="#cdbff0" />
      <Doodle kind="folder" className="works__d2" color="#ffe58a" />
      <Doodle kind="cursor" className="works__d3" color="#f7f1e3" />
      <Doodle kind="star" className="works__d4" color="#b9e8d0" />

      <footer className="works__foot" id="contact">
        <h2>Let’s build something together.</h2>
        <Button variant="butter" href="mailto:hello@example.com">hello@example.com</Button>
      </footer>
    </section>
  );
}
