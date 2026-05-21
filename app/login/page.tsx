export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-md">
        <a href="/" className="text-2xl font-extrabold text-blue-700">
          Bridge
        </a>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-bold text-blue-700">Log In</p>
          <h1 className="mt-2 text-3xl font-extrabold">
            Welcome back
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Continue checking campus information, your timetable, and community posts.
          </p>

          <form className="mt-8 space-y-4">
            <div>
              <label className="text-sm font-bold text-slate-700">
                School Email
              </label>
              <input
                type="email"
                placeholder="yourname@wisc.edu"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <a
              href="/community"
              className="block w-full rounded-full bg-blue-600 px-6 py-4 text-center font-bold text-white transition hover:bg-blue-700"
            >
              Log In
            </a>
          </form>

          <div className="mt-6 flex items-center justify-between text-sm">
            <a href="/signup" className="font-bold text-blue-700">
              Sign Up
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-900">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}