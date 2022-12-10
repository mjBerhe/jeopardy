import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { CategoryCard } from "../components/CategoryCard";

type Topic = {
  title: string;
};

const topics: Topic[] = [
  { title: "TOPIC 1" },
  { title: "TOPIC 2" },
  { title: "TOPIC 3" },
  { title: "TOPIC 4" },
  { title: "TOPIC 5" },
  { title: "TOPIC 6" },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>JEOPARDY</title>
        <meta name="description" content="hey whats gucci" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-[#18168F] font-jeopardy text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col">
          <h1 className="text-shadow-md text-center text-[50px] font-bold">
            JEOPARDY
          </h1>
          <div className="grid grid-cols-6 grid-rows-6 border">
            {topics.map((topic) => (
              <CategoryCard
                key={topic.title}
                title={topic.title}
                className="row-span-1 row-start-1"
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
