"use client";

import React, { useState } from "react";
import TagInput from "./tagInput";
import { Button, Modal } from "antd";
const QuestionForm = ({ children }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý dữ liệu form tại đây
    console.log({ title, content, tags });
    setOpen(false);
  };

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setTags("");
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)} type='primary' size='large'>Tạo Câu Hỏi</Button>
      <Modal open={open} onCancel={handleCancel} onOk={handleSubmit} title="Tạo Câu Hỏi">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Tiêu đề
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-gray-700 font-medium mb-2"
            >
              Nội dung câu hỏi
            </label>
            <textarea
              id="content"
              name="content"
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <TagInput />
        </form>
      </Modal>
    </div>
  );
};

export default QuestionForm;
