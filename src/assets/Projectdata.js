import reduxImage from './e-commerce-redux.png'; // Better to rename 'redux' to 'reduxImage' for clarity
import weatherimg from './weather.png'

const projects = [
  {
    id: 1,
    title: "REDUX E-COMMERCE",
    description: "I built an e-commerce website using Redux Toolkit for efficient state management, handling cart operations like add/remove, quantity updates, and dynamic price calculation. The app features modular slices, optimized selectors, and React Router for smooth navigation, delivering a fast and user-friendly shopping experience.",
    link: "https://e-commerce-redux-focus.vercel.app/",
    technologies: ["REACT", "TAILWIND CSS", "REDUX" ],
    github: "https://github.com/sumit2208/E-commerce-redux-focus-",
    src: reduxImage,
    status: "Live"
   
  },
  {
    id: 2,
    title: "Weather App",
    description: "I developed a web weather application using React and Bootstrap for the frontend. The app includes a 3-day weather forecast, and for visual representation, I used Chart.js to display the current day's 24-hour temperature trend. The weather data is fetched from the OpenWeather API, ensuring accurate and up-to-date forecasts.",
    link: "https://react-weather-app-kaymind.netlify.app/",
    technologies: ["REACT", "BOOTSTRAP"],
    github: "https://github.com/sumit2208/Portfolio_react",
    src: weatherimg,
    status: "Live"
   
  },
  {
    id: 3,
    title: "Password Generator",
    description: "This mini-project involves creating a Personalized Password Generator that allows users to generate a secure password using their name as a base, with an adjustable length ranging from 8 to 20 characters. The project is built using HTML, CSS, and JavaScript.",
    link: "https://sumitcoded.netlify.app/",
    technologies: ["HTML", "CSS", "JAVASCRIPT" ],
    github: "https://github.com/sumit2208/Password-Generator-by-name",
    src: 'https://ftonato.gallerycdn.vsassets.io/extensions/ftonato/password-generator/0.0.5/1602587151428/Microsoft.VisualStudio.Services.Icons.Default',
    status: "Live"
   
  }
];

 

export default projects;
