# news-app-poc
# React Next.js Application

This is a React application built using Next.js, TypeScript, and Material-UI. It is designed as a proof of concept (POC) for a news website inspired by BBC News. The application demonstrates routing, Material-UI components, and responsive design.

## Features

- **Next.js Framework**: Utilizes the `app` directory for building modern and scalable React applications.
- **TypeScript**: Ensures type safety throughout the application.
- **Material-UI**: Provides a visually appealing and responsive user interface.
- **Routing**: Implements navigation for pages like Home, News, Sports, Business, Login, and Register.
- **Responsive Layout**: Ensures the application is accessible and visually appealing on various devices.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/your-project.git
   cd your-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

```
my-app/
├── app/
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Home page component
│   ├── register/       # Folder for the Register page
│   │   └── page.tsx    # Register page component
│   └── ...             # Other routes (news, sport, business, etc.)
├── components/
│   ├── Header.tsx      # Header component with navigation
│   └── ...             # Other shared components
├── public/             # Public assets like images
├── styles/             # Global and component-specific styles
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── ...
```

## Pages

### 1. Home Page
The default landing page displaying a brief introduction.

### 2. News, Sports, and Business Pages
Separate pages accessible via navigation links in the header.

### 3. Register Page
A registration form split into two sections:
- **Right Section**: Contains the form fields for user input (e.g., Full Name, Email, Password).
- **Left Section**: Displays an image or illustration.

### 4. Login Page
A simple login form for user authentication.

## Components

### Header Component
Located in `components/Header.tsx`, this component provides:
- Navigation links for Home, News, Sports, and Business.
- Login and Register buttons on the right side.

### Register Component
The Register page (in `app/register/page.tsx`) features:
- A right-aligned form for user input.
- A left-aligned image for visual enhancement.
- Fully responsive layout using Material-UI's `Grid` and `Box` components.

## Styling

The application uses Material-UI for styling and layout. Custom styles can be added in the `styles/` directory or inline using Material-UI's `sx` prop.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm start`: Runs the application in production mode.



