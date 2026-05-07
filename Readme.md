# Kumasi City Marathon 2026

A modern, high-impact web interface for Ghana's premier road race. This repository contains the front-end components for the **Kumasi City Marathon**, featuring a "brutalist-chic" aesthetic characterized by bold typography, high-contrast colors, and interactive, staggered layouts.

**Live Demo:** [kumasi-marathon.vercel.app](https://kumasi-marathon.vercel.app/)

***

## 🎨 Design Philosophy

The project is inspired by modern sports branding, utilizing:

- **Typography:** Bold, uppercase headlines with tight tracking and leading to create a "heavy" visual anchor.
- **Color Palette:** The brand identity is built on a high-contrast palette defined in [tailwind.config.js](file:///c:/Users/dell/OneDrive/Documents/File%20Manager/Group1.A-D/C/Code-Base/Websites/Kumasi-Marathon/ui/tailwind.config.js):
  - **Blue:** `#0083DB`
  - **Light:** `#F4FBFF`
  - **Black:** `#000000`
  - **White:** `#FFFFFF`
- **Layout:** A mixture of structured grids and "floating" absolute elements (badges and icons) that provide a dynamic feel on desktop and a focused, stacked experience on mobile.

***

## � Project Structure

The project is organized into a modular section-based architecture located in the `ui/` directory:

```text
ui/
├── src/
│   ├── sections/           # Individual page sections
│   │   ├── MarathonHero/    # Entry point & CTA
│   │   ├── MarathonStory/   # "About" & brand narrative
│   │   ├── MarathonAbout/   # Event details
│   │   ├── MarathonRoutes/  # Race maps & paths
│   │   ├── MarathonSchedule/# Timeline of events
│   │   └── ...              # Other modular sections
│   ├── App.tsx             # Main application entry
│   └── index.tsx           # React DOM rendering
├── tailwind.config.js      # Custom theme & color tokens
└── vite.config.ts          # Build configuration
```

***

## 🚀 Getting Started

To run this project locally, follow these steps:

1. **Navigate to the UI directory:**
   ```bash
   cd ui
   ```
2. **Install dependencies:**
   ```bash
   pnpm install
   ```
3. **Start the development server:**
   ```bash
   pnpm run dev
   ```

The application will be available at `http://localhost:5173/` (or the port specified in your terminal).

***

## 🛠️ Tech Stack

- **React:** For component-based UI development.
- **Vite:** Fast build tool and development server.
- **Tailwind CSS:** For utility-first styling and responsive design.
- **Lucide React:** For consistent iconography.

***

## 📱 Responsive Breakpoints

| Device      | Behavior                                                                                  |
| :---------- | :---------------------------------------------------------------------------------------- |
| **Mobile**  | Single-column stack; badge moves to top; text max-width constrained for readability.      |
| **Tablet**  | Transition to wider typography; side images remain hidden or tucked.                                                |
| **Desktop** | Full 12-column grid; images pinned to far left/right; secondary decorative icons visible. |

