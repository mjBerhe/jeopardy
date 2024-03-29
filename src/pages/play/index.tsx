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
      { name: "MIKEE CATCHES FLIGHTS, NOT FEELINGS" },
      {
        name: "Of all the players in tonight’s Trivia, this person is who Mikee has travelled with the most",
        value: "$200",
        drink: "2 Shots",
        isComplete: false,
      },
      {
        name: "This country hosts most of Mikee’s situationships and/or flings \n\n Hungary \n USA \n France \n Germany",
        value: "$400",
        drink: "4 Shots",
        isComplete: false,
      },
      {
        name: "This is where Mikee studied during her Study Abroad program",
        value: "$600",
        drink: "6 Shots",
        isComplete: false,
      },
      {
        name: "When Mikee travels, she has an extra eye mask that she stores in her bag which she originally received as a giveaway from this airline: \n\n eva air \n british airways \n american airlines \n ryan air",
        value: "$800",
        drink: "8 Shots",
        isComplete: false,
      },
      {
        name: "This asian country is where 6 year old mikee peed inside a gondola because she refused to go to the washroom when her mom told her to",
        value: "$1000",
        drink: "10 Shots",
        isComplete: false,
      },
    ],
  },
  {
    topic: "TOPIC 2",
    questions: [
      { name: "JUST A HOBBY HOE" },
      {
        name: "This hobby comes with an alter ego",
        value: "$200",
        drink: "2 Shots",
        isComplete: false,
      },
      {
        name: "Mikee returned to this hobby during her time in PEI",
        value: "$400",
        drink: "4 Shots",
        isComplete: false,
      },
      {
        name: "This is a hobby Mikee started but never finished",
        value: "$600",
        drink: "6 Shots",
        isComplete: false,
      },
      {
        name: "These two hobbies are regular posts on Mikee’s Instagram Explore page \n\n Dancing and Cooking \n Gym and Skincare \n Painting and Crochet \n Pottery and Astrology",
        value: "$800",
        drink: "8 Shots",
        isComplete: false,
      },
      {
        name: "Mikee wants to start this hobby but can’t afford it right now \n\n Collecting stamps \n Pole dancing \n Auto shop \n Massage therapy",
        value: "$1000",
        drink: "10 Shots",
        isComplete: false,
      },
    ],
  },
  {
    topic: "TOPIC 3",
    questions: [
      { name: "MARCH MADNESS" },
      {
        name: `Mikee used to write this at the top of every test throughout her whole academic career`,
        value: "$200",
        drink: "2 Shots",
        isComplete: false,
      },
      {
        name: "This singer and actress rose to fame in the late ‘90s before blowing up once more in a hit TV series that emotionally manipulated Mikee and many others",
        value: "$400",
        drink: "4 Shots",
        isComplete: false,
      },
      {
        name: `This show stars a lead actor with a last name that is related to what you would see at a deli`,
        value: "$600",
        drink: "6 Shots",
        isComplete: false,
      },
      {
        name: "This 50 Cent song is what Mikee hoped to sing had she attended his final concert in Toronto",
        value: "$800",
        drink: "8 Shots",
        isComplete: false,
      },
      {
        name: "According to Mikee: emotional intelligence, broad shoulders, hilarity and friendliness are all attributes for this kind of person",
        value: "$1000",
        drink: "10 Shots",
        isComplete: false,
      },
    ],
  },
  {
    topic: "TOPIC 4",
    questions: [
      { name: "FACT CHECK" },
      {
        name: "This state is currently under the occupation of an oppressive and discriminatory system that refuses to recognise the rights and freedoms of those who call the land their home",
        value: "$200",
        drink: "2 Shots",
        isComplete: false,
      },
      {
        name: "This actress starred in Mikee’s favourite romantic comedy and has also appeared in two separate films with Tom Hanks",
        value: "$400",
        drink: "4 Shots",
        isComplete: false,
      },
      {
        name: "This cosmetic surgery can also be done through injections",
        value: "$600",
        drink: "6 Shots",
        isComplete: false,
      },
      {
        name: "The Barzini meeting, watch for the traitors” is a Jay-Z line referencing this classic gangster film that features Al Pacino",
        value: "$800",
        drink: "8 Shots",
        isComplete: false,
      },
      {
        name: "This word is what Mikee used to misspell regularly in elementary school: \n\n Wensday \n Exellent \n Brocolli \n Catastrofee",
        value: "$1000",
        drink: "10 Shots",
        isComplete: false,
      },
    ],
  },
  {
    topic: "TOPIC 5",
    questions: [
      { name: "MIKE-ARAOKE JAMS" },
      {
        name: "Fill in the blanks to this song: “Put your faith in what you most believe in. Two worlds, ___ ___",
        value: "$200",
        drink: "2 Shots",
        isComplete: false,
      },
      {
        name: "This Disney sibling duo is so annoying, they’re the furthest from what you’re looking for",
        value: "$400",
        drink: "4 Shots",
        isComplete: false,
      },
      {
        name: "Hailey Baldwin wouldn’t be married if this singer didn’t make her husband famous",
        value: "$600",
        drink: "6 Shots",
        isComplete: false,
      },
      {
        name: "Twenty years later, this misunderstood artist still wears crop tops and has a discography that still makes the rounds in Mikee’s monthly playlists",
        value: "$800",
        drink: "8 Shots",
        isComplete: false,
      },
      {
        name: "Finish the lyrics: “Bittersweet memories. That is all I’m taking with me. So _________",
        value: "$1000",
        drink: "10 Shots",
        isComplete: false,
      },
    ],
  },

  {
    topic: "TOPIC 6",
    questions: [
      { name: "MIKEE-ISMS" },
      {
        name: "This adjective describes the state of being ill or unwell, but in modern slang, it's also used to express admiration, as in something that is impressively cool or great",
        value: "$200",
        drink: "2 Shots",
        isComplete: false,
      },
      {
        name: `This phrase is said in the middle of a laughing fit, but not a joyous statement when taken literally`,
        value: "$400",
        drink: "4 Shots",
        isComplete: false,
      },
      {
        name: `If someone’s not a bro and they’re not a man, then they must be a ____`,
        value: "$600",
        drink: "6 Shots",
        isComplete: false,
      },
      {
        name: `It’s the opposite of speak but somehow Mikee usually starts her long tirades with this word`,
        value: "$800",
        drink: "8 Shots",
        isComplete: false,
      },
      {
        name: `Once, a greeting. Twice, a toy`,
        value: "$1000",
        drink: "10 Shots",
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

export default Home;
