# D2 Clan Manager

A Destiny 2 clan management application built with SvelteKit, featuring authentication via Bungie.net API and internationalization support.

## Tech Stack

- **SvelteKit 2** - Full-stack framework
- **Svelte 5** - UI framework with latest runes API
- **Vite 7** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling with utility classes
- **DaisyUI** - UI component library
- **Auth.js** - Authentication with Bungie provider
- **Paraglide JS 2.0** - i18n/internationalization

## Prerequisites

- Node.js 18+
- npm, pnpm, or yarn
- Bungie.net API credentials (for authentication)
- OpenSSL (for generating secrets)

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and configure the following variables:

```bash
# Generate a secure secret for Auth.js
AUTH_SECRET=$(openssl rand -base64 32)

# Get your Bungie API credentials from https://www.bungie.net/en/Application
AUTH_BUNGIE_ID=your_bungie_client_id_here
AUTH_BUNGIE_SECRET=your_bungie_client_secret_here
```

**Important:** Never commit your `.env` file to version control!

### 3. Generate SSL Certificates (for HTTPS development)

The project is configured to use HTTPS in development. Make sure you have SSL certificates in the `certs/` directory:

- `certs/key.pem`
- `certs/cert.pem`

See `certs/readme.md` for instructions on generating self-signed certificates.

### 4. Compile Internationalization Messages

The Paraglide Vite plugin automatically compiles messages during development and build. However, you can manually compile them if needed:

```bash
npx @inlang/paraglide-js compile --project ./project.inlang --outdir ./src/lib/paraglide
```

This generates the translation runtime files needed for the i18n system.

## Development

Start the development server:

```bash
npm run dev
```

The app will be available at `https://127.0.0.1:5173/` (or the next available port).

**Note:** You may see a browser warning about the self-signed SSL certificate. This is normal for local development.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run TypeScript and Svelte checks
- `npm run check:watch` - Run checks in watch mode
- `npm run lint` - Check code formatting and linting
- `npm run format` - Auto-format code with Prettier

## Building for Production

To create a production build:

```bash
npm run build
```

The static site will be generated in the `build/` directory, ready to be deployed to any static hosting service.

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
d2-clan-manager/
├── src/
│   ├── lib/              # Shared components and utilities
│   │   ├── paraglide/    # Generated i18n files (auto-generated)
│   │   └── services/     # API services (Bungie API, etc.)
│   ├── routes/           # SvelteKit routes
│   │   ├── +layout.svelte
│   │   ├── +page.svelte
│   │   ├── clan/
│   │   ├── player/
│   │   └── signin/
│   ├── auth.ts           # Auth.js configuration
│   ├── hooks.server.ts   # Server-side hooks
│   └── app.html          # HTML template
├── messages/             # i18n translation files
│   ├── en.json
│   └── it.json
├── static/               # Static assets
├── project.inlang/       # i18n configuration
└── .env                  # Environment variables (not committed)
```

## Internationalization (i18n)

This project uses **Paraglide JS 2.0** for internationalization. The configuration is in `project.inlang/settings.json` and translation files are in `messages/`.

**Supported languages:**

- English (en) - default
- Italian (it)

**Strategy:** The app uses a combination of URL paths, cookies, and base locale to determine the user's language:

- URL-based: `/en/...` or `/it/...`
- Cookie fallback: Remembers user preference
- Base locale: Falls back to English if no locale is detected

To add a new language:

1. Add the language tag to `project.inlang/settings.json`
2. Create a new message file in `messages/` (e.g., `messages/fr.json`)
3. Compile messages: `npm run dev` (auto) or manually compile

## Known Issues

- **Security Vulnerabilities**: 4 low severity vulnerabilities in the `cookie` package (transitive dependency from SvelteKit). These will be fixed when SvelteKit updates the cookie package.

## Deployment

This project uses `@sveltejs/adapter-static` and generates a static site that can be deployed to:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any static hosting service

Make sure to set the `BASE_PATH` environment variable if deploying to a subdirectory.

## License

See [LICENSE](./LICENSE) file for details.
