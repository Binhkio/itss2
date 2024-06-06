import { BellOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Input } from "antd"

export default function Navbar() {
  return (
    <div className="h-12 w-screen flex justify-center gap-x-36 py-8 items-center border-b-white border-b-2">
      <div className="font-extrabold text-2xl">HUST</div>
      <div className="w-2/5">
        <Input placeholder="Search..." />
      </div>
      <div className="flex gap-x-4 items-center">
        <div>
          <MessageOutlined />
        </div>
        <div>
          <BellOutlined />
        </div>
        <div>
          <Avatar style={{ backgroundColor: 'cyan' }} icon={<UserOutlined />} />
        </div>
      </div>
    </div>
  )
}