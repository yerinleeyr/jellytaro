import { useState } from "react";

export default function QuickSettings() {
  const [tone, setTone] = useState("담백");
  const [summary, setSummary] = useState(false);
  return (
    <section className="flex justify-center py-16">
      <div className="glass-card p-6 w-full max-w-2xl flex flex-col gap-6 rounded-2xl">
        <h3 className="text-sm font-normal">빠른 설정</h3>

        {/*톤 선택 */}
        <div>
          <label className="block pb-3 text-sm font-extralight">톤 선택</label>
          <div className="flex gap-2">
            <button
              className={
                tone === "담백" ? "btn-pill btn-pill-active" : "btn-pill"
              }
              onClick={() => setTone("담백")}
            >
              담백
            </button>
            <button
              className={
                tone === "따뜻" ? "btn-pill btn-pill-active" : "btn-pill"
              }
              onClick={() => setTone("따뜻")}
            >
              따뜻
            </button>
            <button
              className={
                tone === "직설" ? "btn-pill btn-pill-active" : "btn-pill"
              }
              onClick={() => setTone("직설")}
            >
              직설
            </button>
          </div>
        </div>

        {/*톤 선택 */}
        <div className="flex justify-between items-center border-t border-mystic-border pt-4 ">
          <span className="text-sm font-normal">짧게 요약 모드</span>
          <button
            className={`toggle ${summary ? "toggle-active" : ""}`}
            onClick={() => setSummary(!summary)}
          ></button>
        </div>

        <p className="text-xs font-extralight">
          세션은 로컬 저장소에 저장됩니다.
        </p>
      </div>
    </section>
  );
}
