import type { CSSProperties } from 'react';
import '../../styles/photo.css';

export type FrameStyle = 'plain' | 'wavy' | 'polaroid' | 'tape' | 'torn';

interface Props {
  src?: string;
  alt: string;
  frame?: FrameStyle;
  ratio?: string;
  tilt?: number;
  background?: string;
  caption?: string;
  className?: string;
  style?: CSSProperties;
}

/** Ilustrasi placeholder (SVG) — tampil jika `src` kosong. */
function Placeholder({ background }: { background: string }) {
  return (
    <svg className="photo__ph" viewBox="0 0 200 150" role="img" aria-label="Placeholder foto">
      <rect width="200" height="150" fill={background} />
      <rect x="20" y="104" width="160" height="10" rx="3" fill="#14141f" opacity=".85" />
      <rect x="62" y="70" width="76" height="36" rx="4" fill="#fff" stroke="#14141f" strokeWidth="3" />
      <text x="100" y="94" textAnchor="middle" fontFamily="monospace" fontSize="14" fontWeight="700" fill="#14141f">{'</>'}</text>
      <circle cx="100" cy="38" r="17" fill="#f2c9a5" stroke="#14141f" strokeWidth="3" />
      <path d="M82 36c2-16 34-16 36 0-8-6-26-6-36 0z" fill="#14141f" />
      <path d="M64 112c4-26 68-26 72 0z" fill="#14141f" />
    </svg>
  );
}

export default function PhotoFrame({
  src, alt, frame = 'plain', ratio = '4 / 3', tilt = 0, background = '#cdbff0', caption, className = '', style,
}: Props) {
  return (
    <figure
      className={`photo photo--${frame} ${className}`}
      style={{ transform: `rotate(${tilt}deg)`, ...style }}
    >
      {frame === 'tape' && <span className="photo__tape" aria-hidden="true" />}
      <div className="photo__media" style={{ aspectRatio: ratio }}>
        {src ? <img src={src} alt={alt} loading="lazy" /> : <Placeholder background={background} />}
      </div>
      {caption && <figcaption className="photo__caption">{caption}</figcaption>}
    </figure>
  );
}
