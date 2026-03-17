# Burger Bliss - Gourmet Burger Shop Website

A creative React website for a hamburger shop featuring online ordering, menu customization, and a modern responsive design.

## Features

- **Home Page**: Hero section with call-to-action, feature highlights, and daily specials
- **Menu**: Browse burgers with categories, view details, and customize toppings
- **Cart**: Manage items, adjust quantities, and proceed to checkout
- **Checkout**: Simple checkout form with order summary and confirmation
- **About**: Learn about the shop's story, mission, and team
- **Contact**: Contact form and business information

## Technology Stack

- **Frontend**: React 19 with TypeScript
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS v4 with custom hamburger-themed colors
- **State Management**: React Context API for cart functionality
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository (or copy the files)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/       # Reusable components
│   └── Header.tsx    # Navigation header
├── contexts/         # React contexts
│   ├── CartContext.tsx      # Cart provider
│   ├── CartContextInstance.ts # Cart context definition
│   └── useCart.ts           # Custom hook for cart
├── pages/            # Page components
│   ├── Home.tsx
│   ├── Menu.tsx
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── App.tsx           # Main app with routing
├── App.css           # App-specific styles
└── index.css         # Global styles with Tailwind imports
```

## Customization

### Colors

The theme uses custom Tailwind colors defined in `tailwind.config.js`:
- `hamburger-bun`: Bun color
- `hamburger-meat`: Meat patty color
- `hamburger-lettuce`: Lettuce color
- `hamburger-tomato`: Tomato color
- `hamburger-cheese`: Cheese color
- `hamburger-onion`: Onion color

### Menu Items

To add or modify burgers, edit the `burgers` array in `src/pages/Menu.tsx`.

## OpenCode Command

A custom command `/prompt` has been added for optimizing prompts using Anthropic's prompting best practices. Use it in the OpenCode TUI:

```
/prompt this is the prompt to optimize
```

The command will analyze your prompt and provide an optimized version with explanations, applying best practices such as clarity, examples, XML structuring, and more.

Example optimization:
```
> /prompt create a react component
<optimized_prompt>
[Optimized prompt with role, examples, XML tags, etc.]
</optimized_prompt>
<explanation>
[Explanation of changes]
</explanation>
```

## License

MIT License - feel free to use this project for learning or as a starting point for your own burger shop website.