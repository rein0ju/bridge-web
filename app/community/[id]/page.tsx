const comments = [
  {
    author: "익명 1",
    body: "정리 감사합니다. CPT 처음 준비하는데 순서가 제일 헷갈렸어요.",
    time: "12분 전",
    likes: 0,
    isReply: false,
  },
  {
    author: "익명 2",
    body: "저는 ISS 승인까지 1주일 조금 넘게 걸렸어요. 회사 서류를 미리 받아두는 게 좋았어요.",
    time: "8분 전",
    likes: 1,
    isReply: false,
  },
  {
    author: "익명 3",
    body: "@익명 2 저도 비슷했어요. 회사 서류가 늦으면 전체 일정이 밀리더라고요.",
    time: "6분 전",
    likes: 0,
    isReply: true,
  },
  {
    author: "익명 4",
    body: "학교마다 다를 수 있으니까 ISS 페이지도 같이 확인하는 걸 추천해요.",
    time: "방금 전",
    likes: 0,
    isReply: false,
  },
];

export default function PostDetailPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_30%),#f8fafc] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/community" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-600 text-lg font-extrabold text-white shadow-sm">
              B
            </div>
            <span className="text-2xl font-extrabold text-slate-900">Bridge</span>
          </a>

          <a
            href="/community"
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-200"
          >
            목록으로
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <article className="rounded-[2rem] bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-extrabold text-blue-700">
                정보
              </span>
              <span className="text-xs font-bold text-slate-400">방금 전</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
              CPT 신청 타임라인 정리해봤어요
            </h1>

            <div className="mt-4 flex items-center gap-3 text-sm font-bold text-slate-400">
              <span>익명</span>
              <span>•</span>
              <span>조회 128</span>
              <span>•</span>
              <span>댓글 3</span>
            </div>

            <div className="mt-8 rounded-3xl bg-slate-50 p-5 text-sm leading-7 text-slate-700 md:text-base md:leading-8">
              <p>
                CPT 신청하려는 분들이 많아 보여서 제가 준비하면서 정리한 타임라인을 공유해요.
              </p>
              <br />
              <p>
                먼저 회사에서 offer letter를 받고, 그다음 전공 advisor 확인을 받은 뒤 ISS에 서류를 제출하면 돼요. 제 경우에는 서류 준비에 3일 정도 걸렸고, ISS 승인까지는 약 1주일 정도 걸렸어요.
              </p>
              <br />
              <p>
                시작일 직전에 신청하면 위험할 수 있으니까 최소 2~3주 전에는 준비하는 게 좋아 보여요.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 border-b border-slate-100 pb-6 text-sm font-bold text-slate-400">
              <button className="rounded-full bg-slate-100 px-4 py-2 transition hover:bg-blue-50 hover:text-blue-700">
                저장 18
              </button>
              <button className="rounded-full bg-slate-100 px-4 py-2 transition hover:bg-blue-50 hover:text-blue-700">
                공유
              </button>
              <button className="rounded-full bg-slate-100 px-4 py-2 transition hover:bg-red-50 hover:text-red-600">
                신고
              </button>
            </div>

            <section className="mt-6">
              <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                <h2 className="text-2xl font-extrabold">댓글</h2>
                <span className="text-sm font-bold text-slate-400">익명 댓글 가능</span>
              </div>

              <div className="divide-y divide-slate-100">
                {comments.map((comment) => (
                  <div
                    key={comment.body}
                    className={`flex gap-3 py-5 ${comment.isReply ? "pl-10" : ""}`}
                  >
                    {comment.isReply && (
                      <div className="pt-2 text-xl font-bold text-slate-300">ㄴ</div>
                    )}

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-extrabold text-blue-700">
                      익
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-extrabold text-slate-800">{comment.author}</p>
                          <span className="text-xs font-bold text-slate-400">· {comment.time}</span>
                        </div>

                        <div className="flex items-center gap-3 text-sm font-bold text-slate-400">
                          <button className="transition hover:text-blue-700">♡ {comment.likes}</button>
                          <button className="text-lg leading-none transition hover:text-slate-700">···</button>
                        </div>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-slate-700">{comment.body}</p>

                      <button className="mt-3 text-xs font-bold text-slate-400 transition hover:text-blue-700">
                        ㄴ 답글쓰기
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-4">
                <textarea
                  rows={4}
                  placeholder="댓글을 입력하세요."
                  className="w-full resize-none text-sm font-medium leading-6 outline-none placeholder:text-slate-400"
                />
                <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    className="flex w-fit items-center gap-3 rounded-full bg-blue-50 px-4 py-2 text-xs font-extrabold text-blue-700 transition hover:bg-blue-100"
                  >
                    <span className="flex h-5 w-9 items-center rounded-full bg-blue-600 p-0.5">
                      <span className="h-4 w-4 rounded-full bg-white shadow-sm" />
                    </span>
                    익명 댓글 ON
                  </button>

                  <button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-bold text-white transition hover:bg-blue-700">
                    댓글 등록
                  </button>
                </div>
              </div>
            </section>
          </article>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-blue-700">게시글 정보</p>
              <div className="mt-4 space-y-3 text-sm font-bold text-slate-600">
                <div className="flex justify-between rounded-2xl bg-slate-50 p-3">
                  <span>게시판</span>
                  <span>정보</span>
                </div>
                <div className="flex justify-between rounded-2xl bg-slate-50 p-3">
                  <span>작성자</span>
                  <span>익명</span>
                </div>
                <div className="flex justify-between rounded-2xl bg-slate-50 p-3">
                  <span>댓글</span>
                  <span>3</span>
                </div>
              </div>
            </div>

          </aside>
        </div>
      </section>
    </main>
  );
}