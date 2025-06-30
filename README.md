# React Weather Forecast App

A modern weather application built with React, Vite, and Tailwind CSS. Get real-time weather information for any city using the OpenWeatherMap API. Responsive, fast, and easy to use.

## ✨ Features
- 🌦️ Real-time weather data for any city
- 🔍 City search with instant results
- 📅 Weekly and hourly forecasts
- 🎨 Modern, responsive UI with dark mode
- 📱 Mobile-friendly design

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn]

### 1. Clone the repository
```sh
git clone https://github.com/arsph/weather-app.git
cd weather-app
```

### 2. Install dependencies
```sh
npm install
# or
yarn install
```

### 3. Set up environment variables
Create a `.env` file in the project root and add your OpenWeatherMap API key:
```env
VITE_OPENWEATHER_API_KEY=your_openweathermap_api_key
```

### 4. Run the app locally
```sh
npm run dev
# or
yarn dev
```
Visit the local address shown in your terminal (usually http://localhost:5173).

## 🌐 Deployment (Vercel)
This project is ready for instant deployment on [Vercel](https://vercel.com/):
1. Push your code to your GitHub repository.
2. Connect your repo to Vercel (if not already connected).
3. In Vercel dashboard, go to Project Settings > Environment Variables and add:
   - `VITE_OPENWEATHER_API_KEY` with your OpenWeatherMap API key
4. Deploy!

## 🛠️ Tech Stack
- React 19
- Vite
- Tailwind CSS
- TypeScript
- OpenWeatherMap API

## 📁 Project Structure
```
├── components/         # React components
├── services/           # API and utility services
├── public/             # Static files
├── App.tsx             # Main app component
├── index.html          # HTML entry point
├── index.tsx           # React entry point
├── tailwind-config.js  # Tailwind CDN config
├── .env                # Environment variables (not committed)
```

## 🔑 API Key Setup
1. Sign up at [OpenWeatherMap](https://openweathermap.org/)
2. Generate an API key
3. Add it to your `.env` file as shown above

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📝 License
MIT
