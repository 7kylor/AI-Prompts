"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  signIn,
  sinOut,
  useSession,
  signOut,
  getProviders,
} from "next-auth/react";
const Nav = () => {
  const isUserLoggedIn = useState(true);
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProviders();
  }),
    [];
  return (
    <nav
      className="
 flex-between w-full mb-16 pt-3 "
    >
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="AI Prompts Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text"> AI Prompts</p>
      </Link>
      {/* desktop view */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href=" /create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="assets/images/logo.svg"
                height={37}
                width={37}
                alt="profile"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
      {/* mobile view */}
      <div className="sm:hidden flex relative">
        {" "}
        {isUserLoggedIn ? (
          <div
            className="
      flex"
          >
            {" "}
            <Image
              src="/assets/images/logo.svg"
              alt="AI Prompts Logo"
              width={30}
              height={30}
              className="object-contain"
              onClick={() => setToggleDropDown((prev) => !prev)}
            />
            {toggleDropDown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  Create prompt
                </Link>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
