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
  isGame?: boolean;
  isGTG?: boolean;
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
      { name: "TIME TO RHYME" },
      {
        name: "This item has been frequently lost or misplaced over the years",
        value: "$200",
        drink: "2 Shots",
        isComplete: false,
      },
      {
        name: "This term, while commonly associated with food, is what Mikee uses to describe a situation or piece of gossip that is particularly sensational or scandalous",
        value: "$400",
        drink: "4 Shots",
        isComplete: false,
      },
      {
        name: "This big-haired fantasy character is known for her intelligence and quick wit, especially when it comes to creating new spells",
        value: "$600",
        drink: "6 Shots",
        isComplete: false,
      },
      {
        name: "Some think physical exercise and a spiritual experience at the same time. But Mikee thinks summertime at Trinity Bellwoods",
        value: "$800",
        drink: "8 Shots",
        isComplete: false,
      },
      {
        name: "It is personal and confidential. It is thoughts and observations. It is also a song that peaked at number eight on the Billboard Hot 100",
        value: "$1000",
        drink: "10 Shots",
        isComplete: false,
      },
    ],
  },
  {
    topic: "TOPIC 2",
    questions: [
      { name: "NOW PLAYING" },
      {
        name: "This one has a boy with the bread",
        value: "$200",
        drink: "2 Shots",
        isComplete: false,
      },
      {
        name: "This character was an ice princess before finding Jesus at some point in the series",
        value: "$400",
        drink: "4 Shots",
        isComplete: false,
      },
      {
        name: "A bean or an old lady losing their memory",
        value: "$600",
        drink: "6 Shots",
        isComplete: false,
      },
      {
        name: "This childhood icon went to italy, found her doppelgänger and exposed a fake artist for who he was",
        value: "$800",
        drink: "8 Shots",
        isComplete: false,
      },
      {
        name: "It’s found on Disney+ but spelled differently could be YouTube’s greatest content creator",
        value: "$1000",
        drink: "10 Shots",
        isComplete: false,
      },
    ],
  },
  {
    topic: "TOPIC 3",
    questions: [
      { name: "TRUE OR FALSE" },
      {
        name: `Mikee once interviewed a psychotherapist for a story and got therapized on the call`,
        value: "$200",
        drink: "2 Shots",
        isComplete: false,
      },
      {
        name: "Luna is a Leo",
        value: "$400",
        drink: "4 Shots",
        isComplete: false,
      },
      {
        name: `Mikee got so drunk on PEI, she thought she was petting a dog when in fact it was actually a fox`,
        value: "$600",
        drink: "6 Shots",
        isComplete: false,
      },
      {
        name: "Mikee has worked in at least 10 different Starbucks locations",
        value: "$800",
        drink: "8 Shots",
        isComplete: false,
      },
      {
        name: "Mikee applied as a background actor in CBC’s Kim's Convenience",
        value: "$1000",
        drink: "10 Shots",
        isComplete: false,
      },
    ],
  },
  {
    topic: "TOPIC 4",
    questions: [
      { name: "MI-KEY DATES" },
      {
        name: "This is the full government name of Mikee’s child, born in 2016",
        value: "$200",
        drink: "2 Shots",
        isComplete: false,
      },
      {
        name: "This year was the first time Mikee began to commute on the TTC alone for longer than 30 mins",
        value: "$400",
        drink: "4 Shots",
        isComplete: false,
      },
      {
        name: "This was the year Mikee worked for a radio show and got to text George Stromboulopoulos",
        value: "$600",
        drink: "6 Shots",
        isComplete: false,
      },
      {
        name: "This famous wrestler followed Mikee on Twitter shortly after being verified in 2021",
        value: "$800",
        drink: "8 Shots",
        isComplete: false,
      },
      {
        name: "Mikee made it to the regionals in Grade 4 for this sport",
        value: "$1000",
        drink: "10 Shots",
        isComplete: false,
      },
    ],
  },
  {
    topic: "TOPIC 5",
    questions: [
      { name: "DOUBLE E FOR MIKEE" },
      {
        name: "This currency will bring you everywhere in india",
        value: "$200",
        drink: "10 Shots",
        isComplete: false,
      },
      {
        name: "This is Mikee’s favourite discount",
        value: "$400",
        drink: "2 Shots",
        isComplete: false,
      },
      {
        name: "When you first hear it, it sounds like a yell, but when you see what’s actually happened, you realise her nose was just itchy",
        value: "$600",
        drink: "4 Shots",
        isComplete: false,
      },
      {
        name: "This exclamatory phrase, often used to stop someone in their tracks, is also known as a common dance move used in street styles such as breaking",
        value: "$800",
        drink: "6 Shots",
        isComplete: false,
      },
      {
        name: "This standard division of time is not based on any celestial cycles but has been used since ancient times for its convenience in social organization",
        value: "$1000",
        drink: "8 Shots",
        isComplete: false,
      },
    ],
  },
  {
    topic: "TOPIC 6",
    questions: [
      { name: "MIKEELICIOUS" },
      {
        name: "Mikee often forgets food in this common kitchen appliance resulting in SAD cold dinner",
        value: "$200",
        drink: "2 Shots",
        isComplete: false,
      },
      {
        name: `This Canadian ice cream chain was found in PEI`,
        value: "$400",
        drink: "4 Shots",
        isComplete: false,
      },
      {
        name: `It’s green, fermented, and never in Mikee’s burgers`,
        value: "$600",
        drink: "6 Shots",
        isComplete: false,
      },
      {
        name: `This tropical fruit may or may not have caused Mikee’s allergic reaction`,
        value: "$800",
        drink: "8 Shots",
        isComplete: false,
      },
      {
        name: `This appliance is used when Mikee is too lazy to cook but still wants people to compliment her on her food`,
        value: "$1000",
        drink: "10 Shots",
        isComplete: false,
      },
    ],
  },
];

const Double: NextPage = () => {
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
        <div className="mx-auto flex h-screen w-full flex-col px-12">
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
              <div className="grid grid-flow-col grid-cols-6 grid-rows-6 border-[6px] border-black">
                {questions.map((topic, j) =>
                  topic.questions.map((question, i) => {
                    return (
                      <div key={question.name} className="max-w-[300px]">
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

export default Double;
