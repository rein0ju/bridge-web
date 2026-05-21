export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-md">
        <a href="/" className="text-2xl font-extrabold text-blue-700">
          Bridge
        </a>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-bold text-blue-700">로그인</p>
          <h1 className="mt-2 text-3xl font-extrabold">
            다시 오신 걸 환영해요
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            학교생활 정보, 시간표, 게시판을 계속 확인하세요.
          </p>

          <form className="mt-8 space-y-4">
            <div>
              <label className="text-sm font-bold text-slate-700">
                학교 이메일
              </label>
              <input
                type="email"
                placeholder="yourname@wisc.edu"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700">
                비밀번호
              </label>
              <input
                type="password"
                placeholder="비밀번호 입력"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <a
              href="/community"
              className="block w-full rounded-full bg-blue-600 px-6 py-4 text-center font-bold text-white transition hover:bg-blue-700"
            >
              로그인
            </a>
          </form>

          <div className="mt-6 flex items-center justify-between text-sm">
            <a href="/signup" className="font-bold text-blue-700">
              회원가입
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-900">
              비밀번호 찾기
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}