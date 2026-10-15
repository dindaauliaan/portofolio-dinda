import type { CSSProperties } from 'react';
import '../../styles/doodle.css';

export type DoodleKind =
  | 'star' | 'arrow' | 'tag' | 'branch' | 'cursor' | 'binary' | 'folder' | 'squiggle';

interface Props {
  kind: DoodleKind;
  color?: string;
  size?: number;
  style?: CSSProperties;
  className?: string;
}

const paths: Record<DoodleKind, JSX.Element> = {
  star: <path d="M32 4l7 20 21 1-17 13 6 21-17-12-17 12 6-21L4 25l21-1z" />,
  arrow: <path d="M6 44c14-30 30-34 50-24M56 20l-14-6M56 20l-6 14" />,
  tag: <path d="M22 18L8 32l14 14M42 18l14 14-14 14M36 12L28 52" />,
  branch: (
    <>
      <circle cx="16" cy="12" r="6" /><circle cx="16" cy="52" r="6" /><circle cx="48" cy="24" r="6" />
      <path d="M16 18v28M48 30c0 14-20 8-32 16" />
    </>
  ),
  cursor: <path d="M12 6l8 46 10-16 18 2z" />,
  binary: (
    <text x="2" y="26" fontSize="20" fontFamily="monospace" fontWeight="700" stroke="none" fill="currentColor">
      0110
      <tspan x="2" y="50">1001</tspan>
    </text>
  ),
  folder: <path d="M6 16h18l6 8h28v30H6zM6 24h52" />,
  squiggle: <path d="M4 32c8-16 12 16 20 0s12 16 20 0 12 16 16 4" />,
};

/** Ornamen doodle SVG bergaris tebal; warna mengikuti `currentColor`. */
export default function Doodle({ kind, color, size = 56, style, className = '' }: Props) {
  return (
    <svg
      className={`doodle ${className}`}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      style={{ color, ...style }}
    >
      {paths[kind]}
    </svg>
  );
}
