import FloatingShapes from "./FloatingShapes";

function Hero({ scrollToQuiz }) {
  return (
    <>
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="hero-curve" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.9 C0.8,0.8, 0.2,1, 0,0.9 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="relative bg-gradient-to-br from-[#2C0B4F] to-[#501578] px-4 pt-16 pb-28 sm:pb-31 overflow-hidden"
        style={{ clipPath: "url(#hero-curve)" }}
      >
        <FloatingShapes />
        <div className="max-w-4xl mx-auto text-center pb-1">
          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold mb-7 leading-tight text-gray-200">
            Welcome to <span className="text-yellow-400">Quizzical</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-2xl text-gray-200 font-medium mb-8">
            Test your knowledge, challenge your brain,
            <br className="hidden sm:block" />
            and rise on the leaderboard — one question at a time.
          </p>
          <div className="pt-1">
            <button
              onClick={scrollToQuiz}
              className="border-2 border-yellow-400 text-yellow-400 font-bold px-8 py-4 rounded-2xl text-lg hover:bg-yellow-400 hover:text-purple-800 transition duration-300"
            >
              Start a Quiz
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
