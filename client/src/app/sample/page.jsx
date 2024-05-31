"use client"

import { Button, Input, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { DEFAULT_URL } from "../../../config";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];


export default function AboutPage() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({});

  useEffect(() => {
    fetchData();
  }, []);
  
  async function fetchData() {
    const res = await axios.get(`${DEFAULT_URL}/user`);
    if (res) {
      const d = res.data;
      setData(d.data);
    }
  }

  const handleAddUser = async (e) => {
    e.preventDefault();
    if (input?.name && input?.email) {
      const res = await axios.post(`${DEFAULT_URL}/user/add`, input);
      if (res.status === 200) {
        fetchData();
        alert("OK");
      } else {
        alert("Something went wrong!!!");
      }
    }
  }

  return (
    <div className="h-screen flex flex-col m-10 gap-10">
      <div className="grid gap-4">
        <Input name="name" placeholder="Name..." onChange={(e) => {setInput({ ...input, name: e.target.value })}} />
        <Input name="email" placeholder="Email..." onChange={(e) => {setInput({ ...input, email: e.target.value })}} />
        <Button onClick={handleAddUser}>Submit</Button>
      </div>
      <Table className="h-full" dataSource={data.length > 0 ? data.map(each => {
        const { name, email } = each;
        return { name, email };
      }) : []} columns={columns} />
    </div>
  );
}
