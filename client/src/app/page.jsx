import QuestionCard from '@/components/QuestionCard';
import { Button, Flex } from 'antd';
import QuestionForm from '@/components/QuestionForm';

export default function Home() {
  return (
    <div style={{maxWidth: "600px", margin: "auto", paddingTop: "30px"}}>
      <div style={{"display": "flex", justifyContent: "space-between"}}>
        <div style={{fontWeight: "400", fontSize: "32px", lineHeight: "40px"}}>Các Câu Hỏi</div>
        <QuestionForm/>
      </div>
      <div className='mt-8 flex flex-col gap-4'>
        <QuestionCard/>
        <QuestionCard/>
        <QuestionCard/>
        <QuestionCard/>
        <QuestionCard/>
        <QuestionCard/>
      </div>
    </div>
  );
}