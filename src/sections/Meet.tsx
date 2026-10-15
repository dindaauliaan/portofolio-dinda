import Doodle from '../components/ui/Doodle';
import PhotoFrame from '../components/ui/PhotoFrame';
import Scribble from '../components/ui/Scribble';
import { photos } from '../data/content';
import '../styles/meet.css';

export default function Meet() {
  return (
    <section className="meet" id="about">
      <h2 className="meet__title">MEET AMANDA</h2>
      <p className="meet__sub">
        Frontend developer. Creative coder. And the person who’s going to bring your ideas to life on the web.
      </p>

      <div className="meet__grid">
        <div className="meet__portrait">
          <PhotoFrame frame="wavy" alt="Amanda dengan headphone di leher" src={photos.portrait}
            ratio="4 / 5" background="#a9d4ff" />
          <Scribble className="meet__happy" rotate={-10}>happy coding!</Scribble>
          <Doodle kind="star" className="meet__star" color="#14141f" size={44} />
        </div>

        <div className="meet__text">
          <p className="meet__lead">
            I build <span className="mark">interactive</span>, <span className="mark">responsive</span>, and
            <span className="mark mark--lilac"> user-centric web applications.</span>
          </p>
          <Doodle kind="squiggle" className="meet__squiggle" color="#1f4d3a" size={96} />
          <p>
            Fokusku ada di <strong>clean code, performance, and delightful user experiences</strong>. Aku suka
            mengubah desain statis jadi halaman yang terasa hidup: cepat dimuat, nyaman dipakai di layar apa pun,
            dan rapi saat dibaca oleh developer lain.
          </p>
          <Doodle kind="arrow" className="meet__arrow" color="#1f4d3a" size={64} />
        </div>
      </div>
    </section>
  );
}
