import quiz1 from "../assets/quiz1.webp";
import quiz2 from "../assets/quiz2.webp";
import quiz3 from "../assets/quiz3.webp";
import quiz4 from "../assets/quiz4.webp";
import quiz5 from "../assets/quiz5.webp";
import quiz6 from "../assets/quiz6.webp";
import ques1 from "../assets/ques1.jpg";
import ques2 from "../assets/ques2.jpg";
import ques3 from "../assets/ques3.jpg";
import ques4 from "../assets/ques4.jpg";
import ques5 from "../assets/ques5.jpg";
import ques6 from "../assets/ques6.jpg";
import ques7 from "../assets/ques7.jpg";
import ques8 from "../assets/ques8.jpg";
import ques9 from "../assets/ques9.jpg";
import ques10 from "../assets/ques10.jpg";


export const quizzes = [
  {
    id: 1,
    title: "Dr. Doe's Chemistry Quiz",
    plays: 5,
    image: quiz1,
    questions: [
      {
        id: 1,
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "NaCl"],
        correctOptionIndex: 1,
        image: ques1,
      },
      {
        id: 2,
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
        correctOptionIndex: 2,
        image: ques2,
      },
      {
        id: 3,
        question: "What is the pH value of pure water?",
        options: ["7", "5", "10", "0"],
        correctOptionIndex: 0,
        image: ques3,
      },
      {
        id: 4,
        question: "Which element is used in thermometers?",
        options: ["Lead", "Mercury", "Copper", "Zinc"],
        correctOptionIndex: 1,
        image: ques4,
      },
      {
        id: 5,
        question: "Which of the following is not an acid?",
        options: ["HCl", "H2SO4", "NaOH", "CH3COOH"],
        correctOptionIndex: 2,
        image: ques5,
      },
      {
        id: 6,
        question: "Which gas is responsible for the fizz in soft drinks?",
        options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
        correctOptionIndex: 1,
        image: ques6,
      },
      {
        id: 7,
        question: "Which part of the atom has a negative charge?",
        options: ["Proton", "Neutron", "Electron", "Nucleus"],
        correctOptionIndex: 2,
        image: ques7,
      },
      {
        id: 8,
        question: "Which substance turns blue litmus red?",
        options: ["Base", "Salt", "Acid", "Water"],
        correctOptionIndex: 2,
        image: ques8,
      },
      {
        id: 9,
        question: "What is the atomic number of Hydrogen?",
        options: ["0", "1", "2", "8"],
        correctOptionIndex: 1,
        image: ques9,
      },
      {
        id: 10,
        question: "Which of the following is a noble gas?",
        options: ["Oxygen", "Nitrogen", "Argon", "Hydrogen"],
        correctOptionIndex: 2,
        image: ques10,
      },
    ],
  },
  {
    id: 2,
    title: "Aptitude Calendar Quiz",
    plays: 3,
    image: quiz2,
    questions: [
      {
    id: 1,
    question: "How many days are there in a leap year?",
    options: ["365", "366", "364", "360"],
    correctOptionIndex: 1,
    image: quiz2,
      },
      {
    id: 2,
    question: "Which month has 28 days in a non-leap year?",
    options: ["February", "April", "June", "November"],
    correctOptionIndex: 0,
    image: quiz2,
      },
      {
    id: 3,
    question: "If 1st January is a Sunday, what day of the week is 8th January?",
    options: ["Monday", "Tuesday", "Sunday", "Saturday"],
    correctOptionIndex: 2,
    image: quiz2,
      },
      {
    id: 4,
    question: "How many months have 31 days?",
    options: ["5", "6", "7", "8"],
    correctOptionIndex: 2,
    image: quiz2,
      },
      {
    id: 5,
    question: "Which of these years is a leap year?",
    options: ["1900", "2000", "2100", "1800"],
    correctOptionIndex: 1,
    image: quiz2,
      },
      {
    id: 6,
    question: "What day comes after Monday?",
    options: ["Wednesday", "Friday", "Tuesday", "Sunday"],
    correctOptionIndex: 2,
    image: quiz2,
      },
      {
    id: 7,
    question: "If today is Friday, what day will it be after 3 days?",
    options: ["Saturday", "Monday", "Tuesday", "Sunday"],
    correctOptionIndex: 1,
    image: quiz2,
      },
      {
    id: 8,
    question: "Which month comes right before August?",
    options: ["June", "September", "July", "May"],
    correctOptionIndex: 2,
    image: quiz2,
      },
      {
    id: 9,
    question: "If 15th August 2025 is a Friday, what day is 16th August 2025?",
    options: ["Saturday", "Thursday", "Sunday", "Friday"],
    correctOptionIndex: 0,
    image: quiz2,
      },
      {
    id: 10,
    question: "How many days are there in the month of June?",
    options: ["30", "31", "29", "28"],
    correctOptionIndex: 0,
    image: quiz2,
      },
    ],
  },
  {
    id: 3,
    title: "All about AI",
    plays: 3,
    image: quiz3,
    questions: [
  {
    id: 1,
    question: "What does AI stand for?",
    options: ["Advanced Intelligence", "Artificial Intelligence", "Automated Internet", "Auto Interface"],
    correctOptionIndex: 1,
    image:quiz3,
  },
  {
    id: 2,
    question: "Which of these is an example of AI?",
    options: ["Smartphone", "Microwave", "Chatbot", "Toaster"],
    correctOptionIndex: 2,
    image:quiz3,
  },
  {
    id: 3,
    question: "Who is known as the father of Artificial Intelligence?",
    options: ["Alan Turing", "Elon Musk", "John McCarthy", "Bill Gates"],
    correctOptionIndex: 2,
    image:quiz3,
  },
  {
    id: 4,
    question: "Which of the following is a common programming language used in AI?",
    options: ["Python", "HTML", "CSS", "SQL"],
    correctOptionIndex: 0,
    image:quiz3,
  },
  {
    id: 5,
    question: "Which company developed ChatGPT?",
    options: ["Google", "Microsoft", "OpenAI", "Meta"],
    correctOptionIndex: 2,
    image:quiz3,
  },
  {
    id: 6,
    question: "What is Machine Learning?",
    options: ["A type of AI that learns from data", "A video game", "A computer virus", "A hardware component"],
    correctOptionIndex: 0,
    image:quiz3,
  },
  {
    id: 7,
    question: "Which of the following is NOT an AI assistant?",
    options: ["Siri", "Alexa", "Cortana", "Mozilla"],
    correctOptionIndex: 3,
    image:quiz3,
  },
  {
    id: 8,
    question: "Which field is AI commonly used in?",
    options: ["Healthcare", "Agriculture", "Finance", "All of the above"],
    correctOptionIndex: 3,
    image:quiz3,
  },
  {
    id: 9,
    question: "Which of the following best describes AI?",
    options: ["Human intelligence", "Machine mimicking human intelligence", "Natural intelligence", "Data collection"],
    correctOptionIndex: 1,
    image:quiz3,
  },
  {
    id: 10,
    question: "Which of the following is a popular AI tool for generating images?",
    options: ["Figma", "DALL·E", "Canva", "React"],
    correctOptionIndex: 1,
    image: quiz3,
  },
],

  },
  {
    id: 4,
    title: "Guess the Actor!",
    plays: 7,
    image: quiz4,
    questions: [
  // Superhero actors
  {
    id: 1,
    question: "Who plays Iron Man in the Marvel Cinematic Universe?",
    options: ["Chris Evans", "Robert Downey Jr.", "Mark Ruffalo", "Tom Holland"],
    correctOptionIndex: 1,
    image: quiz4,
  },
  {
    id: 2,
    question: "Who played Batman in 'The Dark Knight' trilogy?",
    options: ["Ben Affleck", "Robert Pattinson", "Christian Bale", "Michael Keaton"],
    correctOptionIndex: 2,
    image: quiz4,
  },
  {
    id: 3,
    question: "Which actor plays Spider-Man in 'Spider-Man: Homecoming'?",
    options: ["Tobey Maguire", "Andrew Garfield", "Tom Holland", "Logan Lerman"],
    correctOptionIndex: 2,
    image: quiz4,
  },
  {
    id: 4,
    question: "Who plays Wonder Woman in the DCEU?",
    options: ["Gal Gadot", "Scarlett Johansson", "Brie Larson", "Margot Robbie"],
    correctOptionIndex: 0,
    image: quiz4,
  },
  {
    id: 5,
    question: "Who plays Deadpool in the movies?",
    options: ["Chris Pratt", "Ryan Reynolds", "Jake Gyllenhaal", "James McAvoy"],
    correctOptionIndex: 1,
    image: quiz4,
  },

  // Non-superhero world-famous movie actors
  {
    id: 6,
    question: "Who played Jack in 'Titanic'?",
    options: ["Leonardo DiCaprio", "Brad Pitt", "Tom Hanks", "Matt Damon"],
    correctOptionIndex: 0,
    image: quiz4,
  },
  {
    id: 7,
    question: "Which actor starred in 'Mission: Impossible' as Ethan Hunt?",
    options: ["Keanu Reeves", "Tom Cruise", "Matt Damon", "Harrison Ford"],
    correctOptionIndex: 1,
    image: quiz4,
  },
  {
    id: 8,
    question: "Who played Forrest Gump?",
    options: ["Robin Williams", "Tom Hanks", "Nicolas Cage", "Jim Carrey"],
    correctOptionIndex: 1,
    image: quiz4,
  },
  {
    id: 9,
    question: "Who played Harry Potter in all 8 films?",
    options: ["Elijah Wood", "Tom Felton", "Daniel Radcliffe", "Rupert Grint"],
    correctOptionIndex: 2,
    image: quiz4,
  },
  {
    id: 10,
    question: "Who played Dominic Toretto in the 'Fast & Furious' series?",
    options: ["Dwayne Johnson", "Jason Statham", "Vin Diesel", "Mark Wahlberg"],
    correctOptionIndex: 2,
    image: quiz4,
  },
],

  },
  {
    id: 5,
    title: "Guess National Sport",
    plays: 6,
    image: quiz5,
    questions: [
  {
    id: 1,
    question: "What is the national sport of India?",
    options: ["Cricket", "Hockey", "Kabaddi", "Football"],
    correctOptionIndex: 1,
    image: quiz5,
  },
  {
    id: 2,
    question: "What is the national sport of Japan?",
    options: ["Karate", "Judo", "Sumo Wrestling", "Baseball"],
    correctOptionIndex: 2,
    image: quiz5,
  },
  {
    id: 3,
    question: "Which sport is recognized as the national sport of Canada?",
    options: ["Ice Hockey", "Lacrosse", "Baseball", "Basketball"],
    correctOptionIndex: 1,
    image: quiz5,
  },
  {
    id: 4,
    question: "What is the national sport of Brazil?",
    options: ["Football", "Capoeira", "Volleyball", "Judo"],
    correctOptionIndex: 0,
    image: quiz5,
  },
  {
    id: 5,
    question: "Which country has Taekwondo as its national sport?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correctOptionIndex: 2,
    image: quiz5,
  },
  {
    id: 6,
    question: "What is the national sport of New Zealand?",
    options: ["Cricket", "Rugby Union", "Netball", "Rowing"],
    correctOptionIndex: 1,
    image: quiz5,
  },
  {
    id: 7,
    question: "Which country has Archery as its national sport?",
    options: ["Bhutan", "Nepal", "Thailand", "Sri Lanka"],
    correctOptionIndex: 0,
    image: quiz5,
  },
  {
    id: 8,
    question: "What is the national sport of the United States?",
    options: ["Basketball", "Baseball", "American Football", "Ice Hockey"],
    correctOptionIndex: 1,
    image: quiz5,
  },
  {
    id: 9,
    question: "What is the national sport of England?",
    options: ["Football", "Rugby", "Cricket", "Tennis"],
    correctOptionIndex: 2,
    image:quiz5,
  },
  {
    id: 10,
    question: "What is the national sport of China?",
    options: ["Kung Fu", "Wushu", "Table Tennis", "Badminton"],
    correctOptionIndex: 2,
    image: quiz5,
  },
],

  },
  {
    id: 6,
    title: "About the world",
    plays: 3,
    image: quiz6,
    questions: [
  {
    id: 1,
    question: "Which is the largest continent by area?",
    options: ["Africa", "Asia", "Europe", "North America"],
    correctOptionIndex: 1,
    image: quiz6,
  },
  {
    id: 2,
    question: "Which country has the most population in the world?",
    options: ["India", "China", "United States", "Indonesia"],
    correctOptionIndex: 0,
    image: quiz6,
  },
  {
    id: 3,
    question: "Which city is known as the 'City of Light'?",
    options: ["Rome", "New York", "Paris", "Tokyo"],
    correctOptionIndex: 2,
    image: quiz6,
  },
  {
    id: 4,
    question: "Which country is home to the Great Barrier Reef?",
    options: ["South Africa", "Brazil", "Australia", "Philippines"],
    correctOptionIndex: 2,
    image: quiz6,
  },
  {
    id: 5,
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Yangtze", "Mississippi", "Nile"],
    correctOptionIndex: 3,
    image: quiz6,
  },
  {
    id: 6,
    question: "Which country has the Eiffel Tower?",
    options: ["Spain", "France", "Italy", "Germany"],
    correctOptionIndex: 1,
    image: quiz6,
  },
  {
    id: 7,
    question: "Which desert is the largest in the world?",
    options: ["Gobi", "Kalahari", "Sahara", "Atacama"],
    correctOptionIndex: 2,
    image: quiz6,
  },
  {
    id: 8,
    question: "Mount Everest is located between which two countries?",
    options: ["China and India", "Nepal and India", "China and Nepal", "Bhutan and China"],
    correctOptionIndex: 2,
    image: quiz6,
  },
  {
    id: 9,
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["Italy", "France", "Germany", "Spain"],
    correctOptionIndex: 1,
    image: quiz6,
  },
  {
    id: 10,
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Malta", "San Marino", "Vatican City"],
    correctOptionIndex: 3,
    image: quiz6,
  },
],

  },
];
