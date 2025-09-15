# 🚀 Prem Kumar Gupta - Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14.2.10-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Latest-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-Latest-black?style=for-the-badge&logo=three.js)](https://threejs.org/)

> A modern, responsive developer portfolio showcasing my journey in software development, cybersecurity, and AI/ML. Built with cutting-edge technologies and featuring smooth animations, bento-style layout, and dynamic 3D elements.

## 🌟 Live Demo

**🔗 [View Live Portfolio](https://prem-kr-gupta-dev.vercel.app/)**

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Sections Overview](#sections-overview)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

## 🎯 About

This portfolio represents my journey as a Software Development Engineer with expertise in full-stack development, cybersecurity, and artificial intelligence. The project showcases my professional experience, technical projects, certifications, and achievements in an interactive and visually appealing format.

### Key Highlights:
- 🎓 **Education**: NIT Meghalaya (Computer Science & Engineering)
- 💼 **Experience**: Software Development Engineer Intern at Bluestock Fintech
- 🔒 **Specialization**: Cybersecurity, Full-Stack Development, AI/ML
- 🏆 **Achievements**: Oracle Cloud Infrastructure 2025 Generative AI Professional Certified
- 👥 **Leadership**: Head of Development - Coding Club NIT Meghalaya

## ✨ Features

### 🎨 Design & UX
- **Modern Bento Layout**: Grid-based design with dynamic card arrangements
- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Smooth Animations**: Engaging transitions and hover effects
- **3D Elements**: Interactive Three.js components for enhanced user experience
- **Dark Theme**: Sleek dark mode design

### 🚀 Technical Features
- **Next.js 14**: Latest features with App Router and server components
- **TypeScript**: Type-safe development with better code quality
- **Performance Optimized**: Fast loading with optimized images and components
- **SEO Friendly**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant with proper ARIA labels

### 📱 Sections
- **Hero Section**: Dynamic introduction with animated elements
- **About Grid**: Bento-style cards showcasing personality and skills
- **Experience Timeline**: Professional work experience with detailed descriptions
- **Projects Showcase**: Featured projects with live demos and source code links
- **Achievements**: Certifications, competitions, and leadership roles
- **Contact Form**: Direct communication with integrated social links

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18.3.1, Next.js 14.2.10, TypeScript |
| **Styling** | Tailwind CSS, CSS Modules |
| **3D Graphics** | Three.js, React Three Fiber |
| **Animations** | Framer Motion, CSS Animations |
| **Icons** | Lucide React, Custom SVG Icons |
| **Deployment** | Vercel |
| **Development** | ESLint, Prettier |

## 🚦 Getting Started

### Prerequisites
- Node.js (v18.17.0 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PremKrGuptaOp/PremKrGupta_dev.git
   cd PremKrGupta_dev
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000` to view the portfolio

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
PremKrGupta_dev/
├── components/           # Reusable React components
│   ├── ui/              # UI components (buttons, cards, etc.)
│   ├── Hero.tsx         # Hero section component
│   ├── Grid.tsx         # Bento grid layout
│   ├── Experience.tsx   # Work experience section
│   ├── Projects.tsx     # Projects showcase
│   └── ...
├── config/              # Configuration files
│   └── index.ts         # Site configuration and metadata
├── data/                # Data files
│   └── index.ts         # Portfolio content data
├── public/              # Static assets
│   ├── images/          # Project images and icons
│   ├── icons/           # Social media and tech stack icons
│   └── ...
├── styles/              # Global styles
├── utils/               # Utility functions
├── app/                 # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global CSS
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.js       # Next.js configuration
```

## 📄 Sections Overview

### 🏠 Hero Section
- Dynamic typing animation
- 3D background elements
- Call-to-action buttons
- Social media links

### 🎯 About Grid
- **Collaborative Learning**: Emphasis on teamwork and communication
- **Innovation Focus**: Passion for contributing to innovative projects
- **Tech Stack**: Current technologies and continuous learning
- **Specialization**: DSA, Development, and AI/ML expertise
- **Current Focus**: Deep diving into Generative AI
- **Team Ready**: Ready to contribute fresh ideas

### 💼 Work Experience
1. **Software Development Engineer Intern** - Bluestock Fintech
2. **Cybersecurity Intern** - Meghalaya Police (COPS-TAC)
3. **Ethical Hacking Intern** - C-DAC, Noida

### 🚀 Featured Projects
1. **Health Tracker** - React-based health tracking web app
2. **Portfolio Website** - This very portfolio you're viewing!

### 🏆 Achievements & Certifications
- Oracle Cloud Infrastructure 2025 Generative AI Professional
- Competitive Gaming Leadership (BGMI)
- National Service Scheme (NSS) Volunteer
- Technical Competition Winner (NIT Meghalaya)
- Head of Development - Coding Club

## 🎨 Customization

### Updating Content
All content is centralized in `data/index.ts`. Update the following exports:

```typescript
// Navigation items
export const navItems = [...];

// Grid items for about section
export const gridItems = [...];

// Projects data
export const projects = [...];

// Work experience
export const workExperience = [...];

// Achievements and testimonials
export const testimonials = [...];

// Social media links
export const socialMedia = [...];
```

### Configuration
Update site metadata in `config/index.ts`:

```typescript
export const links = {
  sourceCode: "your-github-repo",
  ownerName: "Your Name",
  ownerEmail: "your-email@example.com",
};
```

### Styling
- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Fonts**: Update font imports in `app/layout.tsx`
- **Components**: Customize individual components in the `components/` directory

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with every push

### Manual Deployment
```bash
# Build the project
npm run build

# The 'out' directory contains the static files
# Upload to your hosting provider
```

### Environment Variables
For production deployment, set up environment variables if needed:
- `NEXT_PUBLIC_SITE_URL`: Your site's URL
- Any API keys or third-party service credentials

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📬 Contact

**Prem Kumar Gupta**
- 📧 Email: [pg8231842@gmail.com](mailto:pg8231842@gmail.com)
- 💼 LinkedIn: [prem-kumar-gupta-a7101726b](https://www.linkedin.com/in/prem-kumar-gupta-a7101726b)
- 🐙 GitHub: [PremKrGuptaOp](https://github.com/PremKrGuptaOp)
- 🐦 Twitter: [@Prem_Kr_Gupta](https://x.com/Prem_Kr_Gupta)
- 📷 Instagram: [@premkrgupta.dev](https://www.instagram.com/premkrgupta.dev)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for seamless deployment
- **Tailwind CSS** for the utility-first CSS framework
- **Three.js** for 3D graphics capabilities
- **Open Source Community** for continuous inspiration

---

⭐ **Star this repository if you found it helpful!** ⭐

**Made with ❤️ by Prem Kumar Gupta**