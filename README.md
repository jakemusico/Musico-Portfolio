# My Portfolio Website

A modern, responsive portfolio website built with React.js featuring a dark mode toggle, social media integration, and clean UI design.

## Features

✨ **Modern Design**
- Beautiful gradient header with smooth animations
- Responsive grid layouts for all sections
- Smooth transitions between light and dark modes

🌙 **Dark Mode Toggle**
- Easy one-click dark mode switch
- Persistent dark mode styling throughout the entire site
- Smooth color transitions

📱 **Fully Responsive**
- Mobile-first design approach
- Works seamlessly on desktop, tablet, and mobile devices
- Optimized breakpoints for various screen sizes

🔗 **Social Media Integration**
- Direct links to GitHub and LinkedIn
- Beautiful icon buttons using react-icons
- Hover animations and effects

📂 **Sections**
- **Header**: Welcome message with name and introduction
- **Skills**: Display of technical skills with descriptions
- **Projects**: Showcase of project examples with details
- **Contact**: Email and social media contact information
- **Footer**: Copyright information

## Project Structure

```
c:\final_musico\
├── public\
│   └── index.html
├── src\
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Installation

1. Navigate to the project directory:
```bash
cd c:\final_musico
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Building for Production

Create an optimized production build:
```bash
npm run build
```

## Customization

### Change Your Name and Information
Edit [src/App.js](src/App.js):
- Replace "John Doe" with your name
- Update the introduction text
- Modify the email address
- Update your GitHub and LinkedIn URLs

### Modify Skills
Update the skills section in [src/App.js](src/App.js) by adding/removing skill cards as needed.

### Add/Update Projects
Edit the projects section in [src/App.js](src/App.js) to showcase your own projects with descriptions and technologies used.

### Customize Colors
Edit the CSS variables in [src/App.css](src/App.css) under `:root` section:
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  /* ... other variables ... */
}
```

### Dark Mode Styling
Dark mode styles are automatically applied and managed through the `app.dark-mode` class in [src/App.css](src/App.css).

## Technologies Used

- **React.js** - JavaScript library for building user interfaces
- **react-icons** - Icon library with GitHub and LinkedIn icons
- **CSS3** - Modern CSS with Grid, Flexbox, and animations
- **JavaScript ES6+** - Modern JavaScript features

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- Smooth animations and transitions
- Optimized CSS with minimal repaints
- Responsive images and assets
- Clean, semantic HTML structure

## Accessibility

- Semantic HTML markup
- ARIA labels for interactive elements
- Proper color contrast ratios
- Keyboard navigation support
- Screen reader friendly

## Future Enhancements

- Add blog section
- Implement contact form
- Add project filtering
- Include testimonials section
- Add resume download functionality
- Implement smooth scrolling navigation

## License

This project is open source and available for personal use.

## Author

Created as a portfolio template - customize it with your own information!
