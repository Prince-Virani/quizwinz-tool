// app/data/quizData.ts

export interface Question {
  question: string;
  options: string[];
  correct: number;
  funFact: string;
}

export const allQuizQuestions: Record<number, Question[]> = {
  // --------------------------------------------------------
  // ID 1: Business And Economics | Companies
  // --------------------------------------------------------
  1: [
    {
      question: "Which company was founded by Bill Gates?",
      options: ["Apple", "Microsoft", "Google", "Amazon"],
      correct: 1,
      funFact: "Microsoft was founded in 1975.",
    },
    {
      question: "Who is the CEO of Tesla?",
      options: ["Jeff Bezos", "Tim Cook", "Elon Musk", "Mark Zuckerberg"],
      correct: 2,
      funFact: "Elon Musk is also the founder of SpaceX.",
    }
  ],

  // --------------------------------------------------------
  // ID 2: Travel | World Capitals
  // --------------------------------------------------------
  2: [
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      correct: 2,
      funFact: "Canberra was chosen as a compromise between Sydney and Melbourne.",
    },
    {
      question: "What is the capital of Japan?",
      options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
      correct: 2,
      funFact: "Tokyo is the most populous metropolitan area in the world.",
    }
  ],

  // --------------------------------------------------------
  // ID 9: Science | Physics Basics
  // --------------------------------------------------------
  9: [
    {
      question: "What is the unit of force?",
      options: ["Joule", "Watt", "Newton", "Pascal"],
      correct: 2,
      funFact: "The Newton is named after Sir Isaac Newton.",
    },
    {
      question: "What is the speed of light approx?",
      options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "Sound speed"],
      correct: 0,
      funFact: "Light from the sun takes about 8 minutes to reach Earth.",
    }
  ],

  // --------------------------------------------------------
  // ID 38: Sports | Cricket
  // --------------------------------------------------------
  38: [
    {
      question: "How many balls are in an over?",
      options: ["5", "6", "8", "10"],
      correct: 1,
      funFact: "In the past, overs sometimes consisted of 4 or 8 balls depending on the rules.",
    },
    {
      question: "Who is known as the 'God of Cricket'?",
      options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Don Bradman"],
      correct: 2,
      funFact: "Sachin Tendulkar has scored 100 international centuries.",
    }
  ],

  // ... You simply repeat this for all IDs up to 42
};