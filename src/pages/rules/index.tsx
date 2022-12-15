import React from "react";
import { type NextPage } from "next";
import Head from "next/head";

const Rules: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JEOPARDY</title>
        <meta name="description" content="hey whats gucci" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex-col bg-[#18168F] font-jeopardy text-white">
        <div className="mx-auto flex h-screen w-full max-w-7xl flex-col">
          <div className="text-shadow-md mt-8 flex h-full w-full flex-col space-y-4 text-[35px] tracking-wide">
            <h1 className="text-shadow-md  text-[70px] font-bold">RULES</h1>
            <div>1. Everyone will be split into 2 teams</div>
            <div>
              2. The first team to go picks a category and a dollar amount
            </div>
            <div>
              3. After the first question, whichever team answer correctly,
              chooses the next question. If both teams answer incorrectly, the
              team that chose the last question, chooses again
            </div>
            <div>
              4. The host will read out the answer, and the first person to
              raise their hand (AFTER THE HOST IS FINISHED), must respond in the
              form of a question
            </div>
            <div>
              5. Every question will have a dollar amount and drink amount
            </div>
            <div>
              6. If you answer correctly, your team gains the dollar amount. If
              you answer incorrectly, your team loses the the dollar amount
            </div>
            <div>
              7. If you answer incorrectly, you may choose to take the drink
              amount as a team instead of losing money
            </div>
            <div>8. Each team is limited to 30 shots</div>
            <div>9. The team with the most money at the end wins</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Rules;
