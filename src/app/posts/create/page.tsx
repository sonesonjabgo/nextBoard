"use client";

import React, { FormEvent, useState } from "react";
import { Input, Button, Textarea } from "@nextui-org/react";
import { ICreatePost } from "../../../types/post.type";

function CreatePostPage() {
  const [title, setTitle] = useState<string>("");
  const [writer, setWriter] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const postData: ICreatePost = {
      title: title,
      writer: writer,
      content: content,
    };

    console.log("Form submitted:", postData);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <h1>게시물 등록</h1>
      <Input
        label="제목"
        placeholder="제목을 입력해주세요."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        label="작성자"
        placeholder="작성자 이름을 입력해주세요."
        value={writer}
        onChange={(e) => setWriter(e.target.value)}
      />
      <Textarea
        label="내용"
        placeholder="내용을 입력해주세요."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button color="primary" type="submit">
        등록
      </Button>
    </form>
  );
}

export default CreatePostPage;
