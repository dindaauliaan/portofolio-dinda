import type { CSSProperties, ReactNode } from 'react';
import '../../styles/doodle.css';

interface Props {
  children: ReactNode;
  rotate?: number;
  style?: CSSProperties;
  className?: string;
}

/** Teks tulisan tangan ("move me!", "happy coding!"). */
export default function Scribble({ children, rotate = -6, style, className = '' }: Props) {
  return (
    <span className={`scribble ${className}`} style={{ transform: `rotate(${rotate}deg)`, ...style }}>
      {children}
    </span>
  );
}
