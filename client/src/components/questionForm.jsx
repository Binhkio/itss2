"use client";

import React, { useState } from "react";
import TagInput from "./tagInput";
import { Button, Modal, Select, notification } from "antd";
import { DEFAULT_URL, TAGS_SAMPLE } from "../../config";
import axios from "axios";
const QuestionForm = ({ refetch }) => {
  const [title, setTitle] = useState("Câu hỏi mẫu 001");
  const [content, setContent] = useState("Đây là một câu hỏi mẫu");
  const [tags, setTags] = useState([]);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Xử lý dữ liệu form tại đây
    try {
      const res = await axios.post(`${DEFAULT_URL}/posts/add`, {
        title,
        content,
        tags,
      });
      if (res && res.status === 200) {
        notification.success(res.data);
        refetch();
      } 
    } catch (error) {
      notification.error({ message: error?.message });
    }
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
          <label
            htmlFor="content"
            className="block text-gray-700 font-medium mb-2"
          >
            Tags
          </label>
          <Select
            allowClear
            mode="tags"
            placeholder="Tags.."
            options={TAGS_SAMPLE.map(tag => ({
              label: tag,
              value: tag,
            }))}
            onChange={(value) => setTags(value)}
            value={tags}
            className="w-1/2"
          />
        </form>
      </Modal>
    </div>
  );
};

export default QuestionForm;
