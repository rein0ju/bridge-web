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
          <p className="text-sm font-bold text-blue-700">Sign Up</p>
          <h1 className="mt-2 text-3xl font-extrabold">Start using Bridge</h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Verify with your school email and join the UW-Madison international student community.
          </p>

          <form className="mt-8 space-y-4">
            <div>
              <label className="text-sm font-bold text-slate-700">School Email</label>
              <input
                type="email"
                placeholder="yourname@wisc.edu"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700">Nickname</label>
              <input
                type="text"
                placeholder="Example: badger2026"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700">School</label>
              <select className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500">
                <option>UW-Madison</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700">Student Type</label>
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
              Create Account
            </a>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <a href="/login" className="font-bold text-blue-700">
              Log In
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}