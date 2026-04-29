import { ArrowRight, FolderOpen } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="text-center py-24 px-6">
      <h1 className="text-7xl font-bold text-mystic-mist mb-4">
        타로 스프레드 코치
      </h1>
      <p className="text-xl text-mystic-mist font-light mb-8">
        개인화된 해석과 함께하는 가이드 타로 세션을 경험하세요. 삶의 질문에 대한
        명확함과 실행 가능한 통찰을 얻으세요.
      </p>
      <div className="flex gap-4 justify-center">
        <button className="btn-primary flex items-center justify-center gap-2 w-40">
          새 세션 시작 <ArrowRight size={16} />
        </button>
        <button className="btn-ghost flex items-center  justify-center gap-2 w-40">
          세션 보관함 <FolderOpen size={16} />
        </button>
      </div>
    </section>
  );
}
