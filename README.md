# User Directory App 📇

A React application that fetches and displays a list of users from the JSONPlaceholder API with beautiful Tailwind CSS styling.

## 📸 Features

- Fetches user data from JSONPlaceholder API
- Displays users in a responsive grid layout
- Beautiful card design with hover effects
- Loading state with spinner animation
- Error handling with retry functionality
- Fully responsive design (mobile, tablet, desktop)

## 🛠️ Technologies Used

- **React** - JavaScript library for building user interfaces
- **Tailwind CSS v3** - Utility-first CSS framework
- **JSONPlaceholder API** - Free fake API for testing and prototyping
- **Fetch API** - For making HTTP requests

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## 🚀 Installation

Follow these steps to set up the project locally:

### 1. Create React App
```bash
npx create-react-app user-list-app
cd user-list-app
```

### 2. Install Tailwind CSS v3
```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

### 3. Configure Tailwind

Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 4. Add Tailwind Directives

Replace `src/index.css` with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Run the Application
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure
```
user-list-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js           # Main app component with UserList
│   ├── index.js         # Entry point
│   ├── index.css        # Tailwind CSS imports
│   └── App.css          # (Optional) Additional styles
├── tailwind.config.js   # Tailwind configuration
├── package.json
└── README.md
```

## 💻 Code Overview

### UserList Component

The `UserList` component handles:
- Fetching data from the API using `useEffect`
- Managing state with `useState` (listOfUser, loading, error)
- Mapping through users to display them in cards
- Handling loading and error states

### Main Features
```javascript
// State Management
const [listOfUser, setListOfUser] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

// API Call
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setListOfUser(data);
      setLoading(false);
    })
    .catch(err => {
      setError('Failed to fetch users');
      setLoading(false);
    });
}, []);
```

## 🎨 Styling

The app uses Tailwind CSS utility classes for styling:
- Responsive grid layout: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Gradient backgrounds: `bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50`
- Hover effects: `hover:shadow-xl hover:scale-105`
- Smooth transitions: `transition-all duration-300`

## 🔧 Customization

### Change API Endpoint

To use a different API, update the fetch URL in `App.js`:
```javascript
fetch('YOUR_API_ENDPOINT_HERE')
```

### Modify Card Design

Edit the card className in the `UserList` component to customize the appearance.

### Add More User Fields

The JSONPlaceholder API provides additional fields like:
- `user.address.street`
- `user.address.suite`
- `user.address.zipcode`
- `user.company.catchPhrase`
- `user.company.bs`

## 🐛 Troubleshooting

### CSS Not Applying

1. Make sure `tailwind.config.js` has the correct content paths
2. Verify `src/index.css` contains Tailwind directives
3. Check that `src/index.js` imports `./index.css`
4. Restart the development server

### API Error

If you get "Failed to fetch users":
1. Check your internet connection
2. Verify the API is accessible: https://jsonplaceholder.typicode.com/users
3. Check browser console for CORS errors

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

## 📚 API Reference

**JSONPlaceholder Users Endpoint**
- URL: `https://jsonplaceholder.typicode.com/users`
- Method: GET
- Response: Array of 10 user objects

Each user object contains:
- `id`: User ID
- `name`: Full name
- `username`: Username
- `email`: Email address
- `phone`: Phone number
- `website`: Personal website
- `company`: Company information
- `address`: Address details

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the build folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/user-list-app",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Run:
```bash
npm run deploy
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Your Name - [Your GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Create React App](https://create-react-app.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

---

Made with ❤️ using React and Tailwind CSS
