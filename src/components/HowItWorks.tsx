import { MessageCircle, LayoutGrid, Layers, Lightbulb } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "질문 입력",
      desc: "마음속에 있는 것을 질문으로 시작하세요. 명확하고 집중된 질문으로 다듬을 수 있게 도와드립니다.",
      icon: MessageCircle,
    },
    {
      title: "스프레드 선택",
      desc: "질문 유형과 상황에 맞게 설계된 다양한 타로 스프레드 중에서 선택하세요.",
      icon: LayoutGrid,
    },
    {
      title: "카드 뽑기",
      desc: "직관적으로 카드를 선택하세요. 본능을 믿고 카드가 말하게 하세요.",
      icon: Layers,
    },
    {
      title: "인사이트 확인",
      desc: "질문에 맞춘 실행 가능한 안내와 함께 개인화된 해석을 받아보세요.",
      icon: Lightbulb,
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-[1024px] mx-auto">
        <h2 className="text-4xl font-bold mb-10">How It Works</h2>
        <div className="flex gap-6">
          {steps.map((step) => (
            <div key={step.title} className="glass-card rounded-2xl p-6 flex-1">
              <div className="w-14 h-14 rounded-xl bg-mystic-sky-20 mb-4 mx-auto flex items-center justify-center">
                <step.icon size={24} className="text-mystic-sky" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">
                {step.title}
              </h3>
              <p className="text-sm font-light text-center break-keep">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
