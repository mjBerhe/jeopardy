import React, { useEffect, useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { CategoryCard } from "../components/CategoryCard";
import { QuestionCard } from "../components/QuestionCard";
import { ActiveQuestionCard } from "../components/ActiveQuestionCard";

type Topic = {
  title: string;
};

export type SingleQuestion = {
  name: string;
  value?: string;
  isComplete?: boolean;
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
        name: "This former 8x NBA All-Star player is known for being one of the tallest players in the league",
        value: "$200",
        isComplete: false,
      },
      {
        name: "This web service provider was one of the pioneers of the early Internet era in the 1990s",
        value: "$400",
        isComplete: false,
      },
      {
        name: "Western asian country bordering Saudi Arabia and Oman",
        value: "$600",
        isComplete: false,
      },
      {
        name: "Not to be mistaken with bees, these critters prefer to feed on insects rather than pollen",
        value: "$800",
        isComplete: false,
      },
      {
        name: `French designer credited for introducing the "Le Smoking" tuxedo suit for women`,
        value: "$1000",
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
        isComplete: false,
      },
      {
        name: "If 24 hours makes up a day, this amount of hours makes up a week",
        value: "$400",
        isComplete: false,
      },
      {
        name: "Avacodos, rice, and grasshoppers all have 24 of these thread-like structures",
        value: "$600",
        isComplete: false,
      },
      {
        name: "This 24 faced, 4 dimensional cube has been used in popular films such as Interstellar and the MCU",
        value: "$800",
        isComplete: false,
      },
      {
        name: "This two player board game has players starting at the 24-point position",
        value: "$1000",
        isComplete: false,
      },
    ],
  },
  {
    topic: "TOPIC 3",
    questions: [
      { name: "6 LETTER WORDS" },
      { name: "winter", value: "$200", isComplete: false },
      { name: "question 2", value: "$400", isComplete: false },
      { name: "question 3", value: "$600", isComplete: false },
      { name: "question 4", value: "$800", isComplete: false },
      { name: "question 5", value: "$1000", isComplete: false },
    ],
  },
  {
    topic: "TOPIC 4",
    questions: [
      { name: "WORDS IN BIRTHDAY" },
      {
        name: "opposite of messy",
        value: "$200",
        isComplete: false,
      },
      {
        name: "cows, buffaloes, goats, sheeps and camels all provide this",
        value: "$400",
        isComplete: false,
      },
      {
        name: "where my deepest darkest secrets lie",
        value: "$600",
        isComplete: false,
      },
      { name: "a lot of head", value: "$800", isComplete: false },
      { name: "a mix of two", value: "$1000", isComplete: false },
    ],
  },
  {
    topic: "TOPIC 5",
    questions: [
      { name: "MOVIE TITLE MATH" },
      {
        name: "The _ year-old-virgin minus fantastic _",
        value: "$200",
        isComplete: false,
      },
      {
        name: "The magnificent _ plus _ mile",
        value: "$400",
        isComplete: false,
      },
      {
        name: "_ shades of grey minus _ years a slave",
        value: "$600",
        isComplete: false,
      },
      {
        name: "Both in 2012: the _ stooges times _ jump street",
        value: "$800",
        isComplete: false,
      },
      {
        name: "_ first dates times this is _",
        value: "$1000",
        isComplete: false,
      },
    ],
  },
  {
    topic: "TOPIC 6",
    questions: [
      { name: "SONG LYRICS" },
      {
        name: "21, can you do somethin' for me?",
        value: "$200",
        isComplete: false,
      },
      {
        name: `Riding on a horse, ha
      You can whip your Porsche`,
        value: "$400",
        isComplete: false,
      },
      {
        name: `People always told me be careful of what you do
      And don't go around breaking young girls' hearts`,
        value: "$600",
        isComplete: false,
      },
      {
        name: `There she stood in the doorway
      I heard the mission bell
      And I was thinking to myself
      "This could be Heaven or this could be Hell"`,
        value: "$800",
        isComplete: false,
      },
      {
        name: `Away above the chimney tops
      That's where you'll find me`,
        value: "$1000",
        isComplete: false,
      },
    ],
  },
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
        <div className="mx-auto flex h-screen w-full max-w-7xl flex-col">
          {isQuestion && (
            <ActiveQuestionCard
              question={currentQuestion}
              topic={currentTopic}
              setActive={setIsQuestion}
              completeQuestion={completeQuestion}
            />
          )}
          {!isQuestion && (
            <>
              <h1 className="text-shadow-md text-center text-[50px] font-bold">
                JEOPARDY
              </h1>
              <div className="grid grid-flow-col grid-cols-6 grid-rows-6 border-[6px] border-black">
                {questions.map((topic, j) =>
                  topic.questions.map((question, i) => {
                    return (
                      <>
                        {i === 0 ? (
                          <CategoryCard
                            key={question.name}
                            title={question.name}
                            index={j}
                          />
                        ) : (
                          <QuestionCard
                            {...question}
                            setActive={handleActivateQuestion}
                            topic={topic.topic}
                          />
                        )}
                      </>
                    );
                  })
                )}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
