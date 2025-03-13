const Card = () => {
  return (
    <div
      className="relative  h-72 md:h-96  mx- flex items-center justify-center rounded-2xl overflow-hidden"
      style={{
        backgroundImage: "url('/your-background-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 opacity-80"></div>
      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Partner with Rahul Packaging Today
        </h2>
        <p className="mt-2 text-sm md:text-lg max-w-2xl mx-auto">
          At Rahul Packaging, we don’t just deliver packaging solutions – we
          build lasting partnerships through quality, trust, and innovation.
          Join us in shaping a future where excellence is the standard.
        </p>
        <div className="items-center">
          <button className="mt-6 px-6 py-3  bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-lg flex items-center gap-2 shadow-lg hover:scale-105 transition">
            Explore
            <span className="text-xl">➡️</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
