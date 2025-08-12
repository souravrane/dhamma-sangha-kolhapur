# Dhamma Sangha Kolhapur

A community Buddhist blog that presents Buddha's teachings in a scientific, evidence-aware manner.

## Features

- **Minimal, Mystic Design**: Centered lotus background with low opacity
- **Scientific Approach**: Evidence-based content with research citations
- **Community Focus**: Join forms, event management, and member engagement
- **MDX Support**: Rich content with custom components (YouTube, citations, etc.)
- **Admin Dashboard**: Content management for posts, events, and gallery
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Database**: Prisma + SQLite (dev) / PostgreSQL (prod)
- **Authentication**: NextAuth.js (email magic link)
- **Content**: MDX with custom components
- **Deployment**: Vercel-ready

## Brand Colors

- **Hunyadi Yellow**: #f6bd60
- **Linen**: #f7ede2
- **Tea Rose Red**: #f5cac3 (lotus accent)
- **Cambridge Blue**: #84a59d
- **Light Coral**: #f28482

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd sanghadhammakolhapur
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp env.example .env
# Edit .env with your configuration
```

4. Set up the database:

```bash
npm run db:push
npm run db:seed
```

5. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Environment Variables

```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Email (for magic link authentication)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="noreply@sanghadhammakolhapur.com"
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema changes
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Prisma Studio

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── admin/             # Admin dashboard
│   ├── blogs/             # Blog listing and posts
│   ├── contact/           # Contact form
│   ├── events/            # Events listing
│   ├── gallery/           # Image gallery
│   ├── join/              # Community join form
│   └── layout.tsx         # Root layout with lotus background
├── components/             # Reusable components
│   ├── mdx/               # MDX-specific components
│   └── ui/                # UI components
├── lib/                    # Utility functions and config
│   └── theme.ts           # Theme configuration
content/
└── posts/                  # MDX blog posts
prisma/
├── schema.prisma          # Database schema
└── seed.ts                # Database seed data
```

## Content Management

### Blog Posts

Posts are written in MDX format and stored in `content/posts/`. Each post includes:

- Frontmatter with metadata (title, excerpt, tags, etc.)
- MDX content with custom components
- Support for YouTube embeds, citations, and callouts

### Custom MDX Components

- `YouTube` - Embed YouTube videos
- `Citation` - Academic citations (coming in Step 3)
- `Footnote` - Reference footnotes (coming in Step 3)
- `Callout` - Highlighted information boxes (coming in Step 3)

## Database Models

- **User**: Community members with roles (admin, editor, viewer)
- **Post**: Blog posts with MDX content paths
- **Event**: Community events and activities
- **Lead**: Community join requests
- **Media**: Gallery images and media files

## Deployment

The application is configured for Vercel deployment:

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on git push

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please contact the development team or create an issue in the repository.
