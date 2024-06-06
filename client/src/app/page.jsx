export default function Home() {
  return (
    <main className="flex justify-center align-top gap-x-10">
      <div>
        <div>Popular tags</div>
        <div>{['oop','lythuyet','web','os','network'].map((val) => (
          <div>
            
          </div>
        ))}</div>
      </div>
    </main>
  );
}
