import QuestionCard from '@/components/QuestionCard';
import { Button, Flex } from 'antd';

export default function Home() {
  return (
    <div style={{maxWidth: "600px", margin: "auto", paddingTop: "30px"}}>
      <div style={{"display": "flex", justifyContent: "space-between"}}>
        <div style={{fontWeight: "400", fontSize: "32px", lineHeight: "40px"}}>Các Câu Hỏi</div>
        <Button type='primary' size='large'>Tạo Câu Hỏi</Button>
      </div>
      <div style={{"marginTop": "20px"}}>
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
