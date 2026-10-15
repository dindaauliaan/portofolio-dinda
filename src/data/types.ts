export type Tone = 'mint' | 'peach' | 'sky' | 'butter' | 'lilac';

export interface NavItem {
  label: string;
  href: string;
}

export interface JourneyStep {
  year: string;
  title: string;
  text: string;
  tags: string[];
  tone: Tone;
  photo?: string;
  tilt: number;
}

export interface Project {
  id: string;
  index: string;
  name: string;
  tags: string[];
  description: string;
  tone: Tone;
  image?: string;
  frame: 'tape' | 'polaroid' | 'torn';
  liveUrl: string;
  githubUrl: string;
}
