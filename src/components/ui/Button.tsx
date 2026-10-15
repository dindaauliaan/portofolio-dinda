import type { AnchorHTMLAttributes } from 'react';
import '../../styles/button.css';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'lilac' | 'butter' | 'ink' | 'scribble';
}

export default function Button({ variant = 'lilac', className = '', ...rest }: Props) {
  return <a className={`btn btn--${variant} ${className}`} {...rest} />;
}
