# Widget Dashboard

A modern, customizable dashboard application built with Next.js that allows users to add, remove, and rearrange various widgets including weather, currency exchange rates, news, and a clock. This project demonstrates best practices for scalable React/Next.js application architecture, component composition, and clean code organization.

## 📋 Overview

This dashboard application provides a flexible, user-friendly interface where users can customize their workspace by managing multiple widgets. Each widget displays real-time data from external APIs, and the entire layout is fully customizable through an intuitive drag-and-drop-like interface.

### Key Features

- **Widget Management**: Add, remove, and reorder widgets dynamically
- **Real-time Data**: Weather, currency exchange rates, and news updates
- **Persistent State**: Widget configurations are saved in browser storage
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Dark Mode Support**: Built-in dark mode styling
- **Type Safety**: Full TypeScript implementation for enhanced developer experience

## 🛠️ Tech Stack

### Core Framework & Libraries
- **Next.js 16.0.7** - React framework with App Router for server-side rendering and routing
- **React 19.2.0** - UI library for building component-based interfaces
- **TypeScript 5** - Type-safe JavaScript for better code quality and developer experience

### State Management
- **Zustand 5.0.9** - Lightweight state management with persistence middleware

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework for rapid UI development
- **PostCSS** - CSS processing and optimization

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Next.js ESLint Config** - Optimized linting rules for Next.js projects

## 🏗️ Component Architecture

This project follows the **Container/Presentational Pattern** (also known as Smart/Dumb Components) to achieve clear separation of concerns between business logic and UI presentation.

### Design Principles

1. **Separation of Concerns**: Logic and presentation are completely separated
2. **Reusability**: UI components can be reused across different contexts
3. **Testability**: Logic and UI can be tested independently
4. **Maintainability**: Changes to business logic don't affect UI and vice versa

### Component Structure

#### Container Components (Logic Layer)
Container components are responsible for:
- Data fetching and API calls
- State management (using React hooks)
- Business logic and data transformation
- Side effects (timers, intervals, etc.)

**Example**: `WeatherWidget.tsx`
```typescript
// Handles data fetching, state management, and side effects
export function WeatherWidget({ city = "Tokyo" }) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Data fetching logic
    // Auto-refresh logic
  }, [city]);

  return <WeatherWidgetUI weather={weather} loading={loading} />;
}
```

#### Presentational Components (UI Layer)
Presentational components are responsible for:
- Rendering UI based on props
- Styling and layout
- User interaction handling (passed as callbacks)
- No business logic or data fetching

**Example**: `WeatherWidgetUI.tsx`
```typescript
// Pure UI component - receives data via props
export function WeatherWidgetUI({ weather, loading }: Props) {
  if (loading) return <LoadingState />;
  return <WeatherDisplay data={weather} />;
}
```

### Benefits of This Architecture

- **Single Responsibility**: Each component has one clear purpose
- **Easy Testing**: UI components can be tested with mock data, logic components can be tested in isolation
- **Code Reusability**: UI components can be reused with different data sources
- **Better Collaboration**: Frontend and backend developers can work independently
- **Scalability**: Easy to add new widgets or modify existing ones without affecting other components

## 📁 Directory Structure

The project follows Next.js best practices for medium to large-scale applications, with a clear separation of concerns and scalable architecture.

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
│
├── components/            # Reusable React components
│   ├── ui/                # Generic UI components
│   │   ├── WidgetManager.tsx
│   │   └── index.ts       # Barrel export
│   ├── widgets/           # Widget-specific components
│   │   ├── ClockWidget.tsx          # Container component
│   │   ├── ClockWidgetUI.tsx        # Presentational component
│   │   ├── WeatherWidget.tsx
│   │   ├── WeatherWidgetUI.tsx
│   │   ├── CurrencyWidget.tsx
│   │   ├── CurrencyWidgetUI.tsx
│   │   ├── NewsWidget.tsx
│   │   ├── NewsWidgetUI.tsx
│   │   ├── WidgetContainer.tsx
│   │   └── index.ts       # Barrel export
│   └── index.ts           # Barrel export for all components
│
├── hooks/                 # Custom React hooks (for future expansion)
│
├── lib/                   # Business logic and utilities
│   ├── api/               # API client functions
│   │   ├── config.ts      # API configuration and constants
│   │   ├── weather.ts     # Weather API client
│   │   ├── currency.ts   # Currency API client
│   │   ├── news.ts       # News API client
│   │   └── index.ts      # Barrel export
│   └── index.ts          # Barrel export
│
├── store/                 # State management
│   ├── widgetStore.ts     # Zustand store for widget state
│   └── index.ts          # Barrel export
│
└── types/                 # TypeScript type definitions
    ├── widget.ts         # Widget-related types
    └── index.ts          # Barrel export
```

### Directory Structure Rationale

#### `src/` Directory
- **Purpose**: Separates application code from configuration files
- **Benefit**: Keeps root directory clean and makes it clear where all source code lives
- **Best Practice**: Recommended for medium to large-scale Next.js projects

#### `app/` Directory
- **Purpose**: Next.js App Router for file-based routing
- **Benefit**: Automatic route generation, layout nesting, and server components support
- **Structure**: Each folder represents a route, enabling colocation of route-specific components

#### `components/` Directory
- **Purpose**: Houses all reusable React components
- **Organization**:
  - `ui/`: Generic, reusable UI components (buttons, cards, etc.)
  - `widgets/`: Feature-specific widget components
- **Benefit**: Clear categorization makes it easy to find and maintain components

#### `lib/` Directory
- **Purpose**: Contains business logic, API clients, and utility functions
- **Structure**: 
  - `api/`: API-related code organized by domain (weather, currency, news)
  - Each API has its own file for better maintainability
- **Benefit**: 
  - Easy to add new APIs without cluttering
  - Clear separation of API configuration and implementation
  - Scalable structure for large applications

#### `store/` Directory
- **Purpose**: Centralized state management using Zustand
- **Benefit**: Single source of truth for application state, easy to extend

#### `types/` Directory
- **Purpose**: TypeScript type definitions
- **Benefit**: Shared types across the application, better type safety

#### `hooks/` Directory
- **Purpose**: Custom React hooks for reusable logic
- **Benefit**: Promotes code reuse and separation of concerns

#### Barrel Exports (`index.ts`)
- **Purpose**: Simplifies imports and provides a clean public API for each module
- **Benefit**: 
  - Cleaner import statements: `import { Widget } from '@/components'` instead of `import { Widget } from '@/components/widgets/Widget'`
  - Easier refactoring: Change internal structure without updating all imports
  - Better encapsulation: Only export what should be public

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn (package manager)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dashboard-app
```

2. Install dependencies:
```bash
yarn install
```

3. Set up environment variables (optional):
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_WEATHER_API_KEY=your_weather_api_key
NEXT_PUBLIC_NEWS_API_KEY=your_news_api_key
```

Note: The application works without API keys by using mock data.

4. Run the development server:
```bash
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
yarn build
yarn start
```

## 📝 Key Design Decisions

### Why Container/Presentational Pattern?
- **Scalability**: As the application grows, separating logic from UI makes it easier to add features
- **Testing**: UI components can be tested with simple props, logic can be tested independently
- **Reusability**: UI components can be reused with different data sources or in different contexts

### Why Separate API Files?
- **Maintainability**: Each API has its own file, making it easy to update or debug
- **Scalability**: Adding new APIs doesn't require modifying existing code
- **Organization**: Clear structure makes it easy to find and understand API-related code

### Why Barrel Exports?
- **Clean Imports**: Simplifies import statements throughout the codebase
- **Encapsulation**: Only exports what should be public, hiding implementation details
- **Refactoring**: Easier to reorganize code without breaking imports

## 🎯 Future Enhancements

- [ ] Add more widget types (calendar, notes, etc.)
- [ ] Implement drag-and-drop for widget reordering
- [ ] Add widget configuration options
- [ ] Implement user authentication and personalized dashboards
- [ ] Add unit and integration tests
- [ ] Implement error boundaries for better error handling
- [ ] Add loading skeletons for better UX

## 📄 License

This project is private and intended for portfolio purposes.

---

Built with ❤️ using Next.js and React
