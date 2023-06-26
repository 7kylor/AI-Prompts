import React, { Children } from "react";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "AI Prompts",
  description: "Discover & Share the newest prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <div className="main">
          <div className=" gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
