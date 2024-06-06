"use client"

import { LikeOutlined, MessageOutlined, SnippetsOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, List, Skeleton } from "antd";
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
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div>Trả lời {`(${data.comments.length})`}</div>
              <div className="flex flex-col">
                <div className="flex">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Skeleton/>
      )}
      <div className="w-1/12">
        <List
          header={(
            <div className="flex justify-between">
              <div className="font-bold">Tiêu biểu</div>
              <div>Xem thêm</div>
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