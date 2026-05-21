const classes = [
  {
    code: "LIS 201",
    title: "The Information Society",
    day: "월 / 수",
    time: "10:00 - 11:15",
    location: "Helen C. White Hall · Room 6191",
    credits: 3,
  },
  {
    code: "CS 300",
    title: "Programming II",
    day: "월 / 수",
    time: "12:05 - 13:20",
    location: "Computer Sciences · Room 1240",
    credits: 3,
  },
  {
    code: "STAT 240",
    title: "Data Science Modeling",
    day: "화 / 목",
    time: "14:30 - 15:45",
    location: "Van Vleck Hall · B102",
    credits: 3,
  },
  {
    code: "GEOG 170",
    title: "Our Digital Globe",
    day: "수 / 금",
    time: "09:00 - 09:50",
    location: "Science Hall · Room 180",
    credits: 3,
  },
];

export default function TimetablePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/community" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-600 text-lg font-extrabold text-white shadow-sm">
              B
            </div>
            <span className="text-2xl font-extrabold text-slate-900">Bridge</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-extrabold text-slate-500 md:flex">
            <a href="/community" className="hover:text-slate-900">게시판</a>
            <a href="/timetable" className="text-blue-700">시간표</a>
            <a href="/classrooms" className="hover:text-slate-900">강의실</a>
            <a href="/gpa" className="hover:text-slate-900">GPA계산기</a>
            <a href="/campus-news" className="hover:text-slate-900">캠퍼스소식</a>
          </nav>

          <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700">
            수업 추가
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-8">

        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <section className="space-y-6">
            <TimetableCard variant="light" />
          </section>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[2rem] bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-blue-700">오늘의 수업</p>
              <h2 className="mt-2 text-2xl font-extrabold">LIS 201</h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">
                10:00 · Helen C. White Hall · Room 6191
              </p>
              <div className="mt-4 rounded-2xl bg-blue-50 p-4 text-sm font-bold leading-6 text-blue-700">
                다음 수업까지 1시간 20분 남았어요.
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-blue-700">내 수업</p>
              <div className="mt-4 space-y-3">
                {classes.map((item) => (
                  <div key={item.code} className="rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-extrabold text-slate-900">{item.code}</p>
                      <p className="text-xs font-bold text-slate-400">{item.credits}학점</p>
                    </div>
                    <p className="mt-1 text-xs font-semibold text-slate-500">{item.title}</p>
                    <p className="mt-2 text-xs font-bold text-slate-400">{item.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function TimetableCard({ variant }: { variant: "dark" | "light" }) {
  const isDark = variant === "dark";

  return (
    <div
      className={`rounded-[2rem] p-6 shadow-xl ${
        isDark ? "bg-[#0b0b0c] text-white" : "bg-white text-slate-900"
      }`}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <details className="relative">
          <summary className="list-none cursor-pointer">
            <p className={`text-sm font-extrabold ${isDark ? "text-red-400" : "text-blue-700"}`}>
              Semester
            </p>
            <div className="mt-2 flex w-fit items-center gap-4 rounded-2xl bg-slate-100 px-5 py-3 text-2xl font-extrabold tracking-tight text-slate-900 transition hover:bg-slate-200">
              Fall 2026
              <span className="-translate-y-1 text-2xl font-extrabold leading-none text-slate-500">
                ⌄
              </span>
            </div>
          </summary>

          <div className="absolute left-0 top-full z-30 mt-2 w-52 overflow-hidden rounded-2xl border border-slate-200 bg-white text-sm font-bold text-slate-600 shadow-xl">
            <button className="block w-full bg-blue-50 px-4 py-3 text-left text-blue-700">
              Fall 2026
            </button>
            <button className="block w-full px-4 py-3 text-left hover:bg-slate-50">
              Spring 2026
            </button>
            <button className="block w-full px-4 py-3 text-left hover:bg-slate-50">
              Fall 2025
            </button>
          </div>
        </details>

        <div className={`flex gap-3 text-2xl ${isDark ? "text-white" : "text-slate-700"}`}>
          <button
            aria-label="수업 추가"
            className={`flex h-10 w-10 items-center justify-center rounded-full ${isDark ? "hover:bg-white/10" : "hover:bg-slate-100"}`}
          >
            ＋
          </button>
          <button
            aria-label="시간표 수정"
            className={`flex h-10 w-10 items-center justify-center rounded-full ${isDark ? "hover:bg-white/10" : "hover:bg-slate-100"}`}
          >
            ✎
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div
          className={`min-w-[720px] overflow-hidden rounded-3xl border ${
            isDark ? "border-zinc-700" : "border-slate-200"
          }`}
        >
          <div className="grid grid-cols-[52px_repeat(5,1fr)]">
            <div className={isDark ? "bg-[#0b0b0c]" : "bg-slate-50"} />
            {['월', '화', '수', '목', '금'].map((day) => (
              <div
                key={day}
                className={`border-l px-3 py-2 text-center text-sm font-extrabold ${
                  isDark ? "border-zinc-700 text-zinc-300" : "border-slate-200 text-slate-500"
                }`}
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-[52px_repeat(5,1fr)]">
            <div>
              {[9, 10, 11, 12, 1, 2, 3].map((time) => (
                <div
                  key={time}
                  className={`h-20 border-t pr-2 text-right text-sm font-bold ${
                    isDark ? "border-zinc-700 text-zinc-300" : "border-slate-200 text-slate-400"
                  }`}
                >
                  {time}
                </div>
              ))}
            </div>

            <Day isDark={isDark}>
              <ClassSlot top="80px" height="80px" title="LIS 201" place="HC White · 6191" tone="blue" isDark={isDark} />
              <ClassSlot top="240px" height="80px" title="CS 300" place="CS Building · 1240" tone="violet" isDark={isDark} />
            </Day>

            <Day isDark={isDark}>
              <ClassSlot top="320px" height="120px" title="STAT 240" place="Van Vleck · B102" tone="green" isDark={isDark} />
            </Day>

            <Day isDark={isDark}>
              <ClassSlot top="0px" height="60px" title="GEOG 170" place="Science Hall · 180" tone="amber" isDark={isDark} />
              <ClassSlot top="80px" height="80px" title="LIS 201" place="HC White · 6191" tone="blue" isDark={isDark} />
              <ClassSlot top="240px" height="80px" title="CS 300" place="CS Building · 1240" tone="violet" isDark={isDark} />
            </Day>

            <Day isDark={isDark}>
              <ClassSlot top="320px" height="120px" title="STAT 240" place="Van Vleck · B102" tone="green" isDark={isDark} />
            </Day>

            <Day isDark={isDark}>
              <ClassSlot top="0px" height="60px" title="GEOG 170" place="Science Hall · 180" tone="amber" isDark={isDark} />
            </Day>
          </div>
        </div>
      </div>

    </div>
  );
}

function Day({ children, isDark }: { children?: React.ReactNode; isDark: boolean }) {
  return (
    <div className={`relative h-[560px] border-l ${isDark ? "border-zinc-700" : "border-slate-200"}`}>
      {Array.from({ length: 7 }).map((_, index) => (
        <div
          key={index}
          className={`h-20 border-t ${isDark ? "border-zinc-700" : "border-slate-200"}`}
        />
      ))}
      {children}
    </div>
  );
}

function ClassSlot({
  top,
  height,
  title,
  place,
  tone,
  isDark,
}: {
  top: string;
  height: string;
  title: string;
  place: string;
  tone: "blue" | "violet" | "green" | "amber";
  isDark: boolean;
}) {
  const toneClass = {
    blue: "bg-blue-100 text-blue-800",
    violet: "bg-violet-100 text-violet-800",
    green: "bg-green-100 text-green-800",
    amber: "bg-amber-100 text-amber-800",
  }[tone];

  return (
    <div
      className={`absolute left-0 right-0 p-3 text-sm font-extrabold ${
        isDark ? "bg-zinc-200 text-zinc-800" : toneClass
      }`}
      style={{ top, height }}
    >
      <p>{title}</p>
      <p className="mt-1 text-xs font-bold opacity-70">{place}</p>
    </div>
  );
}