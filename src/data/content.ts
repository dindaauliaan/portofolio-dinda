import type { JourneyStep, NavItem, Project } from './types';

export const brand = 'Beyond the Code';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

/** Isi path foto (mis. '/photos/amanda.jpg', simpan di public/photos) untuk mengganti ilustrasi placeholder. */
export const photos = {
  hero: '',
  portrait: '',
};

export const marqueeItems = [
  'git commit',
  '100% responsive',
  'html / css / javascript',
  'react',
  'next.js',
  'creative engineering',
];

export const journey: JourneyStep[] = [
  {
    year: '2024',
    title: 'building fundamentals',
    text: 'Diving into the core fundamentals. Sharpened my problem-solving logic with C, built my very first static layouts with raw HTML/CSS, and got hands-on with databases using MySQL & PostgreSQL. The year curiosity turned into real code.',
    tags: ['C', 'HTML', 'CSS', 'MySQL', 'PostgreSQL'],
    tone: 'butter',
    tilt: -3,
  },
  {
    year: '2025',
    title: 'leveling up & cloud',
    text: 'Transitioning toward modern and efficient development: designing responsive UIs with Tailwind CSS, building structured backends using Laravel, and managing database schemas via PostgreSQL. This year also marks the beginning of my journey into cloud computing with AWS, gaining an understanding of how applications are hosted and run reliably on the internet.',
    tags: ['Laravel', 'Tailwind', 'PostgreSQL', 'AWS'],
    tone: 'mint',
    tilt: 2.5,
  },
  {
    year: '2026',
    title: 'scaling multi-platform',
    text: 'Exploring multi-platform and enterprise ecosystems. Building interactive, type-safe web interfaces with React & TypeScript, designing scalable backend APIs via ASP.NET Core, and extending reach to mobile applications using Flutter. Always ready to explore new things.',
    tags: ['React', 'TypeScript', 'ASP.NET', 'Flutter'],
    tone: 'sky',
    tilt: -2,
  },
];

export const projects: Project[] = [
  {
    id: 'fintech',
    index: '01',
    name: 'Fintech Dashboard',
    tags: ['React', 'Tailwind', 'Redux'],
    description:
      'Dashboard keuangan dengan integrasi data kompleks dan visualisasi chart interaktif untuk memantau arus kas secara real-time.',
    tone: 'mint',
    frame: 'tape',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'ecommerce',
    index: '02',
    name: 'E-Commerce Hub',
    tags: ['Next.js', 'Stripe', 'Node.js'],
    description:
      'Toko online lengkap: keranjang belanja, proses pembayaran, dan transisi halaman yang mulus.',
    tone: 'peach',
    frame: 'polaroid',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'portfolio',
    index: '03',
    name: 'Creative Portfolio',
    tags: ['HTML/CSS', 'JS', 'GSAP', 'Canvas'],
    description:
      'Website interaktif yang penuh animasi kustom, dibuat dengan GSAP dan Canvas.',
    tone: 'lilac',
    frame: 'torn',
    liveUrl: '#',
    githubUrl: '#',
  },
];
