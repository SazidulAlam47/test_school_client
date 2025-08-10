# Test School - Competency Assessment Platform (Frontend)

A modern, responsive web application for digital competency assessment and certification built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### 🎯 Assessment System

- **Multi-level Testing**: A1, A2, B1, B2, C1, C2 competency levels
- **Timed Assessments**: 44-minute quiz sessions with auto-submit
- **Multiple Choice Questions**: Interactive MCQ interface with validation
- **Real-time Progress**: Step-by-step assessment tracking

### 👥 User Management

- **Role-based Access**: Student, Admin, and Supervisor roles
- **Authentication**: JWT-based secure login/logout
- **Profile Management**: User dashboard with progress tracking
- **Protected Routes**: Role-specific access control

### 📊 Dashboard Features

- **Student Dashboard**: Progress tracking, assessment history, certificates
- **Admin Panel**: Question creation and management
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Data Visualization**: Progress bars, badges, and status indicators

### 🏆 Certification System

- **Digital Certificates**: Automated certificate generation
- **Email Delivery**: Certificates sent to user email
- **Level Validation**: Achievement-based certification levels
- **Download Feature**: Certificate download functionality

## 🛠 Tech Stack

### Frontend Framework

- **React 19.1.1** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### Styling & UI

- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Shadcn/ui** - High-quality UI component library
- **Lucide React** - Beautiful SVG icons
- **Radix UI** - Accessible primitives

### State Management

- **Redux Toolkit** - Predictable state container
- **RTK Query** - Powerful data fetching and caching
- **React Hook Form** - Performant forms with validation

### Form Validation

- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Validation integration

### Routing & Navigation

- **React Router v7** - Declarative routing
- **Protected Routes** - Authentication-based navigation

### HTTP & API

- **Axios** - Promise-based HTTP client
- **JWT Decode** - Token handling utilities

### Development Tools

- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd test_school_client
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

    ```env
    VITE_API_BASE_URL=http://localhost:5000/api/v1
    ```

4. **Start development server**

    ```bash
    npm run dev
    ```

5. **Build for production**
    ```bash
    npm run build
    ```

## 🏗 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── dashboard/       # Dashboard-specific components
│   ├── form/           # Form components (UInput, USelect, etc.)
│   ├── shared/         # Shared components (Header, Footer, Logo)
│   └── ui/             # Shadcn UI components
├── constants/          # Application constants
├── helpers/            # Utility helpers (axios, etc.)
├── hooks/              # Custom React hooks
├── layouts/            # Layout components
├── pages/              # Page components
│   ├── auth/          # Authentication pages
│   ├── dashboard/     # Dashboard pages
│   └── Home/          # Landing page
├── redux/              # State management
│   ├── api/           # API slice definitions
│   └── features/      # Feature-specific slices
├── routes/             # Routing configuration
├── schemas/            # Zod validation schemas
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🎨 Component Library

### Custom Form Components

- **UFrom** - Form wrapper with validation
- **UInput** - Styled input component
- **USelect** - Dropdown select component
- **URadioSelect** - Radio group for MCQ

### UI Components (Shadcn)

- Cards, Buttons, Badges, Alerts
- Tables, Progress bars, Skeletons
- Sidebars, Sheets, Tooltips

## 🔐 Authentication

The application uses JWT-based authentication with:

- **Access Tokens** - Stored in localStorage
- **Protected Routes** - Role-based access control
- **Auto Logout** - Token expiration handling
- **Refresh Logic** - Seamless token renewal

## 🎯 User Roles

### Student

- Take assessments
- View progress and history
- Download certificates
- Access personal dashboard

### Admin

- Create and manage questions
- View all user data
- System administration

### Supervisor

- Monitor student progress
- Generate reports
- Manage assessments

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind CSS
- **Responsive breakpoints**: sm, md, lg, xl
- **Adaptive layouts** for different screen sizes
- **Touch-friendly** interface elements

## 🚦 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## 📋 Assessment Flow

1. **User Login** - Authenticate with credentials
2. **Dashboard** - View current step and progress
3. **Start Assessment** - Begin timed quiz session
4. **Answer Questions** - Complete MCQ within time limit
5. **Auto-submit** - Automatic submission when time expires
6. **View Results** - Check scores in test history
7. **Receive Certificate** - Get digital certificate via email

## 🏆 Certification Levels

- **A1** - Basic User (Beginner)
- **A2** - Basic User (Elementary)
- **B1** - Independent User (Intermediate)
- **B2** - Independent User (Upper Intermediate)
- **C1** - Proficient User (Advanced)
- **C2** - Proficient User (Mastery)

## 🔧 Configuration

### Environment Variables

```env
VITE_API_BASE_URL=<backend-api-url>
```

### Build Configuration

- **Vite** for fast builds and HMR
- **TypeScript** for type safety
- **ESLint** for code quality

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Contact the development team

## 🔗 Related Projects

- **Backend API** - Node.js/Express server
- **Admin Dashboard** - Administrative interface
- **Mobile App** - React Native application

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
