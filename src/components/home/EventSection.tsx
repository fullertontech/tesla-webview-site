export default function EventSection() {
  return (
    <div className="w-full pt-[25px] pb-[15px] pl-[15px] flex items-center justify-center gap-[8px]">
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
}

function EventCard() {
  return (
    <div className=" flex flex-col items-center justify-center w-[140px] h-[230px] border-[#F4F4F4] border-[1px] rounded-[8px]">
      <div className="min-w-[100%] h-[130px] border-b-[1px] border-[#F4F4F4] bg-[url(/images/home/eventSection/event1.png)] bg-cover bg-center rounded-t-[8px]"></div>
      <div className="h-[100px] py-[10px] px-[8px] box-border">
        <div className="text-[12px]">學生你最大</div>
        <div className="text-[#828282] text-[12px] mt-[5px]">
          還沒申請學生資格嗎？學生專屬優惠等你拿！
        </div>
      </div>
    </div>
  );
}
