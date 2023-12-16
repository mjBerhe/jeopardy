import React, { useEffect, useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { CategoryCard } from "../../components/CategoryCard";
import { QuestionCard } from "../../components/QuestionCard";
import { ActiveQuestionCard } from "../../components/ActiveQuestionCard";

export type SingleQuestion = {
  name: string;
  value?: string;
  drink?: string;
  isComplete?: boolean;
  isDailyDouble?: boolean;
};

type Question = {
  topic: string;
  questions: SingleQuestion[];
};

const topics: Question[] = [
  {
    topic: "TOPIC 1",
    questions: [
      { name: "STARTS WITH Y" },
      {
        name: "Found on the web. Not for sharing pictures, but something similar.",
        value: "$200",
        drink: "2 Shots",
        isComplete: false,
      },
      {
        name: "A larger boat, and better looking. Used for pleasure, cruising or racing.",
        value: "$400",
        drink: "4 Shots",
        isComplete: false,
      },
      {
        name: "Guess the Guess",
        value: "$600",
        drink: "6 Shots",
        isComplete: false,
        isDailyDouble: true,
      },
      {
        name: "Japanese for 'grilled chicken'. Easy to hold, better to eat.",
        value: "$800",
        drink: "8 Shots",
        isComplete: false,
      },
      {
        name: "GAME TIME",
        value: "$1000",
        drink: "10 Shots",
        isComplete: false,
      },
    ],
  },
  {
    topic: "TOPIC 2",
    questions: [
      { name: "24" },
      {
        name: "24 seconds is the time a team may posses the ball before attempting to score in this sport",
        value: "$200",
        drink: "2 Shots",
        isComplete: false,
      },
      {
        name: "If 24 hours makes up a day, this amount of hours makes up a week",
        value: "$400",
        drink: "4 Shots",
        isComplete: false,
      },
      {
        name: "Avacodos, rice, and grasshoppers all have 24 of these thread-like structures",
        value: "$600",
        drink: "6 Shots",
        isComplete: false,
      },
      {
        name: "This 24 faced, 4 dimensional cube has been used in popular films such as Interstellar and the MCU",
        value: "$800",
        drink: "8 Shots",
        isComplete: false,
      },
      {
        name: "This two player board game has players starting at the 24-point position",
        value: "$1000",
        drink: "10 Shots",
        isComplete: false,
      },
    ],
  },
  {
    topic: "TOPIC 3",
    questions: [
      { name: "6 LETTER WORDS" },
      {
        name: `From old French meaning "to dine", it's the chief meal of the day`,
        value: "$200",
        drink: "2 Shots",
        isComplete: false,
      },
      {
        name: "It's the club-shaped tool used to pound substances in a mortar",
        value: "$400",
        drink: "4 Shots",
        isComplete: false,
      },
      {
        name: `To rot, or the uncle on "The Addams Family"`,
        value: "$600",
        drink: "6 Shots",
        isComplete: false,
      },
      {
        name: "This lighter-than-air element only rose to #2 on the periodic chart",
        value: "$800",
        drink: "8 Shots",
        isComplete: false,
      },
      {
        name: "This disease caused by a lack of vitamin C is characterized by bleeding gums & extreme weakness",
        value: "$1000",
        drink: "10 Shots",
        isComplete: false,
      },
    ],
  },
  {
    topic: "TOPIC 4",
    questions: [
      { name: "WORDS IN BIRTHDAY" },
      {
        name: "opposite of messy",
        value: "$200",
        drink: "2 Shots",
        isComplete: false,
      },
      {
        name: "cows, buffaloes, goats, sheeps and camels all provide this",
        value: "$400",
        drink: "4 Shots",
        isComplete: false,
      },
      {
        name: "where my deepest darkest secrets lie",
        value: "$600",
        drink: "6 Shots",
        isComplete: false,
      },
      {
        name: "a lot of head",
        value: "$800",
        drink: "8 Shots",
        isComplete: false,
        isDailyDouble: true,
      },
      {
        name: "a mix of two",
        value: "$1000",
        drink: "10 Shots",
        isComplete: false,
      },
    ],
  },
  {
    topic: "TOPIC 5",
    questions: [
      { name: "MOVIE TITLE MATH" },
      {
        name: "The _ year-old-virgin minus fantastic _",
        value: "$200",
        drink: "2 Shots",
        isComplete: false,
      },
      {
        name: "The magnificent _ plus _ mile",
        value: "$400",
        drink: "4 Shots",
        isComplete: false,
      },
      {
        name: "_ shades of grey minus _ years a slave",
        value: "$600",
        drink: "6 Shots",
        isComplete: false,
      },
      {
        name: "Both in 2012: the _ stooges times _ jump street",
        value: "$800",
        drink: "8 Shots",
        isComplete: false,
      },
      {
        name: "_ first dates times this is _",
        value: "$1000",
        drink: "10 Shots",
        isComplete: false,
      },
    ],
  },
  // {
  //   topic: "TOPIC 6",
  //   questions: [
  //     { name: "SONG LYRICS" },
  //     {
  //       name: "21, can you do somethin' for me?",
  //       value: "$200",
  //       drink: "2 Shots",
  //       isComplete: false,
  //     },
  //     {
  //       name: `Riding on a horse, ha
  //     You can whip your Porsche`,
  //       value: "$400",
  //       drink: "4 Shots",
  //       isComplete: false,
  //     },
  //     {
  //       name: `People always told me be careful of what you do
  //     And don't go around breaking young girls' hearts`,
  //       value: "$600",
  //       drink: "6 Shots",
  //       isComplete: false,
  //     },
  //     {
  //       name: `There she stood in the doorway
  //     I heard the mission bell
  //     And I was thinking to myself
  //     "This could be Heaven or this could be Hell"`,
  //       value: "$800",
  //       drink: "8 Shots",
  //       isComplete: false,
  //     },
  //     {
  //       name: `Away above the chimney tops
  //     That's where you'll find me`,
  //       value: "$1000",
  //       drink: "10 Shots",
  //       isComplete: false,
  //     },
  //   ],
  // },
];

const Home: NextPage = () => {
  const [isQuestion, setIsQuestion] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<SingleQuestion | null>(
    null
  );
  const [currentTopic, setCurrentTopic] = useState<string>("");
  const [questions, setQuestions] = useState<Question[]>(topics);

  const completeQuestion = (question: SingleQuestion, topic: string) => {
    const tempQuestions = [...questions];
    const topicIndex = tempQuestions.findIndex((t) => t.topic === topic);
    if (topicIndex > -1) {
      const questionIndex = tempQuestions[topicIndex]?.questions.findIndex(
        (q) => q.name === question.name
      );
      if (questionIndex && questionIndex > -1) {
        tempQuestions[topicIndex]!.questions[questionIndex] = {
          ...question,
          isComplete: true,
        };
      }
    }
    setQuestions([...tempQuestions]);
  };

  const handleActivateQuestion = (question: SingleQuestion, topic: string) => {
    setCurrentQuestion(question);
    setCurrentTopic(topic);
    setIsQuestion(true);
  };

  return (
    <>
      <Head>
        <title>JEOPARDY</title>
        <meta name="description" content="hey whats gucci" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex-col bg-[#18168F] font-jeopardy text-white">
        <div className="mx-auto flex h-screen w-full max-w-[1700px] flex-col">
          {isQuestion && (
            <ActiveQuestionCard
              question={currentQuestion}
              topic={currentTopic}
              setActive={setIsQuestion}
              completeQuestion={completeQuestion}
            />
          )}
          {!isQuestion && (
            <div className="flex h-full items-center justify-center">
              <div className="grid grid-flow-col grid-cols-5 grid-rows-6 border-[6px] border-black">
                {questions.map((topic, j) =>
                  topic.questions.map((question, i) => {
                    return (
                      <div key={question.name} className="">
                        {i === 0 ? (
                          <CategoryCard title={question.name} index={j} />
                        ) : (
                          <QuestionCard
                            {...question}
                            setActive={handleActivateQuestion}
                            topic={topic.topic}
                          />
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;

// const topics: Question[] = [
//   {
//     topic: "TOPIC 1",
//     questions: [
//       { name: "STARTS WITH Y" },
//       {
//         name: "This former 8x NBA All-Star player is known for being one of the tallest players in the league",
//         value: "$200",
//         drink: "2 Shots",
//         isComplete: false,
//       },
//       {
//         name: "This web service provider was one of the pioneers of the early Internet era in the 1990s",
//         value: "$400",
//         drink: "4 Shots",
//         isComplete: false,
//       },
//       {
//         name: "Western asian country bordering Saudi Arabia and Oman",
//         value: "$600",
//         drink: "6 Shots",
//         isComplete: false,
//         isDailyDouble: true,
//       },
//       {
//         name: "Not to be mistaken with bees, these critters prefer to feed on insects rather than pollen",
//         value: "$800",
//         drink: "8 Shots",
//         isComplete: false,
//       },
//       {
//         name: `French designer credited for introducing the "Le Smoking" tuxedo suit for women`,
//         value: "$1000",
//         drink: "10 Shots",
//         isComplete: false,
//       },
//     ],
//   },
//   {
//     topic: "TOPIC 2",
//     questions: [
//       { name: "24" },
//       {
//         name: "24 seconds is the time a team may posses the ball before attempting to score in this sport",
//         value: "$200",
//         drink: "2 Shots",
//         isComplete: false,
//       },
//       {
//         name: "If 24 hours makes up a day, this amount of hours makes up a week",
//         value: "$400",
//         drink: "4 Shots",
//         isComplete: false,
//       },
//       {
//         name: "Avacodos, rice, and grasshoppers all have 24 of these thread-like structures",
//         value: "$600",
//         drink: "6 Shots",
//         isComplete: false,
//       },
//       {
//         name: "This 24 faced, 4 dimensional cube has been used in popular films such as Interstellar and the MCU",
//         value: "$800",
//         drink: "8 Shots",
//         isComplete: false,
//       },
//       {
//         name: "This two player board game has players starting at the 24-point position",
//         value: "$1000",
//         drink: "10 Shots",
//         isComplete: false,
//       },
//     ],
//   },
//   {
//     topic: "TOPIC 3",
//     questions: [
//       { name: "6 LETTER WORDS" },
//       {
//         name: `From old French meaning "to dine", it's the chief meal of the day`,
//         value: "$200",
//         drink: "2 Shots",
//         isComplete: false,
//       },
//       {
//         name: "It's the club-shaped tool used to pound substances in a mortar",
//         value: "$400",
//         drink: "4 Shots",
//         isComplete: false,
//       },
//       {
//         name: `To rot, or the uncle on "The Addams Family"`,
//         value: "$600",
//         drink: "6 Shots",
//         isComplete: false,
//       },
//       {
//         name: "This lighter-than-air element only rose to #2 on the periodic chart",
//         value: "$800",
//         drink: "8 Shots",
//         isComplete: false,
//       },
//       {
//         name: "This disease caused by a lack of vitamin C is characterized by bleeding gums & extreme weakness",
//         value: "$1000",
//         drink: "10 Shots",
//         isComplete: false,
//       },
//     ],
//   },
//   {
//     topic: "TOPIC 4",
//     questions: [
//       { name: "WORDS IN BIRTHDAY" },
//       {
//         name: "opposite of messy",
//         value: "$200",
//         drink: "2 Shots",
//         isComplete: false,
//       },
//       {
//         name: "cows, buffaloes, goats, sheeps and camels all provide this",
//         value: "$400",
//         drink: "4 Shots",
//         isComplete: false,
//       },
//       {
//         name: "where my deepest darkest secrets lie",
//         value: "$600",
//         drink: "6 Shots",
//         isComplete: false,
//       },
//       {
//         name: "a lot of head",
//         value: "$800",
//         drink: "8 Shots",
//         isComplete: false,
//         isDailyDouble: true,
//       },
//       {
//         name: "a mix of two",
//         value: "$1000",
//         drink: "10 Shots",
//         isComplete: false,
//       },
//     ],
//   },
//   {
//     topic: "TOPIC 5",
//     questions: [
//       { name: "MOVIE TITLE MATH" },
//       {
//         name: "The _ year-old-virgin minus fantastic _",
//         value: "$200",
//         drink: "2 Shots",
//         isComplete: false,
//       },
//       {
//         name: "The magnificent _ plus _ mile",
//         value: "$400",
//         drink: "4 Shots",
//         isComplete: false,
//       },
//       {
//         name: "_ shades of grey minus _ years a slave",
//         value: "$600",
//         drink: "6 Shots",
//         isComplete: false,
//       },
//       {
//         name: "Both in 2012: the _ stooges times _ jump street",
//         value: "$800",
//         drink: "8 Shots",
//         isComplete: false,
//       },
//       {
//         name: "_ first dates times this is _",
//         value: "$1000",
//         drink: "10 Shots",
//         isComplete: false,
//       },
//     ],
//   },
//   {
//     topic: "TOPIC 6",
//     questions: [
//       { name: "SONG LYRICS" },
//       {
//         name: "21, can you do somethin' for me?",
//         value: "$200",
//         drink: "2 Shots",
//         isComplete: false,
//       },
//       {
//         name: `Riding on a horse, ha
//       You can whip your Porsche`,
//         value: "$400",
//         drink: "4 Shots",
//         isComplete: false,
//       },
//       {
//         name: `People always told me be careful of what you do
//       And don't go around breaking young girls' hearts`,
//         value: "$600",
//         drink: "6 Shots",
//         isComplete: false,
//       },
//       {
//         name: `There she stood in the doorway
//       I heard the mission bell
//       And I was thinking to myself
//       "This could be Heaven or this could be Hell"`,
//         value: "$800",
//         drink: "8 Shots",
//         isComplete: false,
//       },
//       {
//         name: `Away above the chimney tops
//       That's where you'll find me`,
//         value: "$1000",
//         drink: "10 Shots",
//         isComplete: false,
//       },
//     ],
//   },
// ];
