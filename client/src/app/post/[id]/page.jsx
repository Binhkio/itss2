"use client"

import { LikeOutlined, MessageOutlined, SnippetsOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, List, Skeleton } from "antd";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PostDetail() {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    setData({
      createdBy: 'Spidartist',
      createdAt: '3/6/2024',
      title: 'Câu hỏi về nguyên lý lập trình Hướng đối tượng',
      content: 'Các huynh cho đệ hỏi các thành phần chính trong Lập trình hướng đối tượng là gì ạ',
      comments: [
        {
          createdBy: 'Spidar',
          createdAt: '4/6/2024',
          content: 'Lorem ipsum dolor sit amet!',
          comments: [
            {
              createdBy: 'Spidartist',
              createdAt: '4/6/2024',
              content: 'Lorem ipsum dolor sit amet!',
              comments: [],
              likes: 2
            },
          ],
          likes: 2
        },
        {
          createdBy: 'Spidartist',
          createdAt: '5/6/2024',
          content: 'Lorem ipsum dolor sit amet!',
          comments: [
            {
              createdBy: 'Spidartist',
              createdAt: '6/6/2024',
              content: 'Lorem ipsum dolor sit amet!',
              comments: [],
              likes: 2
            },
          ],
          likes: 2
        }
      ],
      likes: 3,
      marks: 48,
    })
  }, []);

  const showComment = (cmt) => {
    return (
      <div className="my-2">
        <div className="flex justify-start items-start gap-x-3">
          <Avatar style={{ backgroundColor: 'yellowgreen' }} size={"large"} icon={<UserOutlined/>} />
          <div className="flex flex-col gap-y-1">
            <div className="font-bold">{data.createdBy}{'\t'}<span className="font-light italic">{data.createdAt}</span></div>
            <div>{data.content}</div>
            <div className="flex gap-x-8">
              <div className="flex justify-start items-center gap-x-1">
                <LikeOutlined/>
                <span>{data.likes}</span>
              </div>
              <div>Reply</div>
            </div>
            <div>
              {cmt.comments.length > 0 && cmt.comments.map((c) => showComment(c))}
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
                <span>{data.comments.length}</span>
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
              <div className="font-bold text-md">Trả lời {`(${data.comments.length})`}</div>
              <div className="flex flex-col gap-y-2">
                <div className="flex gap-4">
                  <Avatar style={{ backgroundColor: 'yellowgreen' }} size={"large"} icon={<UserOutlined/>} />
                  <Input.TextArea rows={2} placeholder="Comment..."/>
                </div>
                <div className="flex justify-end items-center gap-x-2">
                  <Button type="primary">Đăng</Button>
                  <Button danger>Hủy</Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              {data.comments.length > 0 && data.comments.map((cmt) => showComment(cmt))}
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