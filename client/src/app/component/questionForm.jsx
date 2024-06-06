"use client";

import React, { useState } from "react";
import TagInput from "./tagForm";
const QuestionForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý dữ liệu form tại đây
    console.log({ title, content, tags });
  };

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setTags("");
  };

  return (
    <div className="form-container bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Tạo Câu Hỏi</h2>
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
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
          >
            Đăng câu hỏi
          </button>
          <button 
            type="button"
            onClick={handleCancel}
            className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded">
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;
