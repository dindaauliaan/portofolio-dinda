import type { Tone } from '../../data/types';
import '../../styles/sticker.css';

interface Props {
  label: string;
  tone?: Tone;
  tilt?: number;
}

/** Tag bulat bergaya stiker. */
export default function Sticker({ label, tone = 'mint', tilt = 0 }: Props) {
  return (
    <span className={`sticker sticker--${tone}`} style={{ transform: `rotate(${tilt}deg)` }}>
      {label}
    </span>
  );
}
