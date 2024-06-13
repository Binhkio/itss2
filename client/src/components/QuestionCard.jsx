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
import moment from "moment";
import Link from "next/link";

const QuestionCard = ({ question }) => {
  return question ? (
    <Link href={`post/${question?._id}`}>
      <div className="w-[560px] h[160px] rounded-lg p-4" style={{backgroundColor: "#ffffff",}}>
        <div style={{ display: "flex", gap: "20px" }}>
          <Avatar size={40} icon={<UserOutlined />} />
          <div>
            <div style={{ fontWeight: "600", fontSize: "16px" }}>{question.createdBy}</div>
            <div style={{ fontWeight: "400", fontSize: "12px" }}>
              {moment(question.createdAt).format('LLL')}
            </div>
          </div>
        </div>
        <div style={{ fontWeight: "700", fontSize: "18px", marginTop: "20px" }}>
          {question.title}
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
          {question?.tags?.map((tag, idx) => <span key={idx}># {tag}</span>)}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <CommentOutlined style={{ fontSize: "24px" }} /> {question?.comment?.length}
            <LikeOutlined style={{ fontSize: "24px" }} /> {question.likes}
            <TagOutlined style={{ fontSize: "24px" }} /> {question.bookmarks}
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
    </Link>
  ) : (<Skeleton/>);
};

export default QuestionCard;
