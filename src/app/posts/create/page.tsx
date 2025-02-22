"use client";

import React, { FormEvent, useState } from "react";
import { ICreatePost } from "../../../types/post.type";
import { useRouter } from "next/navigation";
import PostForm from "../_components/PostForm";

function CreatePostPage() {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [writer, setWriter] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title) {
      window.alert("제목을 입력해주세요.");
      return;
    }

    if (!writer) {
      window.alert("작성자를 입력해주세요.");
      return;
    }

    if (!content) {
      window.alert("내용을 입력해주세요.");
      return;
    }

    const postData: ICreatePost = {
      title: title,
      writer: writer,
      content: content,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/board`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        throw new Error("Failed to create post");
      }
      router.push("/posts");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full justify-center">
      <PostForm
        type="CREATE"
        title={title}
        onTitleChange={(e) => setTitle(e.target.value)}
        writer={writer}
        onWriterChange={(e) => setWriter(e.target.value)}
        content={content}
        onContentChange={(e) => setContent(e.target.value)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default CreatePostPage;
