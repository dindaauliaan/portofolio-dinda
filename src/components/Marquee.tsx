import { marqueeItems } from '../data/content';
import '../styles/marquee.css';

export default function Marquee() {
  // Daftar digandakan agar loop animasi tanpa putus.
  const track = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <div className="marquee__group" key={copy}>
            {track.map((item, i) => (
              <span key={`${copy}-${i}`}>
                {item} <b>•</b>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
