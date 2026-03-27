# Crew Management System - Folder Structure

This project follows a clean and organized folder structure to make it easy for any developer to understand and navigate.

## 📁 Folder Structure

```
src/
├── components/           # Reusable React components
│   ├── forms/           # Form-related components
│   │   └── Login.js
│   ├── layout/          # Layout components (Header, Footer, etc.)
│   │   └── Navbar.js
│   └── ui/              # UI components (Modals, Buttons, etc.)
│       ├── AssignmentModal.js
│       ├── SeafarerModal.js
│       ├── VesselModal.js
│       └── VoyageModal.js
├── config/              # Configuration files
│   └── index.js
├── constants/           # Application constants
│   └── index.js
├── data/               # Mock data and data-related files
│   └── mockData.js
├── hooks/              # Custom React hooks
│   └── useAuth.js
├── pages/              # Page components (routes)
│   ├── Admin.js
│   ├── Assignments.js
│   ├── Crew.js
│   ├── Dashboard.js
│   ├── Documents.js
│   ├── Reports.js
│   └── Vessels.js
├── styles/             # CSS files organized by component type
│   ├── components/     # Component-specific styles
│   │   ├── AddSeafarerForm.css
│   │   ├── AssignmentModal.css
│   │   ├── Login.css
│   │   ├── Navbar.css
│   │   ├── SeafarerModal.css
│   │   ├── VesselModal.css
│   │   └── VoyageModal.css
│   └── pages/          # Page-specific styles
│       ├── Admin.css
│       ├── Assignments.css
│       ├── Crew.css
│       ├── Dashboard.css
│       ├── Documents.css
│       ├── Reports.css
│       └── Vessels.css
├── App.css             # Global styles
├── App.js              # Main App component
└── index.js            # Entry point
```

## 📋 Component Categories

### 📝 Forms (`components/forms/`)
- Components that handle user input and form submissions
- Example: Login.js

### 🏗️ Layout (`components/layout/`)
- Components that define the structure and layout of the application
- Example: Navbar.js

### 🎨 UI Components (`components/ui/`)
- Reusable UI elements like modals, buttons, cards
- Examples: AssignmentModal.js, SeafarerModal.js, VesselModal.js, VoyageModal.js

### 📄 Pages (`pages/`)
- Main application pages that correspond to routes
- Each page typically imports layout and UI components

## 🎯 Styles Organization

### Component Styles (`styles/components/`)
- CSS files for reusable components
- Named exactly like their corresponding component files

### Page Styles (`styles/pages/`)
- CSS files for page-specific styling
- Named exactly like their corresponding page files

## 🔧 Configuration

### Constants (`constants/`)
- Application-wide constants like routes, status options, user roles
- Centralized for easy maintenance

### Config (`config/`)
- Application configuration including theme, API settings, pagination
- Environment-specific settings

### Data (`data/`)
- Mock data for development and testing
- Data structures and sample data

## 🚀 Getting Started

1. Install dependencies: `npm install`
2. Start development server: `npm start`
3. Open browser to `http://localhost:3000`

## 🔐 Login Credentials

- **Email:** admin@gmail.com
- **Password:** admin123

## 📦 Dependencies

- React 18.2.0
- React Router DOM 6.8.0
- React Scripts 5.0.1

## 🎨 Design System

The application uses a consistent design system with:
- Primary color: #1e3c72
- Secondary color: #2a5298
- Accent color: #667eea
- Consistent spacing and typography

## 🔄 Import Patterns

- Always use relative imports from the current file location
- Components import their styles from `../styles/components/` or `../styles/pages/`
- Pages import layout components from `../components/layout/`
- Pages import UI components from `../components/ui/`
- Use constants from `../constants/` for application-wide values
