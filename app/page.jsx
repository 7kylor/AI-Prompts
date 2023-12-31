import React from "react";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        {" "}
        Discover & Share
        <br className="max-md: hidden" />
        <br />
        <span className="orange_gradient text-center">
          {" "}
          AI-Powered Prompts{" "}
        </span>
      </h1>
      <p className="desc text-center">
        AI powered smart tool that gether humans most famous prompts using
        natural language and machine learning. Assisting your needs and provide
        engaging conversations.
      </p>
    </section>
  );
};

export default Home;
