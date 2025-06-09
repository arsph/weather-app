# Weather App 🌤️

A modern weather application built with React.js that provides real-time weather information using the OpenWeatherMap API. The app features a clean, responsive design and provides detailed weather forecasts for any location.

## ✨ Features

- 🌡️ Real-time weather data for any city
- 📅 Current date display
- 📊 Weekly weather forecasts
- 🎨 Modern, responsive UI
- 🔍 Easy city search functionality
- 📱 Mobile-friendly design

## 🚀 Quick Start

### Deploy to Vercel (Recommended)

The easiest way to deploy this app is using Vercel:

1. Fork this repository
2. Sign up for a [Vercel account](https://vercel.com/signup)
3. Import your forked repository in Vercel
4. Add your OpenWeatherMap API key in the Vercel environment variables:
   - Go to Project Settings > Environment Variables
   - Add `REACT_APP_API_KEY` with your OpenWeatherMap API key
5. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/arsph/react-weather-app)

### Using Docker

1. Build the Docker image:
```bash
docker build -t weather-app .
```

2. Run the container:
```bash
docker run -p 3000:3000 weather-app
```

3. Open your browser and visit `http://localhost:3000`

### Manual Setup

1. Clone the repository:
```bash
git clone https://github.com/arsph/react-weather-app.git
cd react-weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
```
REACT_APP_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm start
```

## 🛠️ Technologies

- React 18
- Styled Components
- Axios
- OpenWeatherMap API
- Docker
- Vercel

## 📁 Project Structure

```
weather-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── WeatherCard.js
│   │   ├── Calendar.js
│   │   └── MeteorologicalPredictions.js
│   ├── services/
│   │   └── WeatherService.js
│   ├── App.js
│   └── index.js
├── Dockerfile
├── vercel.json
├── .env
├── .gitignore
└── package.json
```

## 🔑 API Key Setup

1. Sign up at [OpenWeatherMap](https://openweathermap.org/)
2. Generate an API key from your account dashboard
3. Create a `.env` file in the project root
4. Add your API key: `REACT_APP_API_KEY=your_api_key_here`

## 🐳 Docker Support

The application is containerized using Docker for easy deployment and consistent environments. The Dockerfile uses a multi-stage build process to optimize the image size and build time.

## 🚀 Deployment

### Vercel Deployment

The application is configured for easy deployment on Vercel. The `vercel.json` file includes:
- Build configuration for React
- Route handling for SPA
- Static file serving
- Environment variable support

### Docker Deployment

For Docker deployment, follow the Docker instructions above.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aras Güngöre**

- LinkedIn: [@arasgungore](https://www.linkedin.com/in/arasgungore)
- GitHub: [@arasgungore](https://github.com/arasgungore)
