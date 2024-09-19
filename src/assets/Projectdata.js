import reduxImage from './e-commerce-redux.png'; // Better to rename 'redux' to 'reduxImage' for clarity
import weatherimg from './weather.png'

const projects = [
  {
    id: 1,
    title: "REDUX E-COMMERCE",
    description: "I have implemented Redux for efficient state management in my e-commerce website, utilizing Redux Toolkit to manage the shopping cart, including product addition, removal, and quantity adjustments. This setup includes dynamic calculation of the total cart price based on product discounts and quantities, ensuring real-time updates with each user action. The Redux store is structured with modular slices for clean and maintainable code, and I created selector functions for efficient access to cart data and total price, streamlining component logic. Additionally, I optimized the user experience with features such as cart item increment/decrement and removal, enhancing usability. I also implemented client-side routing using React Router, allowing seamless navigation between product sections and pages, delivering a smooth, dynamic user experience across the app.",
    link: "https://sumitcoded.netlify.app/",
    src: reduxImage // Correct reference to the imported image
   
  },
  {
    id: 2,
    title: "Weather App",
    description: "I developed a web weather application using React and Bootstrap for the frontend. The app includes a 3-day weather forecast, and for visual representation, I used Chart.js to display the current day's 24-hour temperature trend. The weather data is fetched from the OpenWeather API, ensuring accurate and up-to-date forecasts.",
    link: "https://react-weather-app-kaymind.netlify.app/",
    src: weatherimg
   
  },
  {
    id: 3,
    title: "Password Generator",
    description: "This mini-project involves creating a Personalized Password Generator that allows users to generate a secure password using their name as a base, with an adjustable length ranging from 8 to 20 characters. The project is built using HTML, CSS, and JavaScript.",
    link: "https://sumitcoded.netlify.app/",
    src: 'https://ftonato.gallerycdn.vsassets.io/extensions/ftonato/password-generator/0.0.5/1602587151428/Microsoft.VisualStudio.Services.Icons.Default'
   
  }
];

export default projects;
