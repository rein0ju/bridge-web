const categories = [
  { name: "전체", count: 112, active: true },
  { name: "자유", count: 42 },
  { name: "비밀", count: 18 },
  { name: "정보", count: 31 },
  { name: "룸메이트", count: 14 },
  { name: "인턴십", count: 7 },
];

const hotPosts = [
  {
    category: "정보",
    title: "CPT 신청 타임라인 정리해봤어요",
    body: "ISS 서류 준비부터 승인까지 어떤 순서로 진행되는지 한 번에 볼 수 있게 정리했어요.",
    comments: 21,
    saves: 18,
    time: "방금 전",
  },
  {
    category: "룸메이트",
    title: "8월 입주 룸메이트 구하는 사람 있나요?",
    body: "캠퍼스 근처 2B2B 생각 중이고 조용한 생활 패턴이면 좋겠어요.",
    comments: 12,
    saves: 5,
    time: "12분 전",
  },
  {
    category: "자유",
    title: "매디슨 여름에 남는 사람들 뭐 하고 지내요?",
    body: "여름 수업 안 듣는데 운동, 알바, 프로젝트 같이 할 사람 있으면 좋겠어요.",
    comments: 15,
    saves: 4,
    time: "28분 전",
  },
  {
    category: "인턴십",
    title: "F-1 학생도 이 온캠퍼스 잡 지원 가능한가요?",
    body: "학교 안에서 하는 포지션인데 주당 시간 제한이랑 SSN 신청 가능 여부가 궁금해요.",
    comments: 9,
    saves: 11,
    time: "1시간 전",
  },
];

const latestPosts = [
  {
    category: "자유",
    title: "오늘 State St 쪽 사람 많은가요?",
    comments: 4,
  },
  {
    category: "비밀",
    title: "룸메이트랑 생활패턴이 너무 안 맞을 때 어떻게 해요?",
    comments: 9,
  },
  {
    category: "정보",
    title: "SHIP 보험으로 받을 수 있는 서비스 정리",
    comments: 6,
  },
  {
    category: "룸메이트",
    title: "서블렛 계약할 때 꼭 확인해야 하는 것들 있나요?",
    comments: 7,
  },
  {
    category: "인턴십",
    title: "여름방학에 CPT 없이 할 수 있는 활동이 뭐가 있을까요?",
    comments: 3,
  },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_30%),#f8fafc] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-600 text-lg font-extrabold text-white shadow-sm">
              B
            </div>
            <span className="text-2xl font-extrabold text-slate-900">
              Bridge
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-extrabold text-slate-500 md:flex">
            <a href="/community" className="text-blue-700">
              게시판
            </a>
            <a href="/timetable" className="hover:text-slate-900">
              시간표
            </a>
            <a href="/classrooms" className="hover:text-slate-900">
              강의실
            </a>
            <a href="/gpa" className="hover:text-slate-900">
              GPA계산기
            </a>
            <a href="/campus-news" className="hover:text-slate-900">
              캠퍼스소식
            </a>
          </nav>

          <a
            href="/write"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            글쓰기
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8 overflow-hidden rounded-[2rem] bg-blue-700 p-8 text-white shadow-xl md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-blue-100">
                UW-Madison Community
              </p>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
                게시판
              </h1>
              <p className="mt-4 max-w-3xl text-blue-100">
                <span className="font-extrabold text-white">익명</span>으로도 게시할 수 있어,
                공적인 정보부터 사적인 고민까지 부담 없이 질문할 수 있어요.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <HeroStat number="112" label="게시글" />
              <HeroStat number="86" label="댓글" />
              <HeroStat number="Beta" label="운영중" />
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr_300px]">
          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <h2 className="text-lg font-extrabold">게시판</h2>
              <div className="mt-4 space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
                      category.active
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className={category.active ? "text-blue-100" : "text-slate-400"}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-blue-600 p-5 text-white shadow-sm">
              <p className="text-sm font-bold text-blue-100">Beta Feedback</p>
              <h2 className="mt-1 text-xl font-extrabold">첫 유저 의견 받는 중</h2>
              <p className="mt-3 text-sm leading-6 text-blue-100">
                필요한 게시판이나 기능이 있으면 직접 제안할 수 있어요.
              </p>
              <button className="mt-4 rounded-full bg-white px-4 py-2 text-sm font-bold text-blue-700">
                의견 보내기
              </button>
            </div>

          </aside>

          <section className="space-y-5">
            <div className="rounded-3xl bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                <span className="text-slate-400">⌕</span>
                <input
                  placeholder="CPT, 룸메이트, CS 300, 보험 검색"
                  className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-blue-700">인기 게시판</p>
                  <h2 className="text-2xl font-extrabold">지금 많이 보는 글</h2>
                </div>
                <a
                  href="/write"
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700"
                >
                  새 글 쓰기
                </a>
              </div>

              <div className="space-y-3">
                {hotPosts.map((post) => (
                  <a
                    key={post.title}
                    href="/community/1"
                    className="block rounded-3xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-extrabold text-blue-700">
                        {post.category}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {post.time}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-extrabold text-slate-900">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {post.body}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs font-bold text-slate-400">
                      <span>댓글 {post.comments}</span>
                      <span>저장 {post.saves}</span>
                      <span>익명</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-extrabold">최신 게시글</h2>
                <span className="text-sm font-bold text-slate-400">
                  방금 업데이트
                </span>
              </div>

              <div className="space-y-3">
                {latestPosts.map((post) => (
                  <a
                    key={post.title}
                    href="/community/1"
                    className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-4 transition hover:bg-blue-50"
                  >
                    <div>
                      <p className="text-xs font-bold text-blue-700">
                        {post.category}
                      </p>
                      <h3 className="mt-1 font-extrabold text-slate-900">
                        {post.title}
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-slate-400">
                      댓글 {post.comments}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-blue-700">인기 검색어</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["CPT", "룸메이트", "CS 300", "SHIP", "SSN", "서블렛"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600 transition hover:bg-blue-100 hover:text-blue-700"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-4 shadow-sm">
              <p className="text-xs font-bold text-blue-700">학교 인증 안내</p>
              <h2 className="mt-1 text-lg font-extrabold">@wisc.edu 인증 예정</h2>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                학교 이메일 인증 후 UW-Madison 게시판에 참여할 수 있어요.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function HeroStat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white/15 px-5 py-4 backdrop-blur">
      <p className="text-2xl font-extrabold">{number}</p>
      <p className="mt-1 text-xs font-bold text-blue-100">{label}</p>
    </div>
  );
}
