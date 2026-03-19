# Work at Bellagent

Hiring platform for **Bellagent** — [workatbellagent.com](https://workatbellagent.com). Built with Next.js and Tailwind CSS, styled to match [bellagent.ai](https://bellagent.ai).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Structure

- **Home** (`/`) — Hero, “Trusted by” logos, “Why join” cards, CTA
- **Jobs** (`/jobs`) — Open roles list; each role links to a detail page
- **Job detail** (`/jobs/[id]`) — Role description and apply CTA
- **About** (`/about`) — Company overview
- **Culture** (`/culture`) — Team and culture

Assets from `./data` are copied to `public/data` and used for the Bellagent logo, partner logos (Enova, Staffbase), and icons.

## Styling

- **Colors:** Bellagent purple (`#602CFB`), dark (`#293056`), lavender backgrounds (`#F2F2FF`, `#E9E7FF`)
- **Typography:** System font stack; gradient text for “AI-powered” and key phrases
- **Layout:** Sticky header, centered content, light pattern background
