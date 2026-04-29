import { ArrowRight, Calendar, LayoutGrid } from "lucide-react";

export default function RecentSessions() {
  const sessions = [
    {
      id: "1",
      title: "이번 달 커리어에서 무엇에 집중해야 할까요?",
      status: "완료",
      date: "2025년 1월 15일",
      spread: "Three Card Spread",
    },
    {
      id: "2",
      title: "지금 이 관계에서 내가 놓치고 있는 것은?",
      status: "진행중",
      date: "2025년 1월 12일",
      spread: "Celtic Cross",
    },
    {
      id: "3",
      title: "올해 나에게 가장 중요한 변화는 무엇일까요?",
      status: "완료",
      date: "2025년 1월 8일",
      spread: "Five Card Spread",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-[1024px] mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">Recent Sessions</h2>
          <button className="flex items-center gap-1 text-sm font-medium text-mystic-sky">
            View All <ArrowRight size={14} />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="glass-card rounded-2xl px-6 py-5 flex items-center justify-between"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-medium">{session.title}</h3>
                  <span
                    className={
                      session.status === "완료" ? "badge-emerald" : "badge-sky"
                    }
                  >
                    {session.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-mystic-mist">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {session.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <LayoutGrid size={14} />
                    {session.spread}
                  </span>
                </div>
              </div>
              <ArrowRight size={20} className="text-mystic-mist" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}