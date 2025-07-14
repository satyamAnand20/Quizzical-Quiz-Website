import quiz1 from "../assets/quiz1.webp";
import quiz2 from "../assets/quiz2.webp";
import quiz3 from "../assets/quiz3.webp";
import quiz4 from "../assets/quiz4.webp";
import quiz5 from "../assets/quiz5.webp";
import quiz6 from "../assets/quiz6.webp";
import quiz7 from "../assets/quiz7.webp";
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
    title: "Which Country Matches You ?",
    plays: 145,
    image: quiz2,
  },
  {
    id: 3,
    title: "Aptitude Calendar Quiz",
    plays: 3,
    image: quiz3,
  },
  {
    id: 4,
    title: "Mexico Country Quiz",
    plays: 3,
    image: quiz4,
  },
  {
    id: 5,
    title: "AI in Daily Life Quiz",
    plays: 3,
    image: quiz5,
  },
  {
    id: 6,
    title: "Guess the Actor!",
    plays: 7,
    image: quiz6,
  },
  {
    id: 7,
    title: "Guess National Sport",
    plays: 6,
    image: quiz7,
  },
];
