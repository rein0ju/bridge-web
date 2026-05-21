export default function SignupPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_30%),#f8fafc] px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-md">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-600 text-lg font-extrabold text-white shadow-sm">
            B
          </div>
          <span className="text-2xl font-extrabold text-slate-900">Bridge</span>
        </a>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-bold text-blue-700">회원가입</p>
          <h1 className="mt-2 text-3xl font-extrabold">Bridge 시작하기</h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            학교 이메일로 인증하고 UW-Madison 유학생 커뮤니티에 참여하세요.
          </p>

          <form className="mt-8 space-y-4">
            <div>
              <label className="text-sm font-bold text-slate-700">학교 이메일</label>
              <input
                type="email"
                placeholder="yourname@wisc.edu"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700">비밀번호</label>
              <input
                type="password"
                placeholder="비밀번호 입력"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700">닉네임</label>
              <input
                type="text"
                placeholder="예: badger2026"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700">학교</label>
              <select className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500">
                <option>UW-Madison</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700">학생 유형</label>
              <select className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500">
                <option>Undergraduate</option>
                <option>Graduate</option>
                <option>Exchange Student</option>
                <option>Visiting Student</option>
                <option>Alumni</option>
              </select>
            </div>

            <a
              href="/community"
              className="block w-full rounded-full bg-blue-600 px-6 py-4 text-center font-bold text-white transition hover:bg-blue-700"
            >
              가입하기
            </a>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            이미 계정이 있나요?{" "}
            <a href="/login" className="font-bold text-blue-700">
              로그인
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}