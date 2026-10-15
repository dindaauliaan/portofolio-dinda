# Beyond the Code — Portfolio

Single-page portfolio (React + TypeScript + Vite) bergaya retro-modern scrapbook.

## Menjalankan
```bash
npm install
npm run dev      # development
npm run build    # production build
```

## Mengganti konten & foto
Semua teks, link proyek, dan path foto ada di `src/data/content.ts`.
Isi field `photo` / `image` dengan path gambar (mis. `/photos/amanda.jpg`, simpan di folder `public/photos/`).
Jika dikosongkan, ilustrasi placeholder akan tampil.

## Struktur
```
src/
  components/ui/   komponen kecil reusable (PhotoFrame, Sticker, Doodle, Button, WaveDivider)
  components/      Navbar, Marquee
  sections/        Hero, Meet, Journey, Works
  data/            content.ts + types.ts
  styles/          tokens.css, base.css, + css per section/komponen
```
