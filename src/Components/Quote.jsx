// Add this to your desired component file, for example in the Contact section or create a new component
const PersonalMessage = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-10">
      <div className="flex items-center justify-center space-x-4 mb-4">
        <img src="social-media/bulb.webp" alt="Icon 1" className="w-12 h-12" />
        {/* <img src="path/to/icon2.png" alt="Icon 2" className="w-12 h-12" />
        <img src="path/to/icon3.png" alt="Icon 3" className="w-12 h-12" /> */}
      </div>
      <p className="text-xl font-semibold text-gray-700 mb-2">
        This portfolio was made with heart and soul, pouring passion and
        creativity into every detail to bring it to life. It's not just a
        portfolio, it's a labor of love.
      </p>
      <p className="text-lg font-medium text-gray-500 mb-2">
        - Shrujan S Shetty
      </p>
      {/* <div className="flex items-center justify-center space-x-4 mt-4">
        <img src="path/to/icon4.png" alt="Icon 4" className="w-12 h-12" />
        <img src="path/to/icon5.png" alt="Icon 5" className="w-12 h-12" />
        <img src="path/to/icon6.png" alt="Icon 6" className="w-12 h-12" />
      </div> */}
    </section>
  );
};

export default PersonalMessage;
