import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NormalShapes from "../components/NormalShapes";
import { BsArrowRightCircle } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    quizName = "Your Quiz Results",
    quiz,
    userAnswers,
    correct = 0,
    incorrect = 0,
    unattempted = 0,
    timeSpent = 0,
    rank = 0,
    totalQuestions = 1,
    coins = 0,
  } = location.state || {};

  const score = correct * 4;
  const coinEarned = coins || score;
  const accuracy = Math.round((correct / totalQuestions) * 100);
  const avgTimePerQ = Math.round(timeSpent / totalQuestions);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://run.confettipage.com/here.js";
    script.setAttribute(
      "data-confetticode",
      "U2FsdGVkX1+zLfTpbHueUqYJrbpyMu8ijfwTkufA5vGocYTw+ezV8tuXPRZV/dzA3UCzdX3v7NcNTiOI6D5Lp5zf08GpvGNCHWN3py2ud6SbzZMLPPsU4BpS5YbcRYTwwR/uf54y9+K+Kz70GHaau/L3cjR34p+5fiU7DjhF5OXy9oVbZVGhtX/oUz6kBrJqqFV5LMoVJePD5/nAiUhp1z0CYR/rZBQlhvKwy1lgmD0jaO6fbtjnDykjkWsTANfbQUSaJ/9AEdGrBKBawBcuQhtldQshMlZTZw7/+d0QkNdCnvyIP5zNAYTNz1Ft25NoKI9hk4SdigMe2t/XmXR8kHNWA+GZDVwUdanoGpAntsr/rl2bRsoO6ZCo/b6o9nGh2vqWftr1pqqojRb0Gwsyy9xGbU0vKsUaaQ/FySvvz7D5atm5WWgeMSnpQCIjXHbD3PlZjwsBMGTUhachFLdCwV4b3/vIB9afiMnr0074TRaKoDmHxJtZeiTisBZa/IsC8wpMjuX4SQ/ZosiWMu2uz/RsSgT35QtABnF3eG6gFQio1bwyGEHR0BZPH3EboXqRNEZl6bi/VrT6E6qAd7cQG5G4svy+e9/zMhS4YusOkEfqn2fHPZRlb8AkEfk7H1Lo/IMk2X2e+1YgHgEp7eZ6k8RxK0oqPBGdMfSXyfekQu+JheOQ9iPOyVvw9knqDdLbcdVGGk0MKjGADoNzvQyE2uhx0PueD88Sixnpz8sW/ayfi7Uzqhxi2qp4oYjK4mG3uVHkaJlDSGAE3Rso35jzurli6pTxeZYegAGPOAzYmm4="
    );
    script.async = true;

    script.onload = () => {
      if (window.runConfetti) {
        window.runConfetti();
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleReviewClick = () => {
    if (!quiz || !userAnswers) {
      alert("Cannot load review. Missing quiz data.");
      return;
    }

    navigate("/review", {
      state: { quiz, userAnswers },
    });
  };

  return (
    <div className="relative min-h-screen bg-[#102935] text-white flex flex-col items-center py-8 px-4 sm:px-0">
      <NormalShapes />
      {/* Quiz Heading */}
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
        {quizName}
      </h1>

      <div className="w-full max-w-4xl flex flex-col items-center space-y-8 z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 bg-[#1e3b4c] p-4 rounded-xl shadow-lg w-full z-10">
          <Stat label="Coin Earned" value={coinEarned} icon="🪙" />
          <Stat label="Your Score" value={score} icon="🏆" />
          <Stat label="Correct" value={correct} icon="✅" />
          <Stat label="Incorrect" value={incorrect} icon="❌" />
          <Stat label="Accuracy" value={`${accuracy} %`} icon="🎯" />
          <Stat
            label="Time Spent"
            value={`${Math.floor(timeSpent / 60)}m ${timeSpent % 60}s`}
            icon="⏱️"
          />
          <Stat label="Unattempted" value={unattempted} icon="➖" />
          <Stat label="Time/Ques" value={`${avgTimePerQ}s`} icon="📊" />
          <div className="col-span-2">
            <Stat label="Live Rank" value={`#${rank}`} icon="🥉" />
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-4 z-10">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* <button className="flex-1 bg-[#501578] px-6 py-5 rounded-lg font-semibold shadow-md hover:bg-purple-800 flex items-center justify-between text-left border border-gray-400">
              <span>Share Score</span>
              <IoShareSocialOutline className="text-2xl" />
            </button> */}
            <button
              onClick={handleReviewClick}
              className="flex-1 bg-[#501578] px-6 py-5 rounded-lg font-semibold shadow-md hover:bg-purple-800 flex items-center justify-between text-left border border-gray-400"
            >
              <span>Review Questions</span>
              <GoArrowRight className="text-2xl" />
            </button>
          </div>

          <button
            onClick={() => navigate("/leaderboardPage")}
            className="w-full bg-[#501578] px-6 py-5 rounded-lg font-semibold shadow-md hover:bg-purple-800 flex items-center justify-between text-left border border-gray-400"
          >
            <span>Leaderboard</span>
            <BsArrowRightCircle className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ label, value, icon, fullWidth = false }) => (
  <div
    className={`flex items-center bg-[#123040] p-4 max-[389px]:p-2 rounded-xl w-full ${
      fullWidth ? "col-span-2" : ""
    }`}
  >
    <div className="text-2xl mr-4 max-[378px]:mr-1.5">{icon}</div>
    <div>
      <div className="text-sm font-semibold text-gray-300">{label}</div>
      <div className="text-lg font-bold">{value}</div>
    </div>
  </div>
);

export default ResultPage;
