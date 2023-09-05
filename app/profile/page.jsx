"use client";
import React from "react";
import Profile from "@components/Profile";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const ProfilePage = () => {
  const router = useRouter();
  const [myPosts, setMyPosts] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  return (
    <>
      <Profile />
    </>
  );
};

export default ProfilePage;
