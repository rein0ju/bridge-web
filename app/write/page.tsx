const categories = ["자유", "비밀", "정보", "룸메이트", "인턴십"];

export default function WritePage() {
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
            취소
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-8">
        <div className="mb-8 rounded-[2rem] bg-blue-700 p-8 text-white shadow-xl">
          <p className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-blue-100">
            UW-Madison Community
          </p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight">
            새 글 쓰기
          </h1>
          <p className="mt-4 max-w-2xl text-blue-100">
            <span className="font-extrabold text-white">익명</span> 또는 닉네임으로 게시할 수 있어요.
            공적인 정보부터 사적인 고민까지 부담 없이 남겨보세요.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <form className="rounded-[2rem] bg-white p-6 shadow-sm">
            <div>
              <label className="text-sm font-extrabold text-slate-700">
                게시판 선택
              </label>
              <div className="mt-3 grid gap-2 sm:grid-cols-5">
                {categories.map((category, index) => (
                  <label
                    key={category}
                    className={`cursor-pointer rounded-2xl border px-4 py-3 text-center text-sm font-bold transition ${
                      index === 0
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-200 bg-slate-50 text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      defaultChecked={index === 0}
                      className="sr-only"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm font-extrabold text-slate-700">
                작성 방식
              </label>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <label className="cursor-pointer rounded-2xl border border-blue-600 bg-blue-50 p-4 transition hover:bg-blue-100">
                  <input
                    type="radio"
                    name="authorType"
                    value="anonymous"
                    defaultChecked
                    className="sr-only"
                  />
                  <p className="font-extrabold text-blue-700">익명</p>
                  <p className="mt-1 text-xs leading-5 text-blue-600">
                    이름을 드러내기 어려운 질문에 좋아요.
                  </p>
                </label>

                <label className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50">
                  <input
                    type="radio"
                    name="authorType"
                    value="nickname"
                    className="sr-only"
                  />
                  <p className="font-extrabold text-slate-800">닉네임</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    같은 학교 친구들과 자연스럽게 소통해요.
                  </p>
                </label>
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm font-extrabold text-slate-700">
                제목
              </label>
              <input
                type="text"
                placeholder="제목을 입력하세요"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-blue-500"
              />
            </div>

            <div className="mt-6">
              <label className="text-sm font-extrabold text-slate-700">
                내용
              </label>
              <textarea
                placeholder="궁금한 점이나 공유하고 싶은 정보를 적어주세요."
                rows={10}
                className="mt-2 w-full resize-none rounded-2xl border border-slate-200 px-4 py-4 text-sm font-medium leading-6 outline-none transition placeholder:text-slate-400 focus:border-blue-500"
              />
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <a
                href="/community"
                className="rounded-full bg-slate-100 px-6 py-3 text-center text-sm font-bold text-slate-600 transition hover:bg-slate-200"
              >
                취소
              </a>
              <a
                href="/community"
                className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-700"
              >
                등록하기
              </a>
            </div>
          </form>

          <aside className="space-y-4">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-blue-700">작성 안내</p>
              <ul className="mt-4 space-y-3 text-xs font-semibold leading-5 text-slate-600">
                <li>• 개인정보는 올리지 않는 것을 권장해요.</li>
                <li>• 비자·세금 정보는 공식 기관 확인이 필요해요.</li>
                <li>• 신고된 글은 운영자가 검토할 수 있어요.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-blue-600 p-5 text-white shadow-sm">
              <p className="text-sm font-bold text-blue-100">Anonymous</p>
              <h2 className="mt-1 text-xl font-extrabold">익명 게시 가능</h2>
              <p className="mt-3 text-sm leading-6 text-blue-100">
                작성자는 사용자에게 보이지 않지만, 안전한 운영을 위해 시스템에는 기록될 수 있어요.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}