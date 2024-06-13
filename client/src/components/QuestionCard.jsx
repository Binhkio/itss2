"use client";

import React from "react";
import {
  CommentOutlined,
  LikeOutlined,
  TagOutlined,
  UserOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";
import { Avatar, Skeleton, Tooltip } from "antd";

const QuestionCard = ({ question }) => {
  return !question ? (
    <div className="w-[560px] h[160px] rounded-md p-4">
      <div style={{ display: "flex", gap: "20px" }}>
        <Avatar size={40} icon={<UserOutlined />} />
        <div>
          <div style={{ fontWeight: "600", fontSize: "16px" }}>Spidartist</div>
          <div style={{ fontWeight: "400", fontSize: "12px" }}>
            3 ngày trước
          </div>
        </div>
      </div>
      <div style={{ fontWeight: "700", fontSize: "18px", marginTop: "20px" }}>
        Câu hỏi về nguyên lý lập trình Hướng đối tượng
      </div>
      <div
        style={{
          color: "#6b7280",
          display: "flex",
          gap: "30px",
          fontSize: "14px",
          fontWeight: "400",
          marginTop: "20px",
        }}
      >
        <span>#oop</span>
        <span>#lythuyet</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <CommentOutlined style={{ fontSize: "24px" }} />
          <LikeOutlined style={{ fontSize: "24px" }} />
          <TagOutlined style={{ fontSize: "24px" }} />
        </div>
        <div>
				<Avatar.Group>
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
      <a href="https://ant.design">
        <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      </a>
      <Tooltip title="Ant User" placement="top">
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
    </Avatar.Group>
        </div>
      </div>
    </div>
  ) : (<Skeleton/>);
};

export default QuestionCard;
