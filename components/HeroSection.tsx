// const Hero = () => {
//   return (
//     <section className="relative w-[90%] h-[80vh] flex items-center justify-center text-white bg-black rounded-[20px] mt-16">
//       {/* Background Elements */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

//         <div className="absolute top-10 left-10 w-32 h-32 bg-gray-700 rounded-full opacity-50"></div>

//         <div className="absolute bottom-0 left-0 w-full overflow-hidden rounded-b-[20px]">
//           <svg viewBox="0 0 1440 320" className="w-full">
//             <path
//               fill="#444"
//               fillOpacity="1"
//               d="M0,288L48,277.3C96,267,192,245,288,218.7C384,192,480,160,576,138.7C672,117,768,107,864,122.7C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L0,320Z"
//             ></path>
//           </svg>
//         </div>

//         {/* Hero Content */}
//         <h1 className="text-4xl md:text-6xl font-bold">Triorama AI Viz</h1>
//         <p className="mt-4 text-lg text-gray-300">
//           Visualize your data with Triorama AI Viz
//         </p>
//         <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg">
//           Explore
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;

const Hero = () => {
  return (
    <section className="relative w-[90%] h-[80vh] flex items-center justify-center text-white bg-[url('https://static.vecteezy.com/system/resources/thumbnails/006/712/985/small_2x/abstract-health-medical-science-healthcare-icon-digital-technology-science-concept-modern-innovation-treatment-medicine-on-hi-tech-future-blue-background-for-wallpaper-template-web-design-vector.jpg')] bg-cover bg-center rounded-[20px] mt-16">
      {/* Background Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[20px]"></div>

      {/* Background Elements */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {/* Hero Content */}
        <h1 className="text-4xl md:text-6xl font-bold">Triorama AI Viz</h1>
        <p className="mt-4 text-lg text-gray-300">
          Visualize your data with Triorama AI Viz
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg">
          Explore
        </button>
      </div>
    </section>
  );
};

export default Hero;
