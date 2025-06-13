export default function FeaturesSection() {
  return (
    <div className="w-full flex flex-col items-start justify-start px-[15px] gap-[16px] pb-[40px]">
      <Paragraph title="比月租還划算" content="上網吃到飽換算每月只要360元起" />
      <Paragraph title="免綁約" content="每月商品組合自己決定" />
      <Paragraph title="免月租費" content="自己儲值金額自己決定" />
    </div>
  );
}

const Paragraph = ({ title, content }: { title: string; content: string }) => {
  return (
    <div>
      <h2 className="text-[16px] text-[#00BCD3] font-bold">{title}</h2>
      <div className="text-[#757575] text-[14px]">{content}</div>
    </div>
  );
};
