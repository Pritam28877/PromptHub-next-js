"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { set } from "mongoose";

const NavBar = () => {
  const [isUserLoggedIN, setIsUserLoggedIN] = useState(true);
  const [providers, setProviders] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders();
      console.log(response);
      setProviders(response);
    };

    setProvider();
  }, []);
  const singOut = () => {};
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">PromptHub</p>
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIN ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              {" "}
              Create Post
            </Link>
            <button type="button" onClick={singOut} className="outline_btn">
              signOut
            </button>
            <Link href="/profile">
              <Image
                src="assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
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
                  signIn
                </button>
              ))}
          </>
        )}
      </div>
      {/* Mobile navigation  */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIN ? (
          <div className="flex">
            <Image
              src="assets/images/logo.svg"
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggle((prev) => !prev)}
            />
            {toggle && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_Link"
                  onClick={() => setToggle(false)}
                >
                  MYProfile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_Link"
                  onClick={() => setToggle(false)}
                >
                  CreatePrompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggle(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn "
                >signOut</button>
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
                  signIn
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
