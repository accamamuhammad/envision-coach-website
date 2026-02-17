# Excellence Consulting Website 🚀

A modern, professional consulting and training business website built with Next.js 14, TypeScript, and Tailwind CSS. Features stunning animations, responsive design, and a premium user experience.

![Excellence Consulting](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with gradient backgrounds and glassmorphism effects
- 📱 **Fully Responsive** - Optimized for all devices from mobile to desktop
- ⚡ **Performance Optimized** - Built with Next.js 14 App Router for lightning-fast page loads
- 🎭 **Smooth Animations** - CSS-based animations with view timeline API support
- 🎯 **Type Safe** - Full TypeScript implementation for robust code
- 🌐 **SEO Friendly** - Optimized meta tags and semantic HTML
- ♿ **Accessible** - WCAG compliant with proper ARIA labels and keyboard navigation
- 🎪 **Interactive Components** - Engaging hero sections, testimonials carousels, and more

## 🏗️ Project Structure

```
excellence-consulting/
├── app/
│   ├── components/
│   │   ├── AboutUs.tsx          # About Us section
│   │   ├── Footer.tsx           # Site footer with links
│   │   ├── Hero.tsx             # Hero section with CTA
│   │   ├── Logo.tsx             # Animated logo marquee
│   │   ├── Navbar.tsx           # Navigation bar
│   │   ├── Programs.tsx         # Training programs grid
│   │   ├── Stats.tsx            # Statistics showcase
│   │   ├── Testimonials.tsx     # Client testimonials carousel
│   │   └── Training.tsx         # CTA for training services
│   ├── about/
│   │   └── page.tsx            # About Us page
│   ├── testimonials/
│   │   └── page.tsx            # Testimonials page
│   ├── contact/
│   │   └── page.tsx            # Contact Us page
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   └── globals.css             # Global styles & animations
├── public/
│   ├── Images/                 # Image assets
│   └── *.svg                   # Icon assets
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/yourusername/excellence-consulting.git
   cd excellence-consulting
```

2. **Install dependencies**
```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
```

3. **Run the development server**
```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm start
```

## 📄 Pages Overview

### 🏠 Homepage
- **Hero Section** - Eye-catching introduction with animated background
- **Logo Marquee** - Infinite scrolling client logos
- **About Us Preview** - Company introduction and approach
- **Programs Grid** - Showcase of training programs
- **Statistics** - Impact metrics with dark theme
- **Testimonials Carousel** - Bi-directional scrolling reviews
- **CTA Section** - Call-to-action for consultations

### 📖 About Us Page
- Company history and mission
- Core values with icon badges
- Visual timeline of milestones
- Leadership team showcase
- Call-to-action section

### 💬 Testimonials Page
- Featured success stories
- Filterable testimonials grid
- Video testimonial placeholders
- Industry-specific filtering

### 📞 Contact Us Page
- Multi-channel contact cards
- Interactive contact form
- Business hours display
- Global office locations
- FAQ accordion section

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2563eb → #1d4ed8)
- **Secondary**: Purple/Violet accents
- **Neutral**: Slate (50 → 900)
- **Accent**: Emerald, Orange for highlights

### Typography
- **Font Stack**: System fonts for optimal performance
- **Headings**: Bold, 2xl → 6xl scale
- **Body**: Base size with relaxed line height

### Components
- **Cards**: Glassmorphism with backdrop blur
- **Buttons**: Gradient backgrounds with shadow effects
- **Badges**: Rounded pills with dot indicators
- **Forms**: Rounded inputs with focus rings

## 🎬 Animations

All animations are CSS-based for optimal performance:

- **View Timeline Animations** - Elements animate on scroll into view
- **Marquee Effects** - Infinite scrolling for logos and testimonials
- **Hover States** - Scale, translate, and shadow transitions
- **Loading States** - Skeleton screens and progress bars
- **Page Transitions** - Smooth fade effects

## 🛠️ Technologies Used

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React 18](https://react.dev/)** - UI library
- **CSS Animations** - Custom keyframe animations
- **View Timeline API** - Scroll-based animations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Configuration

### Tailwind Configuration
Customize colors, spacing, and breakpoints in `tailwind.config.ts`

### Environment Variables
Create a `.env.local` file for environment-specific variables:
```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@yoursite.com
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Code Style

- **ESLint** - Linting with Next.js recommended rules
- **Prettier** - Code formatting (optional)
- **TypeScript Strict Mode** - Enabled for type safety

## 🐛 Known Issues

- View Timeline API requires Chrome 115+ or Safari 17+
- Fallback animations provided for older browsers

## 📈 Performance

- Lighthouse Score: 95+ across all metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Optimized images with Next.js Image component

## 🚢 Deployment

### Vercel (Recommended)
```bash
vercel --prod
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Accama**
- Portfolio: [https://accama-portfolio.vercel.app](https://accama-20-acccama-muhammads-projects.vercel.app/)
- GitHub: [@accama](https://github.com/accama)

## 🙏 Acknowledgments

- Design inspiration from modern SaaS websites
- Icons from Heroicons
- Image placeholders from Unsplash
- Built with love and lots of coffee ☕

## 📞 Support

For support, email hello@consulting.com or open an issue on GitHub.

---

<p align="center">Made with ❤️ by Accama</p>
<p align="center">⭐ Star this repo if you find it helpful!</p>