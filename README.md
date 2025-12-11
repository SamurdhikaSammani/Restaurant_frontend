# 🍽️ VelvetDine - Restaurant Frontend

A modern, responsive restaurant website built with React and Vite. Features include an elegant hero section, menu display, team showcase, online reservation system, and more.

## ✨ Features

- **Hero Section** - Captivating landing page with call-to-action
- **About Us** - Information about the restaurant's story and values
- **Menu Display** - Showcase your delicious dishes with images and descriptions
- **Online Reservation** - Easy-to-use reservation form with real-time validation
- **Team Section** - Meet the talented people behind the restaurant
- **Quality Showcase** - Highlight what makes your restaurant special
- **Responsive Design** - Fully responsive across all devices
- **Smooth Navigation** - Seamless page transitions with React Router
- **Toast Notifications** - User-friendly feedback messages
- **Success Page** - Confirmation page with auto-redirect countdown

## 🛠️ Tech Stack

- **React 19.2.0** - UI library
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Beautiful notifications
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling functionality

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn
- Backend server running on `http://localhost:4000`

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Restaurant_frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
Restaurant_frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── About.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Menu.jsx
│   │   ├── Navbar.jsx
│   │   ├── Qualities.jsx
│   │   ├── Reservation.jsx
│   │   ├── Team.jsx
│   │   └── WhoAreWe.jsx
│   ├── Pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   └── Success.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css          # Global styles
│   ├── main.jsx         # Entry point
│   └── restApi.json     # Mock API data
├── index.html
├── package.json
└── vite.config.js
```

## 🔌 API Integration

The application connects to a backend API running on `http://localhost:4000`. Make sure your backend server is running before using the reservation feature.

### Reservation Endpoint
- **URL**: `http://localhost:4000/api/v1/reservation/send`
- **Method**: POST
- **Body**:
  ```json
  {
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "phone": "string",
    "date": "string",
    "time": "string"
  }
  ```

## 🎨 Customization

### Change Favicon
1. Place your icon file in the `public` folder
2. Update the icon reference in `index.html`:
   ```html
   <link rel="icon" type="image/png" href="/your-icon.png" />
   ```

### Update Restaurant Name
- Modify the title in `index.html`
- Update component content as needed

## 🐛 Troubleshooting

### Connection Refused Error
If you see `ERR_CONNECTION_REFUSED`:
- Ensure your backend server is running on port 4000
- Check if the API endpoint URL is correct
- Verify your backend CORS settings allow requests from the frontend

### Build Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```


Built with ❤️ using React and Vite
