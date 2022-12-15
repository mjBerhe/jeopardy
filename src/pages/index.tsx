import React from "react";
import { type NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

const buttonClass =
  "flex justify-start rounded-lg border bg-gray-700 px-4 py-2";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jeopardy</title>
        <meta name="description" content="hey whats gucci" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex-col bg-[#18168F] font-jeopardy text-white">
        <div className="mx-auto flex h-screen w-full max-w-7xl flex-col">
          <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
            <h1 className="text-shadow-md text-center text-[150px] font-bold">
              JEOPARDY
            </h1>
            <div className="flex space-x-8">
              <Link href="/rules" className={buttonClass}>
                Rules
              </Link>
              <Link href="/play" className={buttonClass}>
                Play
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
