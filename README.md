# Movie App Challenge

Movie App Challenge is a web application for browsing and rating movies. It's built with Next.js, React, and Tailwind CSS, providing a responsive and interactive user experience.

## Features

- Browse movie listings
- View detailed movie information
- Rate movies and store ratings locally
- Responsive design for both desktop and mobile devices

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 20 or later)
- pnpm (version 9 or later)

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/jaya-movie-app.git
   cd jaya-movie-app
   ```

2. Install dependencies using pnpm:
   ```
   pnpm install
   ```

3. Run the development server:
   ```
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

The project structure is organized as follows:
```plaintext
.
├── public                  // Static assets and files served directly to clients
└── src                     // Source code directory
    ├── actions             // Server actions for handling form submissions and API requests
    ├── app                 // Next.js app router pages and layouts
    │   ├── item            // Movie item page directory
    │   │   └── [id]        // Dynamic route for individual movie pages
    ├── components          // Reusable React components
    │   ├── app             // Application-specific components
    │   └── ui              // Generic UI components
    ├── hooks               // Custom React hooks
    ├── lib                 // Utility functions and shared logic
    ├── schemas             // Data validation schemas
    └── types               // TypeScript type definitions
```

## Technologies Used

- [Next.js](https://nextjs.org/) - A React framework for building server-side rendered and statically generated web applications
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript
- [Radix UI](https://www.radix-ui.com/) - A low-level UI component library for building high-quality, accessible design systems and web apps
- [shadcn/ui](https://ui.shadcn.com/) - A collection of re-usable components built using Radix UI and Tailwind CSS
- [Zod](https://github.com/colinhacks/zod) - TypeScript-first schema validation with static type inference


## License

This project is licensed under the MIT License.

