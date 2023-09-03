"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Form from "@components/Form";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tap: "",
  });
  const createPrompt = async (ev) => {};
  return (
    <div>
      <Form
        type="Create"
        post={post}
        setPost={setPost}
        handleSubmit={createPrompt}
      />
    </div>
  );
};

export default CreatePrompt;
