# SkillSwap - Skill Exchange Platform

A modern, comprehensive skill exchange platform built with Next.js, TypeScript, and Tailwind CSS. SkillSwap allows users to teach and learn skills from each other using a points-based system.

## 🚀 Features

### Core Functionality
- **User Authentication**: Complete login, registration, and password recovery system
- **User Profiles**: Detailed profiles with skills, reviews, and achievements
- **Skill Management**: Browse, search, and manage skills with detailed information
- **Points System**: Earn and spend points for skill exchanges
- **Real-time Chat**: Communicate with other users
- **Advanced Search**: Filter by category, level, price, rating, and location
- **Dashboard**: Comprehensive analytics and management tools

### Design & UX
- **Modern UI**: Sophisticated black and green color scheme
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Smooth Animations**: Framer Motion powered transitions
- **Dark/Light Mode**: Automatic theme switching support

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Server Components**: Next.js App Router with RSC support
- **Component Library**: 54+ shadcn/ui components
- **Form Handling**: React Hook Form with validation
- **State Management**: React hooks and context
- **Icons**: Lucide React icon library

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (New York style)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Validation**: Zod
- **State**: React Context + Hooks

## 📁 Project Structure

\`\`\`
skillswap/
├── app/                          # Next.js App Router
│   ├── auth/                     # Authentication pages
│   │   ├── login/page.tsx        # Login page
│   │   ├── register/page.tsx     # Registration page
│   │   └── forgot-password/page.tsx # Password recovery
│   ├── dashboard/page.tsx        # User dashboard
│   ├── profile/                  # Profile management
│   │   ├── page.tsx             # Profile view
│   │   └── edit/page.tsx        # Profile editing
│   ├── skills/                   # Skill management
│   │   ├── page.tsx             # Skills browser
│   │   ├── [id]/page.tsx        # Individual skill view
│   │   └── manage/page.tsx      # Skill management
│   ├── search/page.tsx          # Advanced search
│   ├── categories/page.tsx      # Category browser
│   ├── points/page.tsx          # Points management
│   ├── chat/page.tsx            # Chat interface
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components (54 components)
│   ├── navigation.tsx           # Main navigation
│   ├── language-toggle.tsx      # Language switcher
│   └── auth-guard.tsx           # Authentication wrapper
├── lib/                         # Utility functions
│   ├── utils.ts                 # General utilities
│   └── i18n.ts                  # Internationalization
├── hooks/                       # Custom React hooks
│   ├── use-mobile.tsx           # Mobile detection
│   └── use-toast.ts             # Toast notifications
└── public/                      # Static assets
    └── images/                  # Project images
\`\`\`

## 🎨 Design System

### Color Palette
- **Primary**: Black (#000000) and Green (#22c55e)
- **Background**: Pure black and white
- **Accents**: Various shades of green
- **Text**: High contrast black/white combinations

### Typography
- **Headings**: Inter font family
- **Body**: Inter font family
- **Monospace**: Geist Mono

### Components
The project includes 54 pre-built UI components:
- Forms: Button, Input, Label, Textarea, Select, Checkbox, Radio
- Layout: Card, Sheet, Dialog, Tabs, Accordion
- Navigation: Navigation Menu, Breadcrumb, Pagination
- Data: Table, Avatar, Badge, Progress
- Feedback: Alert, Toast, Skeleton, Tooltip

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation Options

#### Option 1: Using shadcn CLI (Recommended)

1. **Create a new project with shadcn CLI**
   \`\`\`bash
   npx shadcn@latest init skillswap
   cd skillswap
   \`\`\`

2. **Or add to existing project**
   \`\`\`bash
   npx shadcn@latest init
   \`\`\`

3. **Install all required components**
   \`\`\`bash
   npx shadcn@latest add button input label card sheet badge avatar progress tabs select checkbox textarea slider
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

#### Option 2: Manual Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd skillswap
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### shadcn CLI Commands

\`\`\`bash
# Initialize shadcn in your project
npx shadcn@latest init

# Add individual components
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card

# Add multiple components at once
npx shadcn@latest add button input label card sheet badge

# Update components
npx shadcn@latest update

# List available components
npx shadcn@latest list
\`\`\`

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📱 Pages Overview

### Authentication System
- **Login** (`/auth/login`): User authentication with email/password
- **Register** (`/auth/register`): New user registration with validation
- **Forgot Password** (`/auth/forgot-password`): Password recovery flow

### Main Application
- **Home** (`/`): Landing page with featured skills and categories
- **Dashboard** (`/dashboard`): Personal dashboard with analytics and quick actions
- **Profile** (`/profile`): User profile with skills, reviews, and achievements
- **Profile Edit** (`/profile/edit`): Profile management and settings

### Skill Management
- **Skills Browser** (`/skills`): Browse all available skills with filtering
- **Skill Details** (`/skills/[id]`): Detailed skill view with booking
- **Manage Skills** (`/skills/manage`): Instructor dashboard for skill management

### Discovery & Search
- **Search** (`/search`): Advanced search with multiple filters
- **Categories** (`/categories`): Browse skills by category

### Communication & Points
- **Chat** (`/chat`): Real-time messaging system
- **Points** (`/points`): Points management and purchase system

## 🔧 shadcn Configuration

The project is pre-configured with shadcn/ui. The configuration file `components.json` includes:

\`\`\`json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
\`\`\`

### Required shadcn Components

This project uses the following shadcn/ui components:

\`\`\`bash
# Core UI Components
npx shadcn@latest add button input label textarea
npx shadcn@latest add card sheet dialog tabs accordion
npx shadcn@latest add select checkbox radio-group slider
npx shadcn@latest add avatar badge progress separator
npx shadcn@latest add alert toast skeleton tooltip
npx shadcn@latest add navigation-menu breadcrumb pagination
npx shadcn@latest add table dropdown-menu popover
\`\`\`

## 📚 Key Features Explained

### Points System
- Users earn points by teaching skills
- Points can be spent to learn from others
- Multiple payment options for purchasing points
- Transaction history and analytics

### Skill Management
- Create detailed skill listings with curriculum
- Set pricing and availability
- Manage booking requests
- Track performance analytics

### Search & Discovery
- Advanced filtering by multiple criteria
- Category-based browsing
- User and skill search
- Sorting options

### User Profiles
- Comprehensive profile information
- Skill portfolios (teaching and learning)
- Reviews and ratings system
- Achievement badges

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the component library at [shadcn/ui](https://ui.shadcn.com)

## 🔄 Updates

The project is actively maintained with regular updates for:
- Security patches
- New features
- Performance improvements
- UI/UX enhancements

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
