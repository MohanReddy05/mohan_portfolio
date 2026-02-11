# Mohan Kumar N - Portfolio Website

A modern, schematic-style portfolio website built with React, TypeScript, and TailwindCSS. Features a clean blueprint aesthetic with dark mode support and smooth animations.

## 🚀 Tech Stack

- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** React Icons, Lucide React
- **Deployment:** Vercel

## 📦 Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/MohanReddy05/mohan_portfolio.git
   cd mohan_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Personal Information**
   
   The portfolio uses a centralized configuration file for all personal data. This file is committed to the repository (it's public portfolio information anyway).
   
   - Location: `src/config/personal.config.ts`
   - Template: `src/config/personal.config.template.ts`
   
   To customize for your own portfolio:
   - Copy `personal.config.template.ts` to `personal.config.ts`
   - Update with your own information

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment on Vercel

The site is configured for automatic deployment on Vercel through GitHub integration:

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Auto Deploy**: Every push to main branch triggers automatic deployment
3. **No Environment Variables Needed**: All portfolio data is in `personal.config.ts`

### Important Notes for Vercel:
- The `personal.config.ts` file **must be committed** to your repository
- Vercel builds directly from your GitHub repository
- Files in `.gitignore` won't be available during build

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Landing section
│   ├── Skills.tsx      # Technical and soft skills
│   ├── Experience.tsx  # Work history
│   ├── Projects.tsx    # Portfolio projects
│   ├── Certificates.tsx # Certifications
│   ├── Contact.tsx     # Contact information
│   ├── Footer.tsx      # Site footer
│   └── ...
├── config/             # Configuration files
│   ├── personal.config.ts          # Your personal data (committed)
│   └── personal.config.template.ts # Template for customization
├── App.tsx             # Main application
└── main.tsx            # Entry point
```

## 🎨 Design Features

- **Schematic/Blueprint Aesthetic**: Clean lines, corner accents, and technical styling
- **Dark Mode**: Toggle between light and dark themes (persisted in localStorage)
- **Responsive Design**: Mobile-first approach, works on all screen sizes
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Interactive Elements**: Hover effects, micro-animations, and dynamic content

## 📝 Customization

### Personal Information
Edit `src/config/personal.config.ts` to update:
- Name, title, and company information
- Contact email and social media links
- Tech stack and skills
- Availability status

### Styling
- Theme colors: `tailwind.config.js`
- Global styles: `src/style.css`
- Component-specific styles: Individual component files

### Content
- Projects: Update the `projects` array in `src/components/Projects.tsx`
- Experience: Modify data in `src/components/Experience.tsx`
- Skills: Edit arrays in `src/components/Skills.tsx`
- Certificates: Update in `src/components/Certificates.tsx`

## 🔒 Security Note

- **Public Information Only**: This portfolio contains only public-facing information
- **No Secrets**: No API keys, passwords, or sensitive data should be stored here
- **Environment Variables**: For future features requiring secrets, use `.env` files (already in `.gitignore`)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mohan Kumar N**
- GitHub: [@MohanReddy05](https://github.com/MohanReddy05)
- LinkedIn: [Mohan Kumar N](https://www.linkedin.com/in/mohan-kumar-n-8a7b49285/)
- Email: mohanreddymk05@gmail.com

---

Built with ❤️ using React + Vite
