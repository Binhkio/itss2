"use client"

import QuestionCard from '../components/QuestionCard';
import { Button, Empty, Flex } from 'antd';
import QuestionForm from '../components/questionForm';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DEFAULT_URL } from '../../config';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Home() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('search')?.toLowerCase();

  async function fetchData() {
    const res = await axios.get(`${DEFAULT_URL}/posts`);
    if (res) {
      setData(res.data.data);
    }
  }
  useEffect(() => {
    router.push('/');
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
        ? data
          .filter((e,i) => search ? (e?.title?.toLowerCase().includes(search) || e?.tags?.findIndex(p => p?.toLowerCase().includes(search)) > -1) : true)
          .map((e,i) => <QuestionCard question={e} key={e?._id + i} />)
        : <Empty/>}
      </div>
    </div>
  );
}