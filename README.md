# EmployWise User Management App

## Description
This is a React application built with Vite for user management that integrates with the Reqres API. The application includes authentication, user listing, editing, and deletion functionalities.

## Features
- Login authentication
- Paginated user list
- User edit functionality
- User deletion
- Responsive design

## Prerequisites
- Node.js (v14 or later)
- npm or yarn

## Installation
1. Clone the repository
2. Install dependencies:

   npm install
   or
   yarn install
   

## Available Scripts
- `npm run dev`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm run preview`: Locally previews the production build

## Dependencies
- React
- React Router
- Axios
- Vite

## Project Structure
```
employwise-user-management/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── UserList.jsx
│   │   ├── UserCard.jsx
│   │   └── EditUserModal.jsx
│   │
│   ├── styles/
│   │   ├── Login.css
│   │   ├── UserList.css
│   │   ├── UserCard.css
│   │   └── EditUserModal.css
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## API Used
[Reqres.in](https://reqres.in/) - Provides mock user data and authentication

## Login Credentials
- Email: eve.holt@reqres.in
- Password: cityslicka

## Notes
- Ensure you have a stable internet connection for API calls
- The application uses local storage for token management

## Development
This project was bootstrapped with [Vite](https://vitejs.dev/), which provides faster and leaner development experience for modern web projects.
