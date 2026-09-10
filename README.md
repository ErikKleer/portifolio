# Portfolio

Personal portfolio, a full-stack developer working with TypeScript, React, Java, Python, AWS, Docker, and related tools.

## Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Phosphor Icons

## Requirements

- Node.js 20 or newer
- npm

## Running locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server. |
| `npm run build` | Creates the optimized production build and validates TypeScript. |
| `npm run start` | Serves the production build locally. |

## Project content

Most portfolio content is maintained in `src/app/page.tsx`:

- Profile data and contact links
- Navigation labels
- Projects and their preview images
- Technology groups
- Professional experience

Project preview assets are stored in `public/projects/`. Add an image there and reference it with a path such as `/projects/example.svg`.

The theme toggle stores the selected preference in the browser and follows the operating system theme until the visitor chooses one explicitly.

## Deployment

The app can be deployed to Vercel or another platform that supports Next.js. Build it with:

```bash
npm run build
```

Then serve the result with:

```bash
npm run start
```
