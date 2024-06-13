"use client"

import QuestionCard from '@/components/QuestionCard';
import { Button, Empty, Flex } from 'antd';
import QuestionForm from '@/components/QuestionForm';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DEFAULT_URL } from '../../config';

export default function Home() {
  const [data, setData] = useState([])

  async function fetchData() {
    const res = await axios.get(`${DEFAULT_URL}/posts`);
    if (res) {
      setData(res.data.data);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{maxWidth: "600px", margin: "auto", paddingTop: "30px"}}>
      <div style={{"display": "flex", justifyContent: "space-between"}}>
        <div style={{fontWeight: "400", fontSize: "32px", lineHeight: "40px"}}>Các Câu Hỏi</div>
        <QuestionForm refetch={fetchData} />
      </div>
      <div className='mt-8 flex flex-col gap-4'>
        {(data && data.length > 0)
        ? data.map((e,i) => <QuestionCard question={e} key={e?._id + i} />)
        : <Empty/>}
      </div>
    </div>
  );
}