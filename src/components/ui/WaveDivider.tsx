import '../../styles/doodle.css';

interface Props {
  fill: string;
  flip?: boolean;
}

/** Batas bergelombang antar-section. */
export default function WaveDivider({ fill, flip = false }: Props) {
  return (
    <svg
      className={`wave ${flip ? 'wave--flip' : ''}`}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill={fill}
        d="M0 40c60 28 120 28 180 0s120-28 180 0 120 28 180 0 120-28 180 0 120 28 180 0 120-28 180 0 120 28 180 0V80H0z"
      />
    </svg>
  );
}
