# IT Professional Blog Portfolio

A modern, responsive blog portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Designed specifically for IT professionals to showcase their skills, projects, and blog posts with smooth animations and 2025 design trends.

## ✨ Features

- **Modern Design**: Clean, professional design following 2025 trends
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Dark/Light Theme**: Automatic theme switching with system preference
- **Responsive Design**: Mobile-first approach with perfect responsive design
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **SEO Ready**: Optimized for search engines with proper meta tags

## 🚀 Sections

1. **Hero Section**: Eye-catching introduction with animated elements
2. **About**: Detailed information about experience and skills
3. **Skills**: Interactive skill showcase with progress bars
4. **Projects**: Portfolio of work with filtering and details
5. **Blog**: Technical blog posts with search and categorization
6. **Contact**: Contact form with validation and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **Theme**: Next Themes for dark/light mode

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd it-profile-blog
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Customization

### Personal Information
Update the following files with your personal information:
- `src/app/page.tsx` - Hero section content
- `src/app/about/page.tsx` - About section and experience
- `src/app/contact/page.tsx` - Contact information and social links

### Projects
Edit the projects array in `src/app/projects/page.tsx` to showcase your own projects.

### Blog Posts
Modify the blog posts array in `src/app/blog/page.tsx` with your own articles.

### Styling
The color scheme can be customized in:
- `tailwind.config.js` - Tailwind configuration
- `src/app/globals.css` - CSS variables and custom styles

## 📁 Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── blog/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── navbar.tsx
│   └── theme-provider.tsx
└── ...
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms
This project can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Heroku

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Open a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

Feel free to reach out if you have any questions or suggestions!

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourusername)
- GitHub: [Your GitHub Profile](https://github.com/yourusername)

---

Built with ❤️ by [Your Name]
