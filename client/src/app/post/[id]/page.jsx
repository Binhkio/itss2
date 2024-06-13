"use client"

import { LikeOutlined, MessageOutlined, SnippetsOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, List, Skeleton } from "antd";
import axios from "axios";
import moment from "moment";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { DEFAULT_URL } from "../../../../config";

export default function PostDetail() {
  const [data, setData] = useState();
  const [input, setInput] = useState("");
  const { id } = useParams();

  console.log(id)

  async function fetchData() {
    const res = await axios.get(`${DEFAULT_URL}/post/${id}`);
    if (res && res.status === 200) {
      setData(res.data);
    }
  }
  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  const handleAddComment = () => {
    if (!input) return;
    setData({
      ...data,
      comment: [
        {
          createdBy: 'You',
          createdAt: moment().format('LLL'),
          content: input,
          comments: [],
          likes: 0
        },
        ...data.comment,
      ]
    })
  }

  const handleCancel = () => {
    setInput("");
  }

  const showComment = (cmt) => {
    return (
      <div className="my-2" key={cmt.createdBy+cmt.createdAt}>
        <div className="flex justify-start items-start gap-x-3">
          <Avatar style={{ backgroundColor: 'yellowgreen' }} size={"large"} icon={<UserOutlined/>} />
          <div className="flex flex-col gap-y-1">
            <div className="font-bold">{cmt.createdBy}{'\t'}<span className="font-light italic">{cmt.createdAt}</span></div>
            <div>{cmt.content}</div>
            <div className="flex gap-x-8">
              <div className="flex justify-start items-center gap-x-1">
                <LikeOutlined/>
                <span>{cmt.likes}</span>
              </div>
              <div>Reply</div>
            </div>
            <div>
              {cmt?.comment && cmt?.comment.length > 0 && cmt?.comment.map((c) => showComment(c))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center gap-x-8">
      {data ? (
        <div className="w-1/2 flex flex-col gap-y-4">
          <div id="content" className="flex flex-col gap-y-4 p-8 bg-white rounded-md">
            <div className="flex justify-start items-center gap-x-3">
              <Avatar style={{ backgroundColor: 'yellowgreen' }} size={"large"} icon={<UserOutlined/>} />
              <div className="flex flex-col">
                <div className="font-bold">{data.createdBy}</div>
                <div>{data.createdAt}</div>
              </div>
            </div>
            <div className="font-bold text-2xl">
              {data.title}
            </div>
            <div className="">
              {data.content}
            </div>
            <div className="flex justify-start items-center gap-x-4">
              <div className="flex justify-start items-center gap-x-1">
                <MessageOutlined/>
                <span>{data.comment.length}</span>
              </div>
              <div className="flex justify-start items-center gap-x-1">
                <LikeOutlined/>
                <span>{data.likes}</span>
              </div>
              <div className="flex justify-start items-center gap-x-1">
                <SnippetsOutlined/>
                <span>{data.marks}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-8">
            <div className="flex flex-col gap-y-2">
              <div className="font-bold text-md">Trả lời {`(${data.comment.length})`}</div>
              <div className="flex flex-col gap-y-2">
                <div className="flex gap-4">
                  <Avatar style={{ backgroundColor: 'yellowgreen' }} size={"large"} icon={<UserOutlined/>} />
                  <Input.TextArea rows={2} placeholder="Comment..." value={input} onChange={e => setInput(e.target.value)}/>
                </div>
                <div className="flex justify-end items-center gap-x-2">
                  <Button type="primary" onClick={handleAddComment}>Đăng</Button>
                  <Button danger onClick={handleCancel}>Hủy</Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              {data.comment.length > 0 && data.comment.map((cmt) => showComment(cmt))}
            </div>
          </div>
        </div>
      ) : (
        <Skeleton/>
      )}
      <div className="w-1/6 bg-white px-4">
        <List
          header={(
            <div className="flex justify-between">
              <div className="font-bold">Tiêu biểu</div>
              <div className="underline">Xem thêm</div>
            </div>
          )}
          dataSource={[
            'Liệu Python có nhanh hơn C hay không?',
            'Các thành phần chính trong Triết học Mác Lênin',
            'Phân tích sự khác nhau giữa Đệ quy và Quy hoạch động',
          ]}
          renderItem={(item) => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}