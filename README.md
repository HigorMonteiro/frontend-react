# Frontend Project

A modern React TypeScript application built with Vite and TailwindCSS.

## Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Docker](https://www.docker.com/)

## Prerequisites

- Node.js (v16 or higher)
- pnpm

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```
3. Copy the environment file:
```bash
cp .env.example .env
```
4. Start the development server:
```bash
pnpm dev
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## Docker

To build and run the application using Docker:

```bash
# Build the image
docker build -t frontend .

# Run the container
docker run -p 3000:3000 frontend
```

```bash
# Use compose
docker compose up --build
```
## Project Structure

```
├── src/
│   ├── assets/         # Static assets
│   ├── components/     # React components
│   │   └── ui/        # Reusable UI components
│   ├── lib/           # Utility functions and libraries
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles
├── public/            # Public static files
├── .env              # Environment variables
├── .eslintrc.json    # ESLint configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json     # TypeScript configuration
└── vite.config.ts    # Vite configuration
```

## Development

The project uses:
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- TailwindCSS for styling
- Components from a UI library in `src/components/ui`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
