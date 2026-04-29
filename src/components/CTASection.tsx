import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="max-w-[1024px] mx-auto">
        <div className="glass-card rounded-2xl p-16 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[400px] h-full bg-mystic-sky-10 blur-3xl" />
          </div>
          <div className="relative w-full flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-6">시작할 준비가 됐나요? </h2>
            <p className="text-lg font-light text-mystic-mist mb-8 max-w-[672px]">
              명확함과 통찰을 향한 첫 걸음을 내딛어보세요. 나만을 위한 타로
              세션이 기다리고 있어요.
            </p>
            <button className="btn-primary flex items-center gap-2">
              지금 시작하기 <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
