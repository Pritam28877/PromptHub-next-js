"use client";
import React from "react";
import Profile from "@components/Profile";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const ProfilePage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);
  return (
    <>
      <Profile />
    </>
  );
};

export default ProfilePage;
